"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}();!function(){function e(){var e=document.querySelector('meta[name="csdnFooter"]');if(e){var n=JSON.parse(e.getAttribute("content"));return Object.assign({el:document.querySelector("body"),type:1},n)}}var n="http"===location.protocol.substr(0,4)?"":"https:",t=n+"//g.csdnimg.cn/common/csdn-footer/csdn-footer.css",a=n+"//g.csdnimg.cn/common/csdn-footer/images",r=(new Date).getFullYear();if(window.csdn=window.csdn||{},window.csdn.csdnFooter=window.csdn.csdnFooter||{},!csdn.trackad){var l=document.createElement("script");l.type="text/javascript",l.async=!0,l.src="https://g.csdnimg.cn/asdf/1.1.3/trackad.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(l,i)}var c=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=n.el,r=void 0===a?document.querySelector("body"):a,l=n.type,i=void 0===l?1:l;_classCallCheck(this,e),this.el=this.queryEl(r),this.setType(i),this.importCss(t),this.render()}return _createClass(e,[{key:"render",value:function(){3===this.type?this.renderVerticalFooter():this.renderHorizontalFooter()}},{key:"renderVerticalFooter",value:function(){var e='\n        <div id="csdn-copyright-footer" class="side'+(this.isDark()?" dark":"")+'">\n          <div class="copyright-footer-contact">\n            <div>\n              <img src="'+a+'/qq.png" alt="">\n              <a href="https://url.cn/5epoHIm?_type=wpa&qidian=true" target="_blank">QQ客服</a>\n            </div>\n            <div>\n              <img src="'+a+'/email.png" alt="">\n              <a href="mailto:webmaster@csdn.net" target="_blank">kefu@csdn.net</a>\n            </div>\n            <div>\n              <img src="'+a+'/cs.png" alt="">\n              <a href="http://bbs.csdn.net/forums/Service" target="_blank">客服论坛</a>\n            </div>\n            <div>\n              <img src="'+a+'/tel.png" alt="">\n              <span>400-660-0108</span>\n            </div>\n            <div class="work-time">工作时间：8:30-22:00</div>\n          </div>\n          <ul class="copyright-footer-middle">\n            <li><a href="//www.csdn.net/company/index.html#about" target="_blank">关于我们</a></li>\n            <li><a href="//www.csdn.net/company/index.html#recruit" target="_blank">招贤纳士</a></li>\n            <li><a href="//www.csdn.net/company/index.html#advertisement" target="_blank">广告服务</a></li>\n          </ul>\n          <ul class="copyright-footer-info">\n            <li><a href="http://beian.miit.gov.cn/publish/query/indexFirst.action" rel="noreferrer" target="_blank">京ICP备19004658号</a></li>\n            <li><a href="https://csdnimg.cn/cdn/content-toolbar/csdn-ICP.png" target="_blank">经营性网站备案信息</a></li>\n            <li><img src="'+a+'/badge.png" alt=""><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502030143" rel="noreferrer" target="_blank">公安备案号11010502030143</a></li>\n            <li><a href="https://csdnimg.cn/release/live_fe/culture_license.png" rel="noreferrer" target="_blank">京网文〔2020〕1039-165号</a></li>\n            <li class="compact">©1999-'+r+'北京创新乐知网络技术有限公司</li>\n            <li><a href="http://www.cyberpolice.cn/" target="_blank">网络110报警服务</a></li>\n            <li><a href="https://chrome.google.com/webstore/detail/csdn/ojklpkibpnnjefjcmlkbjcmpmgfcaiao?hl=zh-CN" target="_blank">Chrome商店下载</a></li>\n            <li><a href="http://www.bjjubao.org/" target="_blank">北京互联网违法和不良信息举报中心</a></li>\n            <li><a href="http://www.12377.cn/" target="_blank">中国互联网举报中心</a></li>\n            <li><a href="https://download.csdn.net/index.php/tutelage/" target="_blank">家长监护</a></li>\n            <li><a href="https://www.csdn.net/company/index.html#statement" target="_blank">版权与免责声明</a></li>\n            <li><a href="https://blog.csdn.net/blogdevteam/article/details/90369522" target="_blank">版权申诉</a></li>\n          </ul>\n        </div>\n      ';$(this.el).append(e)}},{key:"renderHorizontalFooter",value:function(){var e='\n        <div id="copyright-box" class="'+(this.isDark()?"dark":"")+'">\n          <div id="csdn-copyright-footer" class="column'+(2===this.type?" small":"")+(this.isDark()?" dark":"")+'">\n            <ul class="footer-column-t">\n            <li>\n              <a href="//www.csdn.net/company/index.html#about" target="_blank">关于我们</a>\n            </li>\n            <li>\n              <a href="//www.csdn.net/company/index.html#recruit" target="_blank">招贤纳士</a>\n            </li>\n            <li>\n              <a href="//www.csdn.net/company/index.html#advertisement" target="_blank">广告服务</a>\n            </li>\n            <li>\n              <img src="'+a+'/email.png" alt="">\n              <a href="mailto:webmaster@csdn.net" target="_blank">kefu@csdn.net</a>\n            </li>\n            <li>\n              <img src="'+a+'/cs.png" alt="">\n              <a href="http://bbs.csdn.net/forums/Service" target="_blank">客服论坛</a>\n            </li>\n            <li>\n              <img src="'+a+'/tel.png" alt="">\n              <span>400-660-0108</span>\n            </li>\n            <li>\n              <img src="'+a+'/qq.png" alt="">\n              <a href="https://url.cn/5epoHIm?_type=wpa&qidian=true" target="_blank">QQ客服&nbsp&nbsp8:30-22:00</a>\n            </li>\n          </ul>\n            <ul class="footer-column-b">\n            <li><img src="'+a+'/badge.png" alt=""><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502030143" rel="noreferrer" target="_blank">公安备案号11010502030143</a></li>\n            <li><a href="http://beian.miit.gov.cn/publish/query/indexFirst.action" rel="noreferrer" target="_blank">京ICP备19004658号</a></li>\n            <li><a href="https://csdnimg.cn/release/live_fe/culture_license.png" rel="noreferrer" target="_blank">京网文〔2020〕1039-165号</a></li>\n            <li><a href="https://csdnimg.cn/cdn/content-toolbar/csdn-ICP.png" target="_blank">经营性网站备案信息</a></li>\n            <li><a href="http://www.bjjubao.org/" target="_blank">北京互联网违法和不良信息举报中心</a></li>\n            <li><a href="http://www.cyberpolice.cn/" target="_blank">网络110报警服务</a></li>\n            <li><a href="http://www.12377.cn/" target="_blank">中国互联网举报中心</a></li>\n            <li><a href="https://download.csdn.net/index.php/tutelage/" target="_blank">家长监护</a></li>\n            <li><a href="https://chrome.google.com/webstore/detail/csdn/ojklpkibpnnjefjcmlkbjcmpmgfcaiao?hl=zh-CN" target="_blank">Chrome商店下载</a></li>\n            <li>©1999-'+r+'北京创新乐知网络技术有限公司</li>\n            <li><a href="https://www.csdn.net/company/index.html#statement" target="_blank">版权与免责声明</a></li>\n            <li><a href="https://blog.csdn.net/blogdevteam/article/details/90369522" target="_blank">版权申诉</a></li>\n          </ul>\n          </div>\n        </div>\n      ';$(this.el).append(e)}},{key:"queryEl",value:function(e){if("string"==typeof e){var n=document.querySelector(e);return n||void 0,n}return e}},{key:"setType",value:function(e){1==e||2==e||3==e?this.type=Number(e):void 0}},{key:"isDark",value:function(){var e=document.querySelector('meta[name="toolbar"]'),n=e&&JSON.parse(e.getAttribute("content")).type;return window.csdn.toolbarIsBlack||"1"===n}},{key:"importCss",value:function(e){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.href=e,document.getElementsByTagName("head")[0].appendChild(n)}}]),e}();$(function(){var n=e();new c(n||window.csdn.csdnFooter.options)})}();