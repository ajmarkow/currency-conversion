import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import currencyConvert from "./currency.js";

$(document).ready(function () {
  $(":submit").click(async function (event) {
    let conversion = new currencyConvert();
    conversion.amount = $("#conversionamount").val();
    event.preventDefault();
    let currentrate = await conversion.conversionRate();
    conversion.rates = currentrate;
    let rateselected = conversion.getCurrencyValues();
    $("#amountafterconversion").text(
      currencyConvert.calculateAndPrintFinal(rateselected)
    );
  });
});
