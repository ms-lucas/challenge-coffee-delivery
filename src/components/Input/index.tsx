import type { InputHTMLAttributes } from "react";
import { Minus, Plus } from 'phosphor-react';
import { DecrementButton, IncrementButton, InputWrapper, QuantityText } from "./styles";

interface BaseProps extends InputHTMLAttributes<HTMLInputElement> {
    variant: 'text' | 'radio';
};

interface NumberProps extends InputHTMLAttributes<HTMLInputElement> {
    variant: 'number';
    quantity: number;
    onIncrementValue: () => void;
    onDecrementValue: () => void;
};

type InputProps = BaseProps | NumberProps;

export function Input(props: InputProps) {
    const { variant } = props;

    if (variant === 'number') {
        const { quantity, onIncrementValue, onDecrementValue, ...rest } = props;

        return (
            <InputWrapper>
                <DecrementButton type="button" onClick={onDecrementValue}>
                        <Minus size={14} />
                </DecrementButton>
                <QuantityText>{quantity}</QuantityText>
                <IncrementButton type="button" onClick={onIncrementValue}>
                    <Plus size={14} />
                </IncrementButton>
                <input type="hidden" {...rest} />
            </InputWrapper>
        );
    }

    if (variant === 'radio') {
        return <input type="radio" {...props} />;
    }

    return <input type="text" {...props} />;
}
