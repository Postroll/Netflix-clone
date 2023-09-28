import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../components/Card';
import TopNav from '../components/TopNav';
import { fetchMovies, getGenres } from '../store';
import SliderContainer from '../components/SliderContainer';

const Netflix = () =>{
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const genresLoaded = useSelector((state)=>state.netflix.genresLoaded);
  const movies = useSelector((state)=>state.netflix.movies);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getGenres())
  },[])

  useEffect(()=>{
    // console.log(genresLoaded);
    if (genresLoaded)
      dispatch(fetchMovies({type:"all"}));
  })

  window.onscroll=()=>{
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return ()=>{window.onscroll = null}
  }

  // console.log(movies)

  return (
    <HeroContainer>
      <div className='hero'>
        <TopNav isScrolled={isScrolled}/>
        <img 
          className='background-image'
          src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg'
          alt='no image'
        />
        <div className='container'>
          <div className='title'>
            <h1>Iron man</h1>
            <p>werfoihefw389u0yhfewiu owefuew wef8yu8e8uy e8eur r8</p>
          </div>
          <div className='buttons'>
            <button className='playBtn' onClick={() => navigate('/player')}>Play</button>
            <button className='moreBtn'>More</button>
          </div>
        </div>
      </div>
      <SliderContainer movies={movies}/>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  background-color: black;
  .hero{
    position: relative;
    .background-image{
      filter: brightness(40%);
    }
    img{
      height: 100%;
      width: 100%;
    }
    .container{
      position: absolute;
      bottom: 1rem;
      .title{
        h1{
          margin-left: 5rem;
          text-transform: uppercase;
          font-size: 73px;
          background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p{
          margin-bottom: 2rem;
          width: 640px;
          margin-left: 5rem;
          font-family: "lexend Deca", sans-serif;
          color: white;
        }
      }
      .buttons{
        display: flex;
        margin: 1rem 5rem;
        gap: 2rem;
      }
      .playBtn{
        display: flex;
        align-items: center;
        justify-content: center;
        color: red;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border-radius: 1rem;
        border: none;
        font-size: 1.4rem;
        gap: 1rem;
        cursor: pointer;
      }
      .moreBtn{
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: black;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border-radius: 1rem;
        border: .1rem solid white;
        font-size: 1.4rem;
        gap: 1rem;
        cursor: pointer;
      }
    }
  }
`

export default Netflix