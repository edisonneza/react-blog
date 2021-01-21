import { SaveValue, GetValue } from "./storageService";

export default class SiteService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    if (!baseUrl) this.baseUrl = "https://shop.shpresa.al/wp-json/wp/v2";
  }

  getPosts(searchQuery, perPage=10) {
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
        `${this.baseUrl}/posts?_embed=wp:featuredmedia&per_page=${perPage}&search=${searchQuery}`
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
    if (!navigator.onLine)
      return new Promise((resolve, reject) => resolve(GetValue("categories")));
    else {
      return fetch(this.baseUrl + "/categories")
        .then((resp) => resp.json())
        .then((data) => {
          SaveValue("categories", data);
          return data;
        })
        .catch((err) => err);
    }
  }

  getTags() {
    if (!navigator.onLine)
      return new Promise((resolve, reject) => resolve(GetValue("tags")));
    else {
      // return fetch(this.baseUrl + "/tags")
      //   .then((resp) => resp.json())
      //   .then((data) => {
      //     SaveValue("tags", data);
      //     return data;
      //   })
      //   .catch((err) => err);
      return new Promise((resolve, reject) => {
        const localStorageTags = GetValue('tags');
        if(!localStorageTags || !localStorageTags.length){
          const initialTags = [
            { value: "Apple", active: false },
            { value: "Technology", active: false },
            { value: "Microsoft", active: false },
            { value: "Android", active: false },
            { value: "iOS", active: false },
            { value: "Shkence", active: false },
            { value: "Samsung", active: false },
            { value: "iPhone", active: false },
            { value: "OnePlus", active: false },
            { value: "Nokia", active: false },
            { value: "Programming", active: false },
            { value: "Website", active: false },
            { value: "Web App", active: false },
            { value: ".NET 5", active: false },
            { value: "ASP.NET", active: false },
            { value: "C#", active: false },
            { value: "Java", active: false },
            { value: "Javascript", active: false },
            { value: "Typescript", active: false },
            { value: "PHP", active: false },
            { value: "React", active: false },
            { value: "Angular", active: false },
            { value: "Covid", active: false },
          ];
          SaveValue('tags', initialTags);
        }

        return resolve(GetValue('tags'));
      });
    }
  }

  saveTags(value) { //to save all
    return new Promise((resolve, reject) => {
      const tags = GetValue('tags');
      const newTags = tags.map((item) => {
        return item.value !== value ? item : { value, active: !item.active };
      });
      SaveValue('tags', newTags);
      resolve(GetValue('tags'));
    });
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
