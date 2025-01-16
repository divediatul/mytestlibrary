import React,{useState} from 'react';
import { useDispatch, useSelector, Provider } from 'react-redux'
import './App.css';
import store from './configurstore';

function increment(number) {
  return {
    type: 'INCREMENT'
  }
}
function App() {
// const [count, setCount] =useState(0)
const dispatch = useDispatch()
const setCount=()=>{
  console.log('====11111', dispatch);
  
  dispatch({
    type: 'INCREMENT'
  });
}
const counter = useSelector((state) => {
  console.log('=====44444444state', state);
  return state.counter
  
})
console.log('====33333counter', counter);

console.log('counter', counter);

  return (
    <div className="App">
      <button onClick={()=>setCount()}>Clicked on {counter}th time... </button>
    </div>
  );
}

// export default App;


// package/index.js

// import React, { useEffect } from "react";

// /** React Component to Display Data */
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

// /** Exportable Package Component */
const AppWithProvider = ({ data }) => (
    <Provider store={store}>
      <DataTable />
    </Provider>
);



export default AppWithProvider;