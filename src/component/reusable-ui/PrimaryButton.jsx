import styled from "styled-components";

export default function PrimaryButton({ Icon, label, className }) {
  return (
    <PrimaryButtonStyled className={className}>
      <span>{label}</span>
      <div className="icon">{Icon && Icon}</div>
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  width: 100%;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;

  padding: 18px 24px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 800;
  color: white;
  background-color: orange;
  border: 1px solid orange;

  &:hover:not(:disabled) {
    background-color: white;
    color: orange;
    border: 1px solid orange;
    transition: all 200ms ease-out;
  }

  &:active {
    color: white;
    background-color: orange;
    border: 1px solid orange;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 10px;
  }
`;
