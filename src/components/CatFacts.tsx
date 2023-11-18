import { Text } from "react-native";
import React, { useEffect, useState } from "react";

const CatFacts: React.FC = () => {
  const [catFactsData, setCatFactsData] = useState<any>();

  useEffect(() => {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((response) => {
        response.json();
      })
      .then((data) => {
        setCatFactsData(data);
      });
  }, []);

  return catFactsData && catFactsData.length > 0 ? (
    <Text>{catFactsData[0].text}</Text>
  ) : (
    <Text>No Cat Facts!</Text>
  );
};

export { CatFacts };
