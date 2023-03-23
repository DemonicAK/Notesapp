import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const notesInitial = [];
  const [notes, setnotes] = useState(notesInitial);

  //create a note dont need noteid

  const CreateNote = async (tittle, description, tag) => {
    //  TODO:MAKE API CALLS
    const url = `${host}/api/notes/createnote`;
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxODYyOTI2Zjg0OWY1ODY1ZmMyODMwIn0sImlhdCI6MTY3OTMxOTY5OX0.AKEA7PCJ7uE2V89A6dLaVDtnAyE9UbGODadTBxpEDRQ",
      },
      body: JSON.stringify({ tittle, description, tag }),
    });

    const result = await response.json();

    setnotes(notes.concat(result));
    console.log('note added')
  };

  const FetchNotes = async () => {
    //  TODO:MAKE API CALLS
    const url = `${host}/api/notes/fetchallnotes`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxODYyOTI2Zjg0OWY1ODY1ZmMyODMwIn0sImlhdCI6MTY3OTMxOTY5OX0.AKEA7PCJ7uE2V89A6dLaVDtnAyE9UbGODadTBxpEDRQ",
      },
    });

    const result = await response.json();
    console.log(result);
    setnotes(result);
  };

  //delete a note   need noteid
  const DeleteNote = async (noteid) => {
    //  TODO:MAKE API CALLS
    const url = `${host}/api/notes/deletenote/${noteid}`;
    const response = await fetch(url, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxODYyOTI2Zjg0OWY1ODY1ZmMyODMwIn0sImlhdCI6MTY3OTMxOTY5OX0.AKEA7PCJ7uE2V89A6dLaVDtnAyE9UbGODadTBxpEDRQ",
      },
    });
    const result = await response.json();
    console.log(result);

    console.log("deleteing the note id" + noteid);
    const filteredNote = notes.filter((note) => {
      return note._id !== noteid;
    });
    setnotes(filteredNote);
  };

  //Edit a note   need noteid
  const EditNote = async (noteid, tittle, description, tag) => {
    //  TODO:MAKE API CALLS
    const url = `${host}/api/notes/updatenote/${noteid}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxODYyOTI2Zjg0OWY1ODY1ZmMyODMwIn0sImlhdCI6MTY3OTMxOTY5OX0.AKEA7PCJ7uE2V89A6dLaVDtnAyE9UbGODadTBxpEDRQ",
      },

      body: JSON.stringify({ tittle, description, tag }),
    });

    const result = await response.json();
    console.log(result);
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
