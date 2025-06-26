import styled from "styled-components";

export const InputWrapper = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    background: ${props => props.theme.colors["base-button"]};
    color: ${props => props.theme.colors["base-title"]};
    
    border-radius: 6px;

    padding: 8px;

`

export const QuantityText = styled.span`
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${props => props.theme.fonts.family.text};
    font-weight: ${props => props.theme.fonts.weight.regular};
    font-size:  ${props => props.theme.fonts.size["text-m"]};
`

export const StepperButton = styled.button`
  background: transparent;
  border: none;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  svg {
    color: ${props => props.theme.colors.purple};
  }
`;

export const DecrementButton = styled(StepperButton)`
    svg {
         &:hover {
            color: ${props => props.theme.colors["purple-dark"]};
        }
     }
`;
export const IncrementButton = styled(StepperButton)`
     svg {
         &:hover {
            color: ${props => props.theme.colors["purple-dark"]};
        }
     }
`;