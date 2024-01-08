import React, { useContext, useState } from 'react'
import noteContext from '../../context/notes/NoteContext';
import './Home.css';
import AllNotes from '../AllNotes';

function Home(props) {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNotes] = useState({ title: "", description: "", tag: "" })
    const handleClick = (e) => {

        e.preventDefault()
        addNote(note.title, note.description, note.tag);
        props.showAlert(" Added successfully", "success");
        setNotes({ title: "", description: "", tag: "" });
    }
    const onChange = (e) => {
        setNotes({ ...note, [e.target.name]: e.target.value });
    }
    return (
        <>
            <div className={`cont ${props.theme}`} style={{ marginTop: "5rem", background: 'transparent' }}>
                <h1>Add a note</h1>
                <form className='mb-2 mt-4' style={{ fontSize: "2rem" }}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control " style={{ height: "4rem",fontSize:'1.6rem' }} id='title' name='title' minLength={3} value={note.title} required onChange={onChange} aria-describedby="emailHelp" />
                    </div>
                    <div className="my-4">
                        <label htmlFor="description" className="form-label" >Description</label>
                        <input type="text" className="form-control" id='description' style={{ height: "13rem",fontSize:'1.6rem' }} minLength={5} value={note.description} required onChange={onChange} name='description' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label" >Tag</label>
                        <input type="text" className="form-control" id='Tag' style={{ height: "4rem",fontSize:'1.6rem' }} value={note.tag} required onChange={onChange} name='tag' />
                    </div>
                    <button type="submit" disabled={note.description.length < 5 || note.description.length < 5} className="button-84 my-3" onClick={handleClick}>Create Note</button>

                </form>
                <AllNotes showAlert={props.showAlert} theme={props.theme} />
            </div>
        </>

    )
}

export default Home
