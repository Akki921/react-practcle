import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../../Context/notes/noteContex";
import AddNotes from "./AddNotes";
import NoteItems from "./NoteItems";

const Notes = (props) => {
  const context = useContext(NoteContext);
  const { notes, getNote, editNote } = context;

  useEffect(() => {
    getNote();
    // eslint-disable-next-line
  }, []);

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    ediscription: "",
    etag: "",
  });
  //used for open modal to edit text use useRef hook
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      ediscription: currentNote.discription,
      etag: currentNote.tag,
    });
  };

  //call edit note fun from notestate to update note
  const handleClick = (e) => {
    e.preventDefault();
    editNote(note.id, note.etitle, note.ediscription, note.etag);
    refClose.current.click();
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
    console.log(note);
  };
  //open  model using edit icon
  const ref = useRef(null);
  //for auto close modal
  const refClose = useRef(null);
  return (
    <>
      <AddNotes />
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
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
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                EDIT NOTES
              </h5>
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
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-lg my-3 rounded-pill "
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                    value={note.etitle}
                    onChange={onChange}
                    style={{ textAlign: "center" }}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="ediscription" className="form-label">
                    Discription
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-lg  my-3 rounded-pill text-center"
                    id="ediscription"
                    name="ediscription"
                    value={note.ediscription}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-lg  my-3 rounded-pill text-center"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h1 className="text shadow-lg rounded-pill my-5">YOUR NOTES</h1>
          <h3> {notes.length === 0 && "No Notes To Dispay"}</h3>
          {notes.map((note) => {
            return (
              <div className="col-md-3 col-sm-3 ">
                <div key={note._id}>
                  <NoteItems note={note} updateNote={updateNote} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
