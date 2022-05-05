import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const AddPost = ({title, onAdd}) => {
    const [usrName, setUsrName] = useState('');
    const [text, setText] = useState('');

    const pre_addPost = (e) => {
        e.preventDefault();

        !usrName ? console.log("No username.") : console.log(usrName);
        !text ? console.log("No text.") : console.log(text);

        if(usrName&&text)onAdd({usrName, text});
        
        setUsrName('');
        setText('');
    };

    return (
        <div className=
            {title === "" ? 
                "form-group" : 
                "form-group " + title.replaceAll(" ", "-")
            }>
            <h2>{title}</h2>
            <form onSubmit={pre_addPost}>
                <div className='mb-3'>
                    <input 
                    type='text' 
                    placeholder="Name..."
                    value={usrName}
                    onChange={(e)=>setUsrName(e.target.value)}
                    />
                </div>
                <div>
                    <
                    textarea className='form-control'
                    rows='5'
                    id='comment' 
                    placeholder="Write a new post..."
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                    />
                </div>
                <input 
                className="btn btn-primary" 
                type='submit'
                />
            </form>
        </div>
    );
}

AddPost.defaultProps = {
    title: "",
};

export const createPost = (name, txt) => {
    return {
        id: 0,
        usrName: name,
        text: txt,
        replies: [],
    };
};

export default AddPost