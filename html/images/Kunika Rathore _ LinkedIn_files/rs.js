function adViz(e,n){function t(e){return e.replace(/\b(enc|ai|cookie|ra|pa|ct|ep|correlator|publisher_blob|xuid|page_slots|id|ms)=[^&$]+/g,"$1=ns_cut")}var r,s,a,c,_,i,o="comScore=",f=document,u=f.cookie,m="",l="indexOf",v="substring",d="length",p=700,g=1200,b=4096,e=e.replace("?&","?"),x="&ns_",h=0,w="&",y=e[l]("?")+1,S=(e[l]("c2=")-1,window),C=S.encodeURIComponent||escape,D="";if(e[e[d]-1]==w&&(e=e[v](0,e[d]-1)),u[l](o)+1)for(_=0,c=u.split(";"),i=c[d];i>_;_++)a=c[_][l](o),a+1&&(m=w+unescape(c[_][v](a+o[d])));return"undefined"==typeof S.ns_brt||S.ns_brtSent||(D=x+"ad_brt="+ns_brt,ns_brtSent=!0),h=+new Date,h.toString().search(/^9+$/)||(h=(new Date).getTime()),e=e[v](0,y)+"ns__t="+h+x+"_c="+(f.characterSet||f.defaultCharset||"")+(D.length>0?D:"")+"&"+e[v](y)+(e[l]("&c8=")<0?"&c8="+C(f.title):"")+m+(e[l]("&c7=")<0?"&c7="+C(r=t(f.URL)[v](0,p)):"")+(e[l]("&c9=")<0?"&c9="+C(t(f.referrer)[v](0,g-(r?r[d]:0))):""),e[d]>b&&e[l](w)>0&&(s=e[v](0,b-8).lastIndexOf(w),e=(e[v](0,s)+x+"cut="+C(e[v](s+1)))[v](0,b)),f.images?(a=n?new Object:new Image,a.onload=function(){ns_brt=C(+new Date-h)},a.src=e,a):void(n||f.write("<","p","><",'img src="',e,'" height="1" width="1" alt="*"',"><","/p",">"))}!function(){ns_=self.ns_||{},ns_.mvce=ns_.mvce||{};var e=document,n=e.location,t="length",r=function(){if(s)var e=s.slice(0);else{var e=[];for(var n in e)delete e[n];s=e.slice(0)}for(var r=0,a=arguments.length;a>r;r++)e[e[t]]=arguments[r];return e},s=r(),a=self.encodeURIComponent?encodeURIComponent:escape,c=a(n&&n.href?n.href:e.URL),_="http"+("s"==c.charAt(4)?"s://s":"://"),i=_+"b",o=_+"a",f=".scorecardresearch.com",u=i+f+"/p?",m=o+f+"/rpc.flow?",l=i+f+"/rs/",v=i+f+"/rsx/",d=window,p=!1,g=!0,b="script",x="c2",h="src",w="indexOf",y="substring",S=ns_.mvce_m||(ns_.mvce_m=r()),C={b:"",l:"BSL_LF_SETTINGS",x:"15359371",i:"/.+/",g:"",v:"",it:"",m:"vce_st,bsl,bsl_lf",c:"15359371",w:"",n:"",s:0,d:0,y:1,cvt:"",cvq:"",cvc:""},D=ns_._mD||(ns_._mD={}),I=C.m,A=r(),O=ns_._rS||(ns_._rS={}),E=ns_.tP||(ns_.tP=[]),G=/^\/(.*)\/([gim]*)$/,L=navigator.userAgent.toLowerCase(),N=navigator.platform.toLowerCase(),R=/ applewebkit\//.test(L)&&/ip(?:ad|od|hone)/.test(L+N),B=/android/.test(L)||/linux armv7/.test(N);"undefined"==typeof ns_.mvce.K&&(ns_.mvce.K=function(e,n,t){O[e]=r(0,n,t,+new Date)}),"undefined"==typeof ns_.mvce.A&&(ns_.mvce.A=function(e){O[e]=r(1,+new Date)}),"undefined"==typeof ns_.mvce.G&&(ns_.mvce.G=function(e){ns_.mym.rsurl=e}),ns_.mym=function(){var n=function(n,t){var r,t=t&&document.getElementById?document.getElementById(t):e;return t.getElementsByTagName?r=t.getElementsByTagName(n):n.toLowerCase()==b&&document.scripts?r=document.scripts:t.all&&t.all.tags&&(r=t.all.tags(n)),r||[]},s=function(n,t,r,s){var a=e.createElement(b);a.type="text/javascript",a[h]=n,C.y&&(a.async=!0),s&&(a.id=s),t.parentNode.insertBefore(a,t)},a=function(e){if(-1!=e[w]("#")){for(var n={},r=e[y](e[w]("#")+1).replace(/&amp;/gi,"&").replace(/amp;/gi,"").split("&"),s=0,a=r[t];a>s;s++){var c=r[s].split("=");2==c[t]?n[c[0]]=c[1]:1==c[t]&&(n[c[0]]="")}return n.c1||(n.c1="3"),n}return p},c=function(e){var n=e[y](0,e[w]("#")),t=n[w]("/c2/");return-1!=t?(t=n[y](t+4),t[y](0,t[w]("/"))):p},_=function(e,n){for(var t in e)if(t!=x&&n[t]!=e[t])return p;return g},o=function(e){if(e.ax_iframe=0,d!=d.top)try{d.top.location.href?e.ax_iframe=1:e.ax_iframe=2}catch(n){e.ax_iframe=2}var a=u;for(var c in e)-1=="__nax_iax_gax_itax_a"[w](c)&&(a+="&"+c+"="+e[c]);if(ns_.mym_G&&(a+="&ns__m="+ns_.mym_G),a+="&ns_ce_sv=5.1608.18",I){var _=I.split(",").sort(function(e,n){return e.substr("-"==e.charAt(0)?1:0).localeCompare(n.substr("-"==n.charAt(0)?1:0))});I="";for(var o={bsl:function(e,n){return n&&(-1!=n.b.indexOf(e.c3)||e.bsl_sf)},bsl_lf:function(e,n){return 3==Number(e.c1)&&(e.c12||e.ax_pid)||n&&n.l&&new RegExp("\\b"+e.c3+"(,|$)").test(n.l)},vce_st:function(e,n){var r=e.ax_cid||n.x;if(!r)return!1;for(var s,a=n.i.split(","),c=0,_=a[t];_>c;c++)if(s=a[c],G.test(s)){var i=s.match(G),o=new RegExp(i[1],i[2]);if(o.test(e.c3))return!0}else if(e.c3==s)return!0;return!1}},f=0,p=_[t];p>f;f++){var g=_[f],b="-"==g.charAt(0);o[g]&&o[g](e,C)&&(I+=(""==I?"":",")+g,A[A[t]]=r(g,b))}a+="&ns_ce_mod="+(e.ns_ce_mod=I)}I[w]("vce_st")>=0&&(a+="&ns_ad_event=load"),e.__p=adViz(a);var x=e.__p[h],O=x[w]("ns__t"),E=/ns__t=([^&]+)/;E.test(x)&&(e.ns__p=x.match(E)[1]);var L=e.ax_it||C.it;if(L){var N=unescape(L).indexOf("[CS_ID]");N>1&&(L=encodeURIComponent(unescape(L).replace("[CS_ID]",+(e.c2||"")+"|"+(e.c3||"")+"|"+(e.c4||"")+"|"+(e.c5||"")+"|"+(e.ns__p||"")))),adViz(unescape(L))}ns_.mym_G||-1!=O&&(O=x[y](O+6),ns_.mym_G=O[y](0,O[w]("&"))),I[w]("vce_st")>=0&&s(m+"uid="+(e.__n.__uid="uid"+ +new Date)+"&ns_mod_ns=mvce&ns__p="+e.ns__p+"&"+x[y](x[w]("?")+1),e.__n);for(var f=0,p=A[t];p>f;f++){var T=A[f][0],P="_"+T;if("bsl"!=T||I[w]("vce_st")<0){var U="bsl_lf"==T&&e.ax_pid;U&&(S._bsl_lf=function(e,n){if(3==Number(e.c1)){var t="";for(var r in e)-1=="__p__nax_iax_gax_a".indexOf(r)&&(t=t+r+"="+e[r]+"&");setTimeout(function(e,n,t){return function(){n&&t(i+".voicefive.com/rs/ar/bsl_broker.js#"+e,n)}}(t,e.__n,(ns_.mym||ns_.ad).a),1e3)}}),S[P]?S[P](e,C):(D[P]||(D[P]=[]),D[P].push([e,C,+new Date]),(R||B)&&"vce_st"==T&&(T="mobile/"+T),s((A[f][1]?v:l)+T+".js",e.__n))}}},f=function(e){if(!e)return p;for(var n=p,r=0,s=E[t];s>r;r++)_(E[r],e)&&(n=g);return n?p:(E[E[t]]=e,o(e),g)},L=function(e){if(!e||!e[h]||-1==e[h][w]("#"))return p;var n=e.src.indexOf("#"),t=e.src.indexOf("?");if(!e||!e.src||-1==n||t>=0&&n>t)return p;var r=a(e[h]);return(r.c2=c(e[h]))?(r.__n=e,r):void 0},N=function(e,n){for(var r=0,s=0,a=n[t],c=n[0];a>s;++s&&(c=n[s]))_(e,c)&&r++;return r},T=function(){for(var e=n(b),r=[],s=0,a=e[t];a>s;s++){var c=L(e[s]);c&&(r[r[t]]=c)}for(var s=0,a=r[t],c=r[0];a>s;++s&&(c=r[s])){var _=N(c,E),i=N(c,r);if(c.c2==C.c&&i>_&&f(c))return g}},P=function(e){for(var n=0,r=D[e][t];r>n;n++)S[e].apply(self,D[e][n])};return{ml:P,tag:f,fire:T,a:s,rs:O}}(),ns_.mym.fire()||setTimeout(ns_.mym.fire,0)}();