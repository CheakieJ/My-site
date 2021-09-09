import eventBus from "@/eventBus";
import { debounce } from "@/utils";
import tempImg from "@/assets/greatwall.jpg";
let imgs = []; //把所有需要加载的图片放到一个数组里统一操作
function handleScroll() {
  setImgs(imgs);
}
function setImgs(imgs) {
  for (const img of imgs) {
    setImg(img);
  }
}
function setImg(img) {
  img.dom.src = tempImg; //首先把图片设为默认图片
  const rect = img.dom.getBoundingClientRect();
  const height = rect.height || 150;
  const clientHeight = document.documentElement.clientHeight;
  //判断图片是否在视口区
  if (rect.top >= -height && rect.top <= clientHeight) {
    img.dom.src = img.src;
    imgs = imgs.filter((i) => i !== img);
  }
}
eventBus.$on("mainScroll", debounce(handleScroll, 50));

export default {
  inserted(el, bindings) {
    const img = {
      dom: el,
      src: bindings.value,
    };
    imgs.push(img);
    setImg(img);
  },
};
