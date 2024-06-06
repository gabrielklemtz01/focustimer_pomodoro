import state from "./state.js";
import * as el from "./elements.js";
import { reset } from "./action.js";
import * as sounds from "./sounds.js";

export function countdown() {
  clearTimeout(state.countDown);
  if (!state.isRunning) {
    return;
  }

  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  seconds--;
  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }
  if (minutes < 0) {
    reset();
    return;
  }
  updateDisplay(minutes, seconds);

  state.countDown = setTimeout(() => countdown(), 1000);
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;
  /* configurar caracter no inicio*/
  el.minutes.textContent = String(minutes).padStart(2, "0");
  el.seconds.textContent = String(seconds).padStart(2, "0");
}
