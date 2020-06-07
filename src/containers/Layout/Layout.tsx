import React from 'react';
import { Header, SvgSprite } from 'src/components';
import { useSelector } from 'src/store';

const Layout: React.FC<{ type?: 'login' | 'main' }> = ({ children, type }) => {
  const userData = useSelector((state) => state.auth.user.data);

  return (
    <div
      className={`page
    ${type === `login` ? `page--login page--gray` : ``}
    ${type === `main` ? `page--main page--gray` : ``}`}
    >
      <SvgSprite />
      <Header userData={userData} />
      {children}
    </div>
  );
};

export default Layout;
