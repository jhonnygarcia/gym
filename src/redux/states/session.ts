import { createSlice } from '@reduxjs/toolkit';
import { appSetting } from '@config/environment';
import { localStorageService } from '@services/localstorage.service';
import { sessionService } from '@services/auth/session.service';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: sessionService.getSession(),
  reducers: {
    signIn: (state, action: { payload: string; type: string }) => {
      const sessionInfo = sessionService.decodeToken(action.payload);
      if (!sessionInfo) return state;

      localStorageService.persistString(appSetting.storageTokenKey, action.payload);
      const newState = { ...state, ...sessionInfo };
      return newState;
    },
    signOff: () => {
      localStorageService.remove(appSetting.storageTokenKey);
      return null;
    },
  },
});

export const { signIn, signOff } = sessionSlice.actions;

export default sessionSlice.reducer;
