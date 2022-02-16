import React, { useState } from "react";

function Products({ list, removeItem, editItem, setEditInput, updateItem }) {
  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>
          {item.title}
          {item.status && <input type="text" onChange={(e) => setEditInput(e.target.value)} />}

          <button onClick={() => removeItem(item.id)}>Delete</button>
          {item.status ? (
            <button onClick={() => updateItem(item)}>Update</button>
          ) : (
            <button onClick={() => editItem(item)}>Edit</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Products;
