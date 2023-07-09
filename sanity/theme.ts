import { buildLegacyTheme } from "sanity";

const props = {
  "--white": "#fff",
  "--black": "#1a1a1a",
  "--green": "#2a9d8f", //PRIMARY COLOR
  "--red": "#db4437",
  "--yellow": "#f4b400", //SECONDARY COLOR
  "--success": "#0f9d58",
};

export const sanityTheme = buildLegacyTheme({
  // BASE THEME COLOR
  "--black": props["--black"],
  "--white": props["--white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--black"],
  "--component-text-color": props["--white"],

  // BRAND
  "--brand-primary": props["--green"],

  //DEFAULT BUTTON
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--green"],
  "--default-button-success-color": props["--success"],
  "--default-button-warning-color": props["--yellow"],
  "--default-button-danger-color": props["--red"],

  //STATE
  "--state-info-color": props["--green"],
  "--state-success-color": props["--success"],
  "--state-warning-color": props["--yellow"],
  "--state-danger-color": props["--red"],

  //NAVBAR
  "--main-navigation-color": props["--black"],
  "--main-navigation-color--inverted": props["--white"],

  //FOCUS
  "--focus-color": props["--green"],
});
