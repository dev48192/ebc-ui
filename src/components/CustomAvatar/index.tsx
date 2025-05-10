import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { SxProps, Theme } from '@mui/material';
import { useSession } from '../../app/SessionContext';

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string = '', sx: SxProps<Theme>) {
  return {
    sx: {
      ...sx,
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

interface CustomAvatarProps {
  sx?: SxProps<Theme>;
}

const CustomAvatar: React.FC<CustomAvatarProps> = ({ sx }) => {
  const { session = {} } = useSession();
  const account = session?.user || {};
  const name = account?.name ?? '';
  return <Avatar {...(name ? stringAvatar(name, sx) : { sx })} />;
};
export default CustomAvatar;
