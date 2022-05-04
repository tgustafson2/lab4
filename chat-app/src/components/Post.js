import PostScore from "./PostScore";

const Post = ({ usrname, text, postID, depth }) => {
    if(depth === 0)
        return;

    return (
        <div className="Post">
            <div className="PostContent">
                <div className="PostText">
                    <h5>{usrname}</h5>
                    <p>{text}</p>
                </div>
                <PostScore postid={postID}/>
            </div>
            <div className="Replies">
                <Post depth={depth-1}/>
            </div>
            <button>Reply</button>
        </div>
    );
};

export default Post