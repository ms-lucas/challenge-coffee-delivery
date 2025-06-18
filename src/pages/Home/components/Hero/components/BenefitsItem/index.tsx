import type { IconProps } from "phosphor-react";
import { BenefitsIcon, BenefitsWrapper } from "./styles";
import type { ComponentType, } from "react";

interface BenefitsItemProps {
    Icon: ComponentType<IconProps>,
    text: string,
    background: 'yellow-dark' | 'yellow' | 'gray' | 'purple'
}

export function BenefitsItem({ Icon, text, background }: BenefitsItemProps) {
    return (
        <BenefitsWrapper>
            <BenefitsIcon background={background}>
                <Icon size={16} weight='fill' />
            </BenefitsIcon>
            <p>{ text }</p>
        </BenefitsWrapper>
    )
}