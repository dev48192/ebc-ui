import * as React from 'react';
import type { Session } from '@toolpad/core';

export interface AuthDetails {
  id?: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  phone?: string;
  email?: string;
  isSeller?: boolean;
}
export interface SessionContextValue {
  session: Session | null;
  setSession: (session: Session | null) => void;
  authDetails: AuthDetails;
  setAuthDetails: (authDetails: AuthDetails | null) => void;
  setAppLoading: (state: boolean) => void;
}

export const SessionContext = React.createContext<SessionContextValue>({
  session: {},
  setSession: () => {},
  authDetails: {},
  setAuthDetails: () => {},
  setAppLoading: () => {},
});

export function useSession() {
  return React.useContext(SessionContext);
}
