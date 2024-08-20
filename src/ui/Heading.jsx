import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: bold;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: bold;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1.8rem;
    `}
`;

export default Heading;
