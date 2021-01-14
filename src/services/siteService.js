export default class SiteService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    if (!baseUrl) this.baseUrl = "https://shop.shpresa.al/wp-json/wp/v2";
  }

  getPosts(searchQuery) {
    return fetch(`${this.baseUrl}/posts?_embed=wp:featuredmedia&per_page=10&search=${searchQuery}`)
      .then((resp) => resp.json())
      .then((data) => {
        const post = data.map((data) => {
          // console.log(data)
          return {
            title: data.title.rendered,
            date: data.date,
            shortDesc: data.excerpt.rendered,
            description: data.content.rendered,
            image: data._embedded['wp:featuredmedia']['0'].source_url,// "https://source.unsplash.com/random",
            imageText: "Image Text",
            link: "/post",
            originalLink: data.link
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
            image: data._embedded['wp:featuredmedia']['0'].source_url,// "https://source.unsplash.com/random",
          imageText: "Image Text",
          link: "/post",
        };
        return post;
      })
      .catch((err) => err);
  }
}
