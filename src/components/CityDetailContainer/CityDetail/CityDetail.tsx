import React from 'react'
import {useQuery} from '@apollo/client'
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getCityById } from '../../../service/db';
import './CityDetail.css'
import BackButton from '../../Buttons/BackButton/BackButton';
import Loading from '../../Loading/Loading';
export interface props{
    cityId:string | undefined
}

const CityDetail = (props:props) => {

    const cityId = props.cityId
    const { loading, error, data} = useQuery(getCityById(), {variables: {cityId}})

    if (loading) return <Loading/>
    if (error) return <p>Error :(</p>;

    return data.getCityById.map((data:any) => (
    <div key={data.name}>   
        <Card className="cityDetail">
        <CardImg className='img' alt='Weather image' src={`http://openweathermap.org/img/wn/${data.weather.summary.icon}@2x.png`}/>
        <CardBody>
        <CardTitle tag="h5">
            {data.name}
        </CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
            {data.country}
        </CardSubtitle>
        <CardText>
            Temperatura: {Math.round(data.weather.temperature.actual)} °C
        </CardText>
        <CardText>
            Sensacion: {Math.round(data.weather.temperature.feelsLike)} °C
        </CardText>
        <CardText>
            Viento: {data.weather.wind.speed} Km/h
        </CardText>
        <CardText>
            Humedad: {data.weather.clouds.humidity}%
        </CardText>
        </CardBody>
        </Card>
        <Link to="/"><BackButton/></Link>
    </div>
    ));

}

export default CityDetail