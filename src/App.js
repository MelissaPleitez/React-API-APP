import React, { useEffect, useState } from 'react';
import Menu from './components/Menu'
import Banner from './components/Banner'
import Characters from './components/Characters';
import Pagination from './components/Pagination';



function App() {

  //We are saving the pagination
  const [info, setInfo] = useState({})


  //We are saving the characters
  const [characters, setCharacters] = useState([]);



  const url_API = "https://rickandmortyapi.com/api/character";

  // Using fetch to call the API with the characters and the pagination
  const APICharacters = (url_API) => {
    fetch(url_API)
      .then(response => response.json())
      .then((data) => {
        setCharacters(data.results)
        setInfo(data.info)
      })
      .catch(error => console.log(error))
    // .then(data => setCharacters(data.results))

  };

  //creating the two functions needed for the pagination

  const onPrevious = () => {

    APICharacters(info.prev);
  }


  const onNext = () => {
    APICharacters(info.next);
  }


  //hook which use the API function previously created

  useEffect(() => {
    APICharacters(url_API);
  }, [])



  return (
    <>
      <Menu brand="React API APP" />

      <div className='container' >
        <Banner />
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        <Characters characters={characters} />
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      </div>

    </>
  );

}

export default App;
