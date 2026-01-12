import Link from 'next/link';
import LinkType from 'types/link';
import { FC, Fragment, ReactElement, useRef } from 'react';
// -------- custom hook -------- //
import useSticky from 'hooks/useSticky';
import useNestedDropdown from 'hooks/useNestedDropdown';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
import ListItemLink from 'components/reuseable/links/ListItemLink';
import Signin from './partials/Signin';

import DashboardNavbarLink from 'components/reuseable/links/DashboardNavbarLink';
import { IoSearchOutline } from "react-icons/io5";

// ===================================================================
type NavbarProps = {
  info?: boolean;
  cart?: boolean;
  fancy?: boolean;
  logoAlt?: string;
  search?: boolean;
  social?: boolean;
  language?: boolean;
  stickyBox?: boolean;
  navClassName?: string;
  button?: ReactElement;
  navOtherClass?: string;
};
// ===================================================================

const AuthNavbar: FC<NavbarProps> = (props) => {
  const { navClassName, info, search, social, language, button, cart, fancy, navOtherClass, stickyBox, logoAlt } =
    props;

  useNestedDropdown();
  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically render the logo
  const logo = sticky ? 'logo-dark' : logoAlt ?? 'logo-dark';
  // dynamically added navbar classname
  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

  // render inner nav item links
  const renderLinks = (links: LinkType[]) => {
    return links.map((item) => (
      <ListItemLink href={item.url} title={item.title} linkClassName="dropdown-item" key={item.id} />
    ));
  };

  // all main header contents
  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-100">
        <NextLink href="/" title={<img alt="logo" style={{width:"130px",cursor:"pointer"}} src={`/img/${logo}.png`} />} />
      </div>

      <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
        <div className="offcanvas-header d-lg-none">
          <h3 className="text-white fs-30 mb-0">Testerika</h3>
          <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="btn-close btn-close-white" />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav">
            <li className="nav-item dropdown dropdown-mega">
              <DashboardNavbarLink title="Free Quizzes" className="nav-link" to="/quizzes"/>
            </li>
            <li className="nav-item dropdown dropdown-mega">
              <DashboardNavbarLink title="Packages" className="nav-link" to="/packages"/>
            </li>

            <li className="nav-item dropdown">
                <DashboardNavbarLink title="Passes" className="nav-link" to="/passes"/>
            </li>
            <li className="nav-item dropdown">
                <DashboardNavbarLink title="Blog" className="nav-link" to="/blog"/>
            </li>


            <li className="nav-item dropdown dropdown-mega">
                <label style={{position:"relative"}}>
                   <input  className="form-control px-2 py-1" placeholder='Search...' style={{width:"200px",marginTop:"18px"}}/>
                   <span style={{position:"absolute",top:"23px",right:"10px"}}>
                    <IoSearchOutline style={{transform:"scale(1.2)",color:"black"}}/>
                   </span>
                </label>
                
            </li>

           
          </ul>

          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink title="admin@Testerika.com" className="link-inverse" href="mailto:admin@Testerika.com" />
              <br />
              <NextLink href="tel:+91 9461111911" title="+91 9461111911" />
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      <div className={navOtherClass}>
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {button && <li className="nav-item d-md-block">{button}</li>}
          <li className="nav-item d-lg-none">
            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas-nav" className="hamburger offcanvas-nav-btn">
              <span />
            </button>
          </li>
        </ul>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {stickyBox && <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />}

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {fancy ? (
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
              {headerContent}
            </div>
          </div>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
        )}
      </nav>

      <Signin />

    </Fragment>
  );
};

// set deafult Props
AuthNavbar.defaultProps = {
  cart: false,
  info: false,
  social: false,
  search: false,
  language: false,
  stickyBox: true,
  navOtherClass: 'navbar-other w-100 d-flex ms-auto',
  navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light'
};

export default AuthNavbar;
