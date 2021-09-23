// ticker
let startTime = Date.now();
function handleFrame() {
  tickers.forEach((ticker) => {
    ticker(Date.now() - startTime);
  });

  startTime = Date.now();
  requestAnimationFrame(handleFrame);
}

requestAnimationFrame(handleFrame);

type Ticker = Function;
const tickers: Array<Ticker> = [];
export function addTicker(ticker: Ticker) {
  tickers.push(ticker);
}
