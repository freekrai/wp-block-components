import React from 'react';
import PropTypes from 'prop-types';

const CoreButtonBlock = props => {
  const {
    url,
    title,
    text,
    textColor,
    CustomTextColor,
    CustomBackgroundColor
  } = props.attributes;
  return React.createElement("div", {
    className: "wp-block-button"
  }, React.createElement("a", {
    className: "wp-block-button__link",
    href: url
  }, text));
};

CoreButtonBlock.propTypes = {
  attributes: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    textColor: PropTypes.string,
    CustomTextColor: PropTypes.string,
    CustomBackgroundColor: PropTypes.string
  })
};
CoreButtonBlock.defaultProps = {
  attributes: {
    url: null,
    title: null,
    text: null,
    textColor: null,
    CustomTextColor: null,
    CustomBackgroundColor: null
  }
};
export default CoreButtonBlock;
/*
<div class="wp-block-button"><a class="wp-block-button__link" href="https://rogerstringer.com/contact/">Contact me about writing for you</a></div>

          url
          title
          textColor
          customTextColor
          customBackgroundColor
          text



*/