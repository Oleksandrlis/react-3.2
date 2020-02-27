import React, { Component } from "react";
import { getData } from "../Operations";
import ImageGallery from "./ImageGallery";
import Searchbar from "./Searchbar";
import {Watch} from "./Loader";

export default class App extends Component {
  state = {
    images: [],
    searchValue: "",
    pageNumber: 1,
    isModalOpen: false,
    currentImage: {},
    isLoading: false
  };

  openModal = e => {
    const id = +e.target.id
    this.setState(prevState => ({
      isModalOpen: true,
      currentImage: prevState.images.filter(image => image.id === id)[0]
    }));
  };
  closeModal = () => this.setState({ isModalOpen: false });



  async componentDidMount() {

    this.setState({isLoading: true})
    const data = await getData(this.state.searchValue, this.state.pageNumber);
    this.setState(prevState => ({ images: [...prevState.images, ...data], isLoading: false }));
  }

  componentDidUpdate() {}

  getSearchValue = e => {
    this.setState({ searchValue: e.target.value });
  };

  getNewData = async e => {
    e.preventDefault();
    const data = await getData(this.state.searchValue);
    this.setState(prevState => ({ images: data }));
  };

  loadNewData = async () => {
    const data = await getData(
      this.state.searchValue,
      this.state.pageNumber + 1
    );
    this.setState(prevState => ({
      images: [...prevState.images, ...data],
      pageNumber: prevState.pageNumber + 1
    }));
  };
  render() {
    return (
      <div>
        <Searchbar
          value={this.state.searchValue}
          getSearchValue={this.getSearchValue}
          getNewData={this.getNewData}
        />
        {this.state.isLoading && <Watch/>}
        <ImageGallery
          images={this.state.images}
          handleModal={this.openModal}
          isModalOpen={this.state.isModalOpen}
          currentImage={this.state.currentImage}
          closeModal={this.closeModal}
        />
        <button onClick={this.loadNewData}>LoadMore</button>
      </div>
    );
  }
}
