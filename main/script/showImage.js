import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css";
import getSrcPrefix from "@script/getSrcPrefix";
/**
 * ----------------------------------------
 * 全屏预览图片
 * @param {String} src - 图片地址
 * ----------------------------------------
 */
export default function showImage(src, option) {
  const img = new Image();
  img.src = getSrcPrefix(src);
  const viewer = new Viewer(img, {
    inline: false,
    container: document.body,
    tooltip: false,
    button: false,
    title: false,
    toolbar: false,
    navbar: false,
    keyboard: false,
    fullscreen: true,
    hidden: () => viewer.destroy(),
    ...option,
  });

  viewer.show();
}
