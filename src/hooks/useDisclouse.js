import {useState} from "react";

const useDisclouse = () => {
  const [isOpen, setIsOpen] = useState(false);
  // @Activate OnOpen Function
  const onOpen = function () {
    setIsOpen(true);
  };
  const onClose = function () {
    setIsOpen(false);
  };
  return {isOpen, onOpen, onClose};
};

export default useDisclouse;
