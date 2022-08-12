import { Backdrop, Box, Button, Fade, Modal, Typography } from '@mui/material';

import { useGameStore } from '@/stores';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  boxShadow: 24,
  p: 2,
  textAlign: 'center',
  borderRadius: 4,
  color: '#fff',
};

export const GameOverModal = () => {
  const gameState = useGameStore((state) => state.gameState);
  const resetGame = useGameStore((state) => state.resetGame);

  const open = gameState !== 'playing';

  const message = gameState === 'won' ? 'Congratulations!' : 'Game Over!';
  const color = gameState === 'won' ? 'success' : 'error';

  return (
    <Modal
      open={open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box bgcolor={`${color}.main`} sx={style}>
          <Typography variant="h4">{message}</Typography>
          <Button onClick={resetGame} variant="contained" color="white" sx={{ mt: 2 }}>
            Play Again
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};
