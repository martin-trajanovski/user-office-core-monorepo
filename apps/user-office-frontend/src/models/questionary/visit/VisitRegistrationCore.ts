import { GetUserProposalBookingsWithEventsQuery } from '@user-office-software-libs/shared-types';

export type VisitRegistrationCore = NonNullable<
  NonNullable<
    NonNullable<
      NonNullable<GetUserProposalBookingsWithEventsQuery['me']>['proposals']
    >[0]['proposalBookingCore']
  >['scheduledEvents'][0]['visit']
>['registrations'][0];
