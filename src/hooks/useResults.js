import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default (location) => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          latitude: location[0],
          longitude: location[1],
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage(err);
    }
  };

  useEffect(() => {
    searchApi("Hamburger");
  }, []);

  return [searchApi, results, errorMessage];
};
