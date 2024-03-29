import db from "../models/index"
import CRUDService from "../services/CRUDService";
let getHomePage = async (req, res) => {
    try {

        let data = await db.User.findAll();
        console.log('.......................')
        console.log(data)
        console.log('.......................')
        return res.render('homePage.ejs', {
            data: JSON.stringify(data)
        })
    } catch (e) {
        console.log(e)
    }
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs')
}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body)
    console.log(message)
    return res.send('post CRUD form server')
}
let displaygetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    console.log('------------------------------')
    console.log(data)
    console.log('------------------------------')
    return res.render('displayCRUD.ejs', {
        dataTable: data
    })

}

let geteditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInforbyId(userId);
        console.log('----------------------')
        console.log(userData)
        console.log('----------------------')
        return res.render('editCRUD.ejs', {
            user: userData
        })
    }
    else {
        return res.send('users not found!')
    }
}
let puteditCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDService.upsateUserData(data);
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers
    })
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        let allUsers = await CRUDService.deleteUserById(id);
        return res.render('displayCRUD.ejs', {
            dataTable: allUsers
        })
        // await CRUDService.deleteUserById(id);
        // return res.send('delete user succeed')
    }
    else {
        return req.send('user id not found')
    }

}
module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displaygetCRUD: displaygetCRUD,
    geteditCRUD: geteditCRUD,
    puteditCRUD: puteditCRUD,
    deleteCRUD: deleteCRUD,
}