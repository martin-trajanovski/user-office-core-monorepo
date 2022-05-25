import { TextField, AutocompleteProps, Autocomplete } from '@mui/material';
import { Institution } from '@user-office-software-libs/shared-types';
import React from 'react';

interface InstitutionSelectProps
  extends Omit<
    AutocompleteProps<Institution, undefined, undefined, undefined>,
    'options' | 'renderInput'
  > {
  institutions: Institution[];
  onInstitutionSelected: (institution: Institution | null) => void;
  label: string;
}

const InstitutionSelect = (props: InstitutionSelectProps) => {
  const { institutions, onInstitutionSelected, label, ...selectProps } = props;

  return (
    <Autocomplete
      {...selectProps}
      options={institutions}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField {...params} label={label} margin="none" />
      )}
      onChange={(_event, newValue) => {
        onInstitutionSelected(newValue);
      }}
      value={props.value}
      style={{ marginTop: '16px' }}
    ></Autocomplete>
  );
};

export default InstitutionSelect;
