export enum AuthClaims {
  UserId = 'nameid',
  Upn = 'upn',
  Email = 'email',
  IntegrationId = 'integration_id',
  SourceAuth = 'source_auth',
  MobilePhone = 'mobilephone',
  GivenName = 'given_name',
  FamilyName = 'family_name',
  Role = 'role',
  Permissions = 'permissions',
  Nbf = 'nbf',
  Exp = 'exp',
  Iat = 'iat',
}
export enum SourceAuth {
  Oidc = 1,
  ApiKey = 2,
  Basic = 3
}
