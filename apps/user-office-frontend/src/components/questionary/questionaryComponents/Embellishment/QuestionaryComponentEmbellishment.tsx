import { EmbellishmentConfig } from '@user-office-software-libs/shared-types';
import React from 'react';

import { BasicComponentProps } from 'components/proposal/IBasicComponentProps';

export function QuestionaryComponentEmbellishment(props: BasicComponentProps) {
  const config = props.answer.config as EmbellishmentConfig;

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: config.html,
      }}
    ></div>
  );
}
