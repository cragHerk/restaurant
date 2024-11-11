"use client";
import { IoCloseOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPhoneVolume } from "react-icons/fa6";

const BreakfastClient = ({
  translations,
}: {
  translations: {
    top: string;
    top2: string;
  };
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Popup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        translations={translations}
      />
    </>
  );
};
interface SpringModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  translations: {
    top: string;
    top2: string;
  };
}
const Popup: React.FC<SpringModalProps> = ({
  isOpen,
  setIsOpen,
  translations,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-transparent backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overscroll-auto cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              setIsOpen(false)
            }
            className="bg-black text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="flex justify-center items-center flex-col relative">
              <IoCloseOutline
                color="white "
                size={30}
                className="absolute right-1 top-1"
              />
              <h1 className="text-5xl font-bold">{translations.top}</h1>
              <span className="text-g text-2xl underline p-1">
                {translations.top2}
              </span>

              <span className="text-2xl text-g ">
                <span className="flex items-center py-2">
                  <FaPhoneVolume color="#a38954" size={25} />
                  <span className="ml-2 font-bold text-white">
                    +48 536 265 668
                  </span>
                </span>
                <span className="text-white border px-3 py-1 mt-4 rounded">
                  Zator, Jana Pawła II 9/LU3
                </span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BreakfastClient;
