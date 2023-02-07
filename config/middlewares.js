module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      frameguard: {
        action: "sameorigin",
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  'strapi::session',
  "strapi::favicon",
  "strapi::public",
];
