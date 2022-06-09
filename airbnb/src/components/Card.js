// import card from '../assets/image 12.png';
import star from '../assets/Star 1.png';

export default function Card({image, rating, reviewCount, country, title, price}){
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  if (hours < 12) {
    timeOfDay = 'Morning!'
  }
  else if (hours >= 12 && hours < 17) {
    timeOfDay = 'Afternoon!'
  } else {
    timeOfDay = 'Evening!'
  }

  const nums = [1,2,3,4,5]
  const squares = nums.map(num => {
    return num * num
  })
  console.log(squares )
  const capitalized = ['alice', 'jane', 'bob', 'mary']
  const cap = capitalized.map(captilize => {
    return captilize[0].toUpperCase() + captilize.slice(1)
  })
  console.log(cap)
  return(
    <div className='card-wrap'>
      <div className=''>
        <div className='img-wrap'>
          <img className='cover-img' src={image} alt='...'/>
          <button className='btn btn-white'>SOLD OUT</button>
        </div>
        <div className='text-wrap'>
          <img src={star} className='star' />
          <p>{rating}<span className='usa'> ({reviewCount}) ● {country}</span></p>
        </div>
        <p className='zef'>{title}</p>
        <p><strong>From ${price}</strong> / person</p>
        <p>It is currently {timeOfDay}</p>
        <p>{squares}</p>
        <p>{cap}</p>
      </div>
    </div>
  )
}