import React from "react";
import { useNavigate } from "react-router-dom";

function Documentation() {
  const navigate = useNavigate();
  return (
    <div>
      Documentation component
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
}

export default Documentation;
