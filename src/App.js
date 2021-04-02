import { Route, Link } from "react-router-dom";
import Home from "./components/home/home";
import Currencies from "./components/currencies/currencies";

import "./styles.scss";

export default function App() {
  return (
    <div>
      <nav>
        {/* changes URL */}

        <Link to="/">
          <img
            src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png"
            alt=""
          />
          <h1>Bitcoin prices</h1>
        </Link>
        <Link to="/currencies">Currencies</Link>
      </nav>

      {/* rendering components via router */}
      <main>
        {/* we can give either a render or a component prop. */}
        {/* using exact bc router uses inclusive or */}
        <Route path="/" exact component={Home} />
        <Route path="/currencies" component={Currencies} />
      </main>
    </div>
  );
}
