import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts';

  const fetchPosts = async () => {
    try {
        const response = await axios.get(url);
        return response.data;
    }
    catch(error){
        if(error.response) {
            console.error(`HTTP error: ${error.response.status}`)
        }
        if(error.request) {
            console.error(`Request error: No response received`)
        }
        else{
            console.error("Error:", error.message);
        }
    }
  }

  export default fetchPosts;