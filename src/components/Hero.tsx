import { css, Theme, useTheme } from '@emotion/react'
import heroPhoto from '../../assets/images/hero.jpeg'

const heroStyles = (theme: Theme) => css`
background-color: ${theme.colors.background};
font-family: ${theme.fonts.primary};
width: 100%;
text-align: center;

h1 {
    font-weight: 1000;
    margin-bottom: 0;
}

img {
    display: block;
    margin: auto;
    max-width: 600px;
    @media (max-width: 768px) {
        max-width: 100%;
        margin-top: 30px; /* Optional: reduce spacing for smaller screens */
    }
}
`

export function Hero() {
    const theme = useTheme()
    return (
        <div className="Hero" css={heroStyles(theme)}>
            <h1>Hi, I'm Davy</h1>
            <p>I'm a passionate software engineer with a focus on full-stack web development.</p>
            <img src={heroPhoto} />
        </div>
    )
}
