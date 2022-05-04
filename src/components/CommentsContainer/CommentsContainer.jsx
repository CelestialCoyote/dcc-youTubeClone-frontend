import Comment from "../CommentForm/CommentForm";


const CommentsContainer = (props) => {

    return (

        <div id="commentsContainer">
            <ul>
                {props.vidoeComments.map(comment => <li key={comment._id}> <Comment comment={comment} /> </li>)}
            </ul>
        </div>

    );
}
 

export default CommentsContainer;
