import { Unit } from '@user-office-software-libs/shared-types';
import React from 'react';

import { AnswerRenderer } from 'components/questionary/QuestionaryComponentRegistry';

const NumberInputAnswerRenderer: AnswerRenderer = (answer) => {
  if (!answer.value.value) {
    return <span>Left blank</span>;
  }

  const value = answer.value.value;
  const symbol = (answer.value.unit as Unit)?.symbol;

  return (
    <span>
      {value} {symbol ?? ''}
    </span>
  );
};

export default NumberInputAnswerRenderer;
