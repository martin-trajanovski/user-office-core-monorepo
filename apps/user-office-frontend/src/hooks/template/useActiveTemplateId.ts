import { TemplateGroupId } from '@user-office-software-libs/shared-types';
import { useEffect, useState } from 'react';

import { useDataApi } from 'hooks/common/useDataApi';

export function useActiveTemplateId(templateGroupId: TemplateGroupId) {
  const api = useDataApi();
  const [activeTemplateId, setActiveTemplateId] = useState<
    number | null | undefined
  >(undefined);
  useEffect(() => {
    api()
      .getActiveTemplateId({ templateGroupId })
      .then((data) => {
        setActiveTemplateId(data.activeTemplateId);
      });
  }, [api, templateGroupId]);

  return { activeTemplateId, setActiveTemplateId };
}
