import React from 'react';
import { Header, SvgSprite } from 'src/components';
import type { BackgroundProps } from 'styled-system';
import Footer from 'components/Footer/Footer';
import { useSelector } from 'src/hooks';
import { SLayout, SContent } from './Layout.styled';

type TProps = {
  withImage?: boolean;
  withFooter?: boolean;
} & BackgroundProps;

const Layout: React.FC<TProps> = ({
  children,
  withImage = false,
  withFooter = false,
  ...props
}) => {
  const userData = useSelector((state) => state.auth.user.data);

  return (
    <SLayout {...props}>
      <SContent withImage={withImage}>
        <SvgSprite />
        <Header userData={userData} />
        <main>{children}</main>
        {withFooter && <Footer />}
      </SContent>
    </SLayout>
  );
};

export default Layout;
