import { Route, Link } from "react-router-dom";
import Home from "./components/home/home";
import Currencies from "./components/currencies/currencies";
import Price from "./components/price/price";

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

        {/* :countrycode is a parameter */}
        {/* render attribute passes props down to component */}
        <Route
          path="/price/:countryCode"
          render={(routerProps) => {
            // sub for component={Price}
            // spread op to destructure obj
            return <Price {...routerProps} />;
          }}
        />
      </main>
    </div>
  );
}
