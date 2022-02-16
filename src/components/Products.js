import React, { useState } from "react";

function Products({ list, removeItem, editItem, updateItem, setNewInput, newInput }) {
  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>
          {item.title}

          {item.status && (
            <input type="text" onChange={(e) => setNewInput(e.target.value)} value={newInput} />
          )}

          <button onClick={() => removeItem(item.id)}>Delete</button>
          {item.status ? (
            <button onClick={() => updateItem(item, newInput)}>Update</button>
          ) : (
            <button onClick={() => editItem(item)}>Edit</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Products;
