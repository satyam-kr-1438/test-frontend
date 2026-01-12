import React from 'react';
import Link from 'next/link';

const CbetSideBar = () => {
  return (
    <>
      <div className="c-bet-sidebar d-none-mob">
      <Link href="/dashboard/home">
        <img src="/img/websiteimage/testerika-logo.png" className="mx-auto" alt="Testerika-slider" /></Link>
        <div className="home-cbet">
          <ul className="side-bar-menu-listing">
          <li><Link href="/dashboard/home">Home</Link></li>
          </ul>
          <ul className="side-bar-menu-listing">
            <li><Link href="/dashboard/online-test-series/">Online Test Series</Link></li>
          </ul>
          <ul className="side-bar-menu-listing">
            <li><Link href="/dashboard/attempted-exam">Attempted Exams</Link></li>
          </ul>
          <ul className="side-bar-menu-listing">
          <li><Link href="/dashboard/saved-questions">Saved Questions</Link></li>
          </ul>
          <ul className="side-bar-menu-listing">
          <li><Link href="/dashboard/live-exams">Live Exams</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CbetSideBar;
