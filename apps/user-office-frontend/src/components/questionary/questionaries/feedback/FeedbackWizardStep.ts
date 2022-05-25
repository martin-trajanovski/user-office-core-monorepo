import { FeedbackStatus } from '@user-office-software-libs/shared-types';

import { QuestionaryWizardStep } from 'components/questionary/DefaultWizardStepFactory';
import { FeedbackSubmissionState } from 'models/questionary/feedback/FeedbackSubmissionState';
import { QuestionarySubmissionState } from 'models/questionary/QuestionarySubmissionState';

export class FeedbackWizardStep extends QuestionaryWizardStep {
  isItemWithQuestionaryEditable(state: QuestionarySubmissionState): boolean {
    const registrationState = state as FeedbackSubmissionState;

    return registrationState.feedback.status === FeedbackStatus.DRAFT;
  }
}
