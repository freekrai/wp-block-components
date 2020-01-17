import React from 'react';
import PropTypes from 'prop-types';

const CoreHtmlBlock = props => {
  const {
    content
  } = props.attributes;
  const styles = {};
  const classes = ['core-block-paragraph'];
  return React.createElement("p", {
    className: classes.join(' '),
    style: styles,
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