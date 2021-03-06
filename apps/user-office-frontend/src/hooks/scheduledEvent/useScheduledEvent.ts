import { GetScheduledEventCoreQuery } from '@user-office-software-libs/shared-types';
import { useEffect, useState } from 'react';

import { useDataApi } from 'hooks/common/useDataApi';

export function useScheduledEvent(scheduledEventId: number) {
  const [scheduledEvent, setScheduledEvent] = useState<
    GetScheduledEventCoreQuery['scheduledEventCore'] | null
  >(null);

  const api = useDataApi();

  useEffect(() => {
    let unmounted = false;

    api()
      .getScheduledEventCore({ scheduledEventId })
      .then(({ scheduledEventCore }) => {
        if (unmounted) {
          return;
        }
        if (scheduledEventCore) {
          setScheduledEvent(scheduledEventCore);
        }
      });

    return () => {
      unmounted = true;
    };
  }, [api, scheduledEventId]);

  return { scheduledEvent, setScheduledEvent };
}
