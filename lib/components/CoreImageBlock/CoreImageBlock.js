function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';

const CoreImageBlock = props => {
  const {
    align,
    alt,
    caption,
    className,
    height,
    href,
    id,
    linkClass,
    linkDestination,
    linkTarget,
    rel,
    url,
    width
  } = props.attributes;
  const blockClass = 'core-block-image';
  const classes = [];

  if (className) {
    classes.push(className);
  }

  if (align) {
    classes.push(`align${align}`);
  }

  const image = React.createElement("img", _extends({}, alt && {
    alt: alt
  }, url && {
    src: url
  }, width && {
    width: width
  }, height && {
    height: height
  }));
  const figure = React.createElement(React.Fragment, null, href ? React.createElement("a", _extends({}, linkClass && {
    className: linkClass
  }, href && {
    href: href
  }, linkTarget && {
    target: linkTarget
  }, rel && {
    rel: rel
  }), image) : image, caption ? React.createElement("figcaption", null, caption) : null);

  if ('left' === align || 'center' === align || 'right' === align) {
    return React.createElement("div", {
      className: blockClass
    }, React.createElement("figure", classes.length > 0 && {
      className: classes.join(' ')
    }, figure));
  }

  classes.push(blockClass);
  return React.createElement("figure", classes.length > 0 && {
    className: classes.join(' ')
  }, figure);
};

CoreImageBlock.propTypes = {
  attributes: PropTypes.shape({
    align: PropTypes.string,
    alt: PropTypes.string,
    caption: PropTypes.string,
    className: PropTypes.string,
    height: PropTypes.string,
    href: PropTypes.string,
    linkClass: PropTypes.string,
    linkDestination: PropTypes.string,
    linkTarget: PropTypes.string,
    rel: PropTypes.string,
    url: PropTypes.string,
    width: PropTypes.string
  })
};
CoreImageBlock.defaultProps = {
  attributes: {
    align: null,
    alt: null,
    caption: null,
    className: null,
    height: null,
    href: null,
    linkClass: null,
    linkDestination: null,
    linkTarget: null,
    rel: null,
    url: null,
    width: null
  }
};
export default CoreImageBlock;