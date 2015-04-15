(function(){var r=this,v=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},aa=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},z=function(a,b,c){z=Function.prototype.bind&&
-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return z.apply(null,arguments)};var da=(new Date).getTime();var A=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},ea=function(a,b){return/^true$/.test(a)?!0:/^false$/.test(a)?!1:b},fa=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,ha=function(a,b){if(!a)return b;var c=a.match(fa);return c?c[0]:b};var ia=A("0.15"),ja=A("0.01"),ka=A("0.001"),la=A("0.001"),ma=A("0.2"),na=ea("true",!0);var oa=ea("false",!1),pa=ea("false",!1);var qa=function(){},sa=function(a,b,c){switch(typeof b){case "string":ra(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array){var d=b.length;c.push("[");for(var f="",e=0;e<d;e++)c.push(f),sa(a,b[e],c),f=",";c.push("]");break}c.push("{");d="";for(f in b)b.hasOwnProperty(f)&&(e=b[f],"function"!=typeof e&&(c.push(d),ra(f,c),c.push(":"),sa(a,e,c),
d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},ta={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ua=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,ra=function(a,b){b.push('"');b.push(a.replace(ua,function(a){if(a in ta)return ta[a];var b=a.charCodeAt(0),f="\\u";16>b?f+="000":256>b?f+="00":4096>b&&(f+="0");return ta[a]=f+b.toString(16)}));b.push('"')};var va=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Da=function(a){if(!wa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(xa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ya,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(za,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Aa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ba,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ca,"&#0;"));return a},xa=/&/g,ya=/</g,za=/>/g,Aa=/"/g,Ba=/'/g,Ca=/\x00/g,wa=/[\x00&<>"']/,
Ea={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},B={"'":"\\'"},Fa=function(a,b){return a<b?-1:a>b?1:0},Ga=function(){return"transition".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()})},Ha=function(a){var b="\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,f){return b+f.toUpperCase()})};var C=function(a){C[" "](a);return a};C[" "]=function(){};var D=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{C(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(d){return!1}},E=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b){try{var d=new Uint16Array(1);window.crypto.getRandomValues(d);c=d[0]/65536}catch(f){c=Math.random()}return a[Math.floor(c*a.length)]}}return null},Ia=/^(-?[0-9.]{1,30})$/,F=function(a){return Ia.test(a)&&(a=Number(a),!isNaN(a))?a:null};var Ja=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(f){b=c}}return b};var Ka=document,G=window;var H=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(null,a[c],c,a)},I=function(a){return!!a&&"function"==typeof a&&!!a.call},La=function(a,b){if(!(2>arguments.length))for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},Ma=function(a){var b=document;b.addEventListener?b.addEventListener("DOMContentLoaded",a,!1):b.attachEvent&&b.attachEvent("onDOMContentLoaded",a)},Na=function(a){a.google_unique_id?++a.google_unique_id:a.google_unique_id=1},Oa=function(a){a=
a.google_unique_id;return"number"==typeof a?a:0},Pa=function(a){var b=a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c},Qa=function(a,b){return b.getComputedStyle?b.getComputedStyle(a,null):a.currentStyle},Ra=/(^| )adsbygoogle($| )/;var Sa={overlays:1,interstitials:2};var Ta=!!window.google_async_iframe_id,Ua=function(a,b,c){var d=["<iframe"],f;for(f in a)a.hasOwnProperty(f)&&La(d,f+"="+a[f]);d.push('style="left:0;position:absolute;top:0;"');d.push("></iframe>");a=a.id;b="border:none;height:"+c+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+b+"px;background-color:transparent";return['<ins id="',a+"_expand",'" style="display:inline-table;',b,'"><ins id="',a+"_anchor",'" style="display:block;',b,'">',d.join(" "),"</ins></ins>"].join("")};var Va=!0,Wa={},Za=function(a,b,c,d){var f=Xa,e,g=Va;try{e=b()}catch(h){try{var k=Ja(h);b="";h.fileName&&(b=h.fileName);var l=-1;h.lineNumber&&(l=h.lineNumber);g=f(a,k,b,l,c)}catch(m){try{var t=Ja(m);a="";m.fileName&&(a=m.fileName);c=-1;m.lineNumber&&(c=m.lineNumber);Xa("pAR",t,a,c,void 0,void 0)}catch(u){Ya({context:"mRE",msg:u.toString()+"\n"+(u.stack||"")},void 0)}}if(!g)throw h;}finally{if(d)try{d()}catch(w){}}return e},Xa=function(a,b,c,d,f,e){var g={};if(f)try{f(g)}catch(h){}g.context=a;g.msg=
b.substring(0,512);c&&(g.file=c);0<d&&(g.line=d.toString());g.url=Ka.URL.substring(0,512);g.ref=Ka.referrer.substring(0,512);$a(g);Ya(g,e);return Va},Ya=function(a,b){try{if(Math.random()<(b||.01)){var c="/pagead/gen_204?id=jserror"+ab(a),d="http"+("http:"==G.location.protocol?"":"s")+"://pagead2.googlesyndication.com"+c,d=d.substring(0,2E3);G.google_image_requests||(G.google_image_requests=[]);var f=G.document.createElement("img");f.src=d;G.google_image_requests.push(f)}}catch(e){}},$a=function(a){var b=
a||{};H(Wa,function(a,d){b[d]=G[a]})},bb=function(a,b){return function(){var c=arguments;return Za(a,function(){return b.apply(void 0,c)},void 0,void 0)}},cb=function(a,b){return bb(a,b)},db=function(a){return bb("aa:reactiveTag",a)},ab=function(a){var b="";H(a,function(a,d){if(0===a||a)b+="&"+d+"="+("function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a))});return b};var eb=null,fb=function(){if(!eb){for(var a=window,b=a,c=0;a&&a!=a.parent;)if(a=a.parent,c++,D(a))b=a;else break;eb=b}return eb};var gb={google_ad_modifications:!0,google_analytics_domain_name:!0,google_analytics_uacct:!0},hb=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];H(a,function(a,d){if(null!=a){var f;try{var e=[];sa(new qa,a,e);f=e.join("")}catch(g){}f&&(f=f.replace(/\\|\//,"\\$&"),La(b,d,"=",f,";"))}});return b.join("")};var ib=function(a){var b=arguments.length;if(1==b&&"array"==v(arguments[0]))return ib.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};var jb={ha:"google_auto_instream_debug",ia:"google_anchor_debug",ja:"google_infinite_scroll_debug",ka:"google_inflate_debug",la:"google_ia_debug",na:"google_ia_debug_fi",pa:"google_ia_debug_spa",oa:"google_ia_debug_scr",ma:"google_ia_debug_allow_onclick",qa:"google_ladder_rung_debug",ra:"google_lat_debug",sa:"google_lat_debug_all",ta:"google_resize_debug",va:"google_visible_intentful_click",ua:"google_supersize_debug"};var J=function(a){a=a.document;return("CSS1Compat"==a.compatMode?a.documentElement:a.body)||{}},lb=function(a){var b=!1;H(jb,function(c){kb(a,c)&&(b=!0)});return b},kb=function(a,b){if(!a||!a.indexOf)return!1;if(-1!=a.indexOf(b))return!0;var c=mb(b);return-1!=a.indexOf(c)?!0:!1},mb=function(a){var b="";H(a.split("_"),function(a){b+=a.substr(0,2)});return b};var K;a:{var nb=r.navigator;if(nb){var ob=nb.userAgent;if(ob){K=ob;break a}}K=""}var L=function(a){return-1!=K.indexOf(a)};var pb=function(){return L("iPad")||L("Android")&&!L("Mobile")||L("Silk")};var qb={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var rb=/^([0-9.]+)px$/,sb=/^([0-9.]+)$/,tb=function(a){return(a=rb.exec(a))?Number(a[1]):null},ub=function(a,b){for(var c=["width","height"],d=0;d<c.length;d++){var f="google_ad_"+c[d];if(!b.hasOwnProperty(f)){var e;e=(e=tb(a[c[d]]))?Math.round(e):null;null!=e&&(b[f]=e)}}},vb=function(a,b){var c=b.document.documentElement;try{var d=c.getBoundingClientRect();return a.getBoundingClientRect().top-d.top}catch(f){return 0}};var wb={rectangle:1,horizontal:2,vertical:4},xb=[{width:970,height:90,format:2},{width:728,height:90,format:2},{width:468,height:60,format:2},{width:336,height:280,format:1},{width:320,height:100,format:2},{width:320,height:50,format:2},{width:300,height:600,format:4},{width:300,height:250,format:1},{width:250,height:250,format:1},{width:234,height:60,format:2},{width:200,height:200,format:1},{width:180,height:150,format:1},{width:160,height:600,format:4},{width:125,height:125,format:1},{width:120,
height:600,format:4},{width:120,height:240,format:4}];var yb=function(a,b){return b.width-a.width||b.height-a.height};var zb=Array.prototype,Ab=zb.forEach?function(a,b,c){zb.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f="string"==typeof a?a.split(""):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)};var Bb=ib("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));var M=function(){this.H="";this.T=Cb};M.prototype.n=!0;M.prototype.l=function(){return this.H};M.prototype.toString=function(){return"Const{"+this.H+"}"};var Db=function(a){return a instanceof M&&a.constructor===M&&a.T===Cb?a.H:"type_error:Const"},Cb={};var N=function(){this.F="";this.R=Eb};N.prototype.n=!0;var Eb={};N.prototype.l=function(){return this.F};N.prototype.v=function(a){this.F=a;return this};var Fb=(new N).v(""),Gb=/^[-,."'%_!# a-zA-Z0-9]+$/;var O=function(){this.o="";this.S=Hb};O.prototype.n=!0;O.prototype.l=function(){return this.o};O.prototype.D=!0;O.prototype.q=function(){return 1};var Hb={};var P=function(){this.M="";this.U=Ib};P.prototype.n=!0;P.prototype.l=function(){return this.M};P.prototype.D=!0;P.prototype.q=function(){return 1};var Ib={};var Q=function(){this.o="";this.Q=Jb;this.J=null};Q.prototype.D=!0;Q.prototype.q=function(){return this.J};Q.prototype.n=!0;Q.prototype.l=function(){return this.o};
var Kb=function(a){return a instanceof Q&&a.constructor===Q&&a.Q===Jb?a.o:"type_error:SafeHtml"},Lb=/^[a-zA-Z0-9-]+$/,Mb={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0},Nb={EMBED:!0,IFRAME:!0,LINK:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,TEMPLATE:!0},Ob=function(a){var b=0,c="",d=function(a){if("array"==v(a))Ab(a,d);else{if(!(a instanceof Q)){var e=null;a.D&&(e=a.q());a=R(Da(a.n?a.l():String(a)),e)}c+=Kb(a);a=a.q();0==b?b=a:0!=a&&b!=a&&(b=null)}};Ab(arguments,d);return R(c,b)},
Jb={},R=function(a,b){return(new Q).v(a,b)};Q.prototype.v=function(a,b){this.o=a;this.J=b;return this};R("<!DOCTYPE html>",0);R("",0);var S=function(){return L("Edge")};var Pb=L("Opera")||L("OPR"),T=L("Edge")||L("Trident")||L("MSIE"),U=L("Gecko")&&!(-1!=K.toLowerCase().indexOf("webkit")&&!S())&&!(L("Trident")||L("MSIE"))&&!S(),Qb=-1!=K.toLowerCase().indexOf("webkit")&&!S(),Rb=function(){var a=K;if(U)return/rv\:([^\);]+)(\)|;)/.exec(a);if(T&&S())return/Edge\/([\d\.]+)/.exec(a);if(T)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Qb)return/WebKit\/(\S+)/.exec(a)},Sb=function(){var a=r.document;return a?a.documentMode:void 0},Tb=function(){if(Pb&&r.opera){var a=
r.opera.version;return"function"==v(a)?a():a}var a="",b=Rb();b&&(a=b?b[1]:"");return T&&!S()&&(b=Sb(),b>parseFloat(a))?String(b):a}(),Ub={},Vb=function(a){var b;if(!(b=Ub[a])){b=0;for(var c=va(String(Tb)).split("."),d=va(String(a)).split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var g=c[e]||"",h=d[e]||"",k=RegExp("(\\d*)(\\D*)","g"),l=RegExp("(\\d*)(\\D*)","g");do{var m=k.exec(g)||["","",""],t=l.exec(h)||["","",""];if(0==m[0].length&&0==t[0].length)break;b=Fa(0==m[1].length?0:parseInt(m[1],
10),0==t[1].length?0:parseInt(t[1],10))||Fa(0==m[2].length,0==t[2].length)||Fa(m[2],t[2])}while(0==b)}b=Ub[a]=0<=b}return b},Wb=r.document,Xb=Sb(),Yb=!Wb||!T||!Xb&&S()?void 0:Xb||("CSS1Compat"==Wb.compatMode?parseInt(Tb,10):5);var Zb;if(!(Zb=!U&&!T)){var $b;if($b=T)$b=T&&(S()||9<=Yb);Zb=$b}Zb||U&&Vb("1.9.1");T&&Vb("9");var ac={};var bc=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if(T)return Vb("10.0");var a=document.createElement("DIV"),b=Qb?"-webkit":U?"-moz":T?"-ms":Pb?"-o":null,c={transition:"opacity 1s linear"};b&&(c[b+"-transition"]="opacity 1s linear");b={style:c};if(!Lb.test("div"))throw Error("Invalid tag name <div>.");if("DIV"in Nb)throw Error("Tag name <div> is not allowed for SafeHtml.");var c=null,d="<div";if(b)for(var f in b){if(!Lb.test(f))throw Error('Invalid attribute name "'+
f+'".');var e=b[f];if(null!=e){var g;g=f;if(e instanceof M)e=Db(e);else if("style"==g.toLowerCase()){if(!aa(e))throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, '+typeof e+" given: "+e);if(!(e instanceof N)){var h="",k=void 0;for(k in e){if(!/^[-_a-zA-Z0-9]+$/.test(k))throw Error("Name allows only [-_a-zA-Z0-9], got: "+k);var l=e[k];if(null!=l){if(l instanceof M)l=Db(l);else if(Gb.test(l)){for(var m=!0,t=!0,u=0;u<l.length;u++){var w=l.charAt(u);"'"==w&&t?
m=!m:'"'==w&&m&&(t=!t)}m&&t||(l="zClosurez")}else l="zClosurez";h+=k+":"+l+";"}}e=h?(new N).v(h):Fb}h=void 0;h=e instanceof N&&e.constructor===N&&e.R===Eb?e.F:"type_error:SafeStyle";e=h}else{if(/^on/i.test(g))throw Error('Attribute "'+g+'" requires goog.string.Const value, "'+e+'" given.');if(g.toLowerCase()in Mb)if(e instanceof P)e=e instanceof P&&e.constructor===P&&e.U===Ib?e.M:"type_error:TrustedResourceUrl";else if(e instanceof O)e=e instanceof O&&e.constructor===O&&e.S===Hb?e.o:"type_error:SafeUrl";
else throw Error('Attribute "'+g+'" on tag "div" requires goog.html.SafeUrl or goog.string.Const value, "'+e+'" given.');}e.n&&(e=e.l());g=g+'="'+Da(String(e))+'"';d+=" "+g}}f=void 0;null!=f?"array"==v(f)||(f=[f]):f=[];!0===Bb.div?d+=">":(c=Ob(f),d+=">"+Kb(c)+"</div>",c=c.q());(b=b&&b.dir)&&(c=/^(ltr|rtl|auto)$/i.test(b)?0:null);b=R(d,c);a.innerHTML=Kb(b);a=a.firstChild;b=a.style[Ga()];"undefined"!==typeof b?a=b:(b=a.style,c=ac.transition,c||(c=f=Ga(),void 0===a.style[f]&&(f=(Qb?"Webkit":U?"Moz":
T?"ms":Pb?"O":null)+Ha(f),void 0!==a.style[f]&&(c=f)),ac.transition=c),a=b[c]||"");return""!=a});var cc=function(a,b){this.r=["",""];this.i=a||"";this.u=b||""},V=function(a,b,c){0>a.r[b].indexOf(c)&&(a.r[b]+=c)},W=function(a,b){0>a.i.indexOf(b)&&(a.i=b+a.i)},dc=function(a,b){0>a.u.indexOf(b)&&(a.u=b+a.u)};cc.prototype.toString=function(){return[this.r[0],this.r[1],this.i,this.u].join("|")};
var ec=function(a){var b={$:0,Z:0,V:!0};this.s=a;this.t=null;try{this.t=this.s.getBoundingClientRect()}catch(c){}var d=function(a){return a||0==a?+a:null},f=d(b.width);this.p=f;this.m=a=d(b.height);var e=d(b.$);this.A=f==e?null:e;d=d(b.Z);this.w=a==d?null:d;this.K=!!b.V;b.wa&&bc();this.i=new cc},fc=function(a,b,c){if(3!=b.nodeType&&1==b.nodeType){if(/^(head|script|style)$/i.test(b.nodeName))return 0;try{var d=Qa(b,c)}catch(f){}if(d){if("none"==d.display||"fixed"==d.position)return 0;if("absolute"==
d.position){if(!a.t)return 0;c=null;try{c=b.getBoundingClientRect()}catch(e){return 0}return(c.right>a.t.left?2:0)|(c.bottom>a.t.top?4:0)}}return 1}return 0},gc=function(a,b,c){var d=0;if(!b||!b.parentElement)return!0;for(var f=!1,e=0,g=b.parentElement.childNodes,h=0;h<g.length;h++){var k=g[h];k==b?f=!0:(k=fc(a,k,c),d|=k,f&&(e|=k))}e&1&&(d&2&&V(a.i,0,"o"),d&4&&V(a.i,1,"o"));return!(d&1)},hc=function(a,b,c,d,f,e,g,h){if(null!=g&&null!=h){if("string"==typeof e){if("100%"==e)return;e=F(e);null==e&&(dc(a.i,
"n"),V(a.i,b,"d"))}null!=e&&(c?a.K&&d.setAttribute(f,Math.max(e+h-g,0)):V(a.i,b,"d"))}},ic=function(a){return!a||/^(auto|none|100%)$/.test(a)},jc=function(a){return!a||/^(0px|auto|none|0%)$/.test(a)},X=function(a,b,c,d,f,e,g,h,k){if(null!=h&&null!=k){if("string"==typeof g){if("m"==c?jc(g):ic(g))return;g=tb(g);null==g&&(dc(a.i,"p"),V(a.i,b,c))}null!=g&&(d&&f?a.K&&(a=Math.max(g+k-h,0),f[e]=a+"px"):V(a.i,b,c))}};var kc=function(a,b,c){if(!a)return null;for(var d=0;d<a.length;++d)if((a[d].ad_slot||b)==b&&(a[d].ad_tag_origin||c)==c)return a[d];return null};Va=!oa;Wa={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",async_oa:"google_async_for_oa_experiment",dimpr:"google_always_use_delayed_impressions_experiment",peri:"google_top_experiment",pse:"google_pstate_expt"};var lc=function(a,b,c){c||(c=pa?"https":"http");return[c,"://",a,b].join("")};var mc=null;var nc=function(a){this.k=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:z(this.fa,this)});this.ca=a.google_iframe_oncopy},oc=Da("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");
nc.prototype.set=function(a,b){this.ca.handlers[a]=b;this.k.addEventListener&&this.k.addEventListener("load",z(this.X,this,a),!1)};nc.prototype.X=function(a){a=this.k.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};
nc.prototype.fa=function(a,b){var c=pc("rx",a),d;a:{if(a&&(d=a.match("dt=([^&]+)"))&&2==d.length){d=d[1];break a}d=""}d=(new Date).getTime()-d;c=c.replace(/&dtd=(\d+|M)/,"&dtd="+(1E4>d?d+"":"M"));this.set(b,c);return c};var pc=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b};var qc=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};var Y,Z=function(a){this.C=[];this.k=a||window;this.j=0;this.B=null;this.P=0},rc=function(a,b){this.Y=a;this.ga=b};Z.prototype.W=function(a,b){0!=this.j||0!=this.C.length||b&&b!=window?this.L(a,b):(this.j=2,this.O(new rc(a,window)))};Z.prototype.L=function(a,b){this.C.push(new rc(a,b||this.k));sc(this)};Z.prototype.aa=function(a){this.j=1;if(a){var b=cb("sjr::timeout",z(this.N,this,!0));this.B=this.k.setTimeout(b,a)}};
Z.prototype.N=function(a){a&&++this.P;1==this.j&&(null!=this.B&&(this.k.clearTimeout(this.B),this.B=null),this.j=0);sc(this)};Z.prototype.ba=function(){return!(!window||!Array)};Z.prototype.da=function(){return this.P};Z.prototype.nq=Z.prototype.W;Z.prototype.nqa=Z.prototype.L;Z.prototype.al=Z.prototype.aa;Z.prototype.rl=Z.prototype.N;Z.prototype.sz=Z.prototype.ba;Z.prototype.tc=Z.prototype.da;var sc=function(a){var b=cb("sjr::tryrun",z(a.ea,a));a.k.setTimeout(b,0)};
Z.prototype.ea=function(){if(0==this.j&&this.C.length){var a=this.C.shift();this.j=2;var b=cb("sjr::run",z(this.O,this,a));a.ga.setTimeout(b,0);sc(this)}};Z.prototype.O=function(a){this.j=0;a.Y()};
var tc=function(a){try{return a.sz()}catch(b){return!1}},uc=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&tc(a)&&I(a.nq)&&I(a.nqa)&&I(a.al)&&I(a.rl)},vc=function(){if(Y&&tc(Y))return Y;var a=fb(),b=a.google_jobrunner;return uc(b)?Y=b:a.google_jobrunner=Y=new Z(a)},wc=function(a,b){vc().nq(a,b)},xc=function(a,b){vc().nqa(a,b)};var yc=Ta?1==Oa(G):!Oa(G),zc=function(){var a=C("script"),b;b=ha("","pagead2.googlesyndication.com");return["<",a,' src="',lc(b,"/pagead/js/r20150409/r20150224/show_ads_impl.js",""),'"></',a,">"].join("")},Ac=function(a,b,c,d){return function(){var f=!1;d&&vc().al(3E4);var e=a.document.getElementById(b);e&&!D(e.contentWindow)&&
3==a.google_top_js_status&&(a.google_top_js_status=6);try{if(D(a.document.getElementById(b).contentWindow)){var g=a.document.getElementById(b).contentWindow,h=g.document;h.body&&h.body.firstChild||(h.open(),g.google_async_iframe_close=!0,h.write(c))}else{var k=a.document.getElementById(b).contentWindow,l;e=c;e=String(e);if(e.quote)l=e.quote();else{g=['"'];for(h=0;h<e.length;h++){var m=e.charAt(h),t=m.charCodeAt(0),u=h+1,w;if(!(w=Ea[m])){var p;if(31<t&&127>t)p=m;else{var n=m;if(n in B)p=B[n];else if(n in
Ea)p=B[n]=Ea[n];else{var x=n,q=n.charCodeAt(0);if(31<q&&127>q)x=n;else{if(256>q){if(x="\\x",16>q||256<q)x+="0"}else x="\\u",4096>q&&(x+="0");x+=q.toString(16).toUpperCase()}p=B[n]=x}}w=p}g[u]=w}g.push('"');l=g.join("")}k.location.replace("javascript:"+l)}f=!0}catch(y){k=fb().google_jobrunner,uc(k)&&k.rl()}f&&(f=pc("google_async_rrc",c),(new nc(a)).set(b,Ac(a,b,f,!1)))}},Bc=function(a){var b=["<iframe"];H(a,function(a,d){null!=a&&b.push(" "+d+'="'+a+'"')});b.push("></iframe>");return b.join("")},Dc=
function(a,b,c){Cc(a,b,c,function(a,b,e){a=a.document;for(var g=b.id,h=0;!g||a.getElementById(g);)g="aswift_"+h++;b.id=g;b.name=g;g=Number(e.google_ad_width);h=Number(e.google_ad_height);16==e.google_reactive_ad_format?(e=a.createElement("div"),e.innerHTML=Ua(b,g,h),c.appendChild(e.firstChild)):c.innerHTML=Ua(b,g,h);return b.id})},Cc=function(a,b,c,d){var f=C("script"),e={},g=b.google_ad_height;e.width='"'+b.google_ad_width+'"';e.height='"'+g+'"';e.frameborder='"0"';e.marginwidth='"0"';e.marginheight=
'"0"';e.vspace='"0"';e.hspace='"0"';e.allowtransparency='"true"';e.scrolling='"no"';e.allowfullscreen='"true"';e.onload='"'+oc+'"';d=d(a,e,b);var e=Ec(b)?E(["c","e"],ma):null,h=b.google_ad_output,g=b.google_ad_format;g||"html"!=h&&null!=h||(g=b.google_ad_width+"x"+b.google_ad_height,"e"==e&&(g+="_as"));h=!b.google_ad_slot||Ec(b);g=g&&h?g.toLowerCase():"";b.google_ad_format=g;for(var g=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height],h=[],k=0,l=c;l&&25>k;l=
l.parentNode,++k)h.push(9!=l.nodeType&&l.id||"");(h=h.join())&&g.push(h);b.google_ad_unit_key=Pa(g.join(":")).toString();g=a.google_adk2_experiment=a.google_adk2_experiment||E(["C","E"],la)||"N";if("E"==g){g=[];for(h=0;c&&25>h;++h){k=(k=9!=c.nodeType&&c.id)?"/"+k:"";a:{if(c&&c.nodeName&&c.parentElement)for(var l=c.nodeName.toString().toLowerCase(),m=c.parentElement.childNodes,t=0,u=0;u<m.length;++u){var w=m[u];if(w.nodeName&&w.nodeName.toString().toLowerCase()==l){if(c==w){l="."+t;break a}++t}}l=
""}g.push((c.nodeName&&c.nodeName.toString().toLowerCase())+k+l);c=c.parentElement}c=g.join()+":";g=a;h=[];if(g)try{for(var p=g.parent,k=0;p&&p!=g&&25>k;++k){for(var n=p.frames,l=0;l<n.length;++l)if(g==n[l]){h.push(l);break}g=p;p=g.parent}}catch(x){}b.google_ad_unit_key_2=Pa(c+h.join()).toString()}else"C"==g&&(b.google_ad_unit_key_2="ctrl");var p=hb(b),q;b=b.google_ad_client;if(n=yc){if(!mc)b:{c=[G.top];n=[];for(g=0;h=c[g++];){n.push(h);try{if(h.frames)for(var y=h.frames.length,k=0;k<y&&1024>c.length;++k)c.push(h.frames[k])}catch(ga){}}for(y=
0;y<n.length;y++)try{if(q=n[y].frames.google_esf){mc=q;break b}}catch(Oc){}mc=null}n=!mc}n?(q={style:"display:none"},q["data-ad-client"]=qc(b),q.id="google_esf",q.name="google_esf",q.src=lc(ha("","googleads.g.doubleclick.net"),"/pagead/html/r20150409/r20150224/zrt_lookup.html"),q=Bc(q)):q="";y=(new Date).getTime();b=a.google_top_experiment;if(n=a.google_async_for_oa_experiment)a.google_async_for_oa_experiment=
void 0;c=a.google_always_use_delayed_impressions_experiment;e=["<!doctype html><html><body>",q,"<",f,">",p,"google_show_ads_impl=true;google_unique_id=",a.google_unique_id,';google_async_iframe_id="',d,'";google_start_time=',da,";",b?'google_top_experiment="'+b+'";':"",n?'google_async_for_oa_experiment="'+n+'";':"",c?'google_always_use_delayed_impressions_experiment="'+c+'";':"",e?'google_append_as_for_format_override="'+e+'";':"","google_bpp=",y>da?y-da:1,";google_async_rrc=0;</",f,">",zc(),"</body></html>"].join("");
(a.document.getElementById(d)?wc:xc)(Ac(a,d,e,!0))},Fc=Math.floor(1E6*Math.random()),Gc=function(a){var b;try{b={};for(var c=a.data.split("\n"),d=0;d<c.length;d++){var f=c[d].indexOf("=");-1!=f&&(b[c[d].substr(0,f)]=c[d].substr(f+1))}}catch(e){}c=b[3];if(b[1]==Fc&&(window.google_top_js_status=4,a.source==top&&0==c.indexOf(a.origin)&&(window.google_top_values=b,window.google_top_js_status=5),window.google_top_js_callbacks)){for(a=0;a<window.google_top_js_callbacks.length;a++)window.google_top_js_callbacks[a]();
window.google_top_js_callbacks.length=0}},Ec=function(a){return a.google_override_format||!qb[a.google_ad_width+"x"+a.google_ad_height]&&"aa"==a.google_loader_used},Hc=function(a,b){var c=navigator;if(na&&a&&b&&c){var d=a.document,c=d.createElement("script"),f=qc(b);c.async=!0;c.type="text/javascript";c.src=lc("pagead2.googlesyndication.com","/pub-config/"+f+".js");d=d.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d)}};var Ic=function(a){return Ra.test(a.className)&&"done"!=a.getAttribute("data-adsbygoogle-status")},Kc=function(a,b){var c=window;a.setAttribute("data-adsbygoogle-status","done");Jc(a,b,c)},Jc=function(a,b,c){Lc(a,b,c);if(!Mc(a,b,c)){Na(c);1==Oa(c)&&Hc(c,b.google_ad_client);H(gb,function(a,d){b[d]=b[d]||c[d]});b.google_loader_used="aa";var d=b.google_ad_output;if(d&&"html"!=d)throw Error("No support for google_ad_output="+d);Za("aa::main",function(){Dc(c,b,a)})}},Mc=function(a,b,c){var d;var f=b.google_ad_slot;
d=c.google_ad_modifications;if(!d||kc(d.ad_whitelist,f,b.google_tag_origin))d=null;else{var e=d.space_collapsing||"none";d=(f=kc(d.ad_blacklist,f))?{I:!0,G:f.space_collapsing||e}:d.remove_ads_by_default?{I:!0,G:e}:null}if(d&&d.I){if("none"==d.G)return!0;if(null!==F(a.getAttribute("width"))||null!==F(a.getAttribute("height")))a.setAttribute("width",0),a.setAttribute("height",0);a.style.width="0px";a.style.height="0px";if("slot_and_pub"==d.G&&(a=new ec(a),b=a.s.ownerDocument,b=b.defaultView||b.parentWindow,
gc(a,a.s,b),c=a.s.parentElement))for(;c;){try{var g=/^head$/i.test(c.nodeName)?null:Qa(c,b)}catch(h){dc(a.i,"c")}d=a;var k=b,e=c,l=g;try{var m=e.style}catch(t){dc(d.i,"s")}var f=e.getAttribute("width"),u=F(f),w=e.getAttribute("height"),p=F(w),n=gc(d,e,k),x=(k=m?m.width:null)?tb(k):null,q=m?m.height:null,y=q?tb(m.height):null,u=null!==x&&d.p>=x||null!==u&&d.p>=u,p=null!==y&&d.m>=y||null!==p&&d.m>=p,p=n||p||!(f||k||l&&(!jc(l.minWidth)||!ic(l.maxWidth))),l=n||u||!(w||q||l&&(!jc(l.minHeight)||!ic(l.maxHeight)));
hc(d,0,p,e,"width",f,d.p,d.A);hc(d,1,l,e,"height",w,d.m,d.w);X(d,0,"d",p,m,"width",k,d.p,d.A);X(d,1,"d",l,m,"height",q,d.m,d.w);X(d,0,"m",p,m,"minWidth",m&&m.minWidth,d.p,d.A);X(d,1,"m",l,m,"minHeight",m&&m.minHeight,d.m,d.w);X(d,0,"M",p,m,"maxWidth",m&&m.maxWidth,d.p,d.A);X(d,1,"M",l,m,"maxHeight",m&&m.maxHeight,d.m,d.w);if(g)if("none"==g.display){W(a.i,"n");break}else if("absolute"==g.position){W(a.i,"a");break}else if("fixed"==g.position){W(a.i,"f");break}else if("hidden"==g.visibility||"collapse"==
g.visibility){W(a.i,"v");break}else"hidden"==g.overflow&&W(a.i,"o");c=c.parentElement;if(!c)try{c=b.frameElement;var ga=b.parent;ga&&ga!=b&&(b=ga)}catch(Oc){W(a.i,"c");break}}return!0}return!(g=Qa(a,c))||"none"!=g.display||"on"==b.google_adtest||0<b.google_reactive_ad_format||b.google_reactive_ads_config?!1:(c.document.createComment&&a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")),!0)},Lc=function(a,b,c){for(var d=a.attributes,f=d.length,e=
0;e<f;e++){var g=d[e];if(/data-/.test(g.name)){var h=g.name.replace("data","google").replace(/-/g,"_");b.hasOwnProperty(h)||(g=g.value,"google_reactive_ad_format"==h&&(g=+g,g=isNaN(g)?null:g),null===g||(b[h]=g))}}lb(c.location.hash)&&(b.google_adtest="on");if(b.google_enable_content_recommendations&&1==b.google_reactive_ad_format)b.google_ad_width=J(c).clientWidth,b.google_ad_height=50,a.style.display="none";else if(1==b.google_reactive_ad_format)b.google_ad_width=320,b.google_ad_height=50,a.style.display=
"none";else if(8==b.google_reactive_ad_format)b.google_ad_width=J(c).clientWidth||0,b.google_ad_height=J(c).clientHeight||0,a.style.display="none",kb(c.location.hash,"google_ia_debug_spa")&&(b.google_vignette_manual_trigger=!0);else if(d=b.google_ad_format,"auto"==d||/^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(d)){b.google_responsive_optimization_experiment=E(["MC","ME"],ka)||"-";var d=a.offsetWidth,f=b.google_ad_format,k;if("auto"==f)k=J(c).clientWidth,k=Math.min(1200,k),k=.25>=d/k?4:3;
else{e=0;for(k in wb)-1!=f.indexOf(k)&&(e|=wb[k]);k=e}b&&(b.google_responsive_formats=k);a:{if(b&&"ME"==b.google_responsive_optimization_experiment){e=1+Oa(c);h=vb(a,c)/J(c).clientHeight;e=!pb()&&(L("iPod")||L("iPhone")||L("Android")||L("IEMobile"))?1==e?.22>h?[7,8,3,12,6,14,4,1,10,11,13,0,2,15,5,9]:.7>h?[3,7,8,14,12,4,6,1,10,2,0,13,15,11,5,9]:[3,7,8,4,6,14,12,2,1,0,10,13,5,9,11,15]:2==e?1.18>h?[3,7,8,14,12,4,1,0,6,2,10,9,5,15,11,13]:3.04>h?[3,7,8,14,4,2,1,6,0,12,10,5,9,11,15,13]:[3,7,8,4,6,1,2,14,
12,0,5,10,11,9,15,13]:2.3>h?[3,7,14,8,1,12,0,2,6,4,10,5,13,11,9,15]:5.6>h?[3,7,8,14,1,2,12,4,0,6,10,5,11,9,13,15]:[3,7,8,0,12,14,1,4,2,6,5,13,10,11,15,9]:pb()?1==e?.18>h?[3,7,8,12,6,1,14,0,4,10,2,5,13,15,9,11]:.49>h?[3,8,6,7,12,1,0,14,2,10,4,5,13,9,11,15]:[3,8,7,6,1,12,0,2,14,4,10,5,9,13,15,11]:2==e?.7>h?[3,8,6,7,1,0,12,2,14,10,4,9,5,13,11,15]:1.58>h?[3,8,7,6,1,12,0,2,14,10,4,9,5,13,11,15]:[3,8,7,6,1,12,0,2,14,4,10,9,5,11,13,15]:1.03>h?[3,12,6,8,1,7,0,14,2,10,4,5,9,11,15,13]:2.55>h?[3,8,6,7,12,1,
2,0,14,4,10,5,9,11,15,13]:[3,8,12,6,7,1,0,2,14,4,10,5,9,11,15,13]:1==e?.21>h?[3,12,7,6,1,8,0,4,2,10,14,11,5,15,9,13]:.54>h?[3,7,6,1,12,8,2,0,4,10,14,9,5,11,15,13]:[3,7,1,6,12,2,0,8,4,10,14,5,9,11,15,13]:2==e?.6>h?[3,7,1,12,6,0,2,8,4,10,14,9,5,11,13,15]:1.53>h?[3,7,1,6,12,2,0,8,4,10,14,5,9,11,13,15]:[3,7,1,6,12,2,0,8,4,10,14,5,9,11,15,13]:.74>h?[3,7,12,6,1,2,8,0,4,14,10,9,13,5,11,15]:1.95>h?[3,7,6,12,1,2,8,0,4,10,14,5,9,11,13,15]:[3,7,6,12,1,2,8,0,4,14,10,5,9,11,15,13];h=[];for(g=0;g<e.length;++g)h.push(xb[e[g]]);
e=h}else e=xb.slice(0).sort(yb);if(g=h=488>J(c).clientWidth)g=Math.min(J(c).clientHeight,16*J(c).clientWidth/9),g=vb(a,c)<g-100;c=g;for(g=0;g<e.length;g++){var l=e[g];if(l.width<=d&&l.format&k&&!(320==l.width&&(h&&50==l.height||!h&&100==l.height)||c&&250<=l.height)){c=l;break a}}c=null}if(!c)throw Error("Cannot find a responsive size for a container of width="+d+"px and data-ad-format="+f);b.google_ad_width=300<d&&300<c.height?c.width:1200<d?1200:Math.round(d);b.google_ad_height=c.height;a.style.height=
c.height+"px";b.google_ad_resizable=!0;delete b.google_ad_format;b.google_loader_features_used=128}else if(!sb.test(b.google_ad_width)&&!rb.test(a.style.width)||!sb.test(b.google_ad_height)&&!rb.test(a.style.height)?(d=Qa(a,c),a.style.width=d.width,a.style.height=d.height,ub(d,b),b.google_loader_features_used=256):(ub(a.style,b),b.google_ad_output&&"html"!=b.google_ad_output||300!=b.google_ad_width||250!=b.google_ad_height||(d=J(c).clientHeight,vb(a,c)>1.5*d&&(d=a.style.width,a.style.width="100%",
f=a.offsetWidth,a.style.width=d,b.google_available_width=f))),f=b.google_ad_width,d=b.google_ad_height,f&&d&&!qb[f+"x"+d]&&(d=E("CD ED CA EA CW EW".split(" "),ja)))"CD"==d?b.google_overflowing_ads_experiment=d:((f=/W$/.test(d)&&728>f)||(f=/^E/.test(d),k=J(c),a&&a.getBoundingClientRect&&k&&k.getBoundingClientRect?(c=a.getBoundingClientRect(),k=k.getBoundingClientRect(),c=Math.min(c.right,k.right)-Math.max(c.left,k.left),c=Math.round(Math.max(0,c))):c=0,160>c||15>b.google_ad_width-c?a=!1:(k=a.style.width||
"",a.style.width="100%",e=a.offsetWidth,160>e||0>c-e?(a.style.width=k,a=!1):(f?(b.google_ad_width=c,a.style.width=c+"px"):a.style.width=k,a=!0)),f=!a&&"ED"!=d),f||(b.google_overflowing_ads_experiment=d));0<b.google_reactive_ad_format&&!b.google_pgb_reactive&&(b.google_pgb_reactive=3)},Nc=function(a){for(var b=document.getElementsByTagName("ins"),c=0,d=b[c];c<b.length;d=b[++c])if(Ic(d)&&(!a||d.id==a))return d;return null},Pc=!1,Qc=function(a){var b={};H(Sa,function(c,f){a.hasOwnProperty(f)&&(b[f]=
a[f])});aa(a.enable_page_level_ads)&&(b.page_level_pubvars=a.enable_page_level_ads);var c=document.createElement("ins");c.className="adsbygoogle";c.style.display="none";document.body.appendChild(c);Kc(c,{google_reactive_ads_config:b,google_ad_client:a.google_ad_client})},Rc=function(a){if(Pc)throw Error("adsbygoogle.push(): Only one 'enable_page_level_ads'  allowed per page.");Pc=!0;document.body?Qc(a):Ma(db(function(){Qc(a)}))},Sc=function(a){var b;a:{if(a.enable_page_level_ads){if("string"==typeof a.google_ad_client){b=
!0;break a}throw Error("adsbygoogle.push(): 'google_ad_client' is missing from the tag config.");}b=!1}if(b)Rc(a);else{b=a.element;a=a.params||{};if(b){if(!Ic(b)&&(b=b.id&&Nc(b.id),!b))throw Error("adsbygoogle: 'element' has already been filled.");if(!("innerHTML"in b))throw Error("adsbygoogle.push(): 'element' is not a good DOM element.");}else if(b=Nc(),!b)throw Error("adsbygoogle.push(): All ins elements in the DOM with class=adsbygoogle already have ads in them.");Kc(b,a)}},Tc=function(){if(!window.google_top_experiment&&
!window.google_top_js_status){var a=window;if(2!==(a.top==a?0:D(a.top)?1:2))window.google_top_js_status=0;else if(top.postMessage){var b;try{b=G.top.frames.google_top_static_frame?!0:!1}catch(c){b=!1}if(b){if(window.google_top_experiment=E(["jp_c","jp_zl","jp_wfpmr","jp_zlt","jp_wnt"],ia),"jp_c"!==window.google_top_experiment){a=window;a.addEventListener?a.addEventListener("message",Gc,!1):a.attachEvent&&a.attachEvent("onmessage",Gc);window.google_top_js_status=3;a={0:"google_loc_request",1:Fc};b=
[];for(var d in a)b.push(d+"="+a[d]);top.postMessage(b.join("\n"),"*")}}else window.google_top_js_status=2}else window.google_top_js_status=1}if((d=window.adsbygoogle)&&d.shift)for(b=20;(a=d.shift())&&0<b--;)try{Sc(a)}catch(f){throw window.setTimeout(Tc,0),f;}d&&d.loaded||(window.adsbygoogle={push:Sc,loaded:!0})};Tc();})();
