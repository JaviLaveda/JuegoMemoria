import { tablero } from "./model";
import { crearTablero, events } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
  crearTablero();
  events();
  tablero.estadoPartida = "PartidaNoIniciada";
});
