import React, { useEffect, useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";
import { useNavigate } from "react-router-dom";


function NotesDisplay(prop) {
  const notecontext = useContext(NoteContext);
  const { notes ,FetchNotes} = notecontext;
  const navigate = useNavigate();

  useEffect(() => {
   
    if(localStorage.getItem("token")){
         FetchNotes();
       }
       else{
       navigate("/Signup");}
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
