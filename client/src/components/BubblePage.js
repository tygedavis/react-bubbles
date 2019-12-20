import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Route } from "react-router";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = props => {
  const [colorList, setColorList] = useState([]);
  //console.log('BubblePage: ', colorList)

  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then(res => {
        //console.log('Res: ', res)
        setColorList(res.data)})
      .catch(err => console.log('Err: ', err))
  }, [])


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
