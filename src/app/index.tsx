import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import CalculateIcon from '@mui/icons-material/Calculate';
import GroupIcon from '@mui/icons-material/Group';
import SettingIcon from '@mui/icons-material/Settings';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { Outlet } from 'react-router';
import type { Navigation, Session } from '@toolpad/core/AppProvider';
import { SessionContext } from './SessionContext';
import { createTheme } from '@mui/material/styles';

const NAVIGATION: Navigation = [
  {
    title: 'Home',
    icon: <HomeIcon />,
  },
  {
    segment: 'calculator',
    title: 'Calculator',
    icon: <CalculateIcon />,
  },
  {
    segment: 'coference-hall',
    title: 'Conference Hall',
    icon: <GroupIcon />,
  },
  {
    segment: 'setting',
    title: 'Settings',
    icon: <SettingIcon />,
  },
];

const BRANDING = {
  title: 'My App',
};
const definedtheme = createTheme({
  colorSchemes: { light: true },
});

const demoSession = {
  user: {
    name: 'Bharat Kashyap',
    email: 'bharatkashyap@outlook.com',
    image: 'https://avatars.githubusercontent.com/u/19550456',
  },
};

export default function App() {
  const [session, setSession] = React.useState<Session | null>(null);

  const sessionContextValue = React.useMemo(
    () => ({ session, setSession }),
    [session, setSession],
  );

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession(demoSession);
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  return (
    <SessionContext.Provider value={sessionContextValue}>
      <ReactRouterAppProvider
        navigation={NAVIGATION}
        branding={BRANDING}
        session={session}
        authentication={authentication}
        theme={definedtheme}
      >
        <Outlet />
      </ReactRouterAppProvider>
    </SessionContext.Provider>
  );
}
