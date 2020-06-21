import React, { useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import LocationPermission from "../components/LocationPermission";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState([41.066614, 28.9858383]);
  const [searchApi, results, errorMessage] = useResults([
    41.066614,
    28.9858383,
  ]);
  // const [searchApi, results, errorMessage] = useResults(location);
  const filterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price);
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <LocationPermission stateLocation={location} setLocation={setLocation} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("₺")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("₺₺")} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice("₺₺₺")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
