import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';

type LogoProps = {
  classNameLink: string;
  classNameImage: string;
  width: number;
  height: number;
};

export default function Logo({
  classNameLink,
  classNameImage,
  width,
  height,
}: LogoProps) {
  return (
    <NavLink
      to={AppRoute.Main}
      end
      className={({ isActive }) =>
        isActive
          ? `${classNameLink} ${classNameLink}--active`
          : classNameLink}
    >
      <img
        className={classNameImage}
        src="img/logo.svg"
        alt="6 cities logo"
        width={width}
        height={height}
      />
    </NavLink>
  );
}
