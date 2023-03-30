//vite.config.ts
import {SearchPlugin} from "vitepress-plugin-search";
import {defineConfig} from "vite";

//default options
let options = {
    previewLength: 62,
    buttonLabel: "Search",
    placeholder: "Search docs",
};

export default defineConfig({
    plugins: [SearchPlugin(options),],
});
