import getComponentsRootDom from "./getComponentsRootDom";
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less";

export default function(options = {}) {
  const content = options.content || "",
    type = options.type || "info",
    duration = options.duration || 2000,
    container = options.container || document.body;
  const div = document.createElement("div");
  const iconDom = getComponentsRootDom(Icon, { type });
  div.innerHTML = `<span class=${styles.icon}>${iconDom.outerHTML}</span><div>${content}</div>`;
  const styleClass = styles[`message-${type}`];
  div.className = `${styles.message} ${styleClass}`;
  if (options.container) {
    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }
  }

  container.appendChild(div);
  div.clientHeight;
  div.style.opacity = 1;
  div.style.transform = "translate(-50%, -50%)";
  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = `translate(-50%, -50%) translateY(-25px)`;
    div.addEventListener(
      "transitionend",
      () => {
        div.remove();
        options.callback && options.callback();
      },
      { once: true }
    );
  }, duration);
}
