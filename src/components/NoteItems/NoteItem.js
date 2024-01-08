import React, { useContext } from 'react'
import noteContext from '../../context/notes/NoteContext';
import './NoteItems.css'
const NoteItem = (props) => {
    const context = useContext(noteContext)
    const { deleteNote } = context;
    const { updateNote, note, showAlert } = props;

    return (
        <>
            <div className={` ${props.theme} card mr-3 my-3`}  style={{ width: "20rem" }}>
                <div className="card-body  ">
                    <h3 className="card-title">{props.note.title}</h3>
                    <p style={{fontSize:'1.3rem'}} className="card-text">{props.note.description}  </p>
                    <div>
                        <i className="fa-solid fa-xl fa-trash mx-2" onClick={() => { deleteNote(note._id); showAlert(" Deleted successfully", "success"); }} ></i>
                        <i className="fa-solid  fa-xl fa-pen-to-square mx-2" onClick={() => { updateNote(note) }} ></i>
                    </div>
                </div>
            </div >
        </>
    )
}

export default NoteItem
