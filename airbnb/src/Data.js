import card from './assets/image 12.png';
import wedding from './assets/wedding-photography 1.png';
import bike from './assets/mountain-bike 1.png';

export default [
  {
    id: 1,
    title: "Life lessons with Katie Zaferes",
    image: card,
    country: "Kenya",
    price: 136,
    stats: {
      rating: 5.0,
      reviewCount: 6
    }
  },
  {
    id: 2,
    title: "Learn wedding photography",
    image: wedding,
    country: "U.S.A",
    price: 125,
    description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
    stats: {
      rating: 5.0,
      reviewCount: 30
    }
  },
  {
    id: 3,
    title: "Group Mountain Biking",
    image: bike,
    country: "Nigeria",
    price: 50,
    description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
    stats: {
      rating: 4.8,
      reviewCount:2
    }
  }
]