import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
    projectId: "b2jwt6no",
    dataset: "production",
    title: "My Personal Next Sanity Website",
    apiVersion: "2023-07-25",
    basePath: "/admin",
    plugins: [deskTool()]
})

export default config;