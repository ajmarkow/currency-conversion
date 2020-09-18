import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import currencyConvert from "./currency.js";

$(document).ready(function () {
  $(":submit").click(async function (event) {
    event.preventDefault();
    let currentrate = await currencyConvert.conversionRate();
    console.log(currentrate);
    $("#amountafterconversion").text(currentrate);
  });
});
