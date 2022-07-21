import React from 'react'
import Header from '../../Components/Header/Header'
import snorlax from '../../assets/snorlax.png'
import {ErrorImage, DivError} from './styled'


export default function ErrorPage() {
  return (
    <div>
      <Header/>
      <DivError>
        <ErrorImage src={snorlax}/>
      </DivError>
    </div>
  )
}
