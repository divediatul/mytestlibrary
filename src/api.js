
import axios from "axios";
import store from './configurstore';

/** Server-Side Rendering Function */
 const fetchDataForSSR = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const d = response.data; // Return data for SSR rendering
  store.dispatch({
    type:'ADD_TODO',
    payload:d
  })
  return d;
};

export default fetchDataForSSR;