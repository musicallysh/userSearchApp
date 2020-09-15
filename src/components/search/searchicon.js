import React from 'react'
import PropTypes from 'prop-types'
import './search.css'


/**  A SVG icon taken from the opensource Iconic library */
const SearchIcon = ({ color, className }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
  >
    <g>
      <title>Magnifying Glass</title>
    </g>

    <g>
      <path stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" d="M11 11l3.5 3.5" />
      <circle stroke={color} strokeWidth="2" cx="6.5" cy="6.5" r="5.5" fill="none" />
    </g>
  </svg>
);

SearchIcon.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

SearchIcon.defaultProps = {
  color: '#000',
};


export default SearchIcon
