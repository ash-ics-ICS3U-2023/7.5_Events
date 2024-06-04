/**
 * ICS3U 7.5 - Events in HTML/JS
 * Mr. J
 *
 * Make sure you read the lesson and watch the in-class demo.
 *
 * Author:
 */

'use strict';

// Event Listeners and Globals
document.getElementById("over").addEventListener("mouseover", over)
document.getElementById("enter").addEventListener("mouseenter", enter)
document.getElementById("move").addEventListener("mousemove", move)

let mouseover_count = 0;
let mouseenter_count = 0;
let mousemove_count = 0;

function over() {
  document.getElementById("over_span").innerText = ++mouseover_count;
}

function enter() {
  document.getElementById("enter_span").innerText = ++mouseenter_count;
}

function move() {
  document.getElementById("move_span").innerText = ++mousemove_count;
}
