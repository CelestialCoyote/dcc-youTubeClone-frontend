import CommentsContainer from "../CommentsContainer/CommentsContainer";

const Comment = (props) => {

    return (

        <div className="">
            <p>{props.comment.text}</p>
        </div>

    );
}
 

export default Comment;
