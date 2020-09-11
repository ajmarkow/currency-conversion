export default class currencyConvert {
  static conversionRate() {
    return fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`
    )
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      });
  }
  static getCurrencyInfo(response) {
    if (response) {
      return response.conversion_rates;
    } else {
      return "There was an error fetching the information";
    }
  }
}
