import {FiSearch} from "react-icons/fi";
import {AiFillPlusCircle} from "react-icons/ai";
const Search = ({onOpen, filterContacts}) => {
  return (
    <div className="flex gap-2">
      <div className="flex relative items-center flex-grow">
        <FiSearch className="text-3xl absolute ml-2" />
        <input
          onChange={(event) => filterContacts(event)}
          type="text"
          placeholder="Search"
          className="border h-12 flex-grow rounded-lg pl-11 outline-none  "
        />
      </div>
      <div className="flex">
        <AiFillPlusCircle
          onClick={onOpen}
          className="text-5xl text-white cursor-pointer self-center"
        />
      </div>
    </div>
  );
};

export default Search;
