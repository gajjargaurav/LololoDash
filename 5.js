  // include the Lo-Dash library
    var _ = require("lodash");
    
    var worker = function(userComments) {
        // do work; return stuff
        var result =[];
        var comments = _.groupBy(userComments, 'username');
        _.forEach(comments, function(comment, key){
        	result.push({ username: key, comment_count: _.size(comment)})
        });
         return _.sortBy(result, function(item){
         	return -item.comment_count;
         });
    };
    
    // export the worker function as a nodejs module
    module.exports = worker;