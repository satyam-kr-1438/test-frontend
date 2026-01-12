import { FC } from 'react';

// ========================================================
type SocialLinksProps = { className?: string };
// ========================================================

const links = [
  { id: 1, icon: 'uil uil-twitter', url: 'https://twitter.com/i/flow/login?redirect_after_login=%2testerika' },
  { id: 2, icon: 'uil uil-facebook-f', url: 'https://www.facebook.com/testerika' },
  { id: 4, icon: 'uil uil-instagram', url: 'https://www.instagram.com/testerika/' },
  { id: 5, icon: 'uil uil-youtube', url: 'https://www.youtube.com/@testerika' }
];

const SocialLinks: FC<SocialLinksProps> = ({ className = 'nav social social-white mt-4' }) => {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url }) => (
        <a href={url} key={id} target="_blank" rel="noreferrer">
          <i className={icon} />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
