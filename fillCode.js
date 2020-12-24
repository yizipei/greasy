// ==UserScript==
// @name         脚本测试
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Jasper
// @match         *://localhost*
// @require      https://cdn.staticfile.org/jquery/3.3.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  window.onload = function() {
    if ($('.code-row .el-input__inner')) {
      $('.code-row .el-input__inner').text('qqqq')
    }
  }

})();
