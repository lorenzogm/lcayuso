import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchPhotos } from '../actions/photos';
import PhotoList from '../components/PhotoList';

class HomeContainer extends React.Component {
  componentWillMount() {
    const method = 'flickr.people.getPublicPhotos';
    const perPage = 12;

    this.props.fetchPhotos({ method, perPage });
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

export default withRouter(connect(mapStateToProps, { fetchPhotos })(HomeContainer));
