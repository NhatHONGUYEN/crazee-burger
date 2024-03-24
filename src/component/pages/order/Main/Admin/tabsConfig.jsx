import { MdModeEditOutline } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

export const tabsConfig = [
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
  },
];

export const getTabSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected);
