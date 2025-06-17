import styled from "styled-components";

export const HeaderWrapper = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 10rem;

    div {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
`

export const ShoppingCartButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px;

    border: none;
    border-radius: 6px;

    position: relative;

    cursor: pointer;

    background: ${props => props.theme.colors["yellow-light"]};
    
    svg {
        color: ${props => props.theme.colors["yellow-dark"]};
    }

    span {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        color: ${props => props.theme.colors.white};
        background: ${props => props.theme.colors["yellow-dark"]};

        font-size: ${props => props.theme.fonts.size["text-xs"]};
        font-weight: ${props => props.theme.fonts.weight["bold"]};
    
        position: absolute;
        top: -5px;
        right: -5px;
        
        border-radius: 100%;

        position: absolute;
    }
`

export const LocationButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    padding: 8px;

    font-size: ${props => props.theme.fonts.size["text-s"]};

    background: ${props => props.theme.colors["purple-light"]};
    color: ${props => props.theme.colors["purple-dark"]};

    border: none;
    border-radius: 6px;

    svg {
        color: ${props => props.theme.colors["purple"]};
    }
`