// Everything you may want to tweak lives here: texts, speed and trims.
// Preview changes live with `npm run studio`.

export const FPS = 30;
export const WIDTH = 1080;
export const HEIGHT = 1350; // 4:5, best fit for the LinkedIn feed

export type SceneConfig = {
  /** Clip file name in public/clips (without .mp4) */
  clip: string;
  /** Short label above the caption */
  step: string;
  caption: string;
  /** >1 speeds up the clip (Maestro is slower than a person) */
  playbackRate: number;
  /** Seconds removed from the start of the clip */
  trimStart?: number;
  /** Max seconds of source footage used, after trimStart */
  maxSourceSeconds?: number;
};

export const INTRO = {
  durationInSeconds: 2.5,
  title: "AdoteMe",
  subtitle: "Adoção e resgate de animais",
};

export const SCENES: SceneConfig[] = [
  {
    clip: "01-home",
    step: "Início",
    caption: "Encontre seu novo melhor amigo 🐾",
    playbackRate: 1.2,
  },
  {
    clip: "02-explore-details",
    step: "Explorar",
    caption: "Conheça cada pet e sua história",
    playbackRate: 4,
  },
  {
    clip: "03-map",
    step: "Mapa",
    caption: "Veja resgates na sua região",
    playbackRate: 1.6,
  },
  {
    clip: "04-rescue",
    step: "Resgate",
    caption: "Reporte animais em risco em segundos",
    playbackRate: 6,
  },
  {
    clip: "05-profile",
    step: "Perfil",
    caption: "Acompanhe favoritos e adoções",
    playbackRate: 2,
  },
];

export const OUTRO = {
  durationInSeconds: 3,
  title: "AdoteMe",
  author: "Gabriel Gomes",
  stack: "Expo · React Native · TypeScript",
  link: "github.com/ggpereira/adoteme",
};
