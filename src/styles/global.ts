import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
     * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors['base-text']};
        -webkit-font-smoothing: antialiased;

    }
    
    body, input, textarea, button {
        font-family: ${props => props.theme.fonts.family.text}, sans-serif;
        font-weight: ${props => props.theme.fonts.weight.regular};
        font-size: ${props => props.theme.fonts.size['text-m']};
    }
`