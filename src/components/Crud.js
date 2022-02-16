import React, { useEffect, useState } from "react";
import Axios from "axios";
import Products from "./Products";

function Crud() {
  const url = "http://localhost:7000/data";
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    Axios.get("http://localhost:7000/data").then((res) => setList(res.data));
  };

  const addProduct = () => {
    let product = {
      id: Date.now(),
      title: input,
      status: false,
    };
    Axios.post(`${url}`, product).then(() => fetchProducts());
    setInput("");
  };

  const removeItem = (id) => {
    Axios.delete(`${url}/${id}`).then(() => fetchProducts());
  };

  return (
    <div>
      <input
        type="text"
        placeholder="products"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={addProduct}>Add product</button>
      <Products list={list} removeItem={removeItem} />
    </div>
  );
}

export default Crud;
