Netlify Deployments
---

This application is deployed to Netlify using the [netlify-plugin-next-js](https://github.com/netlify/netlify-plugin-nextjs).
This plugin allows the next application structure to retain its normal file structure and
on build will render static HTML files for pages and generate lambda functions for any [`getServerSideProps`](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering),
[api routes](https://nextjs.org/docs/api-routes/introduction), or [middleware](https://nextjs.org/docs/middleware) files.
