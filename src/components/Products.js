import React, { useState } from "react";

function Products({ list, removeItem }) {
  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>
          {item.title}

          <button onClick={() => removeItem(item.id)}>Delete</button>
          {item.status ? <button>Update</button> : <button>Edit</button>}
        </div>
      ))}
    </div>
  );
}

export default Products;
