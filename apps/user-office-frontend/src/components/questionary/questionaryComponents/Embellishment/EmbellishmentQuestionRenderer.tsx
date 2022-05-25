import { EmbellishmentConfig } from '@user-office-software-libs/shared-types';
import React from 'react';

import { QuestionRenderer } from 'components/questionary/QuestionaryComponentRegistry';

const EmbellisgmentQuestionRenderer: QuestionRenderer = ({ config }) => (
  <span>{(config as EmbellishmentConfig).plain}</span>
);

export default EmbellisgmentQuestionRenderer;
