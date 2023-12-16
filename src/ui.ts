import { tablero, Tablero, Carta } from "./model";

import { voltearLaCarta, sePuedeVoltearLaCarta, iniciaPartida } from "./motor";

import { reproducirSonido, clickSound, winSound, startSound } from "./sounds";

export const events = () => {
  const btnEmpezarPartida = document.getElementById("btnStart");
  if (btnEmpezarPartida && btnEmpezarPartida instanceof HTMLButtonElement) {
    btnEmpezarPartida.addEventListener("click", () => {
      reproducirSonido(startSound);
      iniciaPartida(tablero);
      reiniciaTablero();
    });
  } else {
    throw new Error("ButtonElement not found");
  }
};

export const crearTablero = () => {
  const tableroContenedor = document.getElementById("tablero");

  if (tableroContenedor && tableroContenedor instanceof HTMLDivElement) {
    tablero.cartas.forEach((carta, indice) => {
      const div = document.querySelector(`div[data-id-carta="${indice}"]`);

      if (
        div &&
        div instanceof HTMLDivElement &&
        tablero.estadoPartida !== "DosCartasLevantadas"
      ) {
        div.addEventListener("click", () => {
          carta = tablero.cartas[indice];
          manejoClick(carta, indice, div, tablero);
          if (tablero.estadoPartida === "PartidaCompleta") {
            reproducirSonido(winSound);
          } else {
            reproducirSonido(clickSound);
          }
        });
      } else {
        throw new Error("DIVElement not found");
      }
    });
  } else {
    throw new Error("Tablero not found");
  }
};

const añadeQuitaImagen = (indice?: number, url?: string) => {
  const img = document.querySelector(`img[data-id-imagen="${indice}"]`);
  if (img && img instanceof HTMLImageElement) {
    url ? (img.src = url) : (img.src = "");
  }
};

const cambiaNombreClase = (div: Element, nombreClase: string) => {
  if (div) {
    div.className = nombreClase;
  }
};

const reiniciaTablero = () => {
  const cartasVolteadas = document.querySelectorAll(".carta-volteada");
  Array.from(cartasVolteadas).forEach((cartaVolteada) => {
    cartaVolteada.classList.add("carta");
    cartaVolteada.classList.remove("carta-volteada");
    const imgCarta = cartaVolteada.querySelector("img");
    if (imgCarta) {
      imgCarta.src = "";
    } else {
      throw new Error("img not found");
    }
  });
};

let interactividadUsuario = false;

export const manejoClick = (
  carta: Carta,
  indice: number,
  div: HTMLDivElement,
  tablero: Tablero
) => {
  if (
    !interactividadUsuario &&
    sePuedeVoltearLaCarta(tablero, indice) &&
    tablero.estadoPartida !== "PartidaNoIniciada" &&
    tablero.estadoPartida !== "DosCartasLevantadas"
  ) {
    interactividadUsuario = true;
    cambiaNombreClase(div, "carta-volteada");
    añadeQuitaImagen(indice, carta.imagen);
    voltearLaCarta(tablero, indice);

    if (
      tablero.estadoPartida === "CeroCartasLevantadas" &&
      tablero.indiceCartaVolteadaA !== undefined &&
      tablero.indiceCartaVolteadaA !== null &&
      tablero.indiceCartaVolteadaB !== undefined &&
      tablero.indiceCartaVolteadaB !== null &&
      !tablero.cartas[tablero.indiceCartaVolteadaA].encontrada &&
      !tablero.cartas[tablero.indiceCartaVolteadaB].encontrada
    ) {
      setTimeout(() => {
        const divA = document.querySelector(
          `div[data-id-carta="${tablero.indiceCartaVolteadaA}"]`
        );
        const divB = document.querySelector(
          `div[data-id-carta="${tablero.indiceCartaVolteadaB}"]`
        );
        if (divA && divB) {
          cambiaNombreClase(divA, "carta");
          cambiaNombreClase(divB, "carta");
        }
        añadeQuitaImagen(tablero.indiceCartaVolteadaA);
        añadeQuitaImagen(tablero.indiceCartaVolteadaB);
        interactividadUsuario = false;
      }, 1000);
    } else {
      interactividadUsuario = false;
    }
  }
};
