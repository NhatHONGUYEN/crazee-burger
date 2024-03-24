import { MdModeEditOutline } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

export const getTabsConfig = (currentTabSelected) => [
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    className: currentTabSelected === "add" ? "is-active" : "",
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    className: currentTabSelected === "edit" ? "is-active" : "",
  },
];
