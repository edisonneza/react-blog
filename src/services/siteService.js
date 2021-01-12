export default class SiteService {
    constructor(baseUrl) {
      this.baseUrl = baseUrl;
      if(!baseUrl)
        this.baseUrl = 'https://shop.shpresa.al/wp-json/wp/v2';
    }
  
    getCategories() {
      return fetch(this.baseUrl + '/categories')
        .then((resp) => resp.json())
        .then((data) => data)
        .catch((err) => err);
    }

    getHashTags() {
        return fetch(this.baseUrl + '/tags')
          .then((resp) => resp.json())
          .then((data) => data)
          .catch((err) => err);
      }

      getPostByHref(href){
        return fetch(href)
        .then((resp) => resp.json())
        .then((data) => data)
        .catch((err) => err);
      }
  }
  