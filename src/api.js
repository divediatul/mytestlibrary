
import axios from "axios";
import store from './configurstore';

/** Server-Side Rendering Function */
const fetchDataForSSR = async () => {
  const response = await axios.get("https://apiscommon.timesnownews.com/request/election/tally?seopath=elections&origin=desktop&pagename=home&hostid=183");
  const data = response.data; // Return data for SSR rendering
  store.dispatch({
    type:'ADD_TALLY_DATA',
    payload:data
  })
};

export default fetchDataForSSR;