import React from "react";

function Noteitem(props) {
  let { note } = props;
  // let d=new Date(date).toGMTString()
  return (
    <div>

      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title"> {note.tittle}</h5>
          <p className="card-text">{note.description}</p>
          {/* <FontAwesomeIcon icon={regular("trash")} /> */}
          <i className="fa-solid fa-trash mx-2"></i>
          <i className="fa-solid fa-pen-to-square"></i>
        </div>
      </div>
    </div>
  );
}

export default Noteitem;
