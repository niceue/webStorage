/** HTML5 localStorage
 * @desc    Cross Browser localStorage, 
 * @copy    Jony (www.niceue.com), MIT Licensed
 */
(function(w, d){
	if(!w.localStorage){		
        // userData IE5+ (http://msdn.microsoft.com/en-us/library/ms531424.aspx)
        if(d.documentElement.addBehavior){
            var e = d.createElement("meta"), s = "localStorage";
            e.addBehavior("#default#userdata");
            d.getElementsByTagName("head")[0].appendChild(e);
            w.localStorage = {
                length: 0,
                key: function(n){
                    return (n>=0 && n<this.length) ? _a()[n].nodeName : null
                },
                setItem: function(key , val){
                    e.load(s);
                    e.setAttribute(key , val);
                    e.save(s);
                    _l();
                },
                getItem: function(key){
                    e.load(s);
                    return e.getAttribute(key);
                },
                removeItem: function(key){
                    e.load(s);
                    e.removeAttribute(key);
                    e.save(s);
                    _l();
                },
                clear: function(){
                    e.load(s);
                    var a, i = 0;
                    while (a = _a()[i++]) e.removeAttribute(a.nodeName);
                    e.save(s);
                    this.length=0;
                }
            },
            _a = function(){
                return e.XMLDocument.documentElement.attributes
            },
            _l = function(){
                w.localStorage.length = _a().length
            };
            e.load(s);
            _l();

        // globalStorage FF2+ (https://developer.mozilla.org/en/dom/storage#globalStorage)
        }else if(w.globalStorage){
            var gs = w['globalStorage'][w.location.hostname],
            w.localStorage = {
                length: 0,
                key: function(n){
                    return gs.key(n)
                },
                setItem: function(key, val){
                    gs.setItem(key, val);
                    this.length = gs.length;
                },
                getItem: function(key){
                   return gs.getItem(key) 
                },
                removeItem: function(key){
                    gs.removeItem(key);
                    this.length = gs.length;
                },
                clear: function(){
                    for(var key in gs) this.removeItem(key);
                    this.length = 0;
                }
            };
            w.localStorage.length = gs.length;
        }
    }
})(window, document);