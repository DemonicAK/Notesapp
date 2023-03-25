import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {

  const INITIAL_URL = process.env.REACT_APP_BACKEND_URL;
  const host = INITIAL_URL + "/notes"

  const notesInitial = [];
  const [notes, setnotes] = useState(notesInitial);

  //create a note dont need noteid

  const CreateNote = async (tittle, description, tag) => {
    //  TODO:MAKE API CALLS
    const url = `${host}/createnote`;
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ tittle, description, tag }),
    });

    const result = await response.json();

    setnotes(notes.concat(result));
    // console.log("note added");
  };

  const FetchNotes = async () => {
    //  TODO:MAKE API CALLS
    const url = `${host}/fetchallnotes`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const result = await response.json();
    // console.log(result);
    setnotes(result);
  };

  //delete a note   need noteid
  const DeleteNote = async (noteid) => {
    //  TODO:MAKE API CALLS
    const url = `${host}/deletenote/${noteid}`;
    const response = await fetch(url, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    // eslint-disable-next-line no-unused-vars
    const result = await response.json();
    // console.log(result);

    // console.log("deleteing the note id" + noteid);
    const filteredNote = notes.filter((note) => {
      return note._id !== noteid;
    });
    setnotes(filteredNote);
  };

  //Edit a note   need noteid
  const EditNote = async (noteid, tittle, description, tag) => {
    //  TODO:MAKE API CALLS
    const url = `${host}/updatenote/${noteid}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },

      body: JSON.stringify({ tittle, description, tag }),
    });

    // eslint-disable-next-line no-unused-vars
    const result = await response.json();
    // console.log(result);
    const newNote = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNote.length; index++) {
      const element = notes[index];
      if (element._id === noteid) {
        newNote[index].tittle = tittle;
        newNote[index].description = description;
        newNote[index].tag = tag;
        break;
      }
    }
    setnotes(newNote);
  };

  return (
    <NoteContext.Provider
      value={{ notes, CreateNote, DeleteNote, EditNote, FetchNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
