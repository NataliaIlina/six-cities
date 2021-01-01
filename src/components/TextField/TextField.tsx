import React from 'react';
import { Box } from 'reflexbox';
import { SInput } from './TextField.styled';

type TProps = {
  label?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextField: React.FC<TProps> = ({
  value,
  label,
  placeholder,
  onChange,
  name,
  id,
  ...props
}) => (
  <Box mb={16}>
    {label ? <label htmlFor={id}>{label}</label> : null}
    <SInput
      name={name}
      id={id}
      placeholder={placeholder}
      required
      value={value}
      onChange={onChange}
      {...props}
    />
  </Box>
);

export default TextField;
