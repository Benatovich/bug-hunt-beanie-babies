import { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { getSingleBeanie } from './services/fetch-utils';

export default function BeanieDetail() {
  const [{ 
    animal,
    title,
    astroSign,
    birthday,
    image,
    color,
    releaseDate,
    retirementDate,
    size,
    link,
    theme,
    subtheme,
    styleNumber,
    swingTagGeneration,
    tushTagGeneration,
  }, setBeanieBaby] = useState({});
  const match = useRouteMatch();

  useEffect(async () => {
    const beanie = await getSingleBeanie(match.params.id);

    setBeanieBaby(beanie);

  }, [match.params.id]);

  function handleBeanieClick() {
    window.location.href === link;
  }

  return (
    <><Link to='/'>Home</Link><div className='beanie-detail' onClick={handleBeanieClick}>
      <div className='beanie-data'>
        <p>{animal}</p>
        <p>{title}</p>
        <p>Zodiac: {astroSign}</p>
        <p> Born on {birthday}</p>
        <img className='beanie-img' src={image} />
        <p>Color: {color}</p>
        <p>Release Date: {releaseDate}</p>
        <p>Retirement Date: {retirementDate}</p>

        <p>Size: {size}</p>
        <p>Theme: {theme}</p>
        <p>Sub-Theme: {subtheme}</p>
        <p>Style Number: {styleNumber}</p>
        <p>Swing Tag Generation: {swingTagGeneration}</p>
        <p>Tush Tag Generation: {tushTagGeneration}</p>
      </div>
    </div></>  
  );
}
