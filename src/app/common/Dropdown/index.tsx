"use client";

import { FC, Fragment, ReactNode } from "react";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import Button from "../Button";
import Box from "../Box";
import Text from "../Text";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface DropdownProps {
  label: string | ReactNode;
  menu: { label: string; fn: () => void }[];
  className?: string;
}

const Dropdown: FC<DropdownProps> = ({ label, menu, className }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Box>
        <Menu.Button
          className={clsx(
            className,
            "flex items-center text-gray-400 hover:text-gray-600"
          )}
        >
          <Text className="sr-only">Open options</Text>
          {label}
        </Menu.Button>
      </Box>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Box className="py-1">
            {menu.map((item) => (
              <Menu.Item key={item.label}>
                {({ active }) => (
                  <Button
                    onClick={item.fn}
                    className={classNames(
                      active ? "bg-red-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
                    {item.label}
                  </Button>
                )}
              </Menu.Item>
            ))}
          </Box>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
