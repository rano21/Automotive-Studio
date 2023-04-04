const User = require("../models/user.model");
const Cars = require("../models/cars.model");
const spareParts = require("../models/spareparts.model");
const Admin = require("../models/admin.models");
const Bikes = require("../models/bikes.models");
const Insurance = require("../models/insurance.models");
const Cookies = require("cookies");
const jwtToken = require("jsonwebtoken");
const sequelize = require("../config");
const {Op} = require('sequelize');


////---------------------ADD----------------
const signUpUser = (req, res) => {
  console.log("body", req.body.id);
  sequelize
    .sync()
    .then(() => {
      console.log("Users table created successfully!");

      User.create({
        UserID: req.body.id,
        Name: req.body.name,
        Email: req.body.email,
        Password: req.body.pass,
      })
        .then((rs) => {
          console.log(rs);
          res.send(rs);
        })
        .catch((error) => {
          console.error("Failed to create a new record : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};

const addInBikesTable = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      console.log("BIKES table created successfully!");

      Bikes.create({
        bikeName: req.body.name,
        companyName: req.body.companyName,
        color: req.body.color,
        model: req.body.model,
        price: req.body.price
      })
        .then((rs) => {
          console.log(rs);
          res.send(rs);
        })
        .catch((error) => {
          console.error("Failed to create a new record : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};

const addAdmin = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      console.log("Admin table created successfully!");

      Admin.create({
        AdminID: req.body.id,
        Name: req.body.name,
        Email: req.body.email,
        Password: req.body.pass,
      })
        .then((rs) => {
          console.log(rs);
          res.send(rs);
        })
        .catch((error) => {
          console.error("Failed to create a new record : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};

const addInCarsTable = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      console.log("CARS table created successfully!");

      Cars.create({
        carName: req.body.carName,
        companyName: req.body.companyName,
        color: req.body.color,
        model: req.body.model,
        price: req.body.price,
      })
        .then((rs) => {
          console.log(rs);
          res.send(rs);
        })
        .catch((error) => {
          console.error("Failed to create a new record : ", error);
          res.send("error");
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
      res.send("table error");
    });
};

const addInSparePartsTable = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      console.log("Users table created successfully!");

      spareParts
        .create({
          Name: req.body.name,
          picePkr: req.body.price,
          typeOfPart: req.body.partType,
          model: req.body.model,
        })
        .then((rs) => {
          console.log(rs);
          // res.cookie("pareparts" ," added");
          // var keys = ['keyboard cat']
          // var cookies = new Cookies(req, res, { keys: keys });
          // cookies.set("LastVisit", new Date().toISOString(), { signed: true }); // Set the cookie to a value
          res.send(rs);
        })
        .catch((error) => {
          console.error("Failed to create a new record : ", error);
          res.send("error");
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
      res.send("table error");
    });
};

const addInsuranceTable = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      console.log("Insurance table created successfully!");

      Insurance.create({
        companyName: req.body.companyName,
        duration: req.body.duration, // in months
        amount: req.body.amount,
      })
        .then((rs) => {
          console.log(rs);
          res.send(rs);
        })
        .catch((error) => {
          console.error("Failed to create a new record : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};

//////--------------------------delete--------------------
const deleteFomUser = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      User.destroy({
        where: {
          id: req.body.id,
        },
      })
        .then(() => {
          console.log("Successfully deleted record.");
          res.send("deleted");
        })
        .catch((error) => {
          console.error("Failed to delete record : ", error);
          res.send("error");
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
      res.send("table error");
    });
};

const deleteFomCars = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      Cars.destroy({
        where: {
          id: req.body.id,
        },
      })
        .then(() => {
          console.log("Successfully deleted record.");
          res.send("deleted");
        })
        .catch((error) => {
          console.error("Failed to delete record : ", error);
          res.send("error");
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
      res.send("table error");
    });
};

const deleteFomSpareParts = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      spareParts
        .destroy({
          where: {
            id: req.body.id,
          },
        })
        .then(() => {
          console.log("Successfully deleted record.");
          res.send("spare parts data deleted");
        })
        .catch((error) => {
          console.error("Failed to delete record : ", error);
          res.send("error");
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
      res.send("table error");
    });
};

const deleteFomAdmin = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      Admin.destroy({
        where: {
          id: req.body.id,
        },
      })
        .then(() => {
          console.log("Successfully deleted record.");
          res.send("admin data deleted");
        })
        .catch((error) => {
          console.error("Failed to delete record : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};

const deleteFomBikes = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      Bikes.destroy({
        where: {
          id: req.body.id,
        },
      })
        .then(() => {
          console.log("Successfully deleted record.");
          res.send(" bikes data deleted");
        })
        .catch((error) => {
          console.error("Failed to delete record : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};

const deleteFomInsurance = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      Insurance.destroy({
        where: {
          id: req.body.id,
        },
      })
        .then(() => {
          console.log("Successfully deleted record.");
          res.send("deleted from insurance ");
        })
        .catch((error) => {
          console.error("Failed to delete record : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};

/////////----------------------UPDATE------------------
const upadteSpareParts = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      spareParts
        .update(
          {
            model: req.body.model,
          },
          {
            where: { id: req.body.id },
          }
        )
        .then(() => {
          console.log(" upadted data ");
          res.send("spare parts data updated");
        })
        .catch((error) => {
          console.error(" error update ", error);
          res.send("error");
        });
    })
    .catch((error) => {
      console.error("table not create : ", error);
      res.send("table error");
    });
};

const upadteCars = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      Cars.update(
        {
          price: req.body.price,
        },
        {
          where: { id: req.body.id },
        }
      )
        .then(() => {
          console.log(" upadted data ");
          res.send("cars data updated");
        })
        .catch((error) => {
          console.error(" error update ", error);
          res.send("error");
        });
    })
    .catch((error) => {
      console.error("cannot update : ", error);
      res.send("table error");
    });
};

const upadteUsers = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      User.update(
        {
          UserID: req.body.userid,
        },
        {
          where: { id: req.body.id },
        }
      )
        .then(() => {
          console.log(" upadted data ");
          res.send("users data updated");
        })
        .catch((error) => {
          console.error(" error update ", error);
          res.send("error");
        });
    })
    .catch((error) => {
      console.error("cannot update : ", error);
      res.send("table error");
    });
};

const upadteAdmin = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      Admin.update(
        {
          AdminID: req.body.adminid,
        },
        {
          where: { id: req.body.id },
        }
      )
        .then(() => {
          console.log(" updated data ");
          res.send(" admin data updated");
        })
        .catch((error) => {
          console.error(" error update ", error);
        });
    })
    .catch((error) => {
      console.error("cannot update : ", error);
    });
};

const upadteBikes = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      Bikes.update(
        {
          price: req.body.price,
        },
        {
          where: { id: req.body.id },
        }
      )
        .then(() => {
          console.log(" updated data ");
          res.send("bikes data updated");
        })
        .catch((error) => {
          console.error(" error update ", error);
        });
    })
    .catch((error) => {
      console.error("cannot update : ", error);
    });
};

const upadteInsurance = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      Insurance.update(
        {
          amount: req.body.amount,
        },
        {
          where: { id: req.body.id },
        }
      )
        .then(() => {
          console.log(" updated data ");
          res.send("insurance data updated");
        })
        .catch((error) => {
          console.error(" error update ", error);
        });
    })
    .catch((error) => {
      console.error("cannot update : ", error);
    });
};

////-------------------Retrive by id------------------

const signInUser = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      User.findOne({
        where: {
          Name: req.body.name,
          Email: req.body.email,
        },
      })
        .then((rs) => {
          console.log(rs);
          const token = jwtToken.sign({username : req.body.name , Role : "user"}, 'dfghjk')
          res.status(200).send({ 
            username: token.username,
            roles: token.Role,
            accessToken: token
          });
        })
        .catch((error) => {
          console.error("Failed to sign data : ", error);
          res.send("error");
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
      res.send("table error");
    });
};

const signInAdmin = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      Admin.findOne({
        where: {
          Name: req.body.name,
          Email: req.body.email,
        },
      })
        .then((rs) => {
          console.log(rs);

          const token = jwtToken.sign({username : req.body.name , Role : "admin"}, 'rtyui')
          res.status(200).send({ 
            username: token.username,
            roles: token.Role,
            accessToken: token
          });
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};


const retriveteBikesByID = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      Bikes.findOne({
        where: {
          id: req.send.id,
        },
      })
        .then((rs) => {
          console.log(rs);
          res.send("data got");
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};


const retriveteInsuranceByID = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      Insurance.findOne({
        where: {
          id: req.body.id,
        },
      })
        .then((res) => {
          console.log(res);
          res.send("data got from insurance ");
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};

const retriveteCarsByID = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      User.findOne({
        where: {
          id: req.body.id,
        },
      })
        .then((rs) => {
          console.log(rs);
          res.send("data get");
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
          res.send("error");
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
      res.send("table error");
    });
};



const retriveteSparePartsByID = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      User.findOne({
        where: {
          id: req.body.id,
        },
      })
        .then((rs) => {
          console.log(rs);
          res.send("data get");
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
          res.send("error");
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
      res.send("table error");
    });
};


//----------------------pagination
const paginatebikes = (req, res) => {
  const { page } = req.query;
  const { limit, offset } = getPagination(page);
 sequelize
   .sync()
   .then(() => {
     Bikes.findAll( { limit , offset})
       .then((data) => {      
         res.send(data);
       })
       .catch((error) => {
         console.error("Failed to retrieve data : ", error);
       });
   })
   .catch((error) => {
     console.error("Unable to create table : ", error);
   });
};

const paginatespareparts = (req, res) => {
  const { page } = req.query;
  const { limit, offset } = getPagination(page);
 sequelize
   .sync()
   .then(() => {
     spareParts.findAll( { limit , offset})
       .then((data) => {      
         res.send(data);
       })
       .catch((error) => {
         console.error("Failed to retrieve data : ", error);
       });
   })
   .catch((error) => {
     console.error("Unable to create table : ", error);
   });
};

const paginatecars = (req, res) => {
  const { page } = req.query;
  const { limit, offset } = getPagination(page);
 sequelize
   .sync()
   .then(() => {
     Cars.findAll( { limit , offset})
       .then((data) => {      
         res.send(data);
       })
       .catch((error) => {
         console.error("Failed to retrieve data : ", error);
       });
   })
   .catch((error) => {
     console.error("Unable to create table : ", error);
   });
};

const paginateuser = (req, res) => {
   const { page } = req.query;
   const { limit, offset } = getPagination(page);
  sequelize
    .sync()
    .then(() => {
      User.findAll( { limit , offset})
        .then((data) => {      
          res.send(data);
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};

const paginateinsurance = (req, res) => {
  const { page } = req.query;
  const { limit, offset } = getPagination(page);
 sequelize
   .sync()
   .then(() => {
     Insurance.findAll( { limit , offset})
       .then((data) => {      
         res.send(data);
       })
       .catch((error) => {
         console.error("Failed to retrieve data : ", error);
       });
   })
   .catch((error) => {
     console.error("Unable to create table : ", error);
   });
};


const getPagination = (page) => {
  const limit = 5;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};



//-----------------------Filteration---------------
const filterCars = (req, res) => {
  sequelize
    .sync()
    .then(() => {
        Cars.findAll({
        where: {
          price: {
            [Op.between]: [req.body.fromPrice, req.body.toPrice]
          }
        }
      })
        .then((data) => {
          console.log(data);
          res.send(data);
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};


const filterUsers = (req, res) => {
  sequelize
    .sync()
    .then(() => {
        User.findAll({
        where: {
          id: {
            [Op.between]: [req.body.fromID, req.body.toID]
          }
        }
      })
        .then((data) => {
          console.log(data);
          res.send(data);
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};


const filterBikes = (req, res) => {
  sequelize
    .sync()
    .then(() => {
        Bikes.findAll({
        where: {
          price: {
            [Op.between]: [req.body.fromPrice, req.body.toPrice]
          }
        }
      })
        .then((data) => {
          console.log(data);
          res.send(data);
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};


const filterSpareParts = (req, res) => {
  sequelize
    .sync()
    .then(() => {
        spareParts.findAll({
        where: {
          picePkr: {
            [Op.between]: [req.body.fromPrice, req.body.toPrice]
          }
        }
      })
        .then((data) => {
          console.log(data);
          res.send(data);
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};


const filterInsurance = (req, res) => {
  sequelize
    .sync()
    .then(() => {
        Insurance.findAll({
        where: {
          amount: {
            [Op.between]: [req.body.fromPrice, req.body.toPrice]
          }
        }
      })
        .then((data) => {
          console.log(data);
          res.send(data);
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};
















// Insurance.belongsTo(Cars , Bikes)
// Admin.hasMany(Bikes , Cars , spareParts , Insurance)
// Cars.hasMany(spareParts)
// Bikes.hasMany(spareParts)
// User.belongsToMany(Cars, { through: 'ID'} )
// User.belongsToMany(Bikes, { through: 'ID'} )
// User.belongsToMany(spareParts, { through: 'ID'} )






module.exports = {
  signUpUser,
  addInCarsTable,
  addInSparePartsTable,
  deleteFomCars,
  deleteFomSpareParts,
  deleteFomUser,
  upadteCars,
  upadteSpareParts,
  upadteUsers,
  retriveteCarsByID,
  retriveteSparePartsByID,
  signInUser,
  signInAdmin,
  addAdmin,
  deleteFomAdmin,
  upadteAdmin,
  addInBikesTable,
  retriveteBikesByID,
  deleteFomBikes,
  upadteBikes,
  addInsuranceTable,
  retriveteInsuranceByID,
  deleteFomInsurance,
  upadteInsurance,
  paginatebikes,
  paginatespareparts,
  paginatecars,
  paginateuser,
  paginateinsurance,
  filterBikes,
  filterCars,
  filterInsurance,
  filterSpareParts,
  filterUsers
};
