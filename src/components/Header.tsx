
import { css, Theme, useTheme } from '@emotion/react'

const headerStyles = (theme: Theme) => css`
font-family: ${theme.fonts.primary};
background-color: ${theme.colors.primary};
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
border-radius: 8px;
header {
    width: 70%;
    margin: auto;
    display: flex;
}
ul {
    width: 100%;
    padding: 0;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    list-style-type: none;
}


ul li:hover {
    color: ${theme.colors.secondary};
  }
`
export function Header() {
    const theme = useTheme()
    return (
        <div css={headerStyles(theme)}>
            <header>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </header >
        </div>
    )
}