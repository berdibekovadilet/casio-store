import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "components";

const baseUrl = "https://63734623348e947299079d45.mockapi.io/products";

export const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(baseUrl).then((resp) => {
      console.log(resp.data);
      setItems(resp.data);
    });
  }, []);

  const products = items.map((obj: any) => <Card key={obj.id} {...obj} />);

  return <>{products}</>;
};
