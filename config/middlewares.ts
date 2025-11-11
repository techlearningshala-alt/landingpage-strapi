export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:3000',
        'https://edusprinthub.com',
        'https://www.edusprinthub.com',
        'https://studybettertoday.com',
        'https://www.studybettertoday.com',
         'http://13.232.133.192',
      ],
      headers: ['*'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      keepHeaderOnError: true,
    },
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
