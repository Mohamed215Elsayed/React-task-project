import { useEffect, useState } from "react";
import axios from "axios";
import style from "./Home.module.css";
// import { Await } from "react-router-dom";

function Home() {
  let [trendingMovies, setTrendingMovies] = useState([]);

  async function getTrendingMovies() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50`
    );
    console.log(data);
    setTrendingMovies(data.results);
  }
  // const [ count , setCount ]=useState(0);
  // const [ name , setName ]=useState('');
  // const [ isAdmin , setisAdmin ]=useState(false);

  //infinite loop  so it call render and so on
  // useEffect(()=>{
  //    setCount(Math.random());
  // })
  //    useEffect(()=>{
  // console.log('commponent did amount');

  // return ()=>{
  //    console.log('commponent will amount');
  // }
  //    },[])

  //      useEffect(()=>{
  //       if(count===0 && name === ''){
  //          return ;
  //       }
  // console.log('commponent count or name will be updated');
  // },[count,name]);

  // function changeCount(){
  //    setCount(Math.random());
  // }

  // function changeName(){
  //    setName(Math.random());
  // }

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <>
      {/* <h4>count: {count}</h4> */}
      {/* <h2>Home page</h2> */}
      {/* <button className="btn btn-info w-100 my-2" onClick={changeCount}>changeCount</button>
   <button className="btn btn-info w-100 my-2" onClick={changeName}>changeName</button> */}

      {/* trending movies */}
      {/* inline style */}
      <h2 style={{ color: "red", background_color: "green" }}>
        home component
      </h2>
      <div className="row">
        {trendingMovies.length > 0 ? (
          trendingMovies.map((movie, index) => (
            <div key={index} className="col-md-3">
              <div className="movie">
                {/* <img  className="w-100" src={'https://image.tmdb.org/t/p/w500'+movie.poster_path} /> */}

                <h6 className="fw-bold">{movie.title}</h6>
                {/* <p className="test">{movie.overview}</p> */}
                <p className={`${style.test} ${style.color}`}>
                  {movie.overview}
                </p>
              </div>
            </div>
          ))
        ) : (
          <i className="fas fa-spinner  fa-sapin fa-2x"></i>
        )}
      </div>
    </>
  );
}
export default Home;
