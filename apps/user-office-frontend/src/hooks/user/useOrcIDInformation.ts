import { GetOrcIdInformationQuery } from '@user-office-software-libs/shared-types';
import { useEffect, useState } from 'react';

import { getUnauthorizedApi } from 'hooks/common/useDataApi';

export function useOrcIDInformation(authorizationCode?: string | null) {
  const [orcData, setOrcData] =
    useState<GetOrcIdInformationQuery['getOrcIDInformation']>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authorizationCode) {
      setOrcData(null);
      setLoading(false);

      return;
    }
    getUnauthorizedApi()
      .getOrcIDInformation({ authorizationCode })
      .then((data) => {
        setOrcData(data.getOrcIDInformation);
        setLoading(false);
      });
  }, [authorizationCode]);

  return { loading, orcData };
}
