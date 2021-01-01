import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from 'src/constants';

export type TBaseLinkProps = {
  to: string;
};

const BaseLink: React.FC<TBaseLinkProps> = ({ children, to, ...props }) => (
  <Link to={`${BASE_URL}${to}`} {...props}>
    {children}
  </Link>
);

export default BaseLink;
