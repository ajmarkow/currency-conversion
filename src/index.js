import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import currencyConvert from "./currency.js";

let currentrate = [];

$(document).ready(function () {
  $(":submit").click(function (event) {
    event.preventDefault();
    currentrate = currencyConvert.getCurrencyValues(
      currencyConvert.conversionRate()
    );
    $("#amountafterconversion").text(currentrate);
  });
});
