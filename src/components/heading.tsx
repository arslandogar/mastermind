import { Typography, TypographyTypeMap } from '@mui/material';

import { useResponsiveProp } from '@/hooks';

import { ColorBgLetter } from './colorBgLetter';

export const Heading = () => {
  const variant = useResponsiveProp<TypographyTypeMap['props']['variant']>({
    xs: 'h5',
    sm: 'h3',
  });

  return (
    <Typography variant={variant} align="center" gutterBottom>
      <ColorBgLetter color="gold" letter="M" />
      <ColorBgLetter color="red" letter="A" />
      <ColorBgLetter color="green" letter="S" />
      <ColorBgLetter color="eggshellBlue" letter="T" />
      <ColorBgLetter color="lagoonBlue" letter="E" />
      <ColorBgLetter color="siren" letter="R" />
      MIND
    </Typography>
  );
};
