import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const PostScore = () => {
    const [score, setScore] = useState(0);

    return (
        <div className="PostScore">
            <button className="IncScore" onClick={() => {setScore(score + 1);}}>^</button>
            <p> {score} </p>
            <button className="DecScore" onClick={() => {setScore(score - 1);}}>v</button>
        </div>
    )
};

export default PostScore