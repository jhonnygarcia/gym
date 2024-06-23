/* eslint-disable @typescript-eslint/no-explicit-any */
import { appSetting } from '@config/environment';
import { AuthClaims } from '@models/auth/enums/auth-claims.enum';
import { SessionInfo } from '@models/auth/auth.types';
import { localStorageService } from '@services/localstorage.service';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const toSessionInfo = (result: any): SessionInfo => {
  let permissions: number[] = [];
  const propPermissions = result[AuthClaims.Permissions];
  if (propPermissions) {
    permissions = Array.isArray(propPermissions)
      ? (propPermissions as string[]).map((p) => parseInt(p))
      : [parseInt(propPermissions)];
  }

  let roles: string[] = [];
  const propRole = result[AuthClaims.Role];
  if (propRole) {
    roles = Array.isArray(propRole) ? (propRole as string[]) : [propRole];
  }

  const sessionInfo: SessionInfo = {
    email: result[AuthClaims.Email],
    firstName: result[AuthClaims.GivenName],
    surname: result[AuthClaims.FamilyName],
    integrationId: result[AuthClaims.IntegrationId],
    login: result[AuthClaims.Upn],
    mobilePhone: result[AuthClaims.MobilePhone],
    userId: result[AuthClaims.UserId],
    roles: roles,
    permissions: permissions,
    exp: result[AuthClaims.Exp],
    nbf: result[AuthClaims.Nbf],
    iat: result[AuthClaims.Iat],
  };
  return sessionInfo;
};

const decodeToken = (token: string): SessionInfo | null => {
  if (!token) return null;

  let result: any = {};
  try {
    result = jwtDecode(token);
  } catch (error) {
    return null;
  }

  const sessionInfo: SessionInfo = toSessionInfo(result);
  return sessionInfo;
};

const getSession = (): SessionInfo | null => {
  const token = localStorageService.get(appSetting.storageTokenKey);
  if (!token) return null;

  let result: any = {};
  try {
    result = jwtDecode(token);
  } catch (error) {
    return null;
  }

  const sessionInfo: SessionInfo = toSessionInfo(result);
  return sessionInfo;
};

export const checkIfSessionIsActive = async (): Promise<boolean | null> => {
  const api = `${appSetting.apiUrl}/api/auth/userinfo`;
  const token = localStorageService.get(appSetting.storageTokenKey);
  if (!token) {
    return false;
  }
  const http = axios.create({
    baseURL: appSetting.apiUrl,
  });
  try {
    const response = await http.get(api, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.status == 200;
  } catch (e: any) {
    if (e.code == 'ERR_NETWORK') {
      return null;
    }
    return false;
  }
};
export const loadTokenVerificated = async () => {
  const result = checkIfSessionIsActive();
  if (!result) {
    localStorageService.remove(appSetting.storageTokenKey);
  }
};

export const sessionService = {
  decodeToken,
  getSession,
};
