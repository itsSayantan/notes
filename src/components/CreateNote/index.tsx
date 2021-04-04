import React from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

import { CREATE_NOTE_DEFAULT_TEXT } from "../../shared/constants";
import { Button } from "../../shared/styles";

import { CreateNoteWrapper, ActionArea } from "./styles";

const CreateNote = () => {
  const ContentEditableRef: React.RefObject<HTMLDivElement> = React.createRef();
  const html = React.useRef(CREATE_NOTE_DEFAULT_TEXT);
  const [noteText, setNoteText] = React.useState("");
  const [isPlaceholderVisible, setIsPlaceholderVisible] = React.useState(true);

  const handleCreateNoteTextAreaFocus = () => {
    if (!noteText.trim()) {
      if (ContentEditableRef.current) {
        ContentEditableRef.current.innerHTML = "";
      }
    }
  };

  const handleCreateNoteTextAreaBlur = () => {
    if (!noteText.trim()) {
      if (ContentEditableRef.current) {
        setIsPlaceholderVisible(true);
        ContentEditableRef.current.innerHTML = CREATE_NOTE_DEFAULT_TEXT;
      }
    }
  };

  const handleCreateNoteTextAreaChange = (e: ContentEditableEvent) => {
    html.current = (e.currentTarget as HTMLDivElement).innerHTML;
    setNoteText((e.currentTarget as HTMLDivElement).innerHTML);
  };

  const handleNoteCancel = () => {
    setNoteText("");
    setIsPlaceholderVisible(true);
    html.current = CREATE_NOTE_DEFAULT_TEXT;
    if (ContentEditableRef.current) {
      ContentEditableRef.current.blur();
    }
  };

  const handleNoteSave = () => {};

  return (
    <CreateNoteWrapper isPlaceholderVisible={isPlaceholderVisible}>
      <ContentEditable
        innerRef={ContentEditableRef}
        html={html.current}
        className="note-w-contenteditable"
        onFocus={handleCreateNoteTextAreaFocus}
        onChange={handleCreateNoteTextAreaChange}
        onBlur={handleCreateNoteTextAreaBlur}
      />
      <ActionArea>
        <Button onClick={handleNoteCancel}>
          <img src="/assets/images/delete.svg" alt="Cancel note edit" />
        </Button>
        <Button onClick={handleNoteSave}>
          <img src="/assets/images/save.svg" alt="Save note" />
        </Button>
      </ActionArea>
    </CreateNoteWrapper>
  );
};

export default CreateNote;
