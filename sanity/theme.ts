import { buildLegacyTheme } from "sanity";

const props = {
  "--white": "#fff7e8",
  "--black": "#161616",
  "--primary": "#a29d955e", //PRIMARY COLOR
  "--red": "#db4437",
  "--yellow": "#f4b400", //SECONDARY COLOR
  "--success": "#2a9d8f",
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
  "--brand-primary": props["--primary"],

  //DEFAULT BUTTON
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--primary"],
  "--default-button-success-color": props["--success"],
  "--default-button-warning-color": props["--yellow"],
  "--default-button-danger-color": props["--red"],

  //STATE
  "--state-info-color": props["--primary"],
  "--state-success-color": props["--success"],
  "--state-warning-color": props["--yellow"],
  "--state-danger-color": props["--red"],

  //NAVBAR
  "--main-navigation-color": props["--black"],
  "--main-navigation-color--inverted": props["--white"],

  //FOCUS
  "--focus-color": props["--primary"],
});
