import styled from "styled-components";
import { THEME } from "../../shared/constants";
import { CreateNoteWrapperProps } from "../../shared/types/props";

const CreateNoteWrapper = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: ${THEME.background};
  box-shadow: ${THEME.boxShadow};
  border-radius: 10px;

  > .note-w-contenteditable {
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    border: 0;
    outline: 0;
    border-radius: 0;
    box-shadow: none;
    background-color: transparent;
    color: ${(props: CreateNoteWrapperProps) =>
      props.isPlaceholderVisible ? THEME.secondaryColor : THEME.color};
    border-bottom: 1px solid ${THEME.borderColor};
    min-height: 20px;
  }
`;
CreateNoteWrapper.displayName = "CreateNoteWrapper";

const ActionArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 0 10px 0;

  > button {
    &:last-of-type {
      margin-left: 20px;
    }

    > img {
      height: 20px;
    }
  }
`;

ActionArea.displayName = "ActionArea";

export { CreateNoteWrapper, ActionArea };
