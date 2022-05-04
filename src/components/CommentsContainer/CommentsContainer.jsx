import axios from "axios";
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../CommentForm/CommentForm";


const CommentsContainer = (props) => {

    async function handleGetComments() {
        try {
            await axios
                .get(`http://localhost:3007/api/comments/videoID/${props.currentVideoID}`)
                .then(r => { props.setYtResults(r.data.items) });

        } catch (error) {
            console.log(error.message);
        }
    };

    return (

        <div id="commentsContainer">
            <CommentForm />
            <ul>
                {props.videoComments.map(comment => <li key={comment._id}> <Comment comment={comment} /> </li>)}
            </ul>
        </div>

    );
}
 

export default CommentsContainer;
