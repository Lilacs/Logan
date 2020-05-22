(window.webpackJsonpLogan=window.webpackJsonpLogan||[]).push([[4],[,,,,,,,,,function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var r,i=n(1),o=n(0),a=n(12),s=n(3),u=n(13),c=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},l=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},f=n(18),p=n(14);function h(e){return c(this,void 0,void 0,(function(){var t,h,d,g,y,b,v=this;return l(this,(function(w){switch(w.label){case 0:if(w.trys.push([0,8,,10]),!s.a.canSave())throw new Error(i.b.EXCEED_TRY_TIMES);if(!a.b.idbIsSupported())throw new Error(i.b.DB_NOT_SUPPORT);return r||(r=new a.b(o.a.get("dbName"))),e.encryptVersion!==i.a.PLAIN?[3,2]:(t={l:(m=e.logContent,f.parse(m).toString(p))},[4,Object(u.a)((function(){return c(v,void 0,void 0,(function(){return l(this,(function(e){switch(e.label){case 0:return[4,r.addLog(JSON.stringify(t))];case 1:return e.sent(),[2]}}))}))}))]);case 1:return w.sent(),[3,6];case 2:return e.encryptVersion!==i.a.RSA?[3,5]:(h=o.a.get("publicKey"),[4,Promise.all([n.e(5),n.e(1)]).then(n.bind(null,23))]);case 3:return d=w.sent(),g=d.encryptByRSA(e.logContent,""+h),y={l:g.cipherText,iv:g.iv,k:g.secretKey,v:i.a.RSA},[4,Object(u.a)((function(){return c(v,void 0,void 0,(function(){return l(this,(function(e){switch(e.label){case 0:return[4,r.addLog(JSON.stringify(y))];case 1:return e.sent(),[2]}}))}))}))];case 4:return w.sent(),[3,6];case 5:throw new Error("encryptVersion "+e.encryptVersion+" is not supported.");case 6:return[4,o.a.get("succHandler")(e)];case 7:return w.sent(),[3,10];case 8:return b=w.sent(),s.a.errorTrigger(),[4,o.a.get("errorHandler")(b)];case 9:return w.sent(),[3,10];case 10:return[2]}var m}))}))}},,function(e,t,n){var r;e.exports=(r=r||function(e,t){var n=Object.create||function(){function e(){}return function(t){var n;return e.prototype=t,n=new e,e.prototype=null,n}}(),r={},i=r.lib={},o=i.Base={extend:function(e){var t=n(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},a=i.WordArray=o.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=null!=t?t:4*e.length},toString:function(e){return(e||u).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes,i=e.sigBytes;if(this.clamp(),r%4)for(var o=0;o<i;o++){var a=n[o>>>2]>>>24-o%4*8&255;t[r+o>>>2]|=a<<24-(r+o)%4*8}else for(o=0;o<i;o+=4)t[r+o>>>2]=n[o>>>2];return this.sigBytes+=i,this},clamp:function(){var t=this.words,n=this.sigBytes;t[n>>>2]&=4294967295<<32-n%4*8,t.length=e.ceil(n/4)},clone:function(){var e=o.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var n,r=[],i=function(t){t=t;var n=987654321,r=4294967295;return function(){var i=((n=36969*(65535&n)+(n>>16)&r)<<16)+(t=18e3*(65535&t)+(t>>16)&r)&r;return i/=4294967296,(i+=.5)*(e.random()>.5?1:-1)}},o=0;o<t;o+=4){var s=i(4294967296*(n||e.random()));n=987654071*s(),r.push(4294967296*s()|0)}return new a.init(r,t)}}),s=r.enc={},u=s.Hex={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],i=0;i<n;i++){var o=t[i>>>2]>>>24-i%4*8&255;r.push((o>>>4).toString(16)),r.push((15&o).toString(16))}return r.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-r%8*4;return new a.init(n,t/2)}},c=s.Latin1={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],i=0;i<n;i++){var o=t[i>>>2]>>>24-i%4*8&255;r.push(String.fromCharCode(o))}return r.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r++)n[r>>>2]|=(255&e.charCodeAt(r))<<24-r%4*8;return new a.init(n,t)}},l=s.Utf8={stringify:function(e){try{return decodeURIComponent(escape(c.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return c.parse(unescape(encodeURIComponent(e)))}},f=i.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new a.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=l.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n=this._data,r=n.words,i=n.sigBytes,o=this.blockSize,s=i/(4*o),u=(s=t?e.ceil(s):e.max((0|s)-this._minBufferSize,0))*o,c=e.min(4*u,i);if(u){for(var l=0;l<u;l+=o)this._doProcessBlock(r,l);var f=r.splice(0,u);n.sigBytes-=c}return new a.init(f,c)},clone:function(){var e=o.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0}),p=(i.Hasher=f.extend({cfg:o.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){f.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new p.HMAC.init(e,n).finalize(t)}}}),r.algo={});return r}(Math),r)},function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(16),i=n(2),o=n(1),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},s=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},u=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},c="logDay",l=7*i.a,f=1*i.a,p=function(){function e(e){var t;this.DB=new r.CustomDB({dbName:e||"logan_web_db",dbVersion:1,tables:(t={},t.logan_detail_table={indexList:[{indexName:"logReportName",unique:!1},{indexName:"logCreateTime",unique:!1}]},t.log_day_table={primaryKey:c},t)})}return e.prototype.logReportNameFormatter=function(e,t){return e+"_"+t},e.prototype.logReportNameParser=function(e){var t=e.split("_");return{logDay:t[0],pageIndex:+t[1]}},e.prototype.getLogDayInfo=function(e){return s(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.DB.getItem("log_day_table",e)];case 1:return[2,t.sent()]}}))}))},e.prototype.getLogDaysInfo=function(e,t){return s(this,void 0,void 0,(function(){var n;return u(this,(function(r){switch(r.label){case 0:return e!==t?[3,2]:[4,this.DB.getItem("log_day_table",e)];case 1:return[2,(n=r.sent())?[n]:[]];case 2:return[4,this.DB.getItemsInRange({tableName:"log_day_table",indexRange:{indexName:c,lowerIndex:e,upperIndex:t,lowerExclusive:!1,upperExclusive:!1}})];case 3:return[2,r.sent()]}}))}))},e.prototype.getLogsByReportName=function(e){return s(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.DB.getItemsInRange({tableName:"logan_detail_table",indexRange:{indexName:"logReportName",onlyIndex:e}})];case 1:return[2,t.sent()]}}))}))},e.prototype.addLog=function(e){return s(this,void 0,void 0,(function(){var t,n,r,a,s,p,h,d,g,y,b,v,w,m,_;return u(this,(function(u){switch(u.label){case 0:return t=Object(i.g)(e),n=new Date,r=Object(i.c)(n),[4,this.getLogDayInfo(r)];case 1:if((a=u.sent()||((w={})[c]=r,w.totalSize=0,w.reportPagesInfo={pageSizes:[0]},w)).totalSize+t>l)throw new Error(o.b.EXCEED_LOG_SIZE_LIMIT);return a.reportPagesInfo&&a.reportPagesInfo.pageSizes||(a.reportPagesInfo={pageSizes:[0]}),s=a.reportPagesInfo.pageSizes,p=s.length-1,h=s[p],d=h>0&&h+t>f,x=s.slice(),d?x.push(t):x[p]+=t,g=x,(m={}).logReportName=this.logReportNameFormatter(r,d?p+1:p),m.logCreateTime=+n,m.logSize=t,m.logString=e,y=m,(_={})[c]=r,_.totalSize=a.totalSize+t,_.reportPagesInfo={pageSizes:g},b=_,v=6048e5-(+new Date-Object(i.e)(new Date)),[4,this.DB.addItems([{tableName:"log_day_table",item:b,itemDuration:v},{tableName:"logan_detail_table",item:y,itemDuration:v}])];case 2:return u.sent(),[2]}var x}))}))},e.prototype.incrementalDelete=function(e,t){return s(this,void 0,void 0,(function(){var n,r,o,s,c,l,f,p,h,d,g;return u(this,(function(u){switch(u.label){case 0:return[4,this.getLogDayInfo(e)];case 1:return(n=u.sent())&&n.reportPagesInfo&&n.reportPagesInfo.pageSizes instanceof Array?(r=n.reportPagesInfo.pageSizes,o=n.totalSize,s=r.reduce((function(e,n,r){return t.indexOf(r)>=0?e+n:e}),0),c=t.indexOf(r.length-1)>=0?r.concat([0]):r,l=c.reduce((function(e,n,r){return t.indexOf(r)>=0?e.concat([0]):e.concat([n])}),[]),f=a(a({},n),{reportPagesInfo:{pageSizes:l},totalSize:Math.max(o-s,0)}),p=6048e5-(+new Date-Object(i.e)(new Date))-(Object(i.e)(new Date)-Object(i.d)(e).getTime()),[4,this.DB.addItems([{tableName:"log_day_table",item:f,itemDuration:p}])]):[3,6];case 2:u.sent(),h=0,d=t,u.label=3;case 3:return h<d.length?(g=d[h],[4,this.DB.deleteItemsInRange([{tableName:"logan_detail_table",indexRange:{indexName:"logReportName",onlyIndex:this.logReportNameFormatter(e,g)}}])]):[3,6];case 4:u.sent(),u.label=5;case 5:return h++,[3,3];case 6:return[2]}}))}))},e.idbIsSupported=r.idbIsSupported,e.deleteDB=r.deleteDB,e}();t.b=p},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},i=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},o=[],a=!1;function s(e){return new Promise((function(t,n){o.push({asyncF:e,resolution:t,rejection:n}),function e(){return r(this,void 0,void 0,(function(){var t,n,r;return i(this,(function(i){switch(i.label){case 0:if(!(o.length>0)||a)return[3,5];t=o.shift(),a=!0,i.label=1;case 1:return i.trys.push([1,3,,4]),[4,t.asyncF()];case 2:return n=i.sent(),t.resolution(n),[3,4];case 3:return r=i.sent(),t.rejection(r),[3,4];case 4:return a=!1,e(),[3,0];case 5:return[2]}}))}))}()}))}},function(e,t,n){var r,i,o;e.exports=(o=n(11),i=(r=o).lib.WordArray,r.enc.Base64={stringify:function(e){var t=e.words,n=e.sigBytes,r=this._map;e.clamp();for(var i=[],o=0;o<n;o+=3)for(var a=(t[o>>>2]>>>24-o%4*8&255)<<16|(t[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|t[o+2>>>2]>>>24-(o+2)%4*8&255,s=0;s<4&&o+.75*s<n;s++)i.push(r.charAt(a>>>6*(3-s)&63));var u=r.charAt(64);if(u)for(;i.length%4;)i.push(u);return i.join("")},parse:function(e){var t=e.length,n=this._map,r=this._reverseMap;if(!r){r=this._reverseMap=[];for(var o=0;o<n.length;o++)r[n.charCodeAt(o)]=o}var a=n.charAt(64);if(a){var s=e.indexOf(a);-1!==s&&(t=s)}return function(e,t,n){for(var r=[],o=0,a=0;a<t;a++)if(a%4){var s=n[e.charCodeAt(a-1)]<<a%4*2,u=n[e.charCodeAt(a)]>>>6-a%4*2;r[o>>>2]|=(s|u)<<24-o%4*8,o++}return i.create(r,o)}(e,t,r)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},o.enc.Base64)},,,,function(e,t,n){var r;e.exports=(r=n(11),r.enc.Utf8)}]]);