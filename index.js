let arr = []


let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@aggTrade')

ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);

    document.getElementById('coinPrice').innerText=`${prettifyNumbers(stockObject.p)}`;
}



let apikey = '3029431a-2768-4e17-8d62-fd3f597b4632'

function request(method, url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = resolve;
        xhr.onerror = reject;
        xhr.send();

    })
}

request('GET', 'https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=' + apikey)
    .then((r1) => {

        //Parses JSON data
        let x1 = JSON.parse(r1.target.responseText);

        //Targets specific market cap
        let uglyMarketCap = x1.data.quote.USD.total_market_cap;

        // call the prettifyNumbers function
        prettifyNumbers(uglyMarketCap)

        //Updates the DOM with the prettified data
        document.getElementById('marketCap').innerText=`${prettifyNumbers(uglyMarketCap)}`

    }).catch()

// Formats number values into integers the further into csv.
function prettifyNumbers(x) {

    //Eliminates decimals
    let biDecimal = Math.round(x * 100) / 100

    //document.getElementById('marketCap').innerText=`${marketCap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
    return biDecimal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

