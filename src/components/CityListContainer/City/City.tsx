import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import './City.css'
import { Link } from 'react-router-dom';
import { getCityById } from '../../../service/db';
import { useQuery } from '@apollo/client';
import Loading from '../../Loading/Loading';
export interface props{
  cityId:string
}

const City = (props:props) => {

  const cityId = props.cityId
  const {loading, error, data} = useQuery(getCityById(), {variables: {cityId}})

  if (loading) return <Loading/>
  if (error) return <p>Error :(</p>;

  return data.getCityById.map((data:any) => (
    <div key={data.name}>
      <Link to={`/city/${props.cityId}`}>
        <Card className="city">
        <CardImg className='img' alt='Weather image' src={`http://openweathermap.org/img/wn/${data.weather.summary.icon}@2x.png`}/>
        <CardBody>
          <CardTitle tag="h5">
            {data.name}
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {data.country}
          </CardSubtitle>
          <CardText>
            {Math.round(data.weather.temperature.actual)} °C
          </CardText>
        </CardBody>
        </Card>
      </Link>
    </div>
  ));

}

export default City