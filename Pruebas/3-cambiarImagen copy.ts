const imgCard = document.getElementById("img-card");

const cartaArriba: string = "ejemplo1.jpg";
const cartaAbajo: string = "ejemplo2.jpg";

const mostrarImagen = (src: string) => {
  if (imgCard && imgCard instanceof HTMLImageElement) {
    imgCard.src = src;
  } else {
    throw new Error("HTMLImg not found");
  }
};

const events = () => {
  if (imgCard && imgCard instanceof HTMLImageElement) {
    imgCard.addEventListener("click", () => mostrarImagen(cartaArriba));
  } else {
    throw new Error("HTMLImg not found");
  }
};
