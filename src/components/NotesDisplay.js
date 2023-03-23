import React, { useEffect, useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";

function NotesDisplay(prop) {
  const notecontext = useContext(NoteContext);
  const { notes, FetchNotes } = notecontext;
  useEffect(() => {
    FetchNotes();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h2>All Notes</h2>
          
      <div className="container">
      <div className="container">{notes.length === 0 && "No notes to display"}</div>
        <div className="row">
          {notes.map((note) => {
            return (
              <div className="col-md-3 " key={note._id}>
                <Noteitem note={note} noteditor={prop.updater} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NotesDisplay;

// {notes.map((note)=>{
//     return note.tittle
//   })}
