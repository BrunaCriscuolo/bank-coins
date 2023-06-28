import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean }>`
* {
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
:focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme["yellow-500"]};
}
body{
    background-color: ${({ theme }) => theme["gray-600"]};
    color: ${({ theme }) => theme["gray-300"]};
}
body, input, button {
    font: 400 1rem "Roboto", sans-serif;
}
`;
