import React, { useState, useEffect } from 'react'
import "./pictureStrips.css"

const checkPng = "./picImage/inBasket.png";

function PictureStrips(props) {
  const [selectState, setSelectState] = useState(false);


  // const putInBasket = () => {
  //   let arr = (JSON.parse(localStorage.getItem('wantBuy')) || []);

  //   arr.push(Number(strip.id));

  //   localStorage.setItem("wantBuy", JSON.stringify(arr));
  //   setButtonState("in basket");
  // }

  // const getFromBasket = () => {
  //   let arr = (JSON.parse(localStorage.getItem('wantBuy')) || []);

  //   let newarr = arr.filter((elem) => elem !== Number(strip.id));

  //   localStorage.setItem("wantBuy", JSON.stringify(newarr));
  //   setButtonState("");
  // };

  // useEffect(() =>{

  //   let arr = (JSON.parse(localStorage.getItem('wantBuy')) || []);
  //   let searchIndex = arr.indexOf(Number(strip.id));
  //   if(searchIndex !== -1) setButtonState("in basket");


  // },[])

  let strip = props.data;
  //
  const selectCard = () => {
    let arr = (JSON.parse(localStorage.getItem('allocated')) || []);

    arr.push(Number(strip.id));

    localStorage.setItem("allocated", JSON.stringify(arr));
    setSelectState(true);
  };


  const unSelectCard = () => {
    let arr = (JSON.parse(localStorage.getItem('allocated')) || []);

    let newarr = arr.filter((elem) => elem !== Number(strip.id));

    localStorage.setItem("allocated", JSON.stringify(newarr));
    setSelectState(false);
  };

  useEffect(() => {
    let arr = (JSON.parse(localStorage.getItem('allocated')) || []);
    if (arr.find(item => item == strip.id) != undefined) {
      setSelectState(true);
    }
  }, [window.location.search]);

  return (
    <div className={selectState ? 'card selectCard' : 'card'}>
      <div id="box" onClick={() => selectState ? unSelectCard() : selectCard()}>
        <img src={strip.imagePath} />
      </div>
      <div className='categoryAndName'>
        <div className='category' onClick={() => props.filterFunc(strip.category)}>
          <div id="cardCategoryText">{strip.category}</div>
        </div>
        <div className='name'>{strip.name}</div>
      </div>
    </div>
  )
}

export default PictureStrips