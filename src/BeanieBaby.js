import { Link } from 'react-router-dom';

export default function BeanieBaby({ beanieBaby }) {
  return (
    <Link to={`/beanies/${beanieBaby.id}`}>
      <div className='beanie-baby'>
        <img className='beanie-img' src={beanieBaby.image}/>
        <p>{beanieBaby.title}</p>
      </div>
    </Link>
  );
}
