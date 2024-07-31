import { FC } from 'react';
import ComponentText from '@Constants/ComponentText';
import CmdOptions from '@Constants/CmdOptions';
import Button from '@Commons/Button/Button';
import CustomLink from '@Commons/CustomLink/CustomLink';
import {
  StyledButtonGroupContainer,
  StyledButtonContainer,
  StyledAddCancelButtonContainer,
} from '@Commons/Button/FieldButtonGroup.styles';

type ButtonComponentProps = {
  handleFormState(cmd: string, toggle?: boolean, status?: string): void;
};

const CalculationButtonGroup: FC<ButtonComponentProps> = ({ handleFormState }) => (
  <StyledButtonGroupContainer formCalc>
    <StyledAddCancelButtonContainer>
      <StyledButtonContainer>
        <Button
          type="button"
          size="lg"
          disabled={false}
          actions="secondary"
          text={ComponentText.BACK}
          handleClick={() => handleFormState(CmdOptions.BACKWARDS)}
        />
      </StyledButtonContainer>
      <StyledButtonContainer>
        <CustomLink
          path="/export"
          size="lg"
          text="Finish"
        />
      </StyledButtonContainer>
    </StyledAddCancelButtonContainer>
  </StyledButtonGroupContainer>
);

export default CalculationButtonGroup;