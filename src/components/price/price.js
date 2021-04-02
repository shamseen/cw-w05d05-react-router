// props from App.js > Route.render={callback}
export default function Price({ match }) {
  console.log(JSON.stringify(match, null, 4));
  return (
    <div>
      <h1>Bitcoin price in {match.params.countryCode}</h1>
    </div>
  );
}

/* props obj
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
