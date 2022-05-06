import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(
  microfrontendLayout,
  {
    loaders: {
      microfrontLoader: "<h1>Loading</h1>",
    },
    errors: {
      microfrontError: "<h1>Failed to load</h1>",
    },
  });
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

registerApplication({
  name: "@meli-store/mf-header",
  app: () => System.import("@meli-store/mf-header"),
  activeWhen: ["/"],
  // activeWhen: [(location) => (location.pathname != "/login")],
});

applications.forEach(registerApplication);
layoutEngine.activate();

start();
