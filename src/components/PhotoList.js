import React from 'react';
import StackGrid from 'react-stack-grid';

import PhotoListItem from './PhotoListItem';

const PhotoList = ({ photos }) => {
  if (!photos || (photos && photos.length === 0)) {
    return 'Loading...';
  }

  return (
    <StackGrid columnWidth={240} monitorImagesLoaded={true}>
      {photos.map(photo => <PhotoListItem id={photo} key={photo} />)}
    </StackGrid>
  );
};

export default PhotoList;
