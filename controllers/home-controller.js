const { Post,Profile,Tag,User } = require('../models')

class HomeController {
    static getHome(req,res){
        let profile;
        let tags;
        
        Profile.findOne({where: {UserId : 1}}).then(result=> {
            profile = result
            return Tag.findAll({})
        })
        .then(resultTags=>{
            tags = resultTags
            return Post.findAll({})
        })   
        .then(posts =>{
            res.render('homepage',{posts, profile, tags})
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = HomeController