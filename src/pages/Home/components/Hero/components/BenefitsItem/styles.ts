import styled from "styled-components"

export const BenefitsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

const BACKGROUND_COLORS = {
    'yellow-dark': 'yellow-dark',
    'yellow': 'yellow',
    'gray': 'base-text',
    'purple': 'purple'
} as const

interface BenefitsIconProps {
    background: 'yellow-dark' | 'yellow' | 'gray' | 'purple'
}

export const BenefitsIcon = styled.span<BenefitsIconProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${props => props.theme.colors.background};
    background: ${props => props.theme.colors[BACKGROUND_COLORS[props.background]]};

    padding: 8px;
    border-radius: 100%;

    p {
        color: ${props => props.theme.colors["base-text"]};
    }
    
`