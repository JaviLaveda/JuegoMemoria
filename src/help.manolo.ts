// import { tablero } from "./model";

// export const sePuedeVoltearLaCarta = (
//   tablero: Tablero,
//   indice: number
// ): boolean => {
//   const carta = tablero.cartas[indice];
//   return !carta.estaVuelta && !carta.encontrada;
// };

// // Función para voltear una carta y actualizar el estado del tablero
// export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
//   const carta = tablero.cartas[indice];
//   carta.estaVuelta = true;

//   if (tablero.estadoPartida === "CeroCartasLevantadas") {
//     tablero.estadoPartida = "UnaCartaLevantada";
//     tablero.indiceCartaVolteadaA = indice;
//   } else if (tablero.estadoPartida === "UnaCartaLevantada") {
//     tablero.estadoPartida = "DosCartasLevantadas";
//     tablero.indiceCartaVolteadaB = indice;
//   }

//   if (tablero.estadoPartida === "DosCartasLevantadas") {
//     const indiceA = tablero.indiceCartaVolteadaA;
//     const indiceB = tablero.indiceCartaVolteadaB;

//     if (indiceA !== undefined && indiceB !== undefined) {
//       if (sonPareja(indiceA, indiceB, tablero)) {
//         parejaEncontrada(tablero, indiceA, indiceB);
//       } else {
//         parejaNoEncontrada(tablero, indiceA, indiceB);
//       }
//     }
//   }
// };

// tablero.cartas[indice];
