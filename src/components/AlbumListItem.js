import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Card } from 'antd';
const { Meta } = Card;

const AlbumListItem = ({ album, cover }) => {
  const coverUrl = `https://farm${cover.farm}.staticflickr.com/${cover.server}/${cover.id}_${
    cover.secret
  }.jpg`;

  return (
    <Link to={`album/${album.id}`}>
      <Card hoverable style={{ width: 240 }} cover={<img alt="example" src={coverUrl} />}>
        <Meta title={album.title._content} description={album.description._content} />
      </Card>
    </Link>
  );
};

AlbumListItem.propTypes = {
  album: PropTypes.object.isRequired,
  cover: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { entities } = state;
  const { id } = ownProps;

  const album = entities.albums[id];
  const cover = entities.photos[album.primary];

  return {
    album,
    cover,
  };
};

export default withRouter(connect(mapStateToProps)(AlbumListItem));
