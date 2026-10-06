import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Baby's Maken",
    short_name: "Baby's Maken",
    description: "Catálogo de vanitys infantiles Baby's Maken.",
    start_url: SITE_URL,
    display: "standalone",
    background_color: "#fffaf8",
    theme_color: "#ed3d78",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }]
  };
}
