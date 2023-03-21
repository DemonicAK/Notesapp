import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";

function Notes() {
  const notecontext = useContext(NoteContext);
  const { notes, setnotes } = notecontext;
  return (
    <div>
      <h2>all notes</h2>

      <div className="container">
        <div className="row">
          {notes.map((note) => {
            return (
              <div className="col-md-3 " key={note._id}>
                <Noteitem note={note} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Notes;

// {notes.map((note)=>{
//     return note.tittle
//   })}
