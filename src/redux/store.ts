import { configureStore } from '@reduxjs/toolkit';

import menuSliceReducer from './states/menu';
import sessionSliceReducer from './states/session';
import { SessionInfo } from '@models/auth/auth.types';

export interface AppStore {
  session: SessionInfo | null;
  menu: string;
}

export default configureStore<AppStore>({
  reducer: {
    session: sessionSliceReducer,
    menu: menuSliceReducer
  }
});
