import useForm from "../../useForm";


const CommentForm = (props) => {

    const { formValues, handleChange, handleSubmit } = useForm(props.handleSearch);

    return (

        <form onSubmit={(e) => handleSubmit(e)}>
            <div id="commentForm">
                <label id="commentTextLabel">Add Comment
                    <input
                        id="commentText"
                        aria-labelledby="commentText"
                        name="commentText"
                        placeholder="Comment Text"
                        value={formValues.commentText}
                        onChange={(e) => handleChange(e)} />
                </label>
                <label id="Comment">
                    <input
                        aria-labelledby="Comment"
                        type="Submit" />
                </label>
            </div>
        </form>
    );
};


export default CommentForm;
