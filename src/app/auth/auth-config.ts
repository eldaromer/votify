interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'SaQ5kfUMewvxAtQDHdjZ4EcyivmQR4uB',
  CLIENT_DOMAIN: 'eldaromer.auth0.com',
  AUDIENCE: 'https://eldaromer.auth0.com/userinfo',
  REDIRECT: 'http://localhost:4200/index',
  SCOPE: 'openid'
};
