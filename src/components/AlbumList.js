import React from 'react';
import StackGrid from 'react-stack-grid';

import AlbumListItem from './AlbumListItem';

const AlbumList = ({ albums }) => {
  if (!albums || (albums && albums.length === 0)) {
    return 'Loading...';
  }

  return (
    <StackGrid columnWidth={240} monitorImagesLoaded={true}>
      {albums.map(album => <AlbumListItem id={album} key={album} />)}
    </StackGrid>
  );
};

export default AlbumList;
