class Utils {

    static forceArray(data) {
        if(data === undefined)
            return data;
        return (Array.isArray(data)) ? data : [data];
    }

}
module.exports = Utils;