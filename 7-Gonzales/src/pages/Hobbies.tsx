import React from "react";
import { Link } from "react-router-dom";
import "./hobbies.css";
import Computer from "../images/computer.jpg";
import Music from "../images/music.jpg";
import Book from "../images/book.jpg";
import Movies from "../images/movies.jpg"
import Travelling from "../images/travel.jpg"
import Eating from "../images/eat.jpg"

const Hobbies: React.FC = () => {
  return (
    <div className="container">
      <h1 className="page-title">Hobbies</h1>
      <div className="card__container">
        <article className="card__article">
          <img src={Computer} alt="Computer" className="card__img" />
          <div className="card__data">
            <h2 className="card__title">Playing Computer Games</h2>
            <span className="card__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
          </div>
        </article>

        <article className="card__article">
          <img src={Music} alt="Music" className="card__img" />
          <div className="card__data">
            <h2 className="card__title">Listening to Music</h2>
            <span className="card__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
          </div>
        </article>

        <article className="card__article">
          <img src={Book} alt="Book" className="card__img" />
          <div className="card__data">
            <h2 className="card__title">Reading</h2>
            <span className="card__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
          </div>
        </article>

        <article className="card__article">
          <img src={Movies} alt="Book" className="card__img" />
          <div className="card__data">
            <h2 className="card__title">Watching Movies</h2>
            <span className="card__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
          </div>
        </article>

        <article className="card__article">
          <img src={Travelling} alt="Book" className="card__img" />
          <div className="card__data">
            <h2 className="card__title">Travelling</h2>
            <span className="card__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
          </div>
        </article>
        <article className="card__article">
          <img src={Eating} alt="Book" className="card__img" />
          <div className="card__data">
            <h2 className="card__title">Eating</h2>
            <span className="card__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
          </div>
        </article>
      </div>

      {/* Back to Home button */}
      <Link to="/" className="back-button">
        Back to Home
      </Link>
    </div>
  );
};

export default Hobbies;
