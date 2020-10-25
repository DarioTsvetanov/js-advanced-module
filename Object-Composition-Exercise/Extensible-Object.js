function myObj() {
 
    return {
 
        extend(template) {
 
            for (let key in template) {
 
                if (typeof template[key] == 'function') {
 
                    this.__proto__[key] = template[key];
                }
                else this[key] = template[key];
            }
        }
    }
}

let template = {
    extensionMethod: function () {},
    extensionProperty: 'someString'
}
 
let obj = myObj();
obj.extend(template);
console.log(obj.__proto__);