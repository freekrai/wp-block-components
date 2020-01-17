function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';

const CoreListBlock = props => {
  const {
    className,
    ordered,
    values
  } = props.attributes;
  const classes = ['core-block-list'];

  if (className) {
    classes.push(className);
  }

  const List = ordered ? 'ol' : 'ul';
  return React.createElement(List, _extends({}, classes.length > 0 && {
    className: classes.join(' ')
  }, {
    dangerouslySetInnerHTML: {
      __html: values
    }
  }));
};

CoreListBlock.propTypes = {
  attributes: PropTypes.shape({
    className: PropTypes.string,
    ordered: PropTypes.boolean,
    values: PropTypes.string
  })
};
CoreListBlock.defaultProps = {
  attributes: {
    className: null,
    ordered: false,
    values: null
  }
};
export default CoreListBlock;