import React, {useState} from "react";
import ElectionWidgets from "./widgets/desktop/ElectionWidgets.js";
// import DataTable from "./widgets/DataTable.jsx";
import { Provider } from 'react-redux';
import store from './configurstore';


const AppWithProvider = ({pageName}) => {
  
    return (
      <Provider store={store}>
          <ElectionWidgets  pageName={pageName} />
      </Provider>
    )
}


export default AppWithProvider;