// local reviews data
const reviews = [
  {
    id: 1,
    name: 'patricia greaves',
    job: 'product developer',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80',
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse turpis metus, aliquam id consectetur quis adipiscing elit. Suspendisse turpis metus, aliquam id consectetur quis",
  },
  {
    id: 2,
    name: 'mark west',
    job: 'web designer',
    img: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula id justo commodo feugiat. Integer tellus ligula, interdum placerat libero vulputate, gravida interdum velit. Integer.',
  },
  {
    id: 3,
    name: 'adam spear',
    job: 'intern',
    img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    text: 'Donec hendrerit tortor eget justo porta, at semper purus pellentesque. Posuere dictum, quam diam interdum purus, sed hendrerit magna leo sit consectetur adipiscing elit.',
  },
  {
    id: 4,
    name: 'michael anderson',
    job: 'qa engineer',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'Vivamus aliquam, libero ut posuere dictum, quam diam interdum purus, sed hendrerit magna leo sit amet massa. Vestibulum sagittis velit et aliquam convallis. Nam ultricies.',
  },
];

// elements

const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

// START ITEM
let currentItem = 0;

// SWITCHING CONTENT
window.addEventListener('DOMContentLoaded', function (){
  showPerson(currentItem);
})

// SHOWING PERSON BASED ON ITEM
function showPerson(person) {
  const item = reviews[person]

  img.src = item.img
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// SHOWING NEXT PERSON
nextBtn.addEventListener('click', () => {
  currentItem++;
  if(currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// SHOWING PREVIOUS PERSON
prevBtn.addEventListener('click', () => {
  currentItem--;
  if(currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// SHOWING RANDOM PERSON
randomBtn.addEventListener('click', () => {
  currentItem = Math.floor(Math.random() * reviews.length)

  showPerson(currentItem)
});