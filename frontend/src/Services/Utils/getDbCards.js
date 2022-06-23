import axios from 'axios';
import HOST from '../config';

export const getDbCards = async () => {
    
    let data = await axios.get(`${HOST}/api/dbCard/`)
      .then((answ) => answ.data)
      .catch((err) => console.log(err.toJSON()));
    return data;
};

export const deleteSelectData = async (idArray) => {
    
    let data = await axios.get(`${HOST}/api/dbCard/delete?idArr=${JSON.stringify(idArray)}`)
      .then((answ) => answ.data)
      .catch((err) => console.log(err.toJSON()));
    return data;
};

export const returnDbInitialState = async () => {
    
  let data = await axios.post(`${HOST}/api/dbCard/return`)
    .then((answ) => console.log(answ.data))
    .catch((err) => console.log(err.toJSON()));
  
};

export const getDbConstCards = async () => {
    
  let data = await axios.get(`${HOST}/api/dbCard/constCard`)
    .then((answ) => answ.data)
    .catch((err) => console.log(err.toJSON()));
  return data;
};

export const updateDbCards = async (newData) => {
  let data = await axios.post(`${HOST}/api/dbCard/updateDb`,{data:JSON.stringify(newData)})
    .then((answ) => console.log(answ.data))
    .catch((err) => console.log(err.toJSON()));
};
