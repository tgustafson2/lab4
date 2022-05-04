import { useState } from 'react'
import { createPost } from "./AddPost"
import AddPost from "./AddPost"
import PostScore from "./PostScore";

const Post = ({ post, depth }) => {
    const [isReplying, toggleReply] = useState(false);
    const [replies, modReplies] = useState(post.replies);
    if(depth === 0)
        return;

    // New replies get appended (or prepended)
    // when using the reply button below 
    function toggle () {
        toggleReply(!isReplying);
        console.log(!isReplying, " -> ", isReplying, "[", post.id, "]");
    }

    function p_addReply ( post ) {
        toggleReply(!isReplying);
        addReply(post);
    }

    function addReply ( post ) {
        console.log("Post UserName: ", post.usrName,
                    "Post Text: ", post.text);
        console.log(replies);

        const reply = createPost(post.usrName, post.text);
        modReplies([reply, ...replies]);
    }

    return (
        <div className="Post">

            <div className="PostContent">
                <div className="PostText">
                    <h5>{post.usrName}</h5>
                    <p>{post.text}</p>
                </div>
                <PostScore postid={post.id}/>
            </div>

            <div className="Replies">
                {replies.map((reply, index)=>
                    <Post 
                    post={reply} 
                    depth={depth-1} 
                    key={index}/>
                )}
            </div>
            {depth > 1 ? <button onClick={toggle}>Reply</button> : <></>}
            {isReplying ? <AddPost onAdd={p_addReply}/> : <></>}
        </div>
    );
};

export default Post