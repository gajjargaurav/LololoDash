// include the Lo-Dash library
var _ = require("lodash");

var worker = function(articles) {
    // do work; return stuff
    var result = [];
    var grouped = _.groupBy(articles, 'article');
	_.forEach(grouped, function(articleGroup, key){
    	/*var x = {article: +key, total_orders: 0};
    	_.forEach(articleGroup, function(article){
    		x.total_orders += article.quantity;
    	})
    	result.push(x);*/
    	var r = _.reduce(articleGroup, function(total, article){
    			return total + article.quantity;
    	}, 0);
    	result.push({article : +key, total_orders:r});
    });
    console.log(result.reverse());

     return _.sortBy(result, function(item){
     	return -item.total_orders;
     });

};

// export the worker function as a nodejs module
module.exports = worker;
