/* eslint-disable @typescript-eslint/no-explicit-any */
import { Answer } from '@user-office-software-libs/shared-types';
import { FormikProps } from 'formik';

export interface BasicComponentProps {
  answer: Answer;
  formikProps: FormikProps<any>;
  onComplete: (newValue: Answer['value']) => void;
}
