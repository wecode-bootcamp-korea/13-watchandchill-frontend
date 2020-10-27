import React, { Component } from "react";

import "./Contents.scss";
import Section from "./Section/Section";
// import CommentBox from "./CommentBox/CommentBox";
// import Tag from "./Tag/Tag";
import Info from "./Info/Info";
import ActorProfile from "./ActorProfile/ActorProfile";
// import Graph from "./Graph/Graph";
// import Comment from "./Comment/Comment";
// import Collection from "./Collection/Collection";
// import Movies from "./Movies/Movies";

const API = "http://localhost:3000/data/contents.json";

class Contents extends Component {
  constructor() {
    super();
    this.state = {
      addBtnClicked: false,
      dropdownBtnClicked: false,
      dropdownBtnColorChanged: false,
      commentBtnClicked: false
    };
  }

  componentDidMount() {
    fetch(API, { method: "GET" })
      .then(response => response.json())
      .then(result => {
        this.setState({
          movieInfo: result.movieInformation
        });
      });
  }

  render() {
    const { movieInfo } = this.state;

    return (
      <div className="Contents">
        {movieInfo && <Section movieInfo={movieInfo} />}

        <article>
          {movieInfo && <Info movieInfo={movieInfo} />}

          {movieInfo &&
            movieInfo.cast.map(actor => <ActorProfile actorInfo={actor} />)}
          <div className="containerGraph">
            <div className="titleGraph">별점 그래프</div>
            <div className="descGraph">
              <div>1</div>
              <div>2</div>
            </div>
          </div>
          <div className="containerComment">
            <div className="titleComment">코멘트</div>
            <div className="descComment"></div>
          </div>
          <div className="containerCollection">
            <div className="titleCollection">이 작품이 담긴 컬렉션</div>
            <div className="descCollection">
              <div>1</div>
              <div>2</div>
            </div>
          </div>
          <div className="containerMovie">
            <div className="titleMovie">비슷한 작품</div>
            <div className="descMovie">
              <div>1</div>
              <div>2</div>
            </div>
          </div>

          {movieInfo &&
            movieInfo.cast.map(actor => <ActorProfile actorInfo={actor} />)}
          <div className="containerGraph">
            <div className="titleGraph">별점 그래프</div>
            <div className="descGraph">
              <div>1</div>
              <div>2</div>
            </div>
          </div>
          <div className="containerComment">
            <div className="titleComment">코멘트</div>
            <div className="descComment"></div>
          </div>
          <div className="containerCollection">
            <div className="titleCollection">이 작품이 담긴 컬렉션</div>
            <div className="descCollection">
              <div>1</div>
              <div>2</div>
            </div>
          </div>
          <div className="containerMovie">
            <div className="titleMovie">비슷한 작품</div>
            <div className="descMovie">
              <div>1</div>
              <div>2</div>
            </div>
          </div>

          <button>더보기</button>

          <aside>aside</aside>
        </article>
      </div>
    );
  }
}

export default Contents;
