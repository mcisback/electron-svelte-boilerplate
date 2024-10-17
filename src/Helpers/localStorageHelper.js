export function localStorageHelper() {
    // const data = {
    //     get [key]() {
    //         return JSON.parse(localStorage.getItem(key)) ?? null
    //     },
    //
    //     set [key](data) {
    //         localStorage.setItem(key, JSON.stringify(data))
    //     },
    //
    //     has(key) {
    //         return key in localStorage
    //     },
    //
    //     del(key) {
    //         return localStorage.removeItem(key)
    //     }
    // }

    return new Proxy(localStorage, {
        get: function(target, name, r) {
            const value = Reflect.get(target, name, r);

            try {
                return JSON.parse(value);
            } catch(e) {
                return value;
            }
        },
        set: function(target, name, val, r) {
            // target.setItem(name, JSON.stringify(val));
            return Reflect.set(target, name, JSON.stringify(val), r)
        }
    });
    //
    // if(!data[key]) {
    //     data[key] = {}
    // }
    //
    // return data[key];
}