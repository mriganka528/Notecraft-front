import noteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props) => {
    let host = "https://notecraft-back.vercel.app";
    const first_notes = [];
    const [notes, setNotes] = useState(first_notes);

    //Getting all notes
    const getNote = async (title, description, tag) => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        const json = await response.json();
        setNotes(json);

    }
    //Adding a new note
    const addNote = async (title, description, tag) => {
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')

            },

            body: JSON.stringify({ title, description, tag })
        });
        const res = await response.json();
        setNotes(notes.concat(res));
    }

    //Deleting Notes

    const deleteNote = async (id) => {
        console.log("hello delete");
        //API cals to delete notes
        const response = await fetch(`${host}/api/notes/delete/${id}`, {
            method: "DELETE",

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
         

        });
        console.log(response.json());
        //logic to delete notes
        const newNotes = notes.filter((note) => {
            return note._id !== id;
        })
        setNotes(newNotes);
    }


    //Editing notes
    const editNote = async (id, title, description, tag) => {
        //Api call
        const response = await fetch(`${host}/api/notes/update/${id}`, {
            method: "PUT",

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')

            },

            body: JSON.stringify({ title, description, tag })
        });
        console.log(response.json());
        //Logic to edit note
        let newNote = JSON.parse(JSON.stringify(notes));
        for (let i = 0; i < notes.length; i++) {
            const elem = notes[i];
            if (elem._id === id) {
                newNote[i].title = title;
                newNote[i].description = description;
                newNote[i].tag = tag;
                break;
            }

        }
        setNotes(newNote);

    }
    return (
        <noteContext.Provider value={{ notes, getNote, addNote, deleteNote, editNote }}>
            {props.children}
        </noteContext.Provider>


    )

}

export default NoteState;