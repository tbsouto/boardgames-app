import { MetadataRoute } from "next";

export default function manifest():
MetadataRoute.Manifest {

  return {

    name:
      "BoardGames Collection",

    short_name:
      "BoardGames",

    description:
      "Tu colección personal de juegos de mesa",

    start_url:
      "/",

    display:
      "standalone",

    background_color:
      "#111827",

    theme_color:
      "#111827",

    orientation:
      "portrait",

    icons: [

      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },

    ],

  };

}