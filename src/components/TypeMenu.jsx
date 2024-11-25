import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const TypeMenu = ({ setFilterType }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Type
          <i
            className="bi bi-chevron-down -mr-1 size-5 text-gray-400"
            aria-hidden="true"
          ></i>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <button
              className="block px-4 py-2 text-sm text-gray-600 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
              onClick={() => setFilterType("all")}
            >
              All
            </button>
          </MenuItem>
          <MenuItem>
            <button
              className="block px-4 py-2 text-sm text-gray-600 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
              onClick={() => setFilterType("public")}
            >
              Public
            </button>
          </MenuItem>
          <MenuItem>
            <button
              className="block px-4 py-2 text-sm text-gray-600 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
              onClick={() => setFilterType("private")}
            >
              Private
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default TypeMenu;
