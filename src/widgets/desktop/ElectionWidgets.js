import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ElectionTally from './components/ElectionTally.js';
import StateTally from './components/StateTally.js';
import ArticleTally from './components/ArticleTally.js';
import axios from "axios";

const Widgets = {
  electionHome: ElectionTally,
  statepage: StateTally,
  articlePage: ArticleTally
};

const ElectionWidgets = ({pageName = ''}) => {
  const componentData  =  useSelector((state) => {  return state.tally});
  if(!pageName) return <>Wrong Call</>
  const Widget =  Widgets[pageName];
  
  
  // const dispatch = useDispatch();
  
  // useEffect(()=>{
  //   const fetchData = async () => {
  //       const apiUrl =  "https://apiscommon.timesnownews.com/request/election/tally?seopath=elections&origin=desktop&pagename=home&hostid=183";
  //       const response =  await axios.get(apiUrl);
  //       const data = response.data
  //       dispatch({
  //         type:'ADD_TALLY_DATA',
  //         payload:data
  //       });
  //   }
  // const intervalId = setInterval(() => {
  //     fetchData();
  // }, 10000);

  // // Clean up interval on component unmount
  // return () => clearInterval(intervalId);
  // }, [dispatch])
  return (
    <>
        <section>
          <div>
            <Widget 
              componentData={componentData?.response?.sections?.election_pie_chart} 
              pageNameCheck={pageName}
            />
            
          </div>
        </section>
      
    </>
  );
};
export default ElectionWidgets;