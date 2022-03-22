import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data,setData] = useState([
    {
      image: 'https://upload.wikimedia.org/wikipedia/vi/thumb/1/18/Tenet_poster_VN.jpeg/220px-Tenet_poster_VN.jpeg' ,
      name : 'TENET' ,
      money : 2000 ,
      ticket :1689 
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/en/0/03/Onward_poster.jpg' ,
      name : 'ONWARD' ,
      money : 2000 ,
      ticket :1689 
    },
    {
      image: 'https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg' ,
      name : 'MANDALORIAN' ,
      money : 2000 ,
      ticket :1689 
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/vi/thumb/b/b5/Wonder_Woman_1984_VN_Poster.jpg/220px-Wonder_Woman_1984_VN_Poster.jpg' ,
      name : 'WONDER WOMEN 1984'  ,
      money : 2000 ,
      ticket :1689 
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/vi/thumb/1/18/Tenet_poster_VN.jpeg/220px-Tenet_poster_VN.jpeg' ,
      name : 'TENET' ,
      money : 2000 ,
      ticket :1689 
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/en/0/03/Onward_poster.jpg' ,
      name : 'ONWARD' ,
      money : 2000 ,
      ticket :1689 
    },
    {
      image: 'https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg' ,
      name : 'MANDALORIAN' ,
      money : 2000 ,
      ticket :1689 
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/vi/thumb/b/b5/Wonder_Woman_1984_VN_Poster.jpg/220px-Wonder_Woman_1984_VN_Poster.jpg' ,
      name : 'WONDER WOMEN 1984'  ,
      money : 2000 ,
      ticket :1689 
    },
]) ;

  const showFilms = data.map((film,index) => {
    return <div key = {index} className="max-w-xs rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={film.image} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{film.name}</div>
                    </div>
                    <div className="px-6 pt-4 pb-2 flex justify-between text-gray-400">
                      <div>
                        <i className="fa-solid fa-money-bill pr-2"></i>
                        <span className="">{film.money}</span>
                      </div>
                      <div>
                        <i className="fa-solid fa-ticket pr-2"></i>
                        <span className="pr-5">{film.ticket}</span>
                      </div>
                    </div>
            </div>
  }) 

  return (
    <div className="grid grid-cols-4 gap-4">
      {showFilms}
    </div>
  );
}

export default App;
