import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "641896e3b458d0acaad312fe",
      user: "641862926f849f5865fc2830",
      tittle: "iamak",
      description: "i am procoder i know it",
      tag: "for ak",
      __v: 0,
    },
    {
      _id: "641896e3b458d0acaad31300",
      user: "641862926f849f5865fc2830",
      tittle: "iamak",
      description: "i am procoder i know it",
      tag: "for ak",
      __v: 0,
    },
    {
      _id: "64189def06be63fbf3788f07",
      user: "641862926f849f5865fc2830",
      tittle: "iamak",
      description: "i am procoder i know it",
      tag: "for ak",
      __v: 0,
    },
    {
      _id: "64189ec306be63fbf3788f09",
      user: "641862926f849f5865fc2830",
      tittle: "iamak",
      description: "i am procoder i know it",
      tag: "for ak",
      __v: 0,
    },
  ];

  const [notes, setnotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setnotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
