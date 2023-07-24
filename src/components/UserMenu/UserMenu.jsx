import css from './UserMenu.module.css';

export const UserMenu = () => {
  return (
    <div className={css.userContainer}>
      <p>mango@mail.com</p>
      <button>Logout</button>
    </div>
  );
};
