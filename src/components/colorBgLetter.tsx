import { Box } from '@mui/material';
import { FC } from 'react';

interface Props {
  color: string;
  letter: string;
}

export const ColorBgLetter: FC<Props> = ({ color, letter }) => {
  return (
    <Box component="span" bgcolor={`${color}.main`} color={`${color}.contrastText`} px={2}>
      {letter}
    </Box>
  );
};
