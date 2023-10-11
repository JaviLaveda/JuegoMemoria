import { Carta, Tablero } from "./model";

/*
En el motor nos va a hacer falta un método para barajar cartas
*/
const barajarCartas = (cartas: Carta[]): Carta[] => {
  const shuffledArray = [...cartas];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

/*
    Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
  */
//   type EstadoPartida =
//   | "PartidaNoIniciada"
//   | "CeroCartasLevantadas"
//   | "UnaCartaLevantada"
//   | "DosCartasLevantadas"
//   | "PartidaCompleta";

// export interface Tablero {
//   cartas: Carta[];
//   estadoPartida: EstadoPartida;
//   indiceCartaVolteadaA?: number;
//   indiceCartaVolteadaB?: number;
// }

const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number): boolean => {
  if (
    !tablero.cartas[indice].encontrada &&
    (tablero.estadoPartida === "CeroCartasLevantadas" ||
      tablero.estadoPartida === "UnaCartaLevantada")
  ) {
    return true;
  } else {
    return false;
  }
};

const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  if (
    sePuedeVoltearLaCarta(tablero, indice) === true &&
    tablero.estadoPartida === "CeroCartasLevantadas"
  ) {
    tablero.estadoPartida = "UnaCartaLevantada";
  } else if (
    sePuedeVoltearLaCarta(tablero, indice) === true &&
    tablero.estadoPartida === "UnaCartaLevantada"
  ) {
    tablero.estadoPartida = "DosCartasLevantadas";
  }
};

/*
    Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
  */
export const sonPareja = (
  indiceA: number,
  indiceB: number,
  tablero: Tablero
): boolean => {
  if (tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto) {
    return true;
  } else {
    return false;
  }
};

/*
    Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
  */
const parejaEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  tablero.cartas[indiceA].encontrada = true;
  tablero.cartas[indiceB].encontrada = true;

  if (esPartidaCompleta(tablero) === true) {
    tablero.estadoPartida = "PartidaCompleta";
  } else {
    tablero.estadoPartida = "CeroCartasLevantadas";
  }
};

/*
    Aquí asumimos que no son pareja y las volvemos a poner boca abajo
  */
const parejaNoEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  tablero.cartas[indiceA].estaVuelta = false;
  tablero.cartas[indiceB].estaVuelta = false;

  tablero.estadoPartida = "CeroCartasLevantadas";
};

/*
    Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
  */
export const esPartidaCompleta = (tablero: Tablero): boolean => {
  if (tablero.cartas.every((carta) => carta.encontrada)) {
    return true;
  } else {
    return false;
  }
};

/*
  Iniciar partida
  */

export const iniciaPartida = (tablero: Tablero): void => {
  tablero.cartas = barajarCartas(tablero.cartas);
  tablero.cartas.forEach((carta) => {
    carta.estaVuelta = false;
    carta.encontrada = false;
  });
  tablero.estadoPartida = "CeroCartasLevantadas";
};
