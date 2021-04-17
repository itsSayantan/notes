const sanitizeNoteText = (text: string): string => {
  text = text.replace(/<div><br><\/div>/g, "\n\n");
  text = text.replace(/<div>/g, "\n");
  text = text.replace(/<\/div>/g, "");
  text = text.replace(/<br>/g, "\n");

  return text;
};

const replaceNewlineWithBr = (text: string): string => {
  text = text.replace(/\n/g, "<br>");
  return text;
};

export { sanitizeNoteText, replaceNewlineWithBr };
