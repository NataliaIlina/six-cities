import React from 'react';
import { SIcon, SLabel, SInput } from './RatingStar.styled';

type TProps = {
  value: number;
  title: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RatingStar: React.FC<TProps> = ({ value, title, onChange }) => (
  <>
    <SInput name="rating" value={value} id={`${value}-stars`} type="radio" onChange={onChange} />
    <SLabel htmlFor={`${value}-stars`} title={title}>
      <SIcon width="37" height="33">
        <use xlinkHref="#icon-star" />
      </SIcon>
    </SLabel>
  </>
);

export default RatingStar;
