import {
  Proposal,
  Maybe,
  Call,
  Questionary,
  SampleFragment,
  GenericTemplateFragment,
} from '@user-office-software-libs/shared-types';

export type ProposalWithQuestionary = Pick<
  Proposal,
  | 'primaryKey'
  | 'abstract'
  | 'proposer'
  | 'questionary'
  | 'status'
  | 'users'
  | 'title'
  | 'proposalId'
  | 'callId'
  | 'questionaryId'
  | 'submitted'
> & { call?: Maybe<Pick<Call, 'isActive' | 'referenceNumberFormat'>> } & {
  samples: Maybe<
    (SampleFragment & { questionary: Pick<Questionary, 'isCompleted'> })[]
  >;
} & {
  genericTemplates: Maybe<
    (GenericTemplateFragment & {
      questionary: Pick<Questionary, 'isCompleted'>;
    })[]
  >;
};
