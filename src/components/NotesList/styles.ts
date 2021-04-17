import styled from "styled-components";
import { THEME } from "../../shared/constants";
import { Center, NeumorphicAllStyles, SpaceBetween } from "../../shared/styles";

const NoNotes = styled.div`
  margin: 50px 0;
  ${Center};
  font-size: 14px;
  color: ${THEME.color};
`;

const NotesListWrapper = styled.div`
  ${Center}
  flex-wrap: wrap;
  padding: 40px 0;
  box-sizing: border-box;
`;

NotesListWrapper.displayName = "NotesListWrapper";

const Note = styled.div`
  width: 300px;
  overflow: hidden;
  background: ${THEME.background};
  box-shadow: ${THEME.boxShadow};
  border-radius: 10px;
  padding: 20px;
  flex-wrap: wrap;
  box-sizing: border-box;
  ${Center};
  margin: 20px;

  > div {
    width: 100%;
  }
`;

Note.displayName = "Note";

const NoteContentArea = styled.div`
  overflow: hidden;
  overflow-y: auto;
  border-radius: 10px;
  height: 250px;
  ${NeumorphicAllStyles};
  padding: 15px;
  box-sizing: border-box;
  font-size: 16px;
  color: ${THEME.color};
`;

NoteContentArea.displayName = "NoteContentArea";

const NoteInfoArea = styled.div`
  ${SpaceBetween};
  margin: 20px 0 10px 0;
`;

NoteInfoArea.displayName = "NoteInfoArea";

const NoteAuthor = styled.div`
  word-break: break-all;
  font-size: 12px;
  color: ${THEME.secondaryColor};
`;

NoteAuthor.displayName = "NoteAuthor";

const NoteCreatedOn = styled.div`
  margin-left: 10px;
  word-break: break-all;
  font-size: 12px;
  color: ${THEME.secondaryColor};
`;

NoteCreatedOn.displayName = "NoteCreatedOn";

const NoteResponseArea = styled.div`
  height: 40px;
  text-align: center;
  font-size: 14px;
  color: ${THEME.color};
`;

NoteResponseArea.displayName = "NoteResponseArea";

const NoteActionArea = styled.div`
  ${Center};
  > button {
    &:not(:last-of-type) {
      margin-right: 20px;
    }

    > img {
      height: 20px;
    }
  }
`;

NoteActionArea.displayName = "NoteActionArea";

export {
  NoNotes,
  NotesListWrapper,
  Note,
  NoteContentArea,
  NoteInfoArea,
  NoteResponseArea,
  NoteAuthor,
  NoteCreatedOn,
  NoteActionArea,
};
