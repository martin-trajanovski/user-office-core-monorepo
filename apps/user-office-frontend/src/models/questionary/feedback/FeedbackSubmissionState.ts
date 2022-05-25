import {
  Questionary,
  TemplateGroupId,
} from '@user-office-software-libs/shared-types';
import { immerable } from 'immer';

import { QuestionarySubmissionState } from '../QuestionarySubmissionState';
import { FeedbackWithQuestionary } from './FeedbackWithQuestionary';

export class FeedbackSubmissionState extends QuestionarySubmissionState {
  [immerable] = true;
  constructor(public feedback: FeedbackWithQuestionary) {
    super(TemplateGroupId.FEEDBACK, feedback);
    this.stepIndex = this.getInitialStepIndex();
  }

  getItemId(): number {
    return this.feedback.id;
  }

  get itemWithQuestionary() {
    return this.feedback;
  }

  set itemWithQuestionary(item: { questionary: Questionary }) {
    this.feedback = { ...this.feedback, ...item };
  }
}
