// function Addmovie() {
//   return (
//     <div class="Movie-boxes">
//       <div class="name">
//         <input value="text" placeholder="Name" />
//       </div >
//       <div class="posters">
//         <input value="text" placeholder="Poster" />
//       </div>
//       <div class="rating">
//         <input value="text" placeholder="Rating" />
//       </div>
//       <div class="summary">
//         <input value="text" placeholder="Summary" />
//       </div>
//       <button onClick={Addmovie}>AddMovie</button>
//       <div class="movie-list">
//         {Movie.map((mv, index) => (
//           <Movie key={index} movie={mv} id={index} />
//         ))}
//       </div>
//     </div>
//   );
// }
function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "25px",
    width: "250px",
    marginTop: "10px",
  };
  return <div style={styles}>

  </div>;
}
