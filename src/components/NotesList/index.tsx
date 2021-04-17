import React from "react";
import { AppContext } from "../../shared/contexts/AppContext";
import { AppContextType } from "../../shared/types/others";
import {
  NoNotes,
  NotesListWrapper,
  Note,
  NoteContentArea,
  NoteInfoArea,
  NoteResponseArea,
  NoteAuthor,
  NoteCreatedOn,
  NoteActionArea,
} from "./styles";
import { Button } from "../../shared/styles";
import {
  NO_NOTES_TEXT,
  COPY_CLICKED_TEXT,
  DELETE_CLICKED_TEXT,
} from "../../shared/constants";
import { Actions } from "../../shared/constants/actions";
import { replaceNewlineWithBr } from "../../shared/utils";

const NotesList = () => {
  const { dispatch } = React.useContext(AppContext);
  const [isCopyClicked, setIsCopyClicked] = React.useState([false, ""]);
  const [isDeleteClicked, setIsDeleteClicked] = React.useState([false, ""]);

  const handleCopyClick = (id: string, noteText: string) => {
    setIsCopyClicked([true, id]);

    const textAreaForCopying = document.createElement("textarea");
    document.body.appendChild(textAreaForCopying);
    textAreaForCopying.value = noteText;
    textAreaForCopying.select();
    document.execCommand("copy");
    document.body.removeChild(textAreaForCopying);

    setTimeout(() => {
      setIsCopyClicked([false, ""]);
    }, 1500);
  };

  const handleDeleteClick = (id: string) => {
    if (isDeleteClicked[0]) {
      dispatch({ type: Actions.DELETE_NOTE, payload: id });
      setIsDeleteClicked([false, ""]);
    } else {
      setIsDeleteClicked([true, id]);
      setTimeout(() => {
        setIsDeleteClicked([false, ""]);
      }, 3000);
    }
  };

  return (
    <AppContext.Consumer>
      {(val: AppContextType) => {
        return Array.isArray(val.state.notes) && !val.state.notes.length ? (
          <NoNotes>{NO_NOTES_TEXT}</NoNotes>
        ) : (
          <NotesListWrapper>
            {val.state.notes.map((note) => {
              return (
                <Note key={note.id}>
                  <NoteContentArea
                    dangerouslySetInnerHTML={{
                      __html: replaceNewlineWithBr(note.content),
                    }}
                  />
                  <NoteInfoArea>
                    <NoteAuthor>{note.createdBy}</NoteAuthor>
                    <NoteCreatedOn>{note.createdOn}</NoteCreatedOn>
                  </NoteInfoArea>
                  <NoteResponseArea>
                    {isDeleteClicked[0]
                      ? isDeleteClicked[1] === note.id
                        ? DELETE_CLICKED_TEXT
                        : ""
                      : isCopyClicked[1] === note.id
                      ? COPY_CLICKED_TEXT
                      : ""}
                  </NoteResponseArea>
                  <NoteActionArea>
                    <Button
                      onClick={() => {
                        handleCopyClick(note.id, note.content);
                      }}
                    >
                      <img src="/assets/images/copy.svg" alt="Copy note" />
                    </Button>
                    <Button
                      onClick={() => {
                        handleDeleteClick(note.id);
                      }}
                    >
                      <img src="/assets/images/delete.svg" alt="Delete note" />
                    </Button>
                  </NoteActionArea>
                </Note>
              );
            })}
          </NotesListWrapper>
        );
      }}
    </AppContext.Consumer>
  );
};

export default NotesList;
