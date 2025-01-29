import {FC} from 'react';
import Resume from '../components/Sections/Resume';

const ResumePage: FC = () => {
  return (
    <div className="bg-neutral-100 min-h-screen">
      <a 
        href="https://www.brucelinweb.com/#about"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://www.brucelinweb.com/#about
      </a>
      {/* <Resume /> */}
    </div>
  );
};

export default ResumePage;