import logo from './logo.svg';
import './App.css';

function App() {
  const movies=[
    {
      pic:"https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      name:"RRR",
      rating:"⭐ 8.8",
      content : "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."

    },

    {
      pic:"https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      name:"Iron Man 2",
      rating:"⭐ 7",
      content : "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."

    },

    {
      pic:"https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      name:"No Country for Old Men",
      rating:"⭐ 8.1",
      content : "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."

    },

    {
      pic:"https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      name:"Jai Bheem",
      rating:"⭐ 8.8",
      content : "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case"

    },

    {
      pic:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      name:"The Avengers",
      rating:"⭐ 8",
      content : "Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name."

    },

    {
      pic:"https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      name:"Intersteller",
      rating:"⭐ 8.6",
      content : "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."

    },

    {
      pic:"https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      name:"Bahubali",
      rating:"⭐ 8",
      content : "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."

    },

    {
      pic:"https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      name:"Ratatouille",
      rating:"⭐ 8",
      content : "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."

    },

    {
      pic:"https://a10.gaanacdn.com/gn_img/albums/9En3peWXDV/En3pYMLPWX/size_xxl_1535086576.webp",
      name:"96",
      rating:"⭐ 8.6",
      content : "K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart."

    },

    {
      pic:"https://m.media-amazon.com/images/I/71miTEyKvYL._SL1112_.jpg",
      name:"M.S. Dhoni: The Untold Story",
      rating:"⭐ 7.9",
      content : "M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams."

    },

    {
      pic:"https://i.pinimg.com/originals/0f/a9/af/0fa9afc141f0096e064a5ab1854b36f1.jpg",
      name:"Dark Knight",
      rating:"⭐ 9",
      content : "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."

    },

    {
      pic:"https://m.media-amazon.com/images/I/817FBcXLN2L._SL1500_.jpg",
      name:"King Kong",
      rating:"⭐ 9",
      content : "Peter Jackson's expansive remake of the 1933 classic follows director Carl Denham (Jack Black) and his crew on a journey from New York City to the ominous Skull Island to film a new movie. Accompanying him are playwright Jack Driscoll (Adrien Brody) and actress Ann Darrow (Naomi Watts), who is whisked away by the monstrous ape, Kong, after they reach the island. The crew encounters dinosaurs and other creatures as they race to rescue Ann, while the actress forms a bond with her simian captor."

    },
  ];

  return (
    <div className="Movie">

      { movies.map((pc)=> (
        <Cinema pic={pc.pic} name={pc.name} rating={pc.rating} 
        content={pc.content} />
      ))}
    </div>
  )
}

export default App;

function Cinema(props){
  return(
    <div className="outer">
      <img className="poster" src={props.pic} alt={props.name}/>
      <div className="inner">
        <h3>{props.name}</h3>
        <p>{props.rating}</p>
      </div>
      <p className="cont">{props.content}</p>
    </div>
)
}
