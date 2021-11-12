import { Component } from 'react';
import { getSearchedImage } from '../../services/pixabay-api';
import ImageGalleryItem from './ImageGalleryItem';
import Button from '../Button';
import Loader from '../Loader';
import Modal from '../Modal';
import s from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    isLoading: false,
    imageIndex: null,
    showModal: false,
  };

  componentDidUpdate(prevProps) {
    const prevImg = prevProps.findImage;
    const nextImg = this.props.findImage;

    if (prevImg !== nextImg && this.state.images.length > 0) {
      this.setState({ images: [] });
    }

    if (prevImg !== nextImg || prevProps.page !== this.props.page) {
      this.setState({ isLoading: true });
      getSearchedImage(nextImg, this.props.page)
        .then(res =>
          this.setState(({ images }) => ({
            images: [...images, ...res.hits],
            isLoading: false,
          })),
        )
        .then(() => {
          if (this.props.page !== 1) {
            this.SmoothScrolling();
          }
        })
        .catch(error => this.setState({ error, isLoading: false }));
    }
  }

  SmoothScrolling = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  handleClick(index) {
    this.setState({ imageIndex: index, showModal: true });
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, error, isLoading, showModal, imageIndex } = this.state;

    if (isLoading) {
      return <Loader />;
    }
    if (showModal) {
      return <Modal onClose={this.toggleModal} image={images[imageIndex]} />;
    }
    if (error) {
      return <div className={s.box}>{error.message}</div>;
    }
    if (images.length === 0 && !error) {
      return <div className={s.box}>Start your search</div>;
    }
    if (images.length > 0) {
      return (
        <>
          <ul className={s.ImageGallery}>
            {images.map((image, index) => (
              <ImageGalleryItem
                key={image.id}
                webformatURL={image.webformatURL}
                type={image.type}
                onClick={() => {
                  this.handleClick(index);
                }}
              />
            ))}
          </ul>
          <Button onLoad={this.props.onLoad} />
        </>
      );
    }
  }
}
