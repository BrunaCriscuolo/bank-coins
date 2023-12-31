import { styled } from "styled-components";
import * as RadioGroup from '@radix-ui/react-radio-group';

export const RadioButtonGroupForm = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;
`;