import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import config from '../utils/config';
import Header from './Header';
import Footer from './Footer';
import './layout.css';

const IndexLayout = ({ children }) => (
  <div>
    <Helmet>
      <title>{config.siteName}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta description={config.description} />
    </Helmet>
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
);

IndexLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default IndexLayout;
