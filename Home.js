import React, { Component } from 'react'


class Home extends Component {
  state = {
    films: []
  };

  /*
  function meuNomeEh() {
    return 'Regina';
  }

  meuNomeEh(); // Regina

  const meuNomeEh = nome => {
    return nome;
  }

  meuNomeEh('Hura') // Hura
  */

  async componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=e5693481ef000bfdd855a0f21ad39631')
      .then(response => response.json())
      .then(data => {
        this.setState({
          films: data.results
        })
      })
  }

  render() {
    return (
      <div>
        <h1>Filmes</h1>
        {this.state.films.map(film => {
          return (
          <div>
            <img src={`http://image.tmdb.org/t/p/w500${film.poster_path}`} />
            <h2>{film.title}</h2>
            <p>{film.overview}</p>
          </div>
          )
        })}
         
      </div>


    )


        }



}
        export default Home