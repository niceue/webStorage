/** HTML5 localStorage
 * @desc    Cross Browser localStorage, 
 * @copy    Jony (www.niceue.com), MIT Licensed
 */
;(function(w,d){if(!w.localStorage){if(d.documentElement.addBehavior){var e=d.createElement("meta"),s="localStorage";e.addBehavior("#default#userdata");d.getElementsByTagName("head")[0].appendChild(e);var w.localStorage={length:0,key:function(n){return(n>=0&&n<this.length)?_a()[n].nodeName:null},setItem:function(k,v){e.load(s);e.setAttribute(k,v);e.save(s);_l();},getItem:function(k){e.load(s);return e.getAttribute(k);},removeItem:function(k){e.load(s);e.removeAttribute(k);e.save(s);_l();},clear:function(){e.load(s);var a,i=0;while(a=_a()[i++])e.removeAttribute(a.nodeName);e.save(s);this.length=0;}},_a=function(){return e.XMLDocument.documentElement.attributes},_l=function(){w.localStorage.length=_a().length};e.load(s);_l();}else if(w.globalStorage){var gs=w['globalStorage'][w.location.hostname],w.localStorage={length:0,key:function(n){return gs.key(n)},setItem:function(k,v){gs.setItem(k,v);this.length=gs.length;},getItem:function(k){return gs.getItem(k)},removeItem:function(k){gs.removeItem(k);this.length=gs.length;},clear:function(){for(var k in gs)this.removeItem(k);this.length=0;}};w.localStorage.length=gs.length;}}})(window,document);