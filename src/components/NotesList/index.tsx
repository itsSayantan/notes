import { AppContext } from "../../shared/contexts/AppContext";
import { AppContextType } from "../../shared/types/others";
import {
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
} from "./styles";

const NotesList = () => {
  return (
    <AppContext.Consumer>
      {(val: AppContextType) => {
        return (
          <NotesListWrapper>
            <Note>
              <NoteContentArea>asdkjhasjkdhakjsdhajskhdkjh</NoteContentArea>
              <NoteInfoArea>
                <NoteAuthor>Sayantan</NoteAuthor>
                <NoteCreatedOn>2 mins</NoteCreatedOn>
              </NoteInfoArea>
              <NoteActionArea>
                <CopyNote></CopyNote>
                <EditNote></EditNote>
                <DeleteNote></DeleteNote>
              </NoteActionArea>
            </Note>
          </NotesListWrapper>
        );
      }}
    </AppContext.Consumer>
  );
};

export default NotesList;
