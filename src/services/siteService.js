export default class SiteService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    if (!baseUrl) this.baseUrl = "https://shop.shpresa.al/wp-json/wp/v2";
  }

  getPosts() {
    return fetch(this.baseUrl + "/posts")
      .then((resp) => resp.json())
      .then((data) => {
        const post = data.map((data) => {
          return {
            title: data.title.rendered,
            date: data.date,
            description: data.content.rendered,
            image: "https://source.unsplash.com/random",
            imageText: "Image Text",
            link: "/post",
          };
        });
        return post;
      })
      .catch((err) => err);
  }

  getCategories() {
    // var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    // return fetch(proxyUrl + 'https://techalb.al/wp-json/wp/v2/' + '/categories')
    return fetch(this.baseUrl + "/categories")
      .then((resp) => resp.json())
      .then((data) => data)
      .catch((err) => err);
  }

  getHashTags() {
    return fetch(this.baseUrl + "/tags")
      .then((resp) => resp.json())
      .then((data) => data)
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
          image: "https://source.unsplash.com/random",
          imageText: "Image Text",
          link: "/post",
        };
        return post;
      })
      .catch((err) => err);
  }
}
