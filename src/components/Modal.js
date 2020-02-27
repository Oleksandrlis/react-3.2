import React, { Component } from "react";
import Styles from "./Gallery.module.css";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener(`keydown`, this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener(`keydown`, this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code === 'Escape') this.props.closeModal();
  };
  
  close = (e) => {
      console.dir(e.target);
      if (e.target.nodeName !== 'IMG') this.props.closeModal();
  }

  render() {
      console.log('this.props', this.props)
    return (
      <div className={Styles.Overlay} onClick={this.close}>
        <div className={Styles.Modal}>
          <img src={this.props.image.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
