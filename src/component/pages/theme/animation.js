import { css } from "styled-components";
import { theme } from ".";

export const adminAnimation = css`
  .admin-appear {
    opacity: 0.1;
    transform: translateY(100%);
    &.admin-appear-active {
      opacity: 1;
      transform: translateY(0);
      transition: all 500ms;
    }
  }
`;

export const basketAnimation = css`
  .animation-basket-appear {
    .card {
      transform: translateX(100px);
      opacity: 0%;
    }
  }
  .animation-basket-appear-active {
    .card {
      transition: ${theme.animations.speed.quick};
      transform: translateX(0px);
      opacity: 100%;
    }
  }
  .animation-basket-enter {
    .card {
      transform: translateX(100px);
      opacity: 0%;
    }
  }
  .animation-basket-enter-active {
    .card {
      transition: ${theme.animations.speed.quick};
      transform: translateX(0px);
      opacity: 100%;
    }
  }

  .animation-basket-exit {
    .card {
      transform: translateX(0);
      opacity: 100%;
    }
  }
  .animation-basket-exit-active {
    .card {
      transform: translateX(-100px);
      opacity: 0%;
      transition: ${theme.animations.speed.quick};
    }
  }
`;
