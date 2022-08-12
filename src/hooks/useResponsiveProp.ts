import { Breakpoint, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

type ResponsiveValue<T> = {
  [P in Breakpoint]?: T;
};
export const useResponsiveProp = <PropValue>(responsiveValue: ResponsiveValue<PropValue>) => {
  const width = useWidth();
  const theme = useTheme();
  const keys: readonly Breakpoint[] = [...theme.breakpoints.keys];

  keys.reduce((lastNonNullValue, key) => {
    if (!responsiveValue[key]) {
      responsiveValue[key] = lastNonNullValue;
      return lastNonNullValue;
    }
    return responsiveValue[key];
  }, responsiveValue[keys[0]]);

  return responsiveValue[width];
};

type BreakpointOrNull = Breakpoint | null;

const useWidth = () => {
  const theme = useTheme();
  const keys: readonly Breakpoint[] = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
};
