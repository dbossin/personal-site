import { css, Theme } from '@emotion/react'

export const globalStyles = (theme: Theme) => css`
header {
    font-family: ${theme.fonts.primary};
}
  
body {
    height: 100%;
    margin-top: 0;
    background-color: ${theme.colors.background};
}
main {
    height: 100%;
    background-color: ${theme.colors.background};
    display: flex;
}
`