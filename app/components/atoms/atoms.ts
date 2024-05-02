import { atom } from "recoil";

const COMPONENT_NAME = "1.0";

export const OpenState = atom<any>({
  key: `${COMPONENT_NAME}/OpenState`,
  default: false,
});

export const MenuState = atom<any>({
  key: `${COMPONENT_NAME}/MenuState`,
  default: false,
});

export const UserState = atom<any>({
  key: `${COMPONENT_NAME}/UserState`,
  default: {},
});

export const CollectionState = atom<any>({
  key: `${COMPONENT_NAME}/CollectionState`,
  default: '',
});

export const TagState = atom<any>({
  key: `${COMPONENT_NAME}/TagState`,
  default: [],
});

export const PillState = atom<any>({
  key: `${COMPONENT_NAME}/PillState`,
  default: false,
});

export const SearchState = atom<any>({
  key: `${COMPONENT_NAME}/SearchState`,
  default: '',
});

export const EntryState = atom<any>({
  key: `${COMPONENT_NAME}/EntryState`,
  default: false,
});

export const DataState = atom<any>({
  key: `${COMPONENT_NAME}/DataState`,
  default: {
    url: "",
    title: "",
    price: 0,
    units: 1,
    house: ``,
    desc: ``,
    collection: ``,
  },
});

export const DataTempState = atom<any>({
  key: `${COMPONENT_NAME}/DataTempState`,
  default: {
    url: "",
    title: "",
    price: 0,
    units: 1,
    house: ``,
    desc: ``,
    collection: ``,
  },
});

export const ProductState = atom<any>({
  key: `${COMPONENT_NAME}/ProductState`,
  default: [],
});
