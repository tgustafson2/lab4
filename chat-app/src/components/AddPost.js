import { useState } from 'react'

const AddPost = ({title, onAdd}) => {
    const [usrName, setUsrName] = useState('');
    const [text, setText] = useState('');

    const pre_addPost = (e) => {
        e.preventDefault();

        !usrName ? console.log("No username.") : console.log(usrName);
        !text ? console.log("No text.") : console.log(text);

        onAdd({usrName, text});
        
        setUsrName('');
        setText('');
    };

    return (
        <div className=
            {title === "" ? 
                "AddPost" : 
                "AddPost " + title.replaceAll(" ", "-")
            }>
            <h2>{title}</h2>
            <form onSubmit={pre_addPost}>
                <div>
                    <input 
                    type='text' 
                    placeholder="Name..."
                    value={usrName}
                    onChange={(e)=>setUsrName(e.target.value)}
                    />
                </div>
                <div>
                    <input 
                    type='text' 
                    placeholder="Write a new post..."
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                    />
                </div>
                <input 
                className="Submit-Button" 
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