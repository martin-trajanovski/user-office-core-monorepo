import { GetSamplesWithProposalDataQuery } from '@user-office-software-libs/shared-types';

export type SampleWithProposalData = NonNullable<
  GetSamplesWithProposalDataQuery['samples']
>[number];
