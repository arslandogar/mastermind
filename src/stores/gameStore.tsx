import create from 'zustand';

import { Color } from '@/types';
import { allowedAttempts, colors } from '@/utils/constants';

type GameState = 'playing' | 'won' | 'lost';
type GuessResult = 'pending' | 'correct' | 'incorrect' | 'partial';

interface GameStore {
  challenge: Color[];
  selectedColor: Color;
  currentRound: number;
  gameState: GameState;
  guessState: Array<{
    colors: Array<undefined | Color>;
    results: Array<GuessResult>;
  }>;

  setGuessColor(arg: { stateIndex: number; colorIndex: number; color: Color }): void;
  setGuessResult(arg: { stateIndex: number; resultIndex: number; result: GuessResult }): void;
  setSelectedColor: (color: Color) => void;
  nextRound: () => void;
  resetGame: () => void;
}

const getChallenge = () =>
  new Array(4).fill(null).map(() => colors[Math.floor(Math.random() * colors.length)]);

const getInitialState = () => ({
  challenge: getChallenge(),
  selectedColor: colors[0],
  currentRound: 0,
  gameState: 'playing' as GameState,
  guessState: new Array(allowedAttempts).fill({
    colors: new Array(4).fill(undefined),
    results: new Array(4).fill('pending'),
  }),
});

export const useGameStore = create<GameStore>((set) => ({
  ...getInitialState(),

  setGuessColor: ({ stateIndex, colorIndex, color }) =>
    set((state) =>
      updateGuessState({
        guessState: state.guessState,
        stateIndex,
        valueIndex: colorIndex,
        newValue: color,
        valueKey: 'colors',
      })
    ),
  setGuessResult: ({ stateIndex, resultIndex, result }) =>
    set((state) =>
      updateGuessState({
        guessState: state.guessState,
        stateIndex,
        valueIndex: resultIndex,
        newValue: result,
        valueKey: 'results',
      })
    ),
  setSelectedColor: (selectedColor) => set({ selectedColor }),
  resetGame: () => set(getInitialState()),
  nextRound: () =>
    set((state) => {
      const currentRound = state.currentRound;
      const currentRoundResults = state.guessState[currentRound].results;
      if (currentRoundResults.every((result) => result === 'correct')) {
        return { gameState: 'won' };
      } else if (currentRound >= allowedAttempts - 1) {
        return { gameState: 'lost' };
      }
      return { currentRound: currentRound + 1 };
    }),
}));

const updateGuessState = ({
  guessState,
  stateIndex,
  valueIndex,
  newValue,
  valueKey,
}: {
  guessState: GameStore['guessState'];
  stateIndex: number;
  valueIndex: number;
  newValue: Color | GuessResult;
  valueKey: 'colors' | 'results';
}) => {
  return {
    guessState: guessState.map((oldState, i) => {
      if (stateIndex === i) {
        return {
          ...oldState,
          [valueKey]: oldState[valueKey].map((oldValue, i) =>
            i === valueIndex ? newValue : oldValue
          ),
        };
      }
      return oldState;
    }),
  };
};
