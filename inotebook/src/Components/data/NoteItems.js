import React, { useContext } from "react";
import NoteContext from "../../Context/notes/noteContex";
const NoteItems = (props) => {
  const { note, updateNote } = props;
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  return (
    <div className="col-md-4 my-4 rounded">
      <div className="card shadow-lg p-5" style={{ width: "18rem  " }}>
        <div className="card-body">
          <h5 className="card-title b">{note.title}</h5>
          <p>{note.discription}</p>
          <div className="d-flex justify-content-between ">
            <button
              href="#"
              className="btn-lg btn-outline-danger shadow-lg   rounded"
              onClick={() => {
                deleteNote(note._id);
              }}
            >
              <i className="far fa-trash-alt"></i>
            </button>
            <button
              href="#"
              className="btn-lg btn-outline-success shadow-lg rounded"
              onClick={() => {
                updateNote(note);
              }}
            >
              <i className="far fa-edit"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItems;
