import $ from "jquery";
export default class currencyConvert {
  static async conversionRate() {
    return new Promise(function (resolve, reject) {
      let apicall = new XMLHttpRequest();
      const apiurl = `https://v6.exchangerate-api.com/v6/${process.env.APIKEY}/latest/USD`;
      apicall.onload = function () {
        if (this.status === 200) {
          resolve(apicall.response);
        } else {
          reject(apicall.response);
        }
      };
      apicall.open("GET", apiurl, true);
      apicall.send();
    });
  }
  static async getCurrencyValues(response) {
    if (response.ok) {
      $("#amountafterconversion").text(
        `The current rates are as follows ${response.conversion_rates}`
      );
    } else {
      $("#amountafterconversion").text(
        `An error occured - ${response.message}`
      );
    }
  }
}
