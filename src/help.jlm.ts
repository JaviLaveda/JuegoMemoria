// export const manejoClick = (
//   carta: Carta,
//   indice: number,
//   div: HTMLDivElement,
//   tablero: Tablero
// ) => {
//   const idCartaSeleccionada = tablero.cartas[indice];
//   console.log(idCartaSeleccionada);

//   if (
//     sePuedeVoltearLaCarta(tablero, indice) &&
//     tablero.estadoPartida === "CeroCartasLevantadas"
//   ) {
//     tablero.estadoPartida = "UnaCartaLevantada";
//     console.log(tablero.estadoPartida);
//     tablero.indiceCartaVolteadaA = idCartaSeleccionada.idFoto;
//     console.log("El indiceCartaVolteadaA es ", tablero.indiceCartaVolteadaA);
//     carta.estaVuelta = true;
//     cambiaImg(indice, idCartaSeleccionada.imagen);
//   } else if (
//     sePuedeVoltearLaCarta(tablero, indice) &&
//     tablero.estadoPartida === "UnaCartaLevantada"
//   ) {
//     tablero.estadoPartida = "DosCartasLevantadas";
//     console.log(tablero.estadoPartida);
//     tablero.indiceCartaVolteadaB = idCartaSeleccionada.idFoto;
//     console.log("El indiceCartaVolteadaB es ", tablero.indiceCartaVolteadaB);
//     carta.estaVuelta = true;
//     cambiaImg(indice, idCartaSeleccionada.imagen);
//     if (
//       tablero.indiceCartaVolteadaA &&
//       tablero.indiceCartaVolteadaB &&
//       sonPareja(
//         tablero.indiceCartaVolteadaA,
//         tablero.indiceCartaVolteadaB,
//         tablero
//       )
//     ) {
//       console.log(
//         "las dos cartas son pareja = ",
//         sonPareja(
//           tablero.indiceCartaVolteadaA,
//           tablero.indiceCartaVolteadaB,
//           tablero
//         )
//       );
//     } else {
//       console.log("no son pareja");
//     }
//   }
// };
