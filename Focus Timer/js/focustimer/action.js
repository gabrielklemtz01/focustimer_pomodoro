import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";

/* Acrescentar a classe RUNNING no HTML*/
export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  /*Ao clicar em iniciar executar um toque*/
  sounds.buttonPress.play();
  timer.countdown();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  timer.updateDisplay();
  sounds.kichenTimer.play();
}
/* Ativando a edição de um ELEMENTO no HTML*/
export function set() {
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on");
  if (state.isMute) {
    sounds.bgAudio.play();
    return;
  }
  sounds.bgAudio.pause();
}
