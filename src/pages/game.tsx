import { Container, Grid, Stack } from '@mui/material';

import { Heading, Rules, InputRow, GameOverModal, Fab } from '@/components';
import { useGameStore } from '@/stores';
import { allowedAttempts, colors } from '@/utils/constants';

export const Game = () => {
  const selectedColor = useGameStore((state) => state.selectedColor);
  const setSelectedColor = useGameStore((state) => state.setSelectedColor);

  return (
    <Container component="main" maxWidth="sm" sx={{ py: 10 }}>
      <Heading />
      <Rules />
      <Grid container>
        <Grid item xs={10}>
          {Array(allowedAttempts)
            .fill(null)
            .map((_, index) => (
              <InputRow key={index} rowIndex={index} />
            ))}
        </Grid>
        <Grid item xs={2}>
          <Stack spacing={2} alignItems="flex-end">
            {colors.map((color) => (
              <Fab
                key={color}
                color={color}
                onClick={() => setSelectedColor(color)}
                sx={color === selectedColor ? { border: 1, borderColor: 'black' } : {}}
              />
            ))}
          </Stack>
        </Grid>
      </Grid>
      <GameOverModal />
    </Container>
  );
};
