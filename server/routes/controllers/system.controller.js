// System Controller

exports.findSystemAdmin = function(request, response) {
  var systemAdmin = {
    name: "Vivek",
    role: "Admin",
    org: "System_Admin",
    dept: "System_Admin"
  };
  response.json(systemAdmin);
};
