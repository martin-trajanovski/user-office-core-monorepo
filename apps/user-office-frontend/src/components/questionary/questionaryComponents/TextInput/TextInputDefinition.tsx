import ShortTextIcon from '@mui/icons-material/ShortText';
import { DataType } from '@user-office-software-libs/shared-types';
import { textInputQuestionValidationSchema } from '@user-office-software-libs/validation';
import React from 'react';

import defaultRenderer from 'components/questionary/DefaultQuestionRenderer';
import { QuestionaryComponentDefinition } from 'components/questionary/QuestionaryComponentRegistry';

import { QuestionaryComponentTextInput } from './QuestionaryComponentTextInput';
import { QuestionTemplateRelationTextInputForm } from './QuestionTemplateRelationTextInputForm';
import { QuestionTextInputForm } from './QuestionTextInputForm';
import TextSearchCriteriaComponent from './TextSearchCriteriaComponent';

export const textInputDefinition: QuestionaryComponentDefinition = {
  dataType: DataType.TEXT_INPUT,
  name: 'Text Input',
  questionaryComponent: QuestionaryComponentTextInput,
  questionForm: () => QuestionTextInputForm,
  questionTemplateRelationForm: () => QuestionTemplateRelationTextInputForm,
  readonly: false,
  creatable: true,
  icon: <ShortTextIcon />,
  renderers: defaultRenderer,
  createYupValidationSchema: textInputQuestionValidationSchema,
  getYupInitialValue: ({ answer }) => answer.value || '',
  searchCriteriaComponent: TextSearchCriteriaComponent,
};
