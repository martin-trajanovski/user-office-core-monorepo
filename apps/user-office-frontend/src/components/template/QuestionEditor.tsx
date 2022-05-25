import { Question, Template } from '@user-office-software-libs/shared-types';
import React from 'react';

import StyledModal from 'components/common/StyledModal';
import { createQuestionForm } from 'components/questionary/QuestionaryComponentRegistry';
import { Event, EventType } from 'models/questionary/QuestionaryEditorModel';

export default function QuestionEditor(props: {
  field: Question | null;
  dispatch: React.Dispatch<Event>;
  closeMe: () => void;
  template: Template;
}) {
  if (props.field === null) {
    return null;
  }

  return (
    <StyledModal onClose={props.closeMe} open={props.field != null}>
      {createQuestionForm({
        question: props.field,
        onUpdated: (question) => {
          props.dispatch({
            type: EventType.QUESTION_UPDATED,
            payload: question,
          });
        },
        onDeleted: (question) => {
          props.dispatch({
            type: EventType.QUESTION_DELETED,
            payload: question,
          });
        },
        closeMe: props.closeMe,
      })}
    </StyledModal>
  );
}
