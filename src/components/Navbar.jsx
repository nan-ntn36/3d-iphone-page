import { appleImg } from '../utils/index.js';
import { navLists } from '../constants/index.js';

const Navbar = () => {
  console.log(navLists);
  return (
    <header>
      <nav>
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div>{navLists}</div>
      </nav>
    </header>
  );
};

export default Navbar;
