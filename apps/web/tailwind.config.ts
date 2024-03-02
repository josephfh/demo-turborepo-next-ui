// tailwind config is required for editor support
import { tailwindClientConfig } from "@repo/theme-quartz/tailwind";
import type { Config } from "tailwindcss";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    "./app/*.tsx",
    "./app/**/*.tsx",
    "../../packages/components-react/**/*.tsx", // components-react package
    "../../packages/logos/build/**/*.tsx", // logos package
    "../../packages/ui-react/build/**/*.tsx", // ui-react package
    "../../packages/icons-limestone/build/**/*.tsx", // icons package
  ],
  presets: [tailwindClientConfig],
};

export default config;
