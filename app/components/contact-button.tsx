"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";

const ContactButton = ({ contact }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className=" text-black  px-6 rounded-lg   font-bold"
      >
        {contact}
      </button>
      <Popup isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
interface SpringModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
const Popup: React.FC<SpringModalProps> = ({ isOpen, setIsOpen }) => {
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
            className="bg-black to-gold text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10">
              <ul className="text-sm">
                <li className="mb-2 flex">
                  <AiFillPhone size={30} />
                  <Link href="tel:+48 536265668" legacyBehavior>
                    <a className="ml-2">+48 536265668</a>
                  </Link>
                </li>
                <li className="mb-2 flex">
                  <AiFillMail size={30} />
                  <Link href="mailto:library@example.com" legacyBehavior>
                    <a className="ml-2">twins.restauracja@gmail.com</a>
                  </Link>
                </li>

                <li className="mb-2">
                  <Link
                    href="https://www.facebook.com/p/Twins-Restaurant-100083409545578/"
                    legacyBehavior
                  >
                    <a target="_blank" rel="noreferrer" className="flex">
                      <AiFillFacebook size={30} />
                      <span className="ml-2">Facebook</span>
                    </a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="https://www.instagram.com/twins_restaurant_zator/"
                    legacyBehavior
                  >
                    <a target="_blank" rel="noreferrer" className="flex">
                      <AiFillInstagram size={30} />
                      <span className="ml-2">Instagram</span>
                    </a>
                  </Link>
                </li>
              </ul>
              <a className=" hidden md:block absolute right-[30px] top-[0px] w-[150px] text-xs">
                <Image
                  src="/logo.jpg"
                  width={140}
                  height={140}
                  alt="logo"
                  className="rounded-full"
                />
              </a>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Wróć
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactButton;
