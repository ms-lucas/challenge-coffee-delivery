import styled from "styled-components";

export const CoffeCardWrapper = styled.div`
    max-width: 16rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;
    align-items: center;

    background: ${props => props.theme.colors["base-card"]};

    border-radius: 6px 36px 6px 36px;
`

export const CoffeCardHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    margin-top: -2rem;

    img {
        width: 7.5rem;
    }
`

export const TagsWrapper = styled.div`
    max-width: 12rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    flex-wrap: wrap;
`

export const Tag = styled.span`

    padding: 4px 8px;

    color: ${props => props.theme.colors["yellow-dark"]};
    background: ${props => props.theme.colors["yellow-light"]};

    font-size: ${props => props.theme.fonts.size.tag};
    font-weight: ${props => props.theme.fonts.weight.bold};

    text-transform: uppercase;

    border-radius: 100px;
`

export const CoffeCardMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;


    h1 {
        color: ${props => props.theme.colors["base-subtitle"]};
        font-family: ${props => props.theme.fonts.family.title};
        font-size: ${props => props.theme.fonts.size["title-s"]};
    }

    p {
        text-align: center;
        color: ${props => props.theme.colors["base-label"]};
        font-size: ${props => props.theme.fonts.size["text-s"]};
    }

`
export const CoffeCardFooter = styled.footer`
    display: flex;
    align-items: center;
`

export const Price = styled.span`
    display: flex;
        align-items: center;
        gap: 4px;

        margin-right: 24px;
        
        color: ${props => props.theme.colors["base-text"]};
        font-size: ${props => props.theme.fonts.size["title-m"]};
        font-family: ${props => props.theme.fonts.family["title"]};
        font-weight: ${props => props.theme.fonts.weight["extra-bold"]};

        small {
            font-size: ${props => props.theme.fonts.size["text-s"]};
            font-family: ${props => props.theme.fonts.family["text"]};
            font-weight: ${props => props.theme.fonts.weight.regular};
        }
`

export const CartButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px;

    margin-left: 8px;

    border: none;
    border-radius: 6px;

    background: ${props => props.theme.colors["purple-dark"]};
    color: ${props => props.theme.colors["base-card"]};

    cursor: pointer;

    transition: background .1s;

    &:hover {
        background: ${props => props.theme.colors["purple"]};
    }
`