import React from 'react'
import './style.scss'

function Card({data}) {
    const{name,jobTittle,jobDescription,button,profilePic}=data;
  return <>
    <div className='card-field__container'>

        <div className='card-field__container__uppercase'>
            <div className='card-field__container__uppercase__image'>
                <img className='card-field__container__uppercase__image__pic' src={profilePic} alt='profic-pic'/>
            </div>
        
        </div>
        <div className='card-field__container__lowercase'>
            <div className='card-field__container__lowercase__tittle'>
                <h1 className='card-field__container__lowercase__tittle__name'>{name}</h1>
                <h4 className='card-field__container__lowercase__tittle__job'>{jobTittle}</h4>

            </div>
            <p className='card-field__container__lowercase__description'>{jobDescription}</p>
            <button className='card-field__container__lowercase__btn'>{button}</button>

        
        </div>
   

    </div>

  

  </>
}

export default Card;