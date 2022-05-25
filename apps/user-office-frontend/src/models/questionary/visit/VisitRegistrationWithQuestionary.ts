import { GetVisitRegistrationQuery } from '@user-office-software-libs/shared-types';

export type RegistrationWithQuestionary = NonNullable<
  GetVisitRegistrationQuery['visitRegistration']
>;
