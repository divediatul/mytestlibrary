// import { Provider, useDispatch, useSelector } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import axios from "axios";

// /** Redux Action Types */
// const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
// const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
// const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

// /** Actions */
// const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });
// const fetchDataSuccess = (data) => ({ type: FETCH_DATA_SUCCESS, payload: data });
// const fetchDataFailure = (error) => ({ type: FETCH_DATA_FAILURE, payload: error });

// export const fetchData = () => async (dispatch) => {
//     dispatch(fetchDataRequest());
//     try {
//         const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//         dispatch(fetchDataSuccess(response.data));
//     } catch (error) {
//         dispatch(fetchDataFailure(error.message));
//     }
// };

// /** Reducer */
// const initialState = {
//     loading: false,
//     data: [],
//     error: null,
// };

// const dataReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case FETCH_DATA_REQUEST:
//             return { ...state, loading: true, error: null };
//         case FETCH_DATA_SUCCESS:
//             return { ...state, loading: false, data: action.payload };
//         case FETCH_DATA_FAILURE:
//             return { ...state, loading: false, error: action.payload };
//         default:
//             return state;
//     }
// };

// /** Redux Store */
// const store = createStore(dataReducer, {}, applyMiddleware([thunk]));

/** React Component to Display Data */
const DataTable = ({ data }) => {
    // const dispatch = useDispatch();
    // const { data, loading, error } = useSelector((state) => state);

    // useEffect(() => {
    //     // Fetch data on component mount
    //     dispatch(fetchData());

    //     // Set up interval to fetch data every 10 seconds
    //     const intervalId = setInterval(() => {
    //         dispatch(fetchData());
    //     }, 10000);

    //     // Clean up interval on component unmount
    //     return () => clearInterval(intervalId);
    // }, [dispatch]);

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error}</p>;
    if (!data) return <div>No Data</div>
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item) => (
                    <tr key={item?.id}>
                        <td>{item?.id}</td>
                        <td>{item?.title}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

/** Exportable Package Component */
const AppWithProvider = ({ data }) => (
    // <Provider store={store}>
    <DataTable data={data} />
    // </Provider>
);



export default AppWithProvider;