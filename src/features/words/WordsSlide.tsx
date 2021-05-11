import React from "react";
import { useSelector } from "react-redux";
import { selectWords } from "./wordsSlice";

const WordsSlide = () => {
  const words = useSelector(selectWords);
  const [currentWord] = words;

  return <div>{currentWord}</div>;
};

export default WordsSlide;
