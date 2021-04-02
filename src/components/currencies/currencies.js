import listOfCurrencies from "./list.json";
import { Link } from "react-router-dom";

// props filled by router, not app.js

export default function Currencies(props) {
  console.log("Currencies - Props", props);

  let list = listOfCurrencies.map((item) => {
    return (
      <div className="currency" key={item.currency}>
        <p>
          <Link to={"/price/" + item.currency}>{item.currency}</Link>:{" "}
          {item.country}
        </p>
      </div>
    );
  });
  return (
    <div>
      <h1>List of Currencies</h1>
      <div>{list}</div>
    </div>
  );
}
