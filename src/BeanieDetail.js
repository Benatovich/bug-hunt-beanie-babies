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
    window.location.href === beanieBaby.link;
  }

  return (
      <Link to='/'>Home</Link>
      <div className='beanie-detail' onClick={handleBeanieClick}>
        <div className='beanie-data'>
          <p>{beanieBaby.animal}</p>
          <p>{beanieBaby.title}</p>
          <p>Zodiac: {beanieBaby.astroSign}</p>
          <p> Born on {beanieBaby.birthday}</p>
          <img className='beanie-img' src={beanieBaby.image}/>
          <p>Color: {beanieBaby.color}</p>
          <p>Release Date: {beanieBaby.releaseDate}</p>
          <p>Retirement Date: {beanieBaby.retirementDate}</p>

          <p>Size: {beanieBaby.size}</p>
          <p>Theme: {beanieBaby.theme}</p>
          <p>Sub-Theme: {beanieBaby.subtheme}</p>
          <p>Style Number: {beanieBaby.styleNumber}</p>
          <p>Swing Tag Generation: {beanieBaby.swingTagGeneration}</p>
          <p>Tush Tag Generation: {beanieBaby.tushTagGeneration}</p>
        </div>
      </div>  
  );
}
