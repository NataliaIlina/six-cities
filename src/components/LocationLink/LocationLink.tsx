import React from 'react';
import { SLocationLink } from './LocationLink.styled';
import type { TBaseLinkProps } from 'components/BaseLink/BaseLink';

const LocationLink: React.FC<TBaseLinkProps & { isActive?: boolean }> = ({
  children,
  to,
  isActive,
  ...props
}) => (
  <SLocationLink to={to} isActive={isActive} {...props}>
    <span>{children}</span>
  </SLocationLink>
);

export default LocationLink;
