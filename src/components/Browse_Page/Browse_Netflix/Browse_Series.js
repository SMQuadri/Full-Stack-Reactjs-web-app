import React from 'react';

import './Browse_Netflix.css';
import BrowseH_Series from '../Browse_Header/BrowseH_Series';
import Row from '../Row/Row';

import Documentaries from '../../../netflix-categories/series/documentaries/documentaries.json';
import Comedies from '../../../netflix-categories/series/comedies/comedies.json';
import Crime from '../../../netflix-categories/series/crime/crime.json';
import Feel_Good from '../../../netflix-categories/series/feel-good/feel_good.json';
import Children from '../../../netflix-categories/series/children/children.json';

const Browse_Series = () => {
  return (
    <div className="browseN">
      <BrowseH_Series />
      <span className="browseN__category">Documentaries</span>
      <Row 
        content={Documentaries}
      />
      <span className="browseN__category">Comedies</span>
      <Row 
        content={Comedies}
      />
      <span className="browseN__category">Crime</span>
      <Row 
        content={Crime}
      />
      <span className="browseN__category">Feel Good</span>
      <Row 
        content={Feel_Good}
      />
      <span className="browseN__category">Children</span>
      <Row 
        content={Children}
      />
      .
    </div>
  );
}

export default Browse_Series;