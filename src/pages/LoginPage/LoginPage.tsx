import React, { useState } from 'react';
import { Layout } from 'src/containers';
import { Redirect } from 'react-router-dom';
import { BASE_URL } from 'src/constants';
import { useDispatch, useSelector } from 'src/store';
import { authorizeUser } from 'src/ducks/auth/auth';
import TextField from 'components/TextField/TextField';
import LocationLink from 'components/LocationLink/LocationLink';
import { SWrapper, SLoginForm, STitle } from './LoginPage.styled';

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const isUserAuth = useSelector((state) => state.auth.isUserAuth);

  if (isUserAuth) {
    return <Redirect to={BASE_URL} />;
  }

  return (
    <Layout type="login">
      <SWrapper>
        <SLoginForm>
          <STitle>Sign in</STitle>
          <form
            autoComplete="off"
            action="#"
            method="post"
            onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
              e.preventDefault();
              dispatch(authorizeUser({ email, password }));
            }}
          >
            <TextField
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login__submit form__submit button" type="submit">
              Sign in
            </button>
          </form>
        </SLoginForm>

        <SWrapper alignItems="center" justifyContent="center" pb={200}>
          <LocationLink to="/" isActive>
            Amsterdam
          </LocationLink>
        </SWrapper>
      </SWrapper>
    </Layout>
  );
};

export default LoginPage;
