import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { setColor } from "./color";

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: ${setColor.bgColor};
        padding: 3%;
        color: ${setColor.textColor};
        letter-spacing: -1px;
    }

    body > div {
        display: flex;
        height: 100%;
        width: 100%;
    }

    a {
        text-decoration: none;
        color: ${setColor.textColor};
    }
`;
