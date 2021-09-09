import React, { useState, useContext } from "react";
import NoteContext from "../../Context/notes/noteContex";
const AddNotes = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    discription: "",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.discription, note.tag);
    setNote({
      title: "",
      discription: "",
      tag: "",
    });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
    console.log(note);
  };

  return (
    <div>
      <div className="row my-5">
        <h1 className="text shadow-lg rounded-pill">ADD NOTES</h1>
      </div>
      <div className="row bg-light my-3 py-4 rounded  shadow-lg p-5 mb-5 rounded  mx-5">
        <form onSubmit={handleClick}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control shadow-lg  my-3 rounded-pill"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              value={note.title}
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="discription" className="form-label">
              Discription
            </label>
            <input
              type="text"
              className="form-control shadow-lg  my-3 rounded-pill"
              id="discription"
              name="discription"
              value={note.discription}
              onChange={onChange}
              minLength={5}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control shadow-lg  my-3 rounded-pill"
              id="tag"
              name="tag"
              value={note.tag}
              onChange={onChange}
            />
          </div>

          <button
            type="submit"
            className="btn-lg btn-primary rounded-pill"
            disabled={note.title.length < 5 || note.discription.length < 5}
          >
            ADD NOTE
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNotes;
