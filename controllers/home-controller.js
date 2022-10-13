const { Post,Profile,Tag,User } = require('../models')
const { Op } = require('sequelize')

class HomeController {
    static getHome(req,res){
        const { TagId } = req.query

        let profile;
        let tags;

        const option = {include: {model: Tag}}

        if(TagId){
            option.where = { TagId: TagId}
        }
        
        Profile.findOne({where: {UserId : 1}})
        .then(resProfile=> {
            profile = resProfile
            return Tag.findAll({})
        })
        .then(resultTags=>{
            tags = resultTags
            return Post.findAll( option )
        })   
        .then(posts =>{
            res.render('homepage',{posts, profile, tags})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static createPost(req,res){
        req.session.UserId
        console.log(req.body)
        Post.create({})
        res.redirect('/home')
    }
}

module.exports = HomeController