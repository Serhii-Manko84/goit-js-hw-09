!function(){var o={bodyColor:document.querySelector("body"),startColor:document.querySelector("[data-start]"),stopColor:document.querySelector("[data-stop]")};console.log(o.bodyColor);var t=null;o.stopColor.disabled=!0,o.startColor.addEventListener("click",(function(){t=setInterval((function(){o.bodyColor.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),o.startColor.disabled=!0,o.stopColor.disabled=!1})),o.stopColor.addEventListener("click",(function(){clearInterval(t),o.startColor.disabled=!1,o.stopColor.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.8076c063.js.map
