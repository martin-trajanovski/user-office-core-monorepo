import { GetSamplesWithQuestionaryStatusQuery } from '@user-office-software-libs/shared-types';

export type SampleCore = NonNullable<
  GetSamplesWithQuestionaryStatusQuery['samples']
>[number];
