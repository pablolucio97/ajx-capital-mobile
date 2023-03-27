import React from 'react';
import { Dot, RadioContainer } from './styles';

type DotProps = {
  checked: boolean;
};

export function RadioButton({ checked }: DotProps) {
  return (
    <RadioContainer>
      <Dot isChecked={checked} />
    </RadioContainer>
  );
}
