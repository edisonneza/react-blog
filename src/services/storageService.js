import Constants from '../constants/constants';

export function SaveValue(name, values) {
  localStorage.setItem(Constants.localStoragePrefix + name, JSON.stringify(values));
}

export function GetValue(name) {
  return JSON.parse(localStorage.getItem(Constants.localStoragePrefix + name));
}

// export function GetValues() {
//   let items = [];
//   for (var key in localStorage) {
//     if (key.indexOf("StorageName") === 0) {
//       const item = JSON.parse(localStorage[key]);
//       const arr = { key: key, ...item };
//       items.push(JSON.stringify(arr));
//     }
//   }

//   return items;
// }

export function DeleteValue(name) {
  localStorage.removeItem(Constants.localStoragePrefix + name);
}
