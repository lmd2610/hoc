const db =require("../db")
module.exports.index = function (req, res) {
    res.render('users/index',{
      users: db.get('users').value()
    });
};
module.exports.search = function(req,res){
  var q= req.query.q;
  var macthedUsers = db.get('users').value().filter(function(users){
    return users.name.toLowerCase().indexOf(q) !==-1;
  });
  res.render('users/index',{
    users: macthedUsers
  });
};
module.exports.create = function(req,res){
  console.log(req.cookies);
  res.render('users/create');
  
};
module.exports.postCreate = function(req,res){

  db.get('users').push(req.body).write();
  
  // console.log(req.body);
  // res.json(req.body);
  res.redirect("/users");
};
module.exports.getId = function(req,res){
  var id = req.params.id;
  var users = db.get('users').find({id: id}).value();
  console.log(users);
  res.render('users/view',{
      users:users
  });
};