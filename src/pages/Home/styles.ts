import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: var(--mint);
    font-size: 38px;
  }
  h2 {
    font-size: 20px;
    color: var(--secondary);
  }
  h3 {
    color: var(--secondary);
    font-size: 14px;
  }
`;

export const Options = styled.div`
  display: flex;
  margin: 5% auto;
  a {
    margin: 2%;
    text-decoration: none;
    text-align: center;
    width: 150px;
    border-radius: 8px;
    background-color: var(--bright);
    padding: 2%;
  }
`;

export const Waves = styled.img`
  position: absolute;
  background-repeat: repeat;
  top: 0;
  z-index: -1;
`;

export const Logo = styled.img`
`;
