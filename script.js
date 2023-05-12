"use strict";

/*months in a year*/
const tmo = 12;

/*birth data constants*/
const byr = YOUR_BIRTH_YEAR;
const bmo = YOUR_BIRTH_MONTH;
const bnum = YOUR_BIRTH_DAY;

/*age data variables*/
var ayr = 0;
var amo = 0;
var anum = 0;

/*current date variables*/
var now = new Date();
var cyr = now.getFullYear();
var cmo = now.getMonth() + 1;
var cnum = now.getDate();

function calculateAge() {
  ayr = cyr - byr - 1;
  var currentNumberOfMonths = tmo - bmo + cmo - 1;
  var currentNumberOfDays = bnum + cnum;
  if (currentNumberOfMonths % 12 === 0) {
    ayr += 1;
    amo = currentNumberOfMonths % 12;
  } else amo = currentNumberOfMonths;
  if (currentNumberOfDays % 30 === 0) {
    amo += 1;
    anum = currentNumberOfDays % 30;
  } else anum = currentNumberOfDays;
}

function updateAge() {
  calculateAge();
  Number.prototype.pad = function (digits) {
    for (var n = this.toString(); n.length < digits; n = 0 + n);
    return n;
  };

  var ids = ["years", "months", "days"];
  var values = [ayr.pad(2), amo.pad(2), anum.pad(2)];

  for (var i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
  updateAge();
  window.setInterval("updateAge()", 1);
}
