import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const links = [
    {
      to: "https://www.facebook.com/nextjs.org",
      label: "Facebook",
      icon: <FaFacebookF />,
    },
    {
      to: "https://www.instagram.com/vercel/",
      label: "Instagram",
      icon: <FaInstagram />,
    },
    {
      to: "https://www.linkedin.com/company/vercel/",
      label: "LinkedIn",
      icon: <FaLinkedinIn />,
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.div}>
        <ul className={styles.ul}>
          {links.map((link) => (
            <li className={styles.li} key={link.to}>
              <a
                className={styles.a}
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
const styles = {
  // make the footer sit at the bottom of the page
  footer: "fixed bottom-0 left-0 w-full py-2 bg-gray-800 flex justify-center",
  div: "flex space-x-8",
  ul: "flex space-x-20",
  li: "py-2 lg:py-0",
  a: "text-gray-300 hover:text-White text-3xl",
};
