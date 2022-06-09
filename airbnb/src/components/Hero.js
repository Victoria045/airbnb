import group from '../assets/Group 77.png';

export default function Hero() {
  return(
    <div className='hero-section'>
      <div className='hero-img'>
        <img src={group} />
      </div>
      <div >
      <h1>Online Experiences</h1>
      <p>Join unique interactive activities led by
         one-of-a-kind hosts--all without leaving
         home.
      </p>
      </div>
    </div>
  )
}