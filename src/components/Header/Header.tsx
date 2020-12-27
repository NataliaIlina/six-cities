import React from 'react';
import BaseLink from 'components/Link/Link';
import {TUser} from 'src/ducks/auth/authModels';
import {BASE_URL} from 'src/constants';
import {SHeader, SUserBlock, SProfileLink, SAvatar} from 'components/Header/Header.styled';

type TProps = {
  userData: TUser | null;
};

const Header: React.FC<TProps> = ({userData}) => (
  <SHeader>
    <BaseLink to="/">
      <img src={`${BASE_URL}/img/logo.svg`} alt="6 cities logo" width="81" height="41" />
    </BaseLink>
    <SUserBlock>
      <SProfileLink to={`/${userData ? 'favorites' : 'login'}`}>
        <SAvatar />
        {userData ? userData.email : 'Sign in'}
      </SProfileLink>
    </SUserBlock>
  </SHeader>
);

export default Header;
