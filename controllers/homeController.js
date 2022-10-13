const { Post,Profile,Tag,User } = require('../models')
const { Op } = require('sequelize')
const Help = require('../helpers')

class HomeController {
    static getHome(req,res){
        const { TagId } = req.query
        const {id} = req.session.user
        let profile;
        let tags;

        const option = {include: {model: Tag}}

        if(TagId){
            option.where = { TagId: TagId}
        }
        
        Profile.findOne({where: {UserId : id}})
        .then(resProfile=> {
            profile = resProfile
            return Tag.findAll({})
        })
        .then(resultTags=>{
            tags = resultTags
            return Post.findAll( option )
        })   
        .then(posts =>{
            res.render('homepage',{posts, profile, tags, Help })
        })
        .catch(err => {
            res.send(err)
        })
    }

    static createPost(req,res){
        const {id} = req.session.user
        const { title, content, TagId, imageUrl } = req.body
        let ProfileId;
        Profile.findOne({where: {UserId : id}})
        .then(profile=>{
            ProfileId = profile.id
            return Post.create({title, content, TagId, imageUrl,ProfileId})
        }).then(()=>{
            res.redirect('/home')
        })
        .catch(err => {
            res.send(err)
        })     
    }
}

module.exports = HomeController