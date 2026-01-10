import Logo from '../../../../components/logo/logo';

export default function Footer() {
  return (
    <footer className="footer">
      <Logo
        classNameLink="footer__logo-link"
        classNameImage="footer__logo"
        width={64}
        height={33}
      />
    </footer>
  );
}
