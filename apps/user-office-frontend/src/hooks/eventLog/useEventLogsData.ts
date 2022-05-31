import { EventLog, User } from '@user-office-software-libs/shared-types';
import { useEffect, useState } from 'react';

import { useDataApi } from 'hooks/common/useDataApi';

export function useEventLogsData(eventType: string, changedObjectId: string) {
  const api = useDataApi();
  const [eventLogsData, setEventLogsData] = useState<EventLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    api()
      .getEventLogs({
        changedObjectId,
        eventType,
      })
      .then((data) => {
        if (cancelled) {
          return;
        }

        if (data.eventLogs) {
          setEventLogsData(
            data.eventLogs.map((eventLog) => {
              return {
                ...eventLog,
                changedBy: eventLog.changedBy as User,
              };
            })
          );
        }
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [eventType, changedObjectId, api]);

  return { loading, eventLogsData, setEventLogsData };
}
