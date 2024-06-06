import { controls } from "./elements.js";
import * as actions from "./action.js";
import * as el from "./elements.js";
import { updateDisplay } from "./timer.js";
import state from "./state.js";

export function registerControls() {
  /* Identifcando o alvo clicado */
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    /* Se o botão for diferente de um função irá parar o evento*/
    if (typeof actions[action] != "function") {
      return;
    }

    actions[action]();
  });
}

/* Editando os minutos*/
export function setMinutes() {
  /* Focando no elemento e limpando para o usuario digitar o tempo desejado*/
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = "";
  }); /* Aceitando apenas numeros*/
  el.minutes.onkeypress = (event) => /\d/.test(event.key);

  el.minutes.addEventListener("blur", (event) => {
    let time = event.currentTarget.textContent;

    /* Aceitar até o numero 60*/
    time = time > 60 ? 60 : time;

    state.minutes = time;
    state.seconds = 0;

    updateDisplay();
    el.minutes.removeAttribute("contenteditable");
  });
}
