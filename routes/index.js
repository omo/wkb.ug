
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'wkb.ug' });
};

exports.bug = function(req, res){
  res.header('Location', "https://bugs.webkit.org/show_bug.cgi?id=" + req.params.bugid);
  res.send('Redirecting...', 303);
};