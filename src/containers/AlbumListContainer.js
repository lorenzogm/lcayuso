import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchAlbums } from '../actions/albums';
import { fetchCover } from '../actions/photos';
import AlbumList from '../components/AlbumList';

class AlbumListContainer extends React.Component {
  componentWillMount() {
    this.props.fetchAlbums().then(() => {
      this.props.albums.map(albumId => {
        if (!this.props.entities.photos[this.props.entities.albums[albumId].primary]) {
          this.props.fetchCover({ photoId: this.props.entities.albums[albumId].primary });
        }

        return albumId;
      });
    });
  }

  render() {
    const { albums } = this.props;

    return <AlbumList albums={albums} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const { entities, albums } = state;

  return {
    entities,
    albums,
  };
};

export default withRouter(
  connect(mapStateToProps, { fetchAlbums, fetchCover })(AlbumListContainer),
);
