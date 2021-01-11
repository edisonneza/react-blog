import React from "react";

export default React.createContext({
  title: "tech news",
  changeTitle: (value) => {}, //just to have a better compile
  user: {
    name: "soni",
    lastName: "neza",
    age: 26,
    country: "Albania",
    city: "Durres",
  },
  changeUser: (user) => {}, 
});
