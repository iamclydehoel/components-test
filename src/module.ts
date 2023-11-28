import {
  addComponentsDir,
  addPlugin,
  createResolver,
  defineNuxtModule,
} from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@michaeldoyle/components-test",
    configKey: "components",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    nuxt.options.alias["#test"] = resolver.resolve("runtime");

    addComponentsDir({
      path: resolver.resolve("./runtime/components"),
    });

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve("./runtime/plugin"));
  },
});
