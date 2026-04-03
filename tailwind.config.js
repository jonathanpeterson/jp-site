const congoConfig = require("./_vendor/github.com/jpanther/congo/v2/tailwind.config.js");

module.exports = {
  ...congoConfig,
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./_vendor/github.com/jpanther/congo/v2/layouts/**/*.html",
    "./_vendor/github.com/jpanther/congo/v2/content/**/*.{html,md}",
  ],
};
