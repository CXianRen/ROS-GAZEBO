"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};!function(n,t){function e(n,t){Object.getOwnPropertyNames(n).forEach(function(o){void 0!==t[o]&&null!==t[o]&&("object"===_typeof(t[o])&&"contentEl"!==o?e(n[o],t[o]):n[o]=t[o])},null)}function o(){var t=n.scrollY,e=t/100,o=setInterval(function(){t-=e,n.scrollTo(0,t),t<=0&&clearInterval(o)},10)}function s(){var e=t.createElement("div");if(e.innerHTML=m,t.body.appendChild(e),c.contentEl&&c.contentEl.style){var s=c.contentEl.getBoundingClientRect().left,i=c.contentEl.clientWidth;t.querySelector(".csdn-side-toolbar").style.right="auto",t.querySelector(".csdn-side-toolbar").style.left=s+i+8+"px"}if(c.goTop.isShow){var a=function(){n.scrollY>=r?l.classList.remove("go-top-hide"):l.classList.add("go-top-hide")},l=t.querySelector("a.option-box[data-type='gotop']"),r=n.outerHeight,d=t.body.scrollHeight;a(),n.addEventListener("scroll",a,!1),n.addEventListener("resize",function(){r=n.outerHeight,d=t.body.scrollHeight,a()}),l.addEventListener("click",o,!1)}if(c.cs.isShow){t.querySelector("a.option-box[data-type='cs']").addEventListener("click",function(){null!==c.cs.clickFun?c.cs.clickFun():n.open(c.cs.clickUrl,"_blank")},!1)}if(c.help.isShow){t.querySelector("a.option-box[data-type='cs']").addEventListener("click",function(){null!==c.help.clickFun?c.help.clickFun():n.open(c.help.clickUrl,"_blank")},!1)}if(c.guide.isShow){t.querySelector("a.option-box[data-type='guide']").addEventListener("click",function(){null!==c.guide.clickFun?c.guide.clickFun():n.open(c.guide.clickUrl,"_blank")},!1)}}var c=(location.protocol.substr(0,4),{url:"https://g.csdnimg.cn/side-toolbar/2.6",opinion:{isShow:!1},qr:{isShow:!0,btnImgSrc:"https://g.csdnimg.cn/side-toolbar/2.6/images/qr.png",data:[{imgSrc:"https://g.csdnimg.cn/side-toolbar/2.6/images/qr_wechat.png",desc:"关注公众号"},{imgSrc:"https://g.csdnimg.cn/side-toolbar/2.6/images/qr_app.png",desc:"下载APP"}]},cs:{isShow:!0,btnImgSrc:"https://g.csdnimg.cn/side-toolbar/2.6/images/kefu.png",clickUrl:"https://url.cn/5epoHIm?_type=wpa&qidian=true",clickFun:null},help:{isShow:!1,btnImgSrc:"https://g.csdnimg.cn/side-toolbar/2.6/images/bangzhucopy.png",clickUrl:"",clickFun:null},report:{isShow:!1,btnImgSrc:"https://g.csdnimg.cn/side-toolbar/2.6/images/jubaocopy.png"},goTop:{isShow:!0,btnImgSrc:"https://g.csdnimg.cn/side-toolbar/2.6/images/fanhuidingbucopy.png"},guide:{isShow:!1,btnImgSrc:"https://g.csdnimg.cn/side-toolbar/2.6/images/guide.png",clickUrl:"https://blogdev.blog.csdn.net/article/details/108241158",clickFun:null},theme:"white",contentEl:null,afterFinished:null}),i={options:{},goTop:o};void 0===n.csdn&&(n.csdn={}),n.csdn.sideToolbar=Object.assign(i,n.csdn.sideToolbar);var a=n.csdn.sideToolbar.options;!function(){e(c,a)}(),function(n){var e=t.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=n,t.getElementsByTagName("head")[0].appendChild(e)}(c.url+"/side-toolbar.css");var l="",r="",d="",p="",g="",u="",h="";if(c.opinion.isShow&&(l='\n    <a class="option-box" data-type="feedback">\n      <img src="'+c.opinion.btnImgSrc+'" alt="" srcset="">\n      <span class="show-txt">意见<br>反馈</span>\n    </a>\n    '),c.guide.isShow&&(r='\n    <a class="option-box" data-type="guide">\n      <img src="'+c.guide.btnImgSrc+'" alt="" srcset="">\n      <span class="show-txt">新手<br>引导</span>\n    </a>\n    '),c.qr.isShow){var b="";c.qr.data.forEach(function(n){b+='\n      <div class="qr-item-box">\n        <img src="'+n.imgSrc+'" alt="'+n.desc+'">\n        <p class="desc">'+n.desc+"</p>\n      </div>\n      "}),d='\n    <a class="option-box no—h" data-type="app">\n      <img src="'+c.qr.btnImgSrc+'" alt="" srcset="">\n      <span class="show-txt">手机看</span>\n      <div class="app-qr-box">\n        <div class="bg-box">\n          '+b+"\n        </div>\n      </div>\n    </a>\n    "}c.cs.isShow&&(p='\n    <a class="option-box" data-type="cs">\n      <img src="'+c.cs.btnImgSrc+'" alt="" srcset="">\n      <span class="show-txt">客服</span>\n    </a>\n    '),c.help.isShow&&(g='\n    <a class="option-box" data-type="help">\n      <img src="'+c.help.btnImgSrc+'" alt="" srcset="">\n      <span class="show-txt">帮助</span>\n    </a>\n    '),c.report.isShow&&(u='\n    <a class="option-box" data-type="report">\n      <span class="show-txt" style=\'display:flex;opacity:100;\'>举报</span>\n    </a>\n    '),c.goTop.isShow&&(h='\n    <a class="option-box go-top-hide" data-type="gotop">\n      <img src="'+c.goTop.btnImgSrc+'" alt="" srcset="">\n      <span class="show-txt">返回<br>顶部</span>\n    </a>\n    ');var m='\n  <div class="csdn-side-toolbar '+("white"==c.theme?"":c.theme)+'">\n    '+r+"\n    "+l+"\n    "+d+"\n    "+p+"\n    "+g+"\n    "+u+"\n    "+h+"\n  </div>\n  ";null!==c.afterFinished&&c.afterFinished();var y,f=function(n){var t=!1,e=function(){t||(t=!0,n&&n())};!function n(){try{doc.documentElement.doScroll("left")}catch(t){return void setTimeout(n,50)}e()}(),doc.onreadystatechange=function(){"complete"===doc.readyState&&(doc.onreadystatechange=null,e())}};!function(n){t.addEventListener?~["complete","loaded","interactive"].indexOf(t.readyState)?setTimeout(function(){n&&n()},0):(y=function(){t.removeEventListener("DOMContentLoaded",y,!1),n()},t.addEventListener("DOMContentLoaded",y,!1)):t.attachEvent&&f(n)}(s)}(window,document);