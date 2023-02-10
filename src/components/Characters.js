import React from 'react'

function Characters({characters=[]}) {

  return (
    <div className='row'>
        {characters.map((item, index)=>(

                <div key={index} className='col mb-4 text-white'>
                <div className='card my-3 card-style-2 card-style' style={{minWidth: '200px'}}>
                <img src={item.image} alt=''/>
                <div className='card-body'>
                <h3 className='card-title text-pink'>{item.name}</h3>
                <h5 className=''>{item.gender}</h5>
                < hr/>
                <p>Origin: {item.origin.name}</p>
                <p>Location: {item.location.name}</p>
                </div>
                </div>
                </div>

  ))}
    </div>
  );
};

export default Characters