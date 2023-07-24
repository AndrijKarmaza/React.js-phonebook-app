import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = ({ css }) => {
  return (
    <>
      <nav className={css.mainNav}>
        <Navigation css={css} />
        <AuthNav css={css} />
      </nav>
      <UserMenu />
    </>
  );
};
