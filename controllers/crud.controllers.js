
const User = require("../models/user.model")
const sequelize = require("../config")
const express = require('express')
const app = express()
const Cars = require("../models/cars.model")
const spareParts = require("../models/spareparts.model")
const Admin = require("../models/admin.models")
const Bikes = require("../models/bikes.models")
const Insurance = require("../models/insurance.models")

////---------------------ADD----------------
const addInUserTable = (req , res) =>
{
    console.log( "body" , req.body.id);
 sequelize.sync().then(() => {
    console.log('Users table created successfully!');
 
    User.create({
        UserID: req.body.id,
        Name: req.body.name,
        Email: req.body.email,
        Password: req.body.pass
    }).then(rs => {
        console.log(rs)
        res.send("saved")
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });
    
 
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });

}

const addInBikesTable = (req, res) =>
{
    sequelize.sync().then(() => {
        console.log('BIKES table created successfully!');
     
        Bikes.create({
            bikeName: req.body.name,
            companyName: req.body.companyName,
            color: req.body.company,
            model: req.body.model,
            price:req.body.pass
        }).then(rs => {
            console.log(rs)
            res.send("added")
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });
     
     }).catch((error) => {
        console.error('Unable to create table : ', error);
     });
    
}

const addInAdminTable = (req, res) =>
{
    sequelize.sync().then(() => {
        console.log('Admin table created successfully!');
    
        Admin.create({
            AdminID: req.body.id,
            Name: req.body.name,
            Email: req.body.email,
            Password: req.body.pass
        }).then(rs => {
            console.log(rs)
            res.send("added")
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });
    
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
}

const addInCarsTable = (req , res) =>
{
sequelize.sync().then(() => {
    console.log('CARS table created successfully!');
 
    Cars.create({
        carName: req.body.carName,
        companyName: req.body.companyName,
        color: req.body.color,
        model: req.body.model,
        price:req.body.price
    }).then(rs => {
        console.log(rs)
        res.send("saved")
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
        res.send("error")
    });
 
 }).catch((error) => {
    console.error('Unable to create table : ', error);
    res.send("table error")

 });

}

const addInSparePartsTable = (req , res) =>
{
    sequelize.sync().then(() => {
        console.log('Users table created successfully!');
     
        spareParts.create({
            Name: req.body.name,
            picePkr: req.body.price,
            typeOfPart: req.body.partType,
            model: req.body.model
        }).then(rs => {
            console.log(rs)
            res.send("saved")
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
            res.send("error")
        });
     
     }).catch((error) => {
        console.error('Unable to create table : ', error);
        res.send(" table error")
     });
     

}


const addInsuranceTable = (req , res) =>
{
sequelize.sync().then(() => {
    console.log('Insurance table created successfully!');

    Insurance.create({
        companyName: req.body.companyName,
        duration: req.body.duration,    // in months
        amount: req.body.amount
    }).then(rs => {
        console.log(rs)
        res.send("data addded in insurance")
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
});

}



//////--------------------------delete--------------------
const deleteFomUser = (req , res) =>
{sequelize.sync().then(() => {

    User.destroy({
        where: {
          id: req.body.iid
        }
    }).then(() => {
        console.log("Successfully deleted record.")
        res.send("deleted")
    }).catch((error) => {
        console.error('Failed to delete record : ', error);
        res.send("error")
    });
  
  }).catch((error) => {
      console.error('Unable to create table : ', error);
      res.send("table error")
  });

}



const deleteFomCars = (req , res) =>
{sequelize.sync().then(() => {

    Cars.destroy({
        where: {
          id: req.body.id
        }
    }).then(() => {
        console.log("Successfully deleted record.")
        res.send("deleted")
    }).catch((error) => {
        console.error('Failed to delete record : ', error);
        res.send("error")
    });
  
  }).catch((error) => {
      console.error('Unable to create table : ', error);
      res.send("table error")
  });

}


const deleteFomSpareParts = (req , res) =>
{sequelize.sync().then(() => {

    spareParts.destroy({
        where: {
          id: req.body.id
        }
    }).then(() => {
        console.log("Successfully deleted record.")
        res.send("spare parts data deleted")
    }).catch((error) => {
        console.error('Failed to delete record : ', error);
        res.send("error")
    });
  
  }).catch((error) => {
      console.error('Unable to create table : ', error);
      res.send("table error")
  });

}


const deleteFomAdmin = (req , res) =>
{
sequelize.sync().then(() => {

    Admin.destroy({
        where: {
            id: req.body.id
        }
    }).then(() => {
        console.log("Successfully deleted record.")
        res.send("admin data deleted")
    }).catch((error) => {
        console.error('Failed to delete record : ', error);
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
});
}

const deleteFomBikes = (req , res) =>
{

sequelize.sync().then(() => {

    Bikes.destroy({
        where: {
          id: req.body.id
        }
    }).then(() => {
        console.log("Successfully deleted record.")
        res.send(" bikes data deleted")
    }).catch((error) => {
        console.error('Failed to delete record : ', error);
    });
  
    }).catch((error) => {
      console.error('Unable to create table : ', error);
    
    
});

}

const deleteFomInsurance = (req , res) =>
{

sequelize.sync().then(() => {

    Insurance.destroy({
        where: {
            id: req.body.id
        }
    }).then(() => {
        console.log("Successfully deleted record.")
        res.send("deleted from insurance ")
    }).catch((error) => {
        console.error('Failed to delete record : ', error);
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
});

}


/////////----------------------UPDATE------------------
const upadteSpareParts = (req , res) =>
{
sequelize.sync().then(() =>
{
    spareParts.update(
        {
            model: req.body.model,
        },
        {
            where:{ id : req.body.id},
        }
    ).then(() =>{
         console.log(" upadted data ")
         res.send("spare parts data updated")
    }).catch((error) =>
    {console.error(" error update " , error);
    res.send("error");
    });
    
    }).catch((error) => {
        console.error('table not create : ', error);
        res.send("table error")
});

}


const upadteCars = (req , res) =>
{
    sequelize.sync().then(() =>{
    Cars.update(
        {
            price: req.body.price,
        },
        {
            where:{ id : req.body.id},
        }
    ).then(() =>{
         console.log(" upadted data ")
         res.send("cars data updated")
    }).catch((error) =>
    {
        console.error(" error update " , error);
        res.send("error");
    });
    
    }).catch((error) => {
        console.error('cannot update : ', error);
        res.send("table error");
});

}


const upadteUsers = (req , res) =>
{
    sequelize.sync().then(() =>{
    User.update(
        {
            UserID: req.body.userid,
        },
        {
            where:{ id : req.body.id},
        }
    ).then(() =>{
         console.log(" upadted data ")
         res.send("users data updated")
    }).catch((error) =>
    {
        console.error(" error update " , error);
        res.send("error")
    });
    
    }).catch((error) => {
        console.error('cannot update : ', error);
        res.send("table error")
});
}

const upadteAdmin = (req , res) =>
{
sequelize.sync().then(() => {
    Admin.update(
        {
            AdminID: req.body.adminid,
        },
        {
            where: { id: req.body.id },
        }
    ).then(() => {
        console.log(" updated data ")
        res.send(" admin data updated")
    }).catch((error) => {
        console.error(" error update ", error);
    });

}).catch((error) => {
    console.error('cannot update : ', error);
});
}

const upadteBikes = (req , res) =>
{
sequelize.sync().then(() =>
{
    Bikes.update(
        {
            price: req.body.price,
        },
        {
            where:{ id : req.body.id},
        }
    ).then(() =>{
         console.log(" updated data ")
         res.send("bikes data updated")
    }).catch((error) =>
    {
        console.error(" error update " , error);
    });
    
    }).catch((error) => {
        console.error('cannot update : ', error);
});

}


const upadteInsurance = (req , res) =>
{

sequelize.sync().then(() => {
    Insurance.update(
        {
           amount : req.body.amount,
        },
        {
            where: { id: req.body.id },
        }
    ).then(() => {
        console.log(" updated data ")
        res.send("insurance data updated")
    }).catch((error) => {
        console.error(" error update ", error);
    });

}).catch((error) => {
    console.error('cannot update : ', error);
});


}

////-------------------Retrive------------------

const retriveteUsers = (req , res) =>
{
sequelize.sync().then(() => {

    User.findOne({
        where: {
            id : req.body.id
        }
    }).then(rs => {
        console.log(rs)
        res.send("data get")
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
        res.send("error")
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
    res.send("table error")
});
}

const retriveteBikes = (req , res) =>
{
sequelize.sync().then(() => {

    Bikes.findOne({
        where: {
            id : req.send.id
        }
    }).then(rs => {
        console.log(rs)
        res.send("data got")
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
});

}

const retriveteAmin = (req , res) =>
{
sequelize.sync().then(() => {

    Admin.findOne({
        where: {
            id: req.body.id
        }
    }).then(rs => {
        console.log(rs)
        res.send("data got from admin")
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
});
}

const retriveteInsurance = (req , res) =>
{

sequelize.sync().then(() => {

    Insurance.findOne({
        where: {
            id: req.body.id
        }
    }).then(res => {
        console.log(res)
        res.send("data got from insurance ")
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
});

}

const retriveteCars= (req , res) =>
{
sequelize.sync().then(() => {

    User.findOne({
        where: {
            id : req.body.id
        }
    }).then(rs => {
        console.log(rs)
        res.send("data get")
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
        res.send("error")
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
    res.send("table error")
});

}


const retriveteSpareParts= (req , res) =>
{
    sequelize.sync().then(() => {

        User.findOne({
            where: {
                id : req.body.id
            }
        }).then(rs => {
            console.log(rs)
            res.send("data get")
        }).catch((error) => {
            console.error('Failed to retrieve data : ', error);
            res.send("error")
        });
     
     }).catch((error) => {
        console.error('Unable to create table : ', error);
        res.send("table error")
     });

}









module.exports = {addInUserTable , addInCarsTable , addInSparePartsTable,
deleteFomCars , deleteFomSpareParts , deleteFomUser,
upadteCars , upadteSpareParts , upadteUsers,
retriveteCars , retriveteSpareParts , retriveteUsers,
addInAdminTable, retriveteAmin, deleteFomAdmin , upadteAdmin,
addInBikesTable, retriveteBikes, deleteFomBikes , upadteBikes,
addInsuranceTable, retriveteInsurance, deleteFomInsurance, upadteInsurance
}