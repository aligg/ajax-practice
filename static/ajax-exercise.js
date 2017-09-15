"use strict";


// PART 1: SHOW A FORTUNE
function displayFortune(result) {
    $("#fortune-text").html(result);
}

function showFortune(evt) {
    evt.preventDefault();
    $.get("/fortune", displayFortune);
    // TODO: get the fortune and show it in the #fortune-text div
}

$('#get-fortune-button').on('click', showFortune);

// PART 2: SHOW WEATHER

function displayWeather(result) {
    $("#weather-info").html("Here is your forecast: " + result["forecast"]);
}

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();
    $.get("/weather.json", displayWeather);
    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);

// PART 3: ORDER MELONS

function showOrder(result) {

    $("#order-status").html(result["msg"]);
    console.log(result);

    if (result["code"] === "ERROR") {
        $("#order-status").addClass("order-error");
    }
    console.log(result["code"])
}

function orderMelons(evt) {
    evt.preventDefault();

    var data = $("#order-form").serialize();

    $.post("/order-melons.json",
        data,
        showOrder);
    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


