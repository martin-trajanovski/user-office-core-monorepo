import Typography from '@mui/material/Typography';
import { UnitsImportWithValidation } from '@user-office-software-libs/shared-types';
import React from 'react';
import { UnitMergeReview } from 'units/UnitMergeReview';

import { SelectImportFile } from 'components/common/SelectImportFile';
import { StyledContainer, StyledPaper } from 'styles/StyledComponents';
import useDataApiWithFeedback from 'utils/useDataApiWithFeedback';

export const getFileContents = async (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      resolve(reader.result as string);
    };
  });
};

export default function ImportUnitsPage() {
  const { api } = useDataApiWithFeedback();
  const [validationResult, setValidationResult] =
    React.useState<UnitsImportWithValidation | null>(null);

  const handleFileSelect = async (json: string) => {
    api()
      .validateUnitsImport({ unitsAsJson: json })
      .then(({ validateUnitsImport }) => {
        const result = validateUnitsImport.validationResult;
        if (result) {
          setValidationResult(result);
        }
      });
  };

  return (
    <StyledContainer>
      <StyledPaper>
        <Typography variant="h5" component="h5">
          Import units
        </Typography>
        {validationResult ? (
          <UnitMergeReview
            data={validationResult}
            onBack={() => setValidationResult(null)}
          />
        ) : (
          <SelectImportFile onFileSelected={handleFileSelect} />
        )}
      </StyledPaper>
    </StyledContainer>
  );
}
