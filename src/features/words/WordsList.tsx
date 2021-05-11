import React, { ReactNode } from "react";

type WordsListProps = {
  children: ReactNode;
};

const WordsList = ({ children }: WordsListProps) => {
  return (
    <textarea rows={10} placeholder="Palabras" title="Palabras">
      {children}
    </textarea>
  );
};

export default WordsList;
