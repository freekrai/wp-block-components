function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';

const CoreHeadingBlock = props => {
  const {
    align,
    anchor,
    className,
    content,
    level
  } = props.attributes;
  const Heading = 'h' + level;
  const styles = {};
  const classes = ['core-block-heading'];

  if (className) {
    classes.push(className);
  }

  if (align) {
    styles.textAlign = align;
  }

  return React.createElement(Heading, _extends({}, anchor && {
    id: anchor
  }, classes.length > 0 && {
    className: classes.join(' ')
  }, {
    style: styles
  }), content);
};

CoreHeadingBlock.propTypes = {
  attributes: PropTypes.shape({
    align: PropTypes.string,
    anchor: PropTypes.string,
    className: PropTypes.string,
    content: PropTypes.string,
    level: PropTypes.number
  })
};
CoreHeadingBlock.defaultProps = {
  attributes: {
    align: null,
    anchor: null,
    className: null,
    content: null,
    level: 2
  }
};
export default CoreHeadingBlock;