export default class currencyConvert {
  static async conversionRate(startcurrencycode) {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${startcurrencycode}`
      );
      if (!response.ok) {
        throw Error(response.result);
      }
      return response.json;
    } catch (error) {
      return error;
    }
  }
}
