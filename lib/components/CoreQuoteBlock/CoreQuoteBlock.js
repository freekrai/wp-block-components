import React from 'react';
import PropTypes from 'prop-types';

const CoreQuoteBlock = props => {
  const {
    content,
    value
  } = props.attributes;
  const styles = {};
  const classes = ['wp-block-quote'];
  return React.createElement("blockquote", {
    className: classes.join(' '),
    dangerouslySetInnerHTML: {
      __html: content
    }
  });
};

CoreQuoteBlock.propTypes = {
  attributes: PropTypes.shape({
    content: PropTypes.string,
    value: PropTypes.string
  })
};
CoreQuoteBlock.defaultProps = {
  attributes: {
    content: '',
    value: ''
  }
};
export default CoreQuoteBlock;