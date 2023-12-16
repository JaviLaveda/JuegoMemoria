export const reproducirSonido = (source: string) => {
  const sonido = new Audio(source);
  sonido.play();
  sonido.preload = "auto";
  sonido.volume = 0.2;
};

export const clickSound: string = "/assets/click.mp3";

export const winSound: string = "/assets/winGame.mp3";

export const startSound: string = "/assets/startGame.mp3";
