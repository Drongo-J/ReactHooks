import React, { useState } from 'react'

export default function Person() {
  const [person, setPerson] = useState({
    name: 'Tom Hardy',
    artwork: {
        title: 'Revenant',
        city: 'Baku',
        image : 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/12/22/14/revenant-tom-hardy.jpg'
    }
  })

  function handleNameChange(e){
    setPerson({
        ...person,
        name: e.target.value
    })
  }

  return (
    <div>
        <section>
            <label>
                Name : <input value={person.name} onChange={handleNameChange}></input>
            </label>

            <p>
                <i>{person.artwork.title}</i>
                {' by '}
                {person.name}
                <br/>
                (located in {person.artwork.city})
            </p>
            <img src={person.artwork.image} alt={person.artwork.title}></img>
        </section>
    </div>
  )
}
