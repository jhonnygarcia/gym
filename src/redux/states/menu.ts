import { createSlice } from '@reduxjs/toolkit';
import { localStorageService } from '@services/localstorage.service';
import { appSetting } from '@config/environment';

export const menuSlice = createSlice({
  name: 'menu',
  initialState: localStorageService.get(appSetting.storageMenuKey) ?? '',
  reducers: {
    setMenu: (_, action: { payload: string; type: string }) => {
      const { payload: menu } = action;
      localStorageService.persistString(appSetting.storageMenuKey, menu);
      return menu;
    },
  },
});

export const { setMenu } = menuSlice.actions;

export default menuSlice.reducer;
