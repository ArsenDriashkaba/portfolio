import { addIcons } from "oh-vue-icons";
import {
  RiArrowGoBackFill,
  RiDeleteBin6Fill,
  RiEdit2Fill,
  RiFileListFill,
  RiFileListLine,
  RiHeart3Fill,
  RiHeart3Line,
  RiHome3Fill,
  RiLayoutGridFill,
  RiLayoutGridLine,
  RiLoader4Fill,
  RiSearchLine,
  RiTranslate2,
} from "oh-vue-icons/icons";

addIcons(
  RiHome3Fill,
  RiHeart3Fill,
  RiHeart3Line,
  RiDeleteBin6Fill,
  RiArrowGoBackFill,
  RiSearchLine,
  RiLayoutGridFill,
  RiFileListFill,
  RiLayoutGridLine,
  RiFileListLine,
  RiEdit2Fill,
  RiLoader4Fill,
  RiTranslate2
);

export const icons = {
  home: RiHome3Fill.name,
  likeFill: RiHeart3Fill.name,
  likeOutline: RiHeart3Line.name,
  deleteBin: RiDeleteBin6Fill.name,
  backArrow: RiArrowGoBackFill.name,
  search: RiSearchLine.name,
  grid: RiLayoutGridFill.name,
  gridLine: RiLayoutGridLine.name,
  list: RiFileListFill.name,
  listLine: RiFileListLine.name,
  edit: RiEdit2Fill.name,
  loading: RiLoader4Fill.name,
  translate: RiTranslate2.name,
};

export type IconName = keyof typeof icons;
