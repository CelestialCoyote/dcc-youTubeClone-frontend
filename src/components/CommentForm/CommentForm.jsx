import useForm from "../../useForm";


const CommentForm = (props) => {

    const { formValues, handleChange, handleSubmit } = useForm(props.handleSearch);

    return (

        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label id="commentText">Search YouTube
                    <input
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
