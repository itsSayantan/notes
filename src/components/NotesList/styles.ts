import styled from "styled-components";
import { THEME } from "../../shared/constants";
import { Center } from "../../shared/styles";

const NotesListWrapper = styled.div`
  ${Center}
  padding: 40px 0;
  box-sizing: border-box;
`;

NotesListWrapper.displayName = "NotesListWrapper";

const Note = styled.div`
  max-width: 350px;
  overflow: hidden;
  background: ${THEME.background};
  box-shadow: ${THEME.boxShadow};
  border-radius: 10px;
`;

Note.displayName = "Note";

const NoteContentArea = styled.div``;

NoteContentArea.displayName = "NoteContentArea";

const NoteInfoArea = styled.div``;

NoteInfoArea.displayName = "NoteInfoArea";

const NoteAuthor = styled.div``;

NoteAuthor.displayName = "NoteAuthor";

const NoteCreatedOn = styled.div``;

NoteCreatedOn.displayName = "NoteCreatedOn";

const NoteActionArea = styled.div``;

NoteActionArea.displayName = "NoteActionArea";

const CopyNote = styled.div``;

CopyNote.displayName = "CopyNote";

const EditNote = styled.div``;

EditNote.displayName = "EditNote";

const DeleteNote = styled.div``;

DeleteNote.displayName = "DeleteNote";

export {
  NotesListWrapper,
  Note,
  NoteContentArea,
  NoteInfoArea,
  NoteAuthor,
  NoteCreatedOn,
  NoteActionArea,
  CopyNote,
  EditNote,
  DeleteNote,
};
