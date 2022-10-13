const { Post,Profile,Tag,User } = require('../models')

class ProfileController{
    static getProfile(req,res){
        const {err} = req.query
        const { profileId } = req.params
        Profile.findOne({
            include: {
                model:User
            },
            where: { id: profileId}})
        .then(profile => {
            res.render('profile',{profile, err})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static updateProfile(req,res){
        const {id} = req.session.user
        const { firstName, lastName, gender, phoneNumber,dateOfBirth } = req.body
        const UserId = id
        Profile.update({firstName, lastName, gender, phoneNumber, dateOfBirth, UserId},{where : {id : req.params.profileId}})
        .then(() => {
            res.redirect(`/profile/${req.params.profileId}`)
        })
        .catch(err=>{
            let error ;
            if(err.name ==='SequelizeValidationError') {
              error = err.errors.map(el => el.message)
            }else {
              res.send(err)
            }
            res.redirect(`/profile/${req.params.profileId}?err=${error}`)
        })
    }
}

module.exports = ProfileController