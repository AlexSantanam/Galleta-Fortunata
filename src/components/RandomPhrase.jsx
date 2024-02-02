import React from 'react'

const RandomPhrases = ({quote}) => {

    const {author, phrase } = quote;

  return (
    <div className='phraseAuthor'>
        <p>{phrase}</p>
        <p>fuente: {author}</p>
    </div>
  )
}

export default RandomPhrases;