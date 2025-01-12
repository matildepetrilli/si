import { Component } from "react";
import { Col } from "react-bootstrap";

const URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=23d5c2c7';

class NetflixMain extends Component {
  State = {
Film: [],
  };

  fetchFilms= ()=>{
    const filmKey = this.props.filmKey;
     fetch(URL + filmKey)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore di chiamata");
        }
      })
      .then((data) => {
        const movies = data.Search.slice(0, 6);
        this.setState({ Film : movies });
        console.log(" risposta json dal server ", movies);
      })
      .catch((e) => {
        console.log("errore", e);
      });
  };

  componentDidMount() {
    this.fetchFilms();
  }

  render() {
    return (
      <>
        {this.State.Film.map((saga, i) => {
          return (
            <Col Key={i} className="px-1 ">
              <img
                className="img-fluid "
                src={saga.Poster}
                alt={saga.Title}
                style={{ width: "100%", height: "95%" }}
              />
            </Col>
          );
        })}
      </>
    );
  }
}

export default NetflixMain;