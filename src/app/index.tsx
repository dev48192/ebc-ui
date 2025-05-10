import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import CalculateIcon from '@mui/icons-material/Calculate';
import GroupIcon from '@mui/icons-material/Group';
import SettingIcon from '@mui/icons-material/Settings';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { Outlet } from 'react-router';
import type { Navigation, Session } from '@toolpad/core/AppProvider';
import { SessionContext, AuthDetails } from './SessionContext';
import { createTheme } from '@mui/material/styles';
import PhoneAuthModal from '../components/PhoneAuthModal';
import axiosInstance from '../common/axiosxhr';
import { auth, signOut } from '../firebase';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import useFirebaseAuth from './useFirebaseauth';

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
    segment: 'settings',
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

export default function App() {
  const [session, setSession] = React.useState<Session | null>(null);
  const [isAppLoading, setAppLoading] = React.useState(false);
  const hasFetched = React.useRef(false);
  const [authDetails, setAuthDetails] = React.useState<AuthDetails | null>(
    null,
  );
  const [isPhoneAuthOpen, setPhoneAuthOpen] = React.useState(false);

  const sessionContextValue = React.useMemo(
    () => ({ session, setSession, authDetails, setAuthDetails, setAppLoading }),
    [session, setSession, authDetails, setAuthDetails, setAppLoading],
  );

  const fetchUser = async () => {
    setAppLoading(true);
    try {
      const res = await axiosInstance.get('/api/auth/profile');
      if (res.data) {
        const user = res.data;
        const name = [user.first_name, user.last_name]
          .filter(Boolean)
          .join(' ')
          .trim();
        setSession({
          user: {
            id: user.uid,
            name: name ?? user.phone,
            email: user.phone,
          },
        });
        setAuthDetails({
          firstName: user.first_name,
          lastName: user.last_name,
          fullName: name,
          id: user.uid,
          phone: user.phone,
          email: user.email,
          isSeller: user.is_seller,
        });
      } else {
        setSession(null);
        setAuthDetails(null);
      }
      setAppLoading(false);
    } catch (error) {
      console.log('Error in fetch user---->', error);
      setSession(null);
      setAuthDetails(null);
      setAppLoading(false);
    }
  };

  React.useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    fetchUser();
  }, []);

  const handleLogout = async () => {
    setAppLoading(true);
    try {
      await axiosInstance.post(
        '/api/auth/logout',
        {},
      );
      await signOut(auth);
      setSession(null);
      setAuthDetails(null);
      setAppLoading(false);
    } catch (error) {
      console.error('Logout Error:', error);
      alert('Error in logging out');
      setAppLoading(false);
    }
  };

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setPhoneAuthOpen(true);
      },
      signOut: handleLogout,
    };
  }, []);

  useFirebaseAuth();

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
        {isPhoneAuthOpen && (
          <PhoneAuthModal
            open={isPhoneAuthOpen}
            onClose={() => setPhoneAuthOpen(false)}
          />
        )}
        <Backdrop
          sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
          open={isAppLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </ReactRouterAppProvider>
    </SessionContext.Provider>
  );
}
