// include the Lo-Dash library
var _ = require("lodash");

var worker = function(freelancers) {
    // do work; return stuff
    var totalIncome = _.reduce(freelancers, function(total, freelancer){
    	return total + +freelancer.income;
    }, 0);

    var averageIncome = totalIncome / freelancers.length;
  	
  	var underperform = _.filter(freelancers, function(freelancer){
  			return +freelancer.income <= averageIncome;
  	});
  	var overperform = _.filter(freelancers, function(freelancer){
  		return +freelancer.income > averageIncome;
  	});

  	underperform = _.sortBy(underperform, 'income');
  	overperform = _.sortBy(overperform, 'income');
  	return { average: averageIncome, underperform: underperform, overperform: overperform };
  	}
// export the worker function as a nodejs module
module.exports = worker;