import useForm from "../../useForm";


const Comments = (props) => {

    const { formValues, handleChange, handleSubmit } = useForm(props.handleSearch);

    return (

        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label id="searchParams">Search YouTube
                    <input
                        aria-labelledby="searchParams"
                        name="searchParams"
                        placeholder="Search Text"
                        value={formValues.searchParams}
                        onChange={(e) => handleChange(e)} />
                </label>
                <label id="Seach">
                    <input
                        aria-labelledby="Search"
                        type="Submit" />
                </label>
            </div>
        </form>
    );
};


export default Comments;
