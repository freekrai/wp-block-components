import React from 'react';
import PropTypes from 'prop-types';
import CoreCodeBlock from '../CoreCodeBlock/CoreCodeBlock';
import CoreHeadingBlock from '../CoreHeadingBlock/CoreHeadingBlock';
import CoreImageBlock from '../CoreImageBlock/CoreImageBlock';
import CoreListBlock from '../CoreListBlock/CoreListBlock';
import CoreParagraphBlock from '../CoreParagraphBlock/CoreParagraphBlock';
import CoreQuoteBlock from '../CoreQuoteBlock/CoreQuoteBlock';
import CoreHtmlBlock from '../CoreHtmlBlock/CoreHtmlBlock';

const CoreBlock = props => {
  const {
    __typename,
    attributes
  } = props.block;

  if (__typename.endsWith('CoreCodeBlock')) {
    return React.createElement(CoreCodeBlock, {
      attributes: attributes
    });
  }

  if (__typename.endsWith('CoreQuoteBlock')) {
    return React.createElement(CoreQuoteBlock, {
      attributes: attributes
    });
  }

  if (__typename.endsWith('CoreHtmlBlock')) {
    return React.createElement(CoreHtmlBlock, {
      attributes: attributes
    });
  }

  if (__typename.endsWith('CoreHeadingBlock')) {
    return React.createElement(CoreHeadingBlock, {
      attributes: attributes
    });
  }

  if (__typename.endsWith('CoreImageBlock')) {
    return React.createElement(CoreImageBlock, {
      attributes: attributes
    });
  }

  if (__typename.endsWith('CoreListBlock')) {
    return React.createElement(CoreListBlock, {
      attributes: attributes
    });
  }

  if (__typename.endsWith('CoreParagraphBlock')) {
    return React.createElement(CoreParagraphBlock, {
      attributes: attributes
    });
  }

  return null;
};

CoreBlock.propTypes = {
  block: PropTypes.shape({
    __typename: PropTypes.string.isRequired,
    attributes: PropTypes.object.isRequired
  }).isRequired
};
CoreBlock.defaultProps = {
  block: {
    __typename: null,
    attributes: null
  }
};
export default CoreBlock;