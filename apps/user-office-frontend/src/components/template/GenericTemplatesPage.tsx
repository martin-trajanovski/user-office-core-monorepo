import React from 'react';

import SimpleTabs from 'components/common/TabPanel';
import { TemplateGroupId } from 'generated/sdk';
import { StyledContainer, StyledPaper } from 'styles/StyledComponents';

import DefaultTemplatesTable from './DefaultTemplatesTable';
import { TemplateRowDataType } from './TemplatesTable';

export default function GenericTemplatesPage() {
  const templateGroup = TemplateGroupId.GENERIC_TEMPLATE;
  const itemCountLabel = '# templates';
  const isRowRemovable = (rowData: TemplateRowDataType) =>
    rowData.questionaryCount === 0;

  return (
    <StyledContainer>
      <StyledPaper>
        <SimpleTabs tabNames={['Current', 'Archived']}>
          <DefaultTemplatesTable
            templateGroup={templateGroup}
            itemCountLabel={itemCountLabel}
            isArchived={false}
            isRowRemovable={isRowRemovable}
          />
          <DefaultTemplatesTable
            templateGroup={templateGroup}
            itemCountLabel={itemCountLabel}
            isArchived={true}
            isRowRemovable={isRowRemovable}
          />
        </SimpleTabs>
      </StyledPaper>
    </StyledContainer>
  );
}
