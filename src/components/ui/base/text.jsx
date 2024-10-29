"use client";

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Manrope } from 'next/font/google';

const headingStyles = {
  hero: 'text-7xl leading-[1.15] font-semibold py-8',
  h1: 'text-4xl leading-loose  font-bold',
  h2: 'text-3xl leading-loose  font-bold',
  h3: 'text-2xl leading-loose  font-semibold',
  h4: 'text-3xl leading-loose font-light font-serif',
  h5: 'text-lg leading-loose  font-normal',
  h6: 'text-lg text-foreground leading-loose font-normal',
  p: 'text-md text-foreground leading-relaxed font-normal',
  span: 'text-md text-foreground font-normal',
};

const font = Manrope({
  subsets: ['latin'],
  weight: 'variable'
})

export const Text = ({ as = 'p', children, className = '' }) => {
  const [editable, setEditable] = useState(false)
  const Component = as == "hero" ? "h1" : as;
  const baseStyle = headingStyles[as] || 'text-base';
  const fonts = {
    "p": {
      fontFamily: "var(--page-font)"
    },
    "h1": {
      fontFamily: "var(--header-font)"
    },
    "hero": {
      fontFamily: "var(--header-font)"
    }
  }

  return (
    <Component className={`${baseStyle} ${className} py-2`} style={fonts[as]} contentEditable={editable} onDoubleClick={() => setEditable(!editable)}>
      {children}
    </Component>
  );
};

Text.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

