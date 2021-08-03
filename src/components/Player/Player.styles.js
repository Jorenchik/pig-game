import styled from "styled-components";

export const Content = styled.div`
  flex: 50%;
  padding: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.75s;

  ${(props) =>
    props.currentPlayer
      ? `
      background-color: rgba(255, 255, 255, 0.4);
      .name {
        font-weight: 700;
      }

      .score {
        font-weight: 400 !important;
      }

      .current {
        opacity: 1 !important;
      }`
      : ``};

  .name {
    position: relative;
    font-size: 4rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    word-spacing: 2px;
    font-weight: 300;
    margin-bottom: 1rem;
  }

  .score {
    font-size: 8rem;
    font-weight: 300;
    color: #c7365f;
    margin-bottom: auto;
  }

  .current {
    background-color: #c7365f;
    opacity: 0.8;
    border-radius: 9px;
    color: #fff;
    width: 65%;
    padding: 2rem;
    text-align: center;
    transition: all 0.75s;
  }

  .current-label {
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-size: 1.7rem;
    color: #ddd;
  }

  .current-score {
    font-size: 3.5rem;
  }

  ${(props) =>
    props.winner
      ? `
  background-color: #2f2f2f;
  .name {
    font-weight: 700;
    color: #c7365f;
  }
  `
      : ``};
`;
