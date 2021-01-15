import { SaveValue, GetValue } from "./storageService";

export default class SiteService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    if (!baseUrl) this.baseUrl = "https://shop.shpresa.al/wp-json/wp/v2";
  }

  getPosts(searchQuery) {
    if (!navigator.onLine) {
      return new Promise((resolve, reject) => {
        if (GetValue("posts")) resolve(GetValue("posts"));
        else
          reject({
            errorMessage:
              "Momentalisht nuk keni lidhje interneti dhe nuk keni shikuar asnje post deri tani. Provoni perseri pasi te jeni ne linje.",
          });
      });
    } else {
      return fetch(
        `${this.baseUrl}/posts?_embed=wp:featuredmedia&per_page=10&search=${searchQuery}`
      )
        .then((resp) => resp.json())
        .then((data) => {
          const posts = data.map((data) => {
            // console.log(data)
            return {
              title: data.title.rendered,
              date: data.date,
              shortDesc: data.excerpt.rendered,
              description: data.content.rendered,
              image: data._embedded["wp:featuredmedia"]["0"].source_url, // "https://source.unsplash.com/random",
              imageText: "Image Text",
              link: "/post",
              originalLink: data.link,
            };
          });
          SaveValue("posts", posts);
          return posts;
        })
        .catch((err) => err);
    }
  }

  getCategories() {
    // var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    // return fetch(proxyUrl + 'https://techalb.al/wp-json/wp/v2/' + '/categories')
    return fetch(this.baseUrl + "/categories")
      .then((resp) => resp.json())
      .then((data) => {
        SaveValue('categories', data);
        return data;
      })
      .catch((err) => err);
  }

  getHashTags() {
    return fetch(this.baseUrl + "/tags")
      .then((resp) => resp.json())
      .then((data) => {
        SaveValue('tags', data);
        return data;
      })
      .catch((err) => err);
  }

  getPostByHref(href) {
    return fetch(href)
      .then((resp) => resp.json())
      .then((data) => {
        const post = {
          title: data.title.rendered,
          date: data.date,
          description: data.content.rendered,
          image: data._embedded["wp:featuredmedia"]["0"].source_url, // "https://source.unsplash.com/random",
          imageText: "Image Text",
          link: "/post",
        };
        return post;
      })
      .catch((err) => err);
  }
}
