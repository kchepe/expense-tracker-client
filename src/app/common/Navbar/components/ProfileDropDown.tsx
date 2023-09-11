"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Avatar from "@/app/common/Avatar";
import Box from "@/app/common/Box";
import Button from "@/app/common/Button";
import Text from "@/app/common/Text";
import { getFirstLetter, capitalizeFirstString } from "@/app/utils/string.util";

const ProfileDropDown = () => {
  const { push } = useRouter();
  const { data, status } = useSession();

  const menu = [
    {
      label: "Sign Out",
      fn: () => signOut({ callbackUrl: "/" }),
    },
  ];

  if (status === "loading") {
    return <Box className="h-10 w-10 bg-gray-100 rounded-full" />;
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Box>
        <Menu.Button
          className="inline-flex items-center justify-center gap-x-1.5
                  p-3 text-sm font-semibold h-10 w-10
                text-white bg-primary shadow-sm hover:bg-primary_hover rounded-full"
        >
          {getFirstLetter(data?.user.user.firstName as string)}
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
        <Menu.Items
          className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md
              bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <Box>
            <Menu.Item>
              {({ active }) => (
                <Button
                  onClick={() => push("/my-properties")}
                  className={clsx(
                    active ? "bg-red-100 rounded-t-md" : "text-black",
                    "p-4 text-sm w-full text-left flex items-center gap-2 border-b"
                  )}
                >
                  <Box>
                    <Avatar>
                      {getFirstLetter(data?.user.user.firstName as string)}
                    </Avatar>
                  </Box>
                  <Box className="flex flex-col">
                    <Text>
                      {capitalizeFirstString(
                        `${data?.user.user.firstName} ${data?.user.user.lastName}` as string
                      )}
                    </Text>
                  </Box>
                </Button>
              )}
            </Menu.Item>
            {menu.map((item, index) => (
              <Menu.Item key={`${item.label}${index + 1}`}>
                {({ active }) => (
                  <Button
                    type="button"
                    onClick={item.fn}
                    className={clsx(
                      active ? "bg-red-100 last:rounded-b-md" : "text-black",
                      "w-full px-4 py-2 text-left text-sm flex items-center gap-3"
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

export default ProfileDropDown;
