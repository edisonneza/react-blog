export const SET_TITLE = "SET_TITLE";
export const SET_DARK_THEME = "SET_DARK_THEME";
export const SET_POSTS = "SET_POSTS";
export const SET_POST = "SET_POST";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_TAGS = "SET_TAGS";
export const SET_TAB_SELECTED = "SET_TAB_SELECTED";
export const SET_SEARCH_POSTS = "SET_SEARCH_POSTS";

export function setTitle(title) {
  return { type: SET_TITLE, title: title };
}

export function setDarkTheme(darkTheme) {
  return { type: SET_DARK_THEME, darkTheme };
}

export function setPosts(posts) {
  return { type: SET_POSTS, posts };
}

export function setPost(post) {
  return { type: SET_POST, post };
}

export function setCategories(categories) {
  return { type: SET_CATEGORIES, categories };
}

export function setTags(tags) {
  return { type: SET_TAGS, tags };
}

export function setTabSelected(tabSelected) {
  return { type: SET_TAB_SELECTED, tabSelected };
}

export function setSearchPosts(searchPosts) {
  return { type: SET_SEARCH_POSTS, searchPosts };
}
