import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer GSw5KWc0CQqKKA71Lv7LVZWHDZtwVlH7XDmmY6Z9Sq5mmjwUQvQtNRjna_ywctRT2cjymQgr2l77M3VqBD6ZY8SEc5ktUurhb7Zd0VZu7Ea4AySMOsopwARusV7sXnYx",
  },
});
