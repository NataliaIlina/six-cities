import React from 'react';
import { Header, SvgSprite } from 'src/components';
import type { BackgroundProps } from 'styled-system';
import Footer from 'components/Footer/Footer';
import { useSelector } from 'src/hooks';
import { SLayout, SContent, SMain } from './Layout.styled';

type TProps = {
  withImage?: boolean;
  withFooter?: boolean;
  isMain?: boolean;
} & BackgroundProps;

const Layout: React.FC<TProps> = ({
  children,
  withImage = false,
  withFooter = false,
  isMain = false,
  ...props
}) => {
  const userData = useSelector((state) => state.auth.user.data);

  return (
    <SLayout {...props}>
      <SContent withImage={withImage}>
        <SvgSprite />
        <Header userData={userData} />
        <SMain withOverflow={!isMain}>{children}</SMain>
        {withFooter && <Footer />}
      </SContent>
    </SLayout>
  );
};

export default Layout;
