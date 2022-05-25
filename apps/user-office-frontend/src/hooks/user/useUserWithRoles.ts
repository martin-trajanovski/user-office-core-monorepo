import {
  GetUserWithRolesQuery,
  GetUserWithRolesQueryVariables,
} from '@user-office-software-libs/shared-types';
import { useEffect, useState } from 'react';

import { useDataApi } from 'hooks/common/useDataApi';

export function useUserWithRolesData({ id }: GetUserWithRolesQueryVariables) {
  const api = useDataApi();
  const [userData, setUserData] = useState<GetUserWithRolesQuery['user']>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unmounted = false;

    setLoading(true);
    api()
      .getUserWithRoles({ id })
      .then((data) => {
        if (unmounted) {
          return;
        }

        setUserData(data.user);
        setLoading(false);
      });

    return () => {
      unmounted = true;
    };
  }, [id, api]);

  return { loading, userData, setUserData } as const;
}
