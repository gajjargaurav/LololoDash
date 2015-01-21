 // include the Lo-Dash library
    var _ = require("lodash");
    
    var worker = function(list) {
        // do work; return stuff
      	return  _.forEach(list, function(item){
        	if(item.population > 1){
        		item.size = 'big';
        	}
        	else if(item.population <= 1 && item.population > 0.5)
        	{
        		item.size = 'med';
        	} 
        	else
        	{
        		item.size = 'small';
        	}

        })
    };
    
    // export the worker function as a nodejs module
    module.exports = worker;