/**
 * Environments variables declared here.
 */

/* eslint-disable node/no-process-env */

export default {
  NodeEnv: (process.env.NODE_ENV ?? ''),
  Port: (process.env.PORT ?? 0),
  CookieProps: {
    Key: 'ExpressGeneratorTs',
    Secret: (process.env.COOKIE_SECRET ?? ''),
    // Casing to match express cookie options
    Options: {
      httpOnly: true,
      signed: true,
      path: (process.env.COOKIE_PATH ?? ''),
      maxAge: Number(process.env.COOKIE_EXP ?? 0),
      domain: (process.env.COOKIE_DOMAIN ?? ''),
      secure: (process.env.SECURE_COOKIE === 'true'),
    },
  },
  DataBase:{
    Host: (process.env.DB_HOST ?? 'localhost'),
    Port: (process.env.DB_PORT ?? 3306),
    Name: (process.env.DB_NAME ?? ''),
    User: (process.env.DB_USER ?? 'root'),
    Password: (process.env.DB_PASSWORD ?? ''),
  },
  Jwt: {
    Secret: (process.env.JWT_SECRET ??  ''),
    Exp: (process.env.COOKIE_EXP ?? ''), // exp at the same time as the cookie
  },
} as const;
