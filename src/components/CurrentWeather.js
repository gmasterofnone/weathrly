import React from 'react';

import Controller from './Controller';
import WeatherIcons from '../assets/WeatherIcons';


const CurrentWeather = (props) => {
  // console.log(props.location);
  return (
    <div className='main'>
    <header>
      <article className='left-header'>
        <Controller 
          location={props.location} 
          fetchWeather={props.fetchWeather} 
          fetchZipCode={props.fetchZipCode}
          addLocation={props.addLocation}
          suggestLocation={props.suggestLocation}
          answer={props.answer}
          />
        <div className='date-controller'>
          <p className='date'>{props.hourlyWeather.FCTTIME.weekday_name_abbrev},
            <span> {props.hourlyWeather.FCTTIME.month_name_abbrev}</span>
            <span> {props.hourlyWeather.FCTTIME.mday}</span>
            <span> {props.hourlyWeather.FCTTIME.year}</span>
          </p>
          <button onClick={props.controlPeriod} className='next-day'>+</button>
        </div>
        <div className='time-controller'>
          <p className='time'>{props.currentWeather.observation_time.slice(29, -4)}</p>
          <button onClick={props.controlPeriod} className='next-hour'>+</button>
        </div>
      </article>
      <article className='right-header'>
        <p className='big-temp'>{props.currentWeather.temp_f.toFixed(0)}˚</p>
      </article>
    </header>
    <section className='icon'>
      <img className='big-icon'src={WeatherIcons[props.currentWeather.icon]} alt=''/>
    </section>
    <section className='conditions'>
    <p className='string-conditions'>{props.currentWeather.weather}</p>
    </section>
    </div>
  )
}

export default CurrentWeather;