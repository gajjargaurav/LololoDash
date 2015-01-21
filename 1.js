   // include the Lo-Dash library
    var _ = require("lodash");
   
    var worker = function(list) {
        // do work; return stuff
        return _.where(list, { active: true})
    };
    
    // export the worker function as a nodejs module
    module.exports = worker;