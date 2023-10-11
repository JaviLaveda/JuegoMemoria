const imgCard = document.getElementById("img-card");

const cartaArriba: string = "ejemplo.jpg";

const cambiarImagen = (src: string) => {
  if (imgCard && imgCard instanceof HTMLImageElement) {
    imgCard.src = src;
  } else {
    throw new Error("HTMLImg not found");
  }
};

const events = () => {
  if (imgCard && imgCard instanceof HTMLImageElement) {
    imgCard.addEventListener("click", () => cambiarImagen(cartaArriba));
  } else {
    throw new Error("HTMLImg not found");
  }
};
