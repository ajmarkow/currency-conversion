import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import currencyConvert from "./currency.js";

let currentrate = currencyConvert.conversionRate();

console.log(currentrate);
