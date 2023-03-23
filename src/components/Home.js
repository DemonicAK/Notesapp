import React, { useRef, useState, useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import NotesDisplay from "./NotesDisplay";
import Addnote from "./Addnote";
// import EditModal from "./EditModal";


function Home() {


  const notecontext = useContext(NoteContext);
  const { EditNote } = notecontext;

  const sta = useRef(null);
  const staClose = useRef(null);
  const updater = (currentNote) => {
    sta.current.click();
    console.log("home .js ", currentNote._id);
    setnote({
      E_id: currentNote._id,
      Etittle: currentNote.tittle,
      Edescription: currentNote.description,
      Etag: currentNote.tag,
    });
  };

  const [note, setnote] = useState({
    E_id: "",
    Etittle: "",
    Edescription: "",
    Etag: "",
  });
  const HandleChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  const HandleClick = (e) => {
    e.preventDefault(); // Prevents the default action of the event from happening (here, the form submitting)
    console.log("updating the note" + note);
    EditNote(note.E_id, note.Etittle, note.Edescription, note.Etag);

    staClose.current.click();
  };
 
  return (
    <div>
      {/* <form className="d-flex my-2" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}

      <Addnote />
      <div>
        <button
          type="button"
          ref={sta}
          lass="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          className="d-none"
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Edit Note{" "}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="Etittle" className="form-label">
                      Tittle
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Etittle"
                      aria-describedby="Etittle"
                      name="Etittle"
                      onChange={HandleChange}
                      value={note.Etittle}
                      minLength={3}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Edesc" className="form-label">
                      Description
                    </label>

                    <textarea
                      className="form-control"
                      id="Edesc"
                      name="Edescription"
                      onChange={HandleChange}
                      rows="8"
                      value={note.Edescription}
                      minLength={3}
                      required
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Etag" className="form-label">
                      Tags
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Etag"
                      name="Etag"
                      aria-describedby="tag"
                      onChange={HandleChange}
                      value={note.Etag}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  ref={staClose}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={HandleClick}
                  disabled={
                    note.Etittle.length < 3 || note.Edescription.length < 5
                  }
                >
                  Update Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NotesDisplay updater={updater} />
    </div>
  );
}

export default Home;
