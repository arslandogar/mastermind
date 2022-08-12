import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { useState } from 'react';

export const Rules = () => {
  const [rulesExpanded, setRulesExpanded] = useState(false);
  return (
    <Accordion
      elevation={0}
      expanded={rulesExpanded}
      onChange={() => setRulesExpanded(!rulesExpanded)}
    >
      <AccordionSummary>
        <Typography>{`${rulesExpanded ? 'Hide' : 'Show'} Rules`}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Try to guess the pattern, in both order and color, within ten turns. After submitting a
          row, a small black peg is placed for each code peg from the guess which is correct in both
          color and position. A white peg indicates the existence of a correct color code peg placed
          in the wrong position.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
