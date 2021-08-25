"use strict";

const bill_value = document.querySelector(".amt");
const no_person = document.querySelector(".no_person");

const tip_amount = document.querySelector(".tip-amt-val");
const total_amount = document.querySelector(".total-amt-val");

const custom_tip = document.querySelector(".custom_val");

const reset_button = document.querySelector(".reset-btn");

const msg_1 = document.querySelector(".error-msg-1");
const msg_2 = document.querySelector(".error-msg-2");

let currentAmt;
let currentPersonCount;
let tipAmt;
let totalAmt = 0;

bill_value.onclick = function () {
  msg_1.style.opacity = 0;
  bill_value.value = "";
  no_person.value = "";
  tip_amount.textContent = "$0.00";
  total_amount.textContent = "$0.00";
  totalAmt = 0;
};

const tip_per = function(object) {
  if (bill_value.value === "") {
    msg_1.style.opacity = 1;
    msg_1.textContent = "Amount";
    msg_1.style.color = "red";
    return;
  }
  totalAmt=0;
  let temp = object.innerHTML.slice(0, -1);
  totalAmt+=Number(bill_value.value);
  tipAmt = Number(bill_value.value) * (Number(temp) / 100);
  tipAmt *= Number(no_person.value);
  tip_amount.textContent = `$${tipAmt.toFixed(2)}`;
  totalAmt += tipAmt;
  total_amount.textContent = `$${totalAmt.toFixed(2)}`;
  console.log(tipAmt);
};

custom_tip.onclick = function () {
  custom_tip.value = "";
};

custom_tip.onchange = function () {
  if (bill_value.value === "") {
    msg_1.style.opacity = 1;
    msg_1.textContent = "Amount";
    msg_1.style.color = "red";
    return;
  }
  custom_tip.style.textAlign = "center";
  tipAmt = Number(bill_value.value) * (Number(custom_tip.value) / 100);
  tipAmt *= Number(no_person.value);
  tip_amount.textContent = `$${tipAmt.toFixed(2)}`;
  totalAmt += tipAmt;
  total_amount.textContent = `$${totalAmt.toFixed(2)}`;
};

no_person.onclick = function () {
  no_person.textContent = "";
};

bill_value.onchange = function () {
  msg_1.style.opacity = 0;
  if (bill_value.value < 0) {
    msg_1.textContent = "Can't be negative";
    msg_1.style.opacity = 1;
    msg_1.style.color = "red";
    return;
  } else if (bill_value.value == 0) {
    msg_1.textContent = "Can't be zero";
    msg_1.style.opacity = 1;
    msg_1.style.color = "red";
    return;
  }
  if (no_person.value === "") {
    currentPersonCount = 1;
    no_person.value = "1";
  }
  currentAmt = Number(bill_value.value);
  totalAmt += currentAmt;

  // total_amount.textContent=`$${totalAmt.toFixed(2)}`;
};

no_person.onchange = function () {
  msg_2.style.opacity = 0;
  if (no_person.value < 0) {
    msg_2.textContent = "Can't be negative";
    msg_2.style.opacity = 1;
    msg_2.style.color = "red";
    return;
  } else if (no_person.value == 0) {
    msg_2.textContent = "Can't be zero";
    msg_2.style.opacity = 1;
    msg_2.style.color = "red";
    return;
  }
  totalAmt=0;
  if (custom_tip.value != "" && bill_value.value != "") {
    totalAmt+=Number(bill_value.value);
    tipAmt = Number(bill_value.value) * (Number(custom_tip.value) / 100);
    tipAmt *= Number(no_person.value);
    tip_amount.textContent = `$${tipAmt.toFixed(2)}`;
    totalAmt += tipAmt;
    total_amount.textContent = `$${totalAmt.toFixed(2)}`;
  }
  currentPersonCount = Number(no_person.value);
};

reset_button.onclick = function () {
  currentAmt = currentPersonCount = tipAmt = totalAmt = 0;
  bill_value.value = "";
  no_person.value = "";
  total_amount.textContent = "$0.00";
  tip_amount.textContent = "$0.00";
};
