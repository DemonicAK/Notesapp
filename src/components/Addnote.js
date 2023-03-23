import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

const Addnote = () => {
  const notecontext = useContext(NoteContext);
  const { CreateNote } = notecontext;

  const [note, setnote] = useState({
    tittle: "",
    description: "",
    tag: "",
  });

  const HandleChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  const HandleClick = (e) => {
    e.preventDefault(); // Prevents the default action of the event from happening (here, the form submitting)
    CreateNote(note.tittle, note.description, note.tag);
    setnote({
      tittle: "",
      description: "",
      tag: "",
    })
  };

  return (
    <>
      <div className="container">
        <h1>Create a note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="tittle" className="form-label">
              Tittle
            </label>
            <input
              type="text"
              className="form-control"
              id="tittle"
              aria-describedby="tittle"
              name="tittle"
              onChange={HandleChange}
              value={note.tittle}
              minLength={3}
              required
               
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Description
            </label>

            <textarea
              className="form-control"
              id="desc"
              name="description"
              onChange={HandleChange}
              rows="8"
              value={note.description}
              minLength={5}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="tags" className="form-label">
              Tags
            </label>
            <input
              type="text"
              className="form-control"
              id="tags"
              aria-describedby="tags"
              value={note.tag}
              onChange={HandleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={HandleClick}
            disabled={note.tittle.length < 3 || note.description.length < 5}
          >
            Add Note
          </button>
        </form>
      </div>
    </>
  );
};

export default Addnote;
