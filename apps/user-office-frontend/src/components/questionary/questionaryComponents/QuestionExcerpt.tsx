import { Question } from '@user-office-software-libs/shared-types';
import React from 'react';

import TitledContainer from 'components/common/TitledContainer';

export function QuestionExcerpt({ question }: { question: Question }) {
  return (
    <TitledContainer label={'Question'}>{question.question}</TitledContainer>
  );
}
