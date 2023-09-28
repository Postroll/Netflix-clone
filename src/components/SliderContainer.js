import React from 'react'
import styled from 'styled-components'

import MovieSlider from './MovieSlider'

const SliderContainer = ({movies}) => {

    const getMoviesBetween = (start, end) =>{
        if (movies == undefined)
            return null;
        return movies.slice(start, end);
    }

    return (
        <SliderWrapper>
            <MovieSlider data={getMoviesBetween(0, 10)} title="Only On Netflix"/>
            <MovieSlider data={getMoviesBetween(10, 20)} title="On On Netflix"/>
            <MovieSlider data={getMoviesBetween(20, 30)} title="On On Netflix"/>
            <MovieSlider data={getMoviesBetween(30, 40)} title="On On Netflix"/>
            <MovieSlider data={getMoviesBetween(40, 50)} title="On On Netflix"/>
            <MovieSlider data={getMoviesBetween(50, 60)} title="On On Netflix"/>
            <MovieSlider data={getMoviesBetween(60, 70)} title="On On Netflix"/>
            <MovieSlider data={getMoviesBetween(70, 80)} title="On On Netflix"/>
        </SliderWrapper>
    )
}

const SliderWrapper = styled.div`

`

export default SliderContainer