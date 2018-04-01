import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// import { fetchAlbum } from '../actions/albums';
import { fetchPhotos } from '../actions/photos';
import PhotoList from '../components/PhotoList';

class PhotoListContainer extends React.Component {
  componentWillMount() {
    const method = 'flickr.photosets.getPhotos';
    const albumId = this.props.match.params.albumId;

    this.props.fetchPhotos({ method, albumId });
    // this.props.fetchAlbum().then(() => {
    //   this.props.albums.map(albumId => {
    //     if (!this.props.entities.photos[this.props.entities.albums[albumId].primary]) {
    //       this.props.fetchPhotos({ photoId: this.props.entities.albums[albumId].primary });
    //     }
    //   });
    // });
  }

  render() {
    const { photos } = this.props;

    return <PhotoList photos={photos} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const { entities, photos } = state;

  return {
    entities,
    photos,
  };
};

export default withRouter(connect(mapStateToProps, { fetchPhotos })(PhotoListContainer));
