// import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import currencyConvert from "./currency.js";

let testconversion = currencyConvert.conversionRate("USD");
console.log(testconversion);
