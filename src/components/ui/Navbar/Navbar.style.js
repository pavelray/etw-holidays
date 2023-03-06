import css from "styled-jsx/css";

const style = css`
  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 0;
    align-items: center;
    position: fixed;
    background-color: rgba(233, 230, 218);
    width: 100%;
    z-index: 1;
    margin-bottom: 1rem;
    top: 0px;

    ul {
      list-style: none;
      display: flex;
      justify-content: space-evenly;
      width: 25%;
      margin-bottom: 0;
      font-family: Lusitana, Georgia, serif;
    }
    .active {
      color: #2A3990;
      border-bottom: 2px solid #2A3990;
    }
  }

  .logo-container {
    display: flex;
    flex: 2;
    width: 75%;
    margin-left: 1rem;
    align-items: center;
    margin-left: 5rem;
    font-weight: 400;
    font-size: 1.5rem;
    gap: 15px;
    font-family: Lusitana, Georgia, serif;
    color: #2A3990;
  }

  .logo{
    border-radius: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

export { style };
