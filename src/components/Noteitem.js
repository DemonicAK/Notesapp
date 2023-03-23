import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
// import EditModal from "./EditModal";

function Noteitem(props) {
  let { note ,noteditor} = props;
  // let d=new Date(date).toGMTString()

  const notecontext = useContext(NoteContext);
  const { DeleteNote } = notecontext;

  const HandleDelete = () => {
    DeleteNote(note._id);
  };

  const HandleEdit = () => {
    // console.log("jijfkd");
    // <EditModal/>

    console.log(note)
    noteditor(note);

  };

  return (
    <div>
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title"> {note.tittle}</h5>
          <p className="card-text">{note.description}</p>
          {/* <FontAwesomeIcon icon={regular("trash")} /> */}
          <i className="fa-solid fa-trash mx-2" onClick={HandleDelete}></i>
          <i className="fa-solid fa-pen-to-square" onClick={HandleEdit}></i>
        </div>
      </div>
    </div>
  );
}

export default Noteitem;
