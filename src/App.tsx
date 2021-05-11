import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

const WordWrapper = styled.div`
  display: grid;
  place-items: center;
  font-size: 4rem;
  font-weight: bold;
  height: 100vh;
  text-transform: uppercase;
`;

function App() {
  const [interval, setInterval] = useState(2000);
  const [currentWord, setCurrentWord] = useState("");
  const [words, setWords] = useState([
    "Chase",
    "Everest",
    "Marshall",
    "Rocky",
    "Rubble",
    "Ryder",
    "Skye",
    "Tracker",
    "Zuma",
  ]);

  const nextWord = (index: number = 0, timeout: number = 1000) => {
    setTimeout(() => {
      const word = words[index];
      setCurrentWord(word);

      if (word === undefined) {
        setCurrentWord("");
        return;
      }

      nextWord(index + 1, timeout);
    }, timeout);
  };

  const start = () => {
    const [firstWord] = words;
    setCurrentWord(firstWord);
    const index = 1;
    nextWord(index, interval);
  };

  const onIntervalChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log(`🔥 inIntervalChangeHandler`, { value, interval });
    if (!["1", "2"].includes(value)) {
      return;
    }

    setInterval(Number(value) * 1000);
  };

  return (
    <>
      {currentWord ? (
        <WordWrapper>{currentWord}</WordWrapper>
      ) : (
        <>
          <textarea
            rows={words.length}
            placeholder="type some words separated by enter"
            value={words.join("\n")}
            onChange={(e) => setWords(e.target.value.split("\n"))}
          />
          <button type="button" onClick={start}>
            Start!
          </button>
          <div>
            <label htmlFor="interval">Select an interval:</label>
            <input
              id="interval"
              type="number"
              min={1}
              max={2}
              value={interval / 1000}
              step={1}
              onChange={onIntervalChangeHandler}
            />
          </div>
        </>
      )}
    </>
  );
}

export default App;
