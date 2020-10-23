import React from 'react';

import './Browse_Netflix.css';
import BrowseH_Movies from '../Browse_Header/BrowseH_Movies';
import Row from '../Row/Row';

import Thriller from '../../../netflix-categories/movies/thriller/thriller.json';
import Suspence from '../../../netflix-categories/movies/suspense/suspence.json';
import Romance from '../../../netflix-categories/movies/romance/romance.json';
import Drama from '../../../netflix-categories/movies/drama/drama.json';
import Children2 from '../../../netflix-categories/movies/children/children.json';

const Browse_Movies = () => {
  return (
    <div className="browseN">
      <BrowseH_Movies />
      <span className="browseN__category">Thriller</span>
      <Row 
        content={Thriller}
      />
      <span className="browseN__category">Suspence</span>
      <Row 
        content={Suspence}
      />
      <span className="browseN__category">Romance</span>
      <Row 
        content={Romance}
      />
      <span className="browseN__category">Drama</span>
      <Row 
        content={Drama}
      />
      <span className="browseN__category">Children</span>
      <Row 
        content={Children2}
      />
      .
    </div>
  );
}

export default Browse_Movies;