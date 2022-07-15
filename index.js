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
        let x1 = JSON.parse(r1.target.responseText);
        let uglyMarketCap = x1.data.quote.USD.total_market_cap;
        numberWithCommas(uglyMarketCap)
    }).catch()


// Formats number values into integers the further into csv.
function numberWithCommas(x) {
    let marketCap = Math.round(x).toFixed(0)
    console.log(marketCap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    return marketCap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

}

document.getElementsByClassName('text').innerHTML="";









