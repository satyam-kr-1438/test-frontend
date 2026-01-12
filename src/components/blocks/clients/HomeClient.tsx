import { FC, Fragment } from 'react';
import Clients1 from './Clients1';

const HomeClient: FC = () => {
  return (
    <Fragment>
      {/* <h2 className="fs-15 text-uppercase text-muted text-center mb-8">Trusted by Over 5000 Clients</h2> */}
      <div className="px-lg-5">
        <Clients1 />
      </div>
    </Fragment>
  );
};

export default HomeClient;
