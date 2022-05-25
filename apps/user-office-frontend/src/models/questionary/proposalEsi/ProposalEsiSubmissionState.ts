import { Questionary } from '@user-office-software-libs/shared-types';
import { TemplateGroupId } from '@user-office-software-libs/shared-types';
import { immerable } from 'immer';

import { QuestionarySubmissionState } from '../QuestionarySubmissionState';
import { ProposalEsiWithQuestionary } from './ProposalEsiWithQuestionary';

export class ProposalEsiSubmissionState extends QuestionarySubmissionState {
  [immerable] = true;
  constructor(public esi: ProposalEsiWithQuestionary) {
    super(TemplateGroupId.PROPOSAL_ESI, esi);
    this.stepIndex = this.getInitialStepIndex();
  }

  getItemId(): number {
    return this.esi.id;
  }

  get itemWithQuestionary() {
    return this.esi;
  }

  set itemWithQuestionary(item: { questionary: Questionary }) {
    this.esi = { ...this.esi, ...item };
  }
}
