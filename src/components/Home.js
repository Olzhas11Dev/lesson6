import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Home component
      <Link to="/services">services</Link>
      <Link to="/documentation">documentation</Link>
    </div>
  );
}

export default Home;
