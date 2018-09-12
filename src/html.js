import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="stylesheet" href="/styles/base.css" />
          <link rel="stylesheet" href="/styles/fonts.css" />
          <link rel="stylesheet" href="/styles/main.css" />
          <link rel="stylesheet" href="/styles/vendor.css" />
          <link rel="stylesheet" href="/styles/base.css" />

          {/* Add custom css or scripts here */}
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"
          />
          <script src="/js/jquery-2.1.3.min.js" />
          <script src="/js/main.js" />
          <script src="/js/modernizr.js" />
          <script src="/js/pace.min.js" />
          <script src="/js/plugins.js" />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
