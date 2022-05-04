import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";


const CommentsContainer = (props) => {

    return (

        <div id="commentsContainer">
            <CommentForm setComments={props.setComments} currentVideoID={props.currentVideoID} />
            <ul>
                {props.comments.map(comment => <li key={comment._id}> <Comment comment={comment} /> </li>)}
            </ul>
        </div>

    );
}
 

export default CommentsContainer;
