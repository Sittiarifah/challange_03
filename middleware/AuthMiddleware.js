const satpam = ( req, res, next) => {
 const token = req.cookies?.token;

 if (!token) return res.render("login");
 else return next();
}

module.exports = satpam;