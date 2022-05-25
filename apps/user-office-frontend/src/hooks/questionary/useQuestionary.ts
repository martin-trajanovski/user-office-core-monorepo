import { GetQuestionaryQuery } from '@user-office-software-libs/shared-types';
import { useEffect, useState } from 'react';

import { useDataApi } from 'hooks/common/useDataApi';

export function useQuestionary(questionaryId: number) {
  const [loadingQuestionary, setLoadingQuestionary] = useState<boolean>(true);
  const [questionary, setQuestionary] =
    useState<GetQuestionaryQuery['questionary']>(null);

  const api = useDataApi();

  useEffect(() => {
    let unmounted = false;

    setLoadingQuestionary(true);
    api()
      .getQuestionary({ questionaryId })
      .then((data) => {
        if (unmounted) {
          return;
        }

        if (data.questionary) {
          setQuestionary(data.questionary);
        }
        setLoadingQuestionary(false);
      });

    return () => {
      unmounted = true;
    };
  }, [api, questionaryId]);

  return { questionary, loadingQuestionary };
}
