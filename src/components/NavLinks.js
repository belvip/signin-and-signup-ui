import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  const links = [
    { id: 1, url: '/', text: 'home' },
    { id: 2, url: 'login', text: 'login' },
    { id: 3, url: 'signup', text: 'signup' },
  ];

    return (
        <>
            {links.map(({ id, url, text }) => (
                <li key={id}>
                <NavLink
                    to={url}
                    className={({ isActive }) =>
                    isActive
                        ? 'capitalize text-blue-600 underline'
                        : 'capitalize text-gray-700 hover:underline'
                    }
                >
                    {text}
                </NavLink>
                </li>
            ))}
        </>
    );
};

export default NavLinks;
