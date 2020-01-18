function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';

const CoreButtonBlock = props => {
  const {
    align,
    backgroundColor,
    className,
    customBackgroundColor,
    customTextColor,
    text,
    textColor,
    title,
    url
  } = props.attributes;
  const styles = {};
  const classes = ['wp-block-button'];

  if (className) {
    classes.push(className);
  }

  if (align) {
    styles.textAlign = align;
  }

  if (backgroundColor) {
    styles.backgroundColor = backgroundColor;
  } else if (customBackgroundColor) {
    styles.backgroundColor = customBackgroundColor;
  }

  if (textColor) {
    styles.color = textColor;
  } else if (customTextColor) {
    styles.color = customTextColor;
  }

  return React.createElement("div", _extends({}, classes.length > 0 && {
    className: classes.join(' ')
  }, {
    style: styles
  }), React.createElement("a", {
    className: "wp-block-button__link",
    href: url
  }, text));
};

CoreButtonBlock.propTypes = {
  attributes: PropTypes.shape({
    align: PropTypes.string,
    backgroundColor: PropTypes.string,
    className: PropTypes.string,
    customBackgroundColor: PropTypes.string,
    customTextColor: PropTypes.string,
    text: PropTypes.string,
    textColor: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string
  })
};
CoreButtonBlock.defaultProps = {
  attributes: {
    align: null,
    backgroundColor: null,
    className: null,
    customBackgroundColor: null,
    customTextColor: null,
    text: null,
    textColor: null,
    title: null,
    url: null
  }
};
export default CoreButtonBlock;