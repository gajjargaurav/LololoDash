 // include the Lo-Dash library
var _ = require("lodash");

var worker = function(towns) {
    // do work; return stuff
    var result = { hot:[], warm:[]};
    function checkTemprature(item){
		return item > 19;
	}
    _.forEach(towns, function(town,key){
    
    	if(_.every(town, checkTemprature)){
    		result.hot.push(key);	
    	} 
    	else if(_.some(town, checkTemprature)){
    		result.warm.push(key);
    	}

    });
    return result;
}
// export the worker function as a nodejs module
module.exports = worker;