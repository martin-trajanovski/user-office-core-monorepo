import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { DataType } from '@user-office-software-libs/shared-types';
import { multipleChoiceValidationSchema } from '@user-office-software-libs/validation';
import React from 'react';

import defaultRenderer from 'components/questionary/DefaultQuestionRenderer';
import MultipleChoiceSearchCriteriaComponent from 'components/questionary/questionaryComponents/MultipleChoice/MultipleChoiceSearchCriteriaComponent';

import { QuestionaryComponentDefinition } from '../../QuestionaryComponentRegistry';
import MultipleChoiceAnswerRenderer from './MultipleChoiceAnswerRenderer';
import { QuestionaryComponentMultipleChoice } from './QuestionaryComponentMultipleChoice';
import { QuestionMultipleChoiceForm } from './QuestionMultipleChoiceForm';
import { QuestionTemplateRelationMultipleChoiceForm } from './QuestionTemplateRelationMultipleChoiceForm';

export const multipleChoiceDefinition: QuestionaryComponentDefinition = {
  dataType: DataType.SELECTION_FROM_OPTIONS,
  name: 'Multiple choice',
  questionaryComponent: QuestionaryComponentMultipleChoice,
  questionForm: () => QuestionMultipleChoiceForm,
  questionTemplateRelationForm: () =>
    QuestionTemplateRelationMultipleChoiceForm,
  readonly: false,
  creatable: true,
  icon: <RadioButtonCheckedIcon />,
  renderers: {
    answerRenderer: MultipleChoiceAnswerRenderer,
    questionRenderer: defaultRenderer.questionRenderer,
  },
  createYupValidationSchema: multipleChoiceValidationSchema,
  getYupInitialValue: ({ answer }) => answer.value || [],
  searchCriteriaComponent: MultipleChoiceSearchCriteriaComponent,
};
