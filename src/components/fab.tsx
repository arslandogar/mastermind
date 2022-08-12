import { Fab as MuiFab, FabProps, FabTypeMap } from '@mui/material';
import { FC } from 'react';

import { useResponsiveProp } from '@/hooks';

export const Fab: FC<FabProps> = (props) => {
  const size = useResponsiveProp<FabTypeMap['props']['size']>({
    xs: 'small',
    sm: 'large',
  });

  return <MuiFab size={size} {...props} />;
};
