import useForm from '../../useForm';
import axios from 'axios';
import { API_KEY01 } from '../../API_KEYS';
//import searchResults from '../../data/youTubeGeneralSearch';


const SearchBar = (props) => {

    const { formValues, handleChange, handleSubmit } = useForm(handleSearch);

    //const fakeSearchFetch = () => {
    //    props.setYtResults(searchResults.items);
    //};

    async function handleSearch() {
        try {
            //fakeSearchFetch();
            console.log(formValues);
            await axios
                .get(`https://www.googleapis.com/youtube/v3/search?q=${formValues.searchParams}&part=snippet&maxResults=10&key=${API_KEY01}`)
                .then(res => { props.setYtResults(res.data.items) });

        } catch (error) {
            console.log(error.message);
        }
    };

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


export default SearchBar;
