import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Card } from 'antd';
const { Meta } = Card;

const PhotoListItem = ({ photo }) => {
  const photoUrl = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${
    photo.secret
  }.jpg`;

  return (
    <Card hoverable style={{ width: 240 }} cover={<img alt="example" src={photoUrl} />}>
      <Meta title={photo.title} description={photo.description ? photo.description._content : ''} />
    </Card>
  );
};

PhotoListItem.propTypes = {
  photo: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { entities } = state;
  const { id } = ownProps;

  const photo = entities.photos[id];

  return {
    photo,
  };
};

export default withRouter(connect(mapStateToProps)(PhotoListItem));
