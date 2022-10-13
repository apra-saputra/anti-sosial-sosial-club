const HomeController = require("./home-controller");


class Controller extends HomeController{
    static landingpage(req,res){
        res.render('landing-page')
    }
}

module.exports = Controller