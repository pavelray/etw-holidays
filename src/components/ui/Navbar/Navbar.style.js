import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/mixins";

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    background-color: rgba(233, 230, 218);
    width: 100%;
    z-index: 1;
    top: 0px;

    ul {
      list-style: none;
      display: flex;
      justify-content: space-evenly;
      width: 25%;
      margin-bottom: 0;
      font-family: Lusitana, Georgia, serif;

      @include mobile {
        display: none;
      }
      @include mobile-landscape {
        display: none;
      }
      @include tablet {
        display: none;
      }
    }
    .active {
      color: #2a3990;
      border-bottom: 2px solid #2a3990;
    }

    .hamburger-icon {
      display: none;
      background: none;
      border: none;

      @include mobile {
        display: flex;
        margin-right: 5px;
        color: #2a3990;
        span {
          font-size: 35px;
        }
      }
      @include mobile-landscape {
        display: flex;
        margin-right: 5px;
        color: #2a3990;
        span {
          font-size: 35px;
        }
      }
      @include tablet {
        display: flex;
        margin-right: 5px;
        color: #2a3990;
        span {
          font-size: 35px;
        }
      }
    }
  }

  .logo-container {
    display: flex;
    flex: 2;
    width: 75%;
    margin-left: 1rem;
    align-items: center;
    margin-left: 5rem;
    gap: 15px;
    font-family: Lusitana, Georgia, serif;
    color: #2a3990;

    @include mobile {
      margin-left: 1rem;
    }
    @include mobile-landscape {
      margin-left: 1rem;
    }
    @include tablet {
      margin-left: 1rem;
    }

    .logo {
      object-fit: cover;
      padding: 0.2rem 0;
    }
  }

  /* Menu mobile */
  .mobile {
    display: block;
    overflow: hidden;
    height: 0px;
    width: 100%;
    z-index: 2;
    position: fixed;
    top: 18vmin;
    transition: all 0.4s ease-out, background 1s ease-out;
    background-color: rgba(233, 230, 218);
    color: #2a3990;

    &-menu {
      clear: both;
    }
  }
  .mobile.menu-open {
    height: 100%;
    transition: all 0.45s ease-out, background 0.8s ease-out;
  }

  /* Menu List items */
  .mobile ul.menu {
    position: relative;
    display: block;
    padding: 4rem 40px 0;
    list-style: none;
  }

  .mobile ul.menu li.menu-item {
    border-bottom: 2px solid #2a3990;
    margin-top: 5px;
    opacity: 0;
    transition: opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99),
      -webkit-transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99);
    transition: transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99),
      opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99);
    transition: transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99),
      opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99),
      -webkit-transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  }
  .mobile ul.menu li.menu-item:nth-child(1) {
    transition-delay: 0.35s;
  }
  .mobile ul.menu li.menu-item:nth-child(2) {
    transition-delay: 0.3s;
  }
  .mobile ul.menu li.menu-item:nth-child(3) {
    transition-delay: 0.25s;
  }
  .mobile ul.menu li.menu-item:nth-child(4) {
    transition-delay: 0.2s;
  }
  .mobile ul.menu li.menu-item:nth-child(5) {
    transition-delay: 0.15s;
  }
  .mobile ul.menu li.menu-item:nth-child(6) {
    transition-delay: 0.1s;
  }
  .mobile ul.menu li.menu-item:nth-child(7) {
    transition-delay: 0.05s;
  }
  .mobile.menu-open ul.menu li.menu-item {
    opacity: 1;
  }
  .mobile.menu-open ul.menu li.menu-item:nth-child(1) {
    transition-delay: 0.05s;
  }
  .mobile.menu-open ul.menu li.menu-item:nth-child(2) {
    transition-delay: 0.1s;
  }
  .mobile.menu-open ul.menu li.menu-item:nth-child(3) {
    transition-delay: 0.15s;
  }
  .mobile.menu-open ul.menu li.menu-item:nth-child(4) {
    transition-delay: 0.2s;
  }
  .mobile.menu-open ul.menu li.menu-item:nth-child(5) {
    transition-delay: 0.25s;
  }
  .mobile.menu-open ul.menu li.menu-item:nth-child(6) {
    transition-delay: 0.3s;
  }
  .mobile.menu-open ul.menu li.menu-item:nth-child(7) {
    transition-delay: 0.35s;
  }
`;

export { style };
