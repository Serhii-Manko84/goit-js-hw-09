const o={bodyColor:document.querySelector("body"),startColor:document.querySelector("[data-start]"),stopColor:document.querySelector("[data-stop]")};console.log(o.bodyColor);let t=null;o.stopColor.disabled=!0,o.startColor.addEventListener("click",(()=>{t=setInterval((()=>{o.bodyColor.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),o.startColor.disabled=!0,o.stopColor.disabled=!1})),o.stopColor.addEventListener("click",(()=>{clearInterval(t),o.startColor.disabled=!1,o.stopColor.disabled=!0}));
//# sourceMappingURL=01-color-switcher.8c58fc89.js.map