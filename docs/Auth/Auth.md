Auth
---

Our application is SAML auth protected by pass.stanford.edu. Once a user is authenticated
and the SAML response is consumed and verified by our application we create session jwt
that gets saved to a secure, http only cookie and verify this token on subsequent requests
to our [api](../src/pages/api/) layer. Additionally, we have a [middleware layer](../src/pages/middleware.ts)
that verifies session jwts prior to rendering a page. This is currently done for most all pages,
but you can add additional public pages to the middleware to bypass auth.

