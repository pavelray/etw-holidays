import css from "styled-jsx/css";

const style = css`
  .review-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vmin;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: linear-gradient(
        rgba(0, 0, 0, 0.45) 0%,
        rgba(0, 0, 0, 0.45) 100%
      ),
      url("https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80");
  }
  .review{
    background-color: rgba(22, 22, 22, 0.5);
    padding: 5px;
    color: #fff;
    width: 80vmin;
    text-align: center;
  }
`;

export { style };
