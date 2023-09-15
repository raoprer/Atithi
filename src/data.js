import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import img5 from './images/5.jpg'
import img6 from './images/6.jpg'

export const pageLinks = [
  { id: 1, href: '#home', title: 'home' },
  { id: 2, href: '#about', title: 'about' },
  { id: 3, href: '#services', title: 'services' },
  { id: 4, href: '#tours', title: 'tours' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'explore local culture',
    text: '',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'connect to Indian heritage',
    text: '',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: '',
  },
]

export const tours = [
  {
    id: '1',
    img: img1,
    date: 'august 26th, 2020',
    title: 'Bangali Culture',
    text: 'Bengali culture, hailing from West Bengal, India, and Bangladesh, is celebrated for its literary luminaries like Rabindranath Tagore and cultural events like Durga Puja. It is also known for its rich tradition of music, art, and a love for traditional sweets.',
    place: 'West Bengal',
    days: 6,
    cost: 'Rs 12000',
  },
  {
    id: '2',
    img: img2,
    date: 'October 1th, 2020',
    title: 'Punjabi Culture',
    text: 'Punjabi culture, rooted in Punjab, India, and Pakistan, is vibrant, influenced by Sikh traditions, and renowned for Bhangra dance, traditional attire, and flavorful cuisine like butter chicken and sarson da saag. The Golden Temple in Amritsar holds deep spiritual and cultural significance.',
    place: 'Punjab',
    days: 11,
    cost: 'Rs 14000',
  },
  {
    id: '3',
    img: img3,
    date: 'September 15th, 2020',
    title: 'Tulu Culture',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod  exercitationem fugit, qui corporis.',
    place: 'karnataka',
    days: 8,
    cost: 'Rs 5000',
  },
  {
    id: '4',
    img: img4,
    date: 'December 5th, 2019',
    title: 'Tamil Culture',
    text: 'Tamil culture, primarily from the southern Indian state of Tamil Nadu, is marked by its rich literary heritage with classical works like the Tirukkural and Sangam poetry. It is known for its classical music, dance forms like Bharatanatyam, and a distinct cuisine featuring dishes like dosa, idli, and Chettinad curries.',
    place: 'tamil nadu',
    days: 20,
    cost: 'Rs 3300',
  },
  {
    id: '5',
    img: img5,
    date: 'august 26th, 2020',
    title: 'Bodo',
    text: 'Bodo culture is rooted in the Bodo ethnic community, primarily found in the northeastern Indian states of Assam, Bodoland Territorial Region, and neighboring regions. It is characterized by traditional practices, such as Bwisagu, their most prominent festival, and their distinctive handwoven textiles, like the Dokhona and Jwmgra.',
    place: 'assam',
    days: 6,
    cost: 'Rs 3000',
  },
  {
    id: '6',
    img: img6,
    date: 'august 26th, 2020',
    title: 'kashmir',
    text: 'Kashmiri culture, originating from the picturesque Kashmir Valley in the Indian subcontinent, is characterized by its unique blend of Indo-Persian influences. It is renowned for its traditional crafts like Pashmina shawls and Papier-mâché, as well as its delectable cuisine featuring dishes like Rogan Josh and Wazwan feasts, all set against a backdrop of stunning natural beauty.',
    place: 'jammu & kashmir',
    days: 6,
    cost: 'Rs 2100',
  },
]
