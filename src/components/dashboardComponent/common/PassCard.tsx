import { FC } from 'react';
import Link from 'next/link';

// ========================================================================
type PassCardProps = {
  link: string;
  time: string;
  title: string;
  avatar: string;
  location: string;
  avatarColor: string;
};
// ========================================================================

const PassCard: FC<PassCardProps> = (props) => {
  const { time, location, title, avatarColor, avatar, link } = props;

  return (
    <Link href={link} passHref legacyBehavior>
      <a className="card mb-4 mt-4 lift">
        <div className="card-body py-5 px-2">
          <span className="row justify-content-between align-items-center">
            <span className="col-6 col-md-4 col-sm-3 col-lg-3 mb-2 mb-md-0 d-flex align-items-center text-body">
              <span className={`avatar ${avatarColor} text-white w-9 h-9 fs-17 me-3`}>{avatar}</span> {title}
            </span>

            <span className="col-6 col-sm-2  col-md-2 col-lg-3 text-body d-flex align-items-center">
              <i className="uil uil-clock me-1" /> {time}
            </span>
            
            <span className="col-6  col-sm-3 col-md-3 col-lg-3 text-body d-flex align-items-center">
              {/* <i className="uil uil-clock me-1" /> {time} */}
              INR 35.00
            </span>

            

            <span className="col-6  col-sm-4 col-md-3 col-lg-3 text-body d-flex align-items-center">
              {/* <i className="uil uil-location-arrow me-1" /> {location} */}
                <button className="btn btn-primary btn-sm">Buy Now</button>
            </span>

            {/* <span className="d-none d-lg-block col-1 text-center text-body">
              <i className="uil uil-angle-right-b" />
            </span> */}
          </span>
        </div>
      </a>
    </Link>
  );
};

export default PassCard;
