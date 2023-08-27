import { Link } from "react-router-dom";

export default function Navbar() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {links.map((link) => (
            <li className={styles.li} key={link.to}>
              <Link className={styles.link} to={link.to}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

const styles = {
  nav: "flex justify-center lg:justify-start bg-gray-800 text-white p-4",
  ul: "flex flex-row space-x-12",
  li: "py-2 lg:py-0",
  link: "text-White hover:text-white uppercase text-2xl",
};
