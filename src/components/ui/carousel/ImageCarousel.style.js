import css from "styled-jsx/css";

export const style = css`
  .carousel-container {
  }

  .slide-container {
    position: relative;
    overflow: hidden;
    max-height: 60vmin;
  }

  .slide {
    display: flex;
    transition-property: transform;
    transition-timing-function: ease-out;
    transition-duration: 500ms;
  }

  .slide-image {
    zoom: 1.5;
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
    height: 60vmin;
  }

  .carousel-indicators {
    position: absolute;
    bottom: 14px;
    right: 0px;
    left: 0px;
  }

  .carousel-indicators--wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
  }

  .carousel-indicator {
    width: .9rem;
    height: .9rem;
    background: white;
    border-radius: 100%;
    opacity: .5;
  }

  .carousel-indicator--active{
    padding: 2px;
    opacity: 1;
  }
`;
