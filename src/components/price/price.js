import { useEffect, useState } from "react";

// props from App.js > Route.render={callback}
export default function Price({ match }) {
  const [currency, setCurrency] = useState({});
  const countryCode = match.params.countryCode;

  /* --- API GET --- */
  async function getCountryCode() {
    const url = `https://api.coindesk.com/v1/bpi/currentprice/${countryCode}.json`;
    try {
      const response = await fetch(url);
      const json = await response.json();
      const bpi = json.bpi;

      // update state
      setCurrency(bpi[countryCode]);

      // handlling errors
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getCountryCode();
  }, []);
  return (
    <div>
      <h1>Bitcoin price in {currency.code}</h1>
      <label>{currency.rate}</label>
    </div>
  );
}

/* props obj (destructured)
{
    "history": {
        "length": 28,
        "action": "POP",
        "location": {
            "pathname": "/price/AED",
            "search": "",
            "hash": "",
            "key": "ch2dto"
        }
    },
    "location": {
        "pathname": "/price/AED",
        "search": "",
        "hash": "",
        "key": "ch2dto"
    },
    "match": {
        "path": "/price/:countryCode",
        "url": "/price/AED",
        "isExact": true,
        "params": {
            "countryCode": "AED"
        }
    }
}
*/

/* API response
{
    "path": "/price/:countryCode",
    "url": "/price/AED",
    "isExact": true,
    "params": {
        "countryCode": "AED"
    }
}

JSON
{
   "time": {
      "updated": "Apr 2, 2021 20:58:00 UTC",
      "updatedISO": "2021-04-02T20:58:00+00:00",
      "updateduk": "Apr 2, 2021 at 21:58 BST"
   },
   "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
   "bpi": {
      "USD": {
         "code": "USD",
         "rate": "58,690.7933",
         "description": "United States Dollar",
         "rate_float": 58690.793
      },
      "AED": {
         "code": "AED",
         "rate": "215,571.2898",
         "description": "United Arab Emirates Dirham",
         "rate_float": 215571.3
      }
   }
}

*/
