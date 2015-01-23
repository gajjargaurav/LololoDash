// include the Lo-Dash library
var _ = require("lodash");

var worker = function(userLogins) {
    // do work; return stuff
    return _.template('Hello <%= name %> (logins: <%=login.length%>)', userLogins);
};

// export the worker function as a nodejs module
module.exports = worker;