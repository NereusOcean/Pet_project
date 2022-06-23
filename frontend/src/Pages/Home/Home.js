import React, { useEffect, useState } from 'react'
import Strips from '../../Components/Card/RenderStrips.component'
import { getDbCards, deleteSelectData, getDbConstCards, updateDbCards } from '../../Services/Utils/getDbCards';
import { enumFilter, filter } from '../../Services/Utils/filter/filterEnum';
import "./Home.css"
import generateCards from '../../Components/Card/generateCards';
import { useSelector } from 'react-redux';



function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [pcVersion, setPcVersion] = useState();
  const size = useSelector(state => state.sizeReducer.size);

  if (size > 1040 && pcVersion != false) setPcVersion(false);
  else if (size < 1040 && pcVersion != true) setPcVersion(true);


  useEffect(() => {
    setQueryFilter();
  }, [data]);

  useEffect(() => {
    document.addEventListener('keydown', deleteSelected, false);
    getDb();
    return function clean() {
      localStorage.removeItem('allocated');
      document.removeEventListener('keydown', deleteSelected, false);
    }
  }, []);

  const getDb = async () => {
    let temp = await getDbCards();
    setData(temp);
    setFilteredData(temp);
  }

  const setFilter = (type) => {
    let queryParams = new URLSearchParams(window.location.search);

    if (type === enumFilter.ShowAll) setFilteredData(data);
    else setFilteredData(filter(data, type));

    queryParams.set("filter", type);
    window.history.replaceState(null, null, "?" + queryParams.toString());
  };

  const setQueryFilter = () => {
    let queryParams = new URLSearchParams(window.location.search);
    let type = queryParams.get("filter")
    if (type && (data.length != 0)) {
      setFilter(type);
    }
  };

  const deleteSelected = async (e) => {
    if (e.keyCode === 46) { //delete button
      let selected = JSON.parse(localStorage.getItem("allocated"));
      localStorage.removeItem('allocated');
      let res;
      if (selected) {
        res = await deleteSelectData(selected);
        console.log(res);
        setFilteredData(res);
        setData(res);
        console.log(res);
      } else console.log("Nothing to delete.")
    }
  };

  const loadMore = async () => {
    let constData = await getDbConstCards();
    let newData = generateCards(data, constData);
    await updateDbCards(newData);
    setData(newData);
    setFilteredData(newData);
  };

  return (
    <div id='content'>
      {!pcVersion &&
        <div id="filter">
          <ul>
            <li onClick={() => setFilter(enumFilter.ShowAll)} key={enumFilter.ShowAll}>Show All</li>
            <li onClick={() => setFilter(enumFilter.Design)} key={enumFilter.Design}>Design</li>
            <li onClick={() => setFilter(enumFilter.Branding)} key={enumFilter.Branding}>Branding</li>
            <li onClick={() => setFilter(enumFilter.Illustration)} key={enumFilter.Illustration}>Illustration</li>
            <li onClick={() => setFilter(enumFilter.Motion)} key={enumFilter.Motion}>Motion</li>
          </ul>
        </div>
      }
      {pcVersion &&
        <select id='selectFilter' onChange={(e) => setFilter(e.target.value)}>
          <option value={enumFilter.ShowAll}>Show All</option>
          <option value={enumFilter.Branding}>Branding</option>
          <option value={enumFilter.Illustration}>Illustration</option>
          <option value={enumFilter.Design}>Design</option>
          <option value={enumFilter.Motion}>Motion</option>
        </select>
      }


      <div id="cards" style={pcVersion ? { maxWidth: "845px" } : {}}>
        <Strips data={filteredData} filterFunc={setFilter}/>
      </div>
      <button id="loadMore" onClick={() => loadMore()}>Load More</button>
    </div>
  )
}

export default Home