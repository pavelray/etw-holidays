import css from "styled-jsx/css";

export const style = css`
  .carousel-container {
  }

  .slide-container {
    position: relative;
    overflow: hidden;
    max-height: 110vmin;
  }

  .slide {
    display: flex;
    transition-property: transform;
    transition-timing-function: ease-out;
    transition-duration: 500ms;
  }

  .slide-image {
    width: 100%;
    object-fit: cover;
  }

  .slide-control-wrapper {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.25) 0%,
      rgba(0, 0, 0, 0.25) 100%
    );
    backdrop-filter: blur(1px);
  }

  .slide-control-center {
    justify-content: center;
  }

  .carousel-indicators {
    position: absolute;
    bottom: 14px;
    right: 0px;
    left: 0px;
  }

  .slide-content {
    color: rgb(247, 247, 247);
  }
  .hero-title {
    text-align: center;
    text-transform: uppercase;
  }

  .carousel-indicators--wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .carousel-indicator {
    width: 0.9rem;
    height: 0.9rem;
    background: white;
    border-radius: 100%;
    opacity: 0.5;
  }

  .carousel-indicator--active {
    padding: 2px;
    opacity: 1;
  }
`;
