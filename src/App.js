import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

class App extends Component {
  state = { findImage: '', page: 1, startScroll: false };

  handleFormSubmit = findImage => {
    this.setState({ findImage, page: 1 });
  };

  onLoad = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { findImage } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          findImage={findImage}
          onLoad={this.onLoad}
          page={this.state.page}
        />

        <ToastContainer />
      </>
    );
  }
}

export default App;
