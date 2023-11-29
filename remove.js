// ==UserScript==
// @name         Remove_Live
// @name-zh-CN   去除B站直播间播放器
// @namespace    http://tampermonkey.net/123
// @version      1.1
// @description  去除B站直播间播放器
// @author       sun
// @match        https://live.bilibili.com/*
// @license      AGPL-3.0
// @icon         https://blog.chrxw.com/favicon.ico
// @grant        none
// ==/UserScript==

(() => {
    "use strict"; //启用严格模式
    // 去除播放器开关
    let vEnable = localStorage.getItem("vEnable") === "true";
    if (vEnable) {
        setTimeout(() => {
            document.getElementById("lice-player").remove();
        }, 3000);
    }
    let btnArea = document.querySelector(".right-ctnr");
    let btn = document.createElement("button");
    btn.id = "removeLive";
    btn.textContent = vEnable ? "开启播放器" : "关闭播放器";
    btnArea.addEventListener("click", () => {
        vEnable = !vEnable;
        localStorage.setItem("vEnable", vEnable);
        btn.textContent = vEnable ? "开启播放器" : "关闭播放器";
        if (vEnable) {
            document.getElementById("live-player").remove();
        } else {
            location.reload();
        }

    });
    btnArea.insertBefore(btn, btnArea.children[0]);

})()
