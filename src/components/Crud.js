import React, { useEffect, useState } from "react";
import Axios from "axios";
import Products from "./Products";

function Crud() {
  const url = "http://localhost:7000/data";
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [updateInput, setUpdateInput] = useState("");
  const [newInput, setNewInput] = useState("");
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

  const editItem = (elem) => {
    const newArray = list.map((item) => {
      // item.status = false;
      if (item.id === elem.id) {
        item.status = true;
      }
      return item;
    });
    setList(newArray);
    setUpdateInput(elem.title);
  };

  const updateItem = (input, item) => {
    let newInput = {
      id: input.id,
      title: item,
      status: false,
    };
    Axios.put(`http://localhost:7000/data/${newInput.id}`, newInput).then(() => fetchProducts());
    setInput("");
    setNewInput("");
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
      <Products
        list={list}
        removeItem={removeItem}
        editItem={editItem}
        updateItem={updateItem}
        value={updateInput}
        setNewInput={setNewInput}
        newInput={newInput}
      />
    </div>
  );
}

export default Crud;
