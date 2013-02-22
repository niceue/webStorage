/** localStorage
 * @desc    Cross Browser HTML5 Local Storage Support 
 * @copy    Jony (www.niceue.com), MIT Licensed
 */
(function(e){if(!e.localStorage){var f=e.document,d=f.domain;if(f.documentElement.addBehavior){var b=f.createElement("meta");b.addBehavior("#default#userdata");f.getElementsByTagName("head")[0].appendChild(b);b.load(d);g();e.localStorage={length:void 0,key:function(a){b.load(d);return 0<=a&&a<this.length?b.XMLDocument.documentElement.attributes[a].nodeName:null},setItem:function(a,c){b.load(d);b.setAttribute(a,c);b.save(d);g()},getItem:function(a){b.load(d);return b.getAttribute(a)},removeItem:function(a){b.load(d);
b.removeAttribute(a);b.save(d);g()},clear:function(){b.load(d);for(var a,c=0;a=b.XMLDocument.documentElement.attributes[c++];)b.removeAttribute(a.nodeName);b.save(d);this.length=0}};var g=function(){e.localStorage.length=b.XMLDocument.documentElement.attributes.length}}else if(e.globalStorage){var c=e.globalStorage[d];e.localStorage={length:c.length,key:function(a){return c.key(a)},setItem:function(a,b){c.setItem(a,b);this.length=c.length},getItem:function(a){return c.getItem(a)},removeItem:function(a){c.removeItem(a);
this.length=c.length},clear:function(){for(var a in c)c.removeItem(a);this.length=0}}}}})(this);
