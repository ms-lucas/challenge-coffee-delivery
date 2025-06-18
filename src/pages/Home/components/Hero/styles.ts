import styled from "styled-components";

export const HeroWrapper = styled.section`
    max-width:  70ren;
    display: flex;
    justify-content: space-between;
    gap: 3.5rem;
    
`

export const HeroContentWrapper = styled.div`
 display: flex;
 flex-direction: column;
 gap: 4.125rem;
`

export const HeadlineWrapper = styled.div `
    max-width: 36.75rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
        font-family: ${props => props.theme.fonts.family.title};
        font-size: ${props => props.theme.fonts.size["title-xl"]};
        font-weight: ${props => props.theme.fonts.weight["extra-bold"]};

        color: ${props => props.theme.colors["base-title"]};
    }

    P {
        font-size: ${props => props.theme.fonts.size["text-l"]};
        color: ${props => props.theme.colors["base-subtitle"]};
    }
`

export const BenefitsSectionWrapper = styled.div`
    gap: 20px 40px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`
