function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CoreCodeBlock = props => {
  const {
    className,
    content,
    language
  } = props.attributes;
  const classes = ['core-block-code'];

  if (className) {
    classes.push(className);
  }

  return React.createElement(SyntaxHighlighter, _extends({}, classes.length > 0 && {
    className: classes.join(' ')
  }, {
    language: language,
    style: okaidia
  }), content);
};

CoreCodeBlock.propTypes = {
  attributes: PropTypes.shape({
    className: PropTypes.string,
    content: PropTypes.string,
    language: PropTypes.string
  })
};
CoreCodeBlock.defaultProps = {
  attributes: {
    className: null,
    content: null,
    language: null
  }
};
export default CoreCodeBlock;