import { GetGenericTemplatesWithQuestionaryStatusQuery } from '@user-office-software-libs/shared-types';

export type GenericTemplateCore = NonNullable<
  GetGenericTemplatesWithQuestionaryStatusQuery['genericTemplates']
>[number];
