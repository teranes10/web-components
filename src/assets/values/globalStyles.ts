import { css } from "lit";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    font-family: var(--font-family, "Oxygen", sans-serif);
    font-weight: var(--font-weight, 400);
    font-style: var(--font-style, normal);
  }
`;
