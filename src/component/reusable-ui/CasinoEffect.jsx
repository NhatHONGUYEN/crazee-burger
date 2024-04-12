import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

export default function CasinoEffect({ count, className }) {
  return (
    <TransitionGroup
      component={CasinoEffectStyled}
      className="transition-gorup"
    >
      <CSSTransition classNames="count-animated" timeout={5000} key={count}>
        <span className={className}>{count}</span>
      </CSSTransition>
    </TransitionGroup>
  );
}

const CasinoEffectStyled = styled.div`
  border: 1px solid red;

  /* MOUNTING */
  .count-animated-enter {
    background: green;
  }
  .count-animated-enter-active {
    background: blue;
    transition: 2s;
  }
  .count-animated-enter-done {
    background: pink;
  }

  /* UNMOUNTING */

  .count-animated-exit {
    background: yellow;
  }
  .count-animated-exit-active {
    background: red;
    transition: 2s;
  }
`;
