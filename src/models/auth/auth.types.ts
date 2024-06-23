export type TokenResponse = {
  token_type: string;
  access_token: string;
  expire_in: number;
};

export type SessionInfo = {
  userId: string;
  login: string;
  email: string;
  surname: string;
  firstName: string;
  integrationId: string;
  mobilePhone: string;
  permissions: number[];
  roles: string[];
  nbf: number;
  exp: number;
  iat: number;
};
