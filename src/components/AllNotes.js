import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItems/NoteItem'; 
import { useNavigate } from 'react-router-dom';

const AllNotes = (props) => {
    const context = useContext(noteContext);
    const { notes, getNote, editNote } = context;
    let navigation = useNavigate();
    const [note, setNotes] = useState({ id: "", etitle: "", edescription: "", etag: "Default" })
    useEffect(() => {
        if (localStorage.getItem('token')) {

            getNote();
        }
        else {
            navigation('/login');
        }

    }, [getNote, navigation]);
    const ref = useRef();
    const refClose = useRef();
    const updateNote = (currentNote) => {
        console.log("update clicked");
        ref.current.click();
        setNotes({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });

    }
    const handleClick = (e) => {
        editNote(note.id, note.etitle, note.edescription, note.etag);
        ref.current.click();
        props.showAlert(" Note updated successfully", "success");
    }
    const onChange = (e) => {
        setNotes({ ...note, [e.target.name]: e.target.value });
    }
    return (
        <>
            {/* Button trigger modal */}
            <button type="button" ref={ref} className=" d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            {/* Modal  */}
            <div className="modal fade" id="exampleModal" style={{ fontSize: '20px', transition: '.6s' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={{ fontSize: "20px" }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h3>
                            <i className="fa-solid fa-xmark fa-rotate-180 fa-lg" data-bs-dismiss="modal" aria-label="Close"></i>
                        </div>
                        <form className='my-2 px-3'>
                            <div className="mb-3">
                                <label htmlFor="etitle" className="form-label">Title</label>
                                <input type="text" className="form-control " value={note.etitle} id='title' onChange={onChange} name='etitle' aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="edescription" className="form-label" >Description</label>
                                <input type="text" className="form-control" value={note.edescription} id='edescription' onChange={onChange} name='edescription' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="etag" className="form-label" >Tag</label>
                                <input type="text" className="form-control" value={note.etag} id='etag' onChange={onChange} name='etag' />
                            </div>
                        </form>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary btn-lg" ref={refClose} data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-secondary btn-lg" disabled={note.edescription < 5 || note.etitle < 5} onClick={handleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container  my-5'>
                <h2 className='mt-4'>Your notes</h2>
                <p style={{ fontSize: '1.7rem', marginBlock: '2rem' }}>{notes.length === 0 && "No notes to display"}</p>
                <div className=" d-flex  justify-content-start align-content-center flex-wrap my-3">
                    {notes.map((note) => {
                        return <NoteItem key={note._id} note={note} theme={props.theme} showAlert={props.showAlert} updateNote={updateNote} />;
                    })}

                </div>
            </div>
        </>
    );
};

export default AllNotes;
