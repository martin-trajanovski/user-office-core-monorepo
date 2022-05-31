import { PageName } from '@user-office-software-libs/shared-types';
import parse from 'html-react-parser';
import React from 'react';

import { useGetPageContent } from 'hooks/admin/useGetPageContent';
import { StyledContainer } from 'styles/StyledComponents';

const LoginHelpPage: React.FC = () => {
  const [loadingPage, pageContent] = useGetPageContent(PageName.LOGINHELPPAGE);

  return (
    <StyledContainer>{loadingPage ? null : parse(pageContent)}</StyledContainer>
  );
};

export default LoginHelpPage;
