import { QuestionaryStep } from '@user-office-software-libs/shared-types';
import { useEffect, useState } from 'react';

import { useDataApi } from 'hooks/common/useDataApi';

export function useBlankQuestionaryStepsData(
  templateId: number | undefined | null
) {
  const [questionarySteps, setQuestionarySteps] = useState<
    QuestionaryStep[] | null
  >(null);
  const [loading, setLoading] = useState(true);

  const api = useDataApi();

  useEffect(() => {
    if (!templateId) {
      return;
    }
    api()
      .getBlankQuestionarySteps({ templateId })
      .then((data) => {
        setQuestionarySteps(data.blankQuestionarySteps);
        setLoading(false);
      });
  }, [templateId, api]);

  return { loading, questionarySteps };
}
