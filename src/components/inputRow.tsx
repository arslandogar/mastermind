import { Done, Cancel, Circle, CircleOutlined } from '@mui/icons-material';
import { Grid, Stack, IconButton } from '@mui/material';
import { FC } from 'react';

import { useGameStore } from '@/stores';
import { Color } from '@/types';

import { Fab } from './fab';

interface Props {
  rowIndex: number;
}

export const InputRow: FC<Props> = ({ rowIndex }) => {
  const challenge = useGameStore((state) => state.challenge);
  const selectedColor = useGameStore((state) => state.selectedColor);
  const currentRound = useGameStore((state) => state.currentRound);
  const guessColors = useGameStore((state) => state.guessState[rowIndex].colors);
  const guessResults = useGameStore((state) => state.guessState[rowIndex].results);

  const nextRound = useGameStore((state) => state.nextRound);
  const setGuessColor = useGameStore((state) => state.setGuessColor);
  const setGuessResult = useGameStore((state) => state.setGuessResult);

  const selected = rowIndex === currentRound;

  const handleDone = () => {
    for (let i = 0; i < challenge.length; i++) {
      if (guessColors[i] === challenge[i]) {
        setGuessResult({ stateIndex: rowIndex, resultIndex: i, result: 'correct' });
      } else if (challenge.includes(guessColors[i] as Color)) {
        setGuessResult({ stateIndex: rowIndex, resultIndex: i, result: 'partial' });
      } else {
        setGuessResult({ stateIndex: rowIndex, resultIndex: i, result: 'incorrect' });
      }
    }
    nextRound();
  };

  return (
    <Stack direction="row" justifyContent="space-between" padding={1} border={selected ? 1 : 0}>
      {guessColors.map((color, i) => (
        <Fab
          key={i}
          color={color}
          disabled={!selected}
          onClick={() =>
            setGuessColor({ stateIndex: rowIndex, colorIndex: i, color: selectedColor })
          }
        />
      ))}
      <Grid item xs={1} textAlign="center">
        {selected && !guessColors.includes(undefined) ? (
          <IconButton onClick={handleDone}>
            <Done color="success" />
          </IconButton>
        ) : null}
      </Grid>
      <Grid xs={2} container>
        {guessResults.map((result, i) => (
          <Grid key={i} item xs={6}>
            {result === 'correct' && <Circle />}
            {result === 'incorrect' && <Cancel />}
            {result === 'partial' && <CircleOutlined />}
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
