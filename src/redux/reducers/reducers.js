import {
  SET_TITLE,
  SET_DARK_THEME,
  SET_POST,
  SET_POSTS,
  SET_CATEGORIES,
  SET_TAGS,
  SET_SEARCH_POSTS,
  SET_TAB_SELECTED,
} from "../actions/actions";
import Constants from "../../constants/constants";
import { GetValue, SaveValue } from "../../services/storageService";

const initialState = {
  title: Constants.appName,
  darkTheme: GetValue("darkTheme"),
  posts: null,
  categories: null,
  tags: null,
  post: null,
  tabSelected: { index: 0, value: "" },
  searchPosts: {
    searchValue: "",
    posts: null,
  },
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        title: action.title,
      };
    case SET_DARK_THEME:
      SaveValue("darkTheme", action.darkTheme);
      return {
        ...state,
        darkTheme: action.darkTheme,
      };
    case SET_POST:
      return {
        ...state,
        post: action.post,
      };
    case SET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };

    case SET_TAGS:
      return {
        ...state,
        tags: action.tags,
      };

    case SET_SEARCH_POSTS:
      return {
        ...state,
        searchPosts: {
          searchValue: action.searchPosts.searchValue,
          posts: action.searchPosts.posts,
        },
      };

    case SET_TAB_SELECTED:
      return {
        ...state,
        tabSelected: {
          index: action.tabSelected.index,
          value: action.tabSelected.value,
        },
      };
    default:
      return state;
  }
}

export default rootReducer;
