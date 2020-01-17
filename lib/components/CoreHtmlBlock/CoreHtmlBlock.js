import React from 'react';
import PropTypes from 'prop-types';

const CoreHtmlBlock = props => {
  const {
    content
  } = props.attributes;
  return React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: content
    }
  });
};

CoreHtmlBlock.propTypes = {
  attributes: PropTypes.shape({
    content: PropTypes.string
  })
};
CoreHtmlBlock.defaultProps = {
  attributes: {
    content: ''
  }
};
export default CoreHtmlBlock;