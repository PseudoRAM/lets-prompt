import styled from "@emotion/styled";

const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 40px 40px;
`;

const Content = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  width: 780px;
  padding: 2rem 3rem;
  background-color: #f4f2f8;
  border: 2px solid #000;
  border-radius: 1rem;
`;

const Team = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Button = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  background-color: #7102fd;
  flex-shrink: 0;
  margin: 0;
  position: absolute;
  bottom: 0.75rem;
  right: 0.75rem;

  box-shadow: var(--block-shadow-circle);

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    box-shadow: none;
    bottom: 0.6rem;
    right: 0.6rem;
  }

  &:disabled {
    box-shadow: none;
    background-color: #7c7788;
    bottom: 0.6rem;
    right: 0.6rem;

    &:hover {
      opacity: 1;
    }
  }
`;

const InputOuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

const Title = styled.h1`
  color: #2f243a;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
`;

const Description = styled.p`
  color: #2f243a;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
`;

const InputTitle = styled.h2`
  color: #2f243a;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;

const TeamOuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  gap: 20px;
`;

const InputBox = styled.div`
  position: relative;
  border: 2px solid #000;
  box-sizing: border-box;
  border-radius: 0.375rem;
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  background-color: #fff;
  box-shadow: var(--block-shadow);

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  &.focussed {
    box-shadow: none;
    outline: none;
  }
`;

const Input = styled.textarea`
  tab-size: 4;
  color: inherit;
  font-family: inherit;
  font-weight: inherit;
  appearance: none;
  border-color: #8e8ea0;
  border-radius: 0;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0;
  width: 100%;
  resize: none;
  border-width: 0;
  padding-bottom: 2rem;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 3.5rem;
  background-color: transparent;
  max-height: 200px;
  overflow-y: hidden;
  &:focus {
    outline: none;
  }
`;

export default {
  OuterWrapper,
  Title,
  Description,
  Content,
  Team,
  InputOuterWrapper,
  InputTitle,
  Input,
  InputBox,
  Button,
  TeamOuterWrapper,
};
