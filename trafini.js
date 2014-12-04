var Trafini = function(entryPoint) {
    this._entryPoint = entryPoint;
    this._apiKey = "";

    var _this = this;
    this.setApiKey = function(key) {
        _this._apiKey = key;
    };
    this.show = function(tags, callback) {
        var data = ["show", tags.join(",")];
        _this.sendQuery(data, callback);
    };
    this.detail = function(id, callback) {
        var data = ["detail", id];
        _this.sendQuery(data, callback);
    };
    this.set = function(id, dat, callback) {
        var data = ["set", id].concat(_this.objToQuery(dat));
        _this.sendQuery(data, callback);
    };
    this.add = function(dat, callback) {
        var data = ["add"].concat(_this.objToQuery(dat));
        _this.sendQuery(data, callback);
    };
    this.finish = function(id, callback) {
        var data = ["finish", id];
        _this.sendQuery(data, callback);
    };
    this.unfinish = function(id, callback) {
        var data = ["unfinish", id];
        _this.sendQuery(data, callback);
    };

    this.objToQuery = function(obj) {
        var lst = [];
        for(var key in obj) {
            lst.push(key + "=" + obj[key]);
        }
        return lst;
    };
    this.sendQuery = function(data, callback) {
        console.log("sending... " + JSON.stringify(data));

        $.ajax({
            type: "POST",
            url: _this._entryPoint,
            data: {
                q: JSON.stringify(data),
                apikey: _this._apiKey
            },
            dataType: "json",
            success: callback
        });
    };
};
