import NoteContext from "./noteContex";
import { useState } from "react";
const NoteStates = (props) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const host = "http://localhost:5000";

  const initialnotes = [];

  const [notes, setnotes] = useState(initialnotes);

  // here we use fetch with headers api

  //Get All Note
  const getNote = async () => {
    //Api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${token}`,
      },
    });
    const json = await response.json();
    setnotes(json);
  };

  //Add Note
  const addNote = async (title, discription, tag) => {
    //Api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${token}`,
      },
      body: JSON.stringify({ title, discription, tag }),
    });

    const note = await response.json();
    setnotes(notes.concat(note));
  };

  //Delete Note
  const deleteNote = async (id) => {
    //Api call
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${token}`,
      },
    });

    const json = response.json();
    console.log("delete the note" + json);
    //if note._id is not equal to this id its remains in the db else deleted it
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setnotes(newNotes);
  };

  //edit note
  //here fecth all the notes and ckeck note.id isequal to id then edit the notes
  const editNote = async (id, title, discription, tag) => {
    //Api call
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${token}`,
      },
      body: JSON.stringify({ title, discription, tag }),
    });
    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    //logic to edit notes
    for (let index = 0; index < newNotes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].discription = discription;
        newNotes[index].tag = tag;
        break;
      }
    }
    setnotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteStates;
