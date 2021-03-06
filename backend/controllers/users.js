const modelUsers = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");


exports.login =  (req, res) => {
   	modelUsers.findOne({
		where :{email : req.body.emailLogin}
	})
	.then((users) => {
		if(users){
			bcrypt.compare(req.body.passwordLogin, users.mdp)
			.then((control) => {
				if(control) {
					res.status(200).json({
						message: "Compte connecté",
						id: users.id, 
						token: jwt.sign(
							{id: users.id}, 
							`${process.env.key}`, 
							{expiresIn: "12h"}
						),
					});
				}
				else {
					res.status(400).json({error: "mot de passe incorrect"});
				}
			})

		}
		else {
			res.status(400).json({error: "email incorrect"});
		}
	});
}

exports.register = (req, res) => {
    bcrypt.hash(req.body.passwordRegister, 5)
    .then((hash) => {
        modelUsers.create({
            prenom: req.body.prenom,
            nom: req.body.nom,
            email: req.body.emailRegister, 
            mdp: hash,
        })
		.then((create) => {
			if(create) {
				res.status(201).json({message: "compte enregistré"});
				console.log("Compte enregistré");
			}
		})
    });
}

exports.deleteUser = (req, res) => {
	modelUsers.destroy({
		where: {id: req.params.id}
	})
	.then((deleteUsers) => {
		if(deleteUsers) {
			res.status(201).json({message: "compte supprimé"});
		}
		else {
			res.status(400).json({message: "compte non supprimé"})
		}
	})
}

exports.getAllUsers = (req, res) => {
	modelUsers.findAll()
	.then((users) => {
		res.status(200).json(users)
	})
}
exports.getOneUser = (req, res) => {
	modelUsers.findByPk(req.params.id)
	.then((oneUser) => {
		if(oneUser.id == 1) {
			oneUser.update({
				isAdmin: true
			})
		}
		else{
			oneUser.update({
				isAdmin: false
			})
		}
		res.status(200).json(oneUser);
	})
}


