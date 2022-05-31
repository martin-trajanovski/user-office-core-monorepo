import { GetTemplateCategoriesQuery } from '@user-office-software-libs/shared-types';
import { useEffect, useState } from 'react';

import { useDataApi } from 'hooks/common/useDataApi';

export function useTemplateCategories(isArchived = false) {
  const api = useDataApi();
  const [categories, setCategories] = useState<
    NonNullable<GetTemplateCategoriesQuery['templateCategories']>
  >([]);
  useEffect(() => {
    api()
      .getTemplateCategories()
      .then((data) => {
        if (data.templateCategories) {
          setCategories(data.templateCategories);
        }
      });
  }, [api, isArchived]);

  return { categories, setCategories };
}
