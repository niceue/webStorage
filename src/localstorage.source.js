/** localStorage
 * @desc    Cross Browser HTML5 Local Storage Support 
 * @copy    Jony (www.niceue.com), MIT Licensed
 */
(function(win){
	if(!win.localStorage){
        var doc = win.document,
            ns = doc.domain;
        // userData IE5+ (http://msdn.microsoft.com/en-us/library/ms531424.aspx)
        if(doc.documentElement.addBehavior){
            var el = doc.createElement("meta");
            el.addBehavior("#default#userdata");
            doc.getElementsByTagName("head")[0].appendChild(el);
            win.localStorage = {
                length: (function(){
                        el.load(ns);
                        _uploadLength();
                    })(),
                key: function(n){
                    el.load(ns);
                    return (n>=0 && n<this.length) ? _attrs()[n].nodeName : null
                },
                setItem: function(key , val){
                    el.load(ns);
                    el.setAttribute(key , val);
                    el.save(ns);
                    _uploadLength();
                },
                getItem: function(key){
                    el.load(ns);
                    return el.getAttribute(key);
                },
                removeItem: function(key){
                    el.load(ns);
                    el.removeAttribute(key);
                    el.save(ns);
                    _uploadLength();
                },
                clear: function(){
                    el.load(ns);
                    var a, i = 0;
                    while (a = _attrs()[i++]) el.removeAttribute(a.nodeName);
                    el.save(ns);
                    this.length=0;
                }
            };
            function _attrs(){
                return el.XMLDocument.documentElement.attributes;
            }
            function _uploadLength(){
                win.localStorage.length = _attrs().length;
            }

        // globalStorage FF2+ (https://developer.mozilla.org/en/dom/storage#globalStorage)
        } else if (win.globalStorage){
            var gs = win.globalStorage[ns];
            win.localStorage = {
                length: (function(){
                        return gs.length;
                    })(),
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
                    for(var key in gs) gs.removeItem(key);
                    this.length = 0;
                }
            };
        }
    }
})(this);