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
const errorHandler = require("../utlis/errorhandler")


////---------------------ADD----------------
const signUpUser = async(req, res) => {
    try{
    await sequelize
    .sync()
      .then(async() => {
        console.log("Users table created successfully!");
  
          await User.create({
          UserID: req.body.id,
          Name: req.body.name,
          Email: req.body.email,
          Password: req.body.pass,
        })
          .then((user) => {
            console.log(user);
            res.status(200).send(user);
          })
          .catch((error) => {
            console.error("Failed to create a new record : ", error);
            res.status(500).send(error.message);
            //res.send(new errorHandler(" data couldnt add " , 400))
          });
      })
      .catch((error) => {
        console.error("Unable to create table : ", error);
      });
    }catch{
      console.error("Failed to create a new record : ", error);
      res.status(500).send(error.message);
    }
    
  };


const addInBikesTable = async (req, res) => {
  try{
    await sequelize
    .sync()
    .then(async() => {
      console.log("BIKES table created successfully!");

      const bike = await Bikes.create({
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
            res.status(500).send(error.message);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
}
    catch{
        console.error("Failed to create a new record : ", error);
        res.status(500).send(error.message);
      }

};

const addAdmin = async (req, res) => {
  try{
  await sequelize
    .sync()
    .then(async() => {
      console.log("Admin table created successfully!");

      await Admin.create({
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
          res.status(500).send(error.message);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
  }
  catch{
    console.error("Failed to create a new record : ", error);
    res.status(500).send(error.message);
  }
};

const addInCarsTable = async (req, res) => {
  try{
  await sequelize
    .sync()
    .then(async () => {
      console.log("CARS table created successfully!");

      await Cars.create({
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
          res.status(500).send(error.message);
        });
    })
    .catch((error) => {
      console.error("Failed to create a new record : ", error);
      res.status(500).send(error.message);
    });
  }catch{
    console.error("Failed to create a new record : ", error);
    res.status(500).send(error.message);
  }
};

const addInSparePartsTable = async (req, res) => {
  try{
  await sequelize
    .sync()
    .then(async() => {
      console.log("Users table created successfully!");

      await spareParts
        .create({
          Name: req.body.name,
          picePkr: req.body.price,
          typeOfPart: req.body.partType,
          model: req.body.model,
        })
        .then((rs) => {
          console.log("data added");
          // res.cookie("pareparts" ," added");
          // var keys = ['keyboard cat']
          // var cookies = new Cookies(req, res, { keys: keys });
          // cookies.set("LastVisit", new Date().toISOString(), { signed: true }); // Set the cookie to a value
          res.send(rs);
        })
        .catch((error) => {
          console.error("Failed to create a new record : ", error);
          res.status(500).send(error.message);
        });
    })
    .catch((error) => {
      console.error("Failed to create a new record : ", error);
          res.status(500).send(error.message);
    });
  }catch{
    console.error("Failed to create a new record : ", error);
          res.status(500).send(error.message);
  }
};

const addInsuranceTable =async (req, res) => {
  try{
  await sequelize
    .sync()
    .then(async() => {
      console.log("Insurance table created successfully!");

      await Insurance.create({
        companyName: req.body.companyName,
        duration: req.body.duration, // in months
        amount: req.body.amount,
      })
        .then((rs) => {
          console.log("added");
          res.send(rs);
        })
        .catch((error) => {
          console.error("Failed to create a new record : ", error);
          res.status(500).send(error.message);
        });
    })
    .catch((error) => {
      console.error("Failed to create a new record : ", error);
          res.status(500).send(error.message);
    });
  }catch{
    console.error("Failed to create a new record : ", error);
          res.status(500).send(error.message);
  }
};

//////--------------------------delete--------------------
const deleteFomUser =async (req, res) => {
  try{
    await sequelize
    .sync()
    .then(async() => {
      await User.destroy({
        where: {
          id: req.body.id,
        },
      })
        .then((data) => {
          if(!data)
          {
            res.send(new errorHandler("id do not exist " , 404))
          }
          else{
          console.log("Successfully deleted record.");
          res.status(200).send("data deleted");
          }
        })
        .catch((error) => {
          console.error("Failed delete record : ", error);
          res.status(500).send(error.message);
        });
    })
    .catch((error) => {
      console.error("Failed to delete record : ", error);
          res.status(500).send(error.message);
    });
  }catch{
    console.error("Failed to delete record : ", error);
          res.status(500).send(error.message);
  }
};

const deleteFomCars = async (req, res) => {
  try {
    await sequelize
    .sync()
    .then(async() => {
      await Cars.destroy({
        where: {
          id: req.body.id,
        },
      })
        .then((data) => {
          if(!data)
          {
            res.send(new errorHandler("id do not exist " , 404))
          }
          else{
          console.log("Successfully deleted record.");
          res.status(200).send("data deleted");
          }
        })
        .catch((error) => {
          console.error("Failed to delete record : ", error);
          res.status(500).send(error.message);
        });
    })
    .catch((error) => {
      console.error("Failed to delete record : ", error);
          res.status(500).send(error.message);
    });
  }catch
  {
    console.error("Failed to delete record : ", error);
          res.status(500).send(error.message);
  }
};

const deleteFomSpareParts = async(req, res) => {
  try{
  await sequelize
    .sync()
    .then(async() => {
      await spareParts
        .destroy({
          where: {
            id: req.body.id,
          },
        })
        .then((data) => {
          if(!data)
          {
            res.send(new errorHandler("id do not exist " , 404))
          }
          else{
          console.log("Successfully deleted record.");
          res.status(200).send("data deleted");
          }
        })
        .catch((error) => {
          console.error("Failed to delete record : ", error);
          res.status(500).send(error.message);
        });
    })
    .catch((error) => {
      console.error("Failed to delete record : ", error);
          res.status(500).send(error.message);
    });
  }catch{
    console.error("Failed to delete record : ", error);
          res.status(500).send(error.message);
  }
};

const deleteFomAdmin = async (req, res) => {
  try{
  await sequelize
    .sync()
    .then(async() => {
      await Admin.destroy({
        where: {
          id: req.body.id,
        },
      })
        .then((data) => {
          if(!data)
          {
            res.send(new errorHandler("id do not exist " , 404))
          }
          else{
          console.log("Successfully deleted record.");
          res.status(200).send("data deleted");
          }
        })
        .catch((error) => {
          console.error("Failed to delete record : ", error);
          res.status(500).send(error.message);
        });
    })
    .catch((error) => {
      console.error("Failed to delete record : ", error);
          res.status(500).send(error.message);
    });
  }catch{
    console.error("Failed to delete record : ", error);
          res.status(500).send(error.message);
  }
};

const deleteFomBikes = async (req, res) => {
  try{
  await sequelize
    .sync()
    .then(async() => {
      await Bikes.destroy({
        where: {
          id: req.body.id,
        },
      })
        .then((data) => {
          if(!data)
          {
            res.send(new errorHandler("id do not exist " , 404))
          }
          else{
          console.log("Successfully deleted record.");
          res.status(200).send("data deleted");
          }
        })
        .catch((error) => {
          console.error("Failed to delete record : ", error);
          res.status(500).send(error.message);
        });
    })
    .catch((error) => {
      console.error("Failed to delete record : ", error);
          res.status(500).send(error.message);
    });
  }catch{
    console.error("Failed to delete record : ", error);
          res.status(500).send(error.message);
  }
};

const deleteFomInsurance = async (req, res) => {
  try{
  await sequelize
    .sync()
    .then(async() => {
      await Insurance.destroy({
        where: {
          id: req.body.id,
        },
      })
        .then((data) => {
          if(!data)
          {
            res.send(new errorHandler("id do not exist " , 404))
          }
          else{
          console.log("Successfully deleted record.");
          res.status(200).send("data deleted");
          }
        })
        .catch((error) => {
          console.error("Failed to delete record : ", error);
          res.status(500).send(error.message);
        });
    })
    .catch((error) => {
      console.error("Failed to delete record : ", error);
          res.status(500).send(error.message);
    });
  }catch{
    console.error("Failed to delete record : ", error);
          res.status(500).send(error.message);
  }
};

/////////----------------------UPDATE------------------
const upadteSpareParts =async (req, res) => {
  try{
    await sequelize
    .sync()
    .then(async() => {
      await spareParts
        .update(
          {
            model: req.body.model,
          },
          {
            where: { id: req.body.id },
          }
        )
        .then((data) => {
          if(!data)
          {
            res.send(new errorHandler("id do not exist " , 404))
          }
          else{
          console.log("Successfully updated record.");
          res.status(200).send("data updated");
          }
        })
        .catch((error) => {
          console.error("Failed to update record : ", error);
          res.status(500).send(error.message);
        });
    })
    .catch((error) => {
      console.error("Failed to update record : ", error);
          res.status(500).send(error.message);
    });
  }catch{
    console.error("Failed to update record : ", error);
          res.status(500).send(error.message);
  }
};

const upadteCars = async(req, res) => {
  try{
    await sequelize
    .sync()
    .then(async() => {
     await Cars.update(
        {
          price: req.body.price,
        },
        {
          where: { id: req.body.id },
        }
      )
        .then((data) => {
          if(!data)
          {
            res.send(new errorHandler("id do not exist " , 404))
          }
          else{
          console.log("Successfully updated record.");
          res.status(200).send("data updated");
          }
        })
        .catch((error) => {
          console.error("Failed to update record : ", error);
          res.status(500).send(error.message);
        });
    })
    .catch((error) => {
      console.error("Failed to update record : ", error);
      res.status(500).send(error.message);
    });
  }catch{
    console.error("Failed to update record : ", error);
    res.status(500).send(error.message);
  }
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

const upadteInsurance = async(req, res) => {
  try{
    await sequelize
    .sync()
    .then(async() => {
      await Insurance.update(
        {
          amount: req.body.amount,
        },
        {
          where: { id: req.body.id },
        }
      )
        .then((data) => {
          if(!data)
          {
            res.send(new errorHandler("id do not exist " , 404))
          }
          else{
          console.log("Successfully updated record.");
          res.status(200).send("data updated");
          }
        })
        .catch((error) => {
          console.error("Failed to update record : ", error);
          res.status(500).send(error.message);
        });
    })
    .catch((error) => {
      console.error("Failed to update record : ", error);
      res.status(500).send(error.message);
    });
  }catch{
    console.error("Failed to update record : ", error);
    res.status(500).send(error.message);
  }
};

////-------------------Retrive by id------------------

const signInUser =async (req, res) => {
  try{
    await sequelize
    .sync()
    .then(async() => {
      await User.findOne({
        where: {
          Password: req.body.pass,
          Email: req.body.email,
        },
      })
        .then((data) => {
          if(!data)
          {
            console.error("Failed to sign in : ", error);
            res.send(new errorHandler("login failed " , 404))
          }
          else{
            console.log(rs);
          const token = jwtToken.sign({ Role : "user"}, 'dfghjk')
          res.status(200).send({ 
            roles: token.Role,
            accessToken: token
          });
          }         
        })
        .catch((error) => {
          console.error("Failed to sign in : ", error);
          res.status(500).send(error.message);
        });
    })
    .catch((error) => {
      console.error("Failed to sign in : ", error);
          res.status(500).send(error.message);
    });
  }catch{
    console.error("Failed to sign in : ", error);
          res.status(500).send(error.message);
  }
};

const signInAdmin =async (req, res) => {
  try{
    await sequelize
    .sync()
    .then(async() => {
      await Admin.findOne({
        where: {
          Password: req.body.pass,
          Email: req.body.email,
        },
      })
        .then((data) => {
          if(!data)
          {
            console.error("Failed to sign in : ", error);
            res.send(new errorHandler("login failed " , 404))
          }
          else{
            console.log(rs);
          const token = jwtToken.sign({ Role : "admin"}, 'rtyui')
          res.status(200).send({ 
            roles: token.Role,
            accessToken: token
          });
          }         
        })
        .catch((error) => {
          console.error("Failed to sign in : ", error);
          res.status(500).send(error.message);
        });
    })
    .catch((error) => {
      console.error("Failed to sign in : ", error);
          res.status(500).send(error.message);
    });
  }catch{
    console.error("Failed to sign in : ", error);
          res.status(500).send(error.message);
  }
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



const retriveteSparePartsByID = async (req, res) => {
  try {
    await sequelize
    .sync()
    .then(async() => {
      await User.findOne({
        where: {
          id: req.body.id,
        },
      })
        .then((data) => {
          if(!data)
          {
            res.send(new errorHandler("id do not exist " , 404))
          }
          else{
          console.log("Successfully data get record.");
          res.status(200).send("data get");
          }
          
        })
        .catch((error) => {
          console.error("Failed to sign in : ", error);
          res.status(500).send(error.message);
        });
    })
    .catch((error) => {
      console.error("Failed to sign in : ", error);
          res.status(500).send(error.message);
    });
  }catch{
    console.error("Failed to sign in : ", error);
          res.status(500).send(error.message);
  }
};


//----------------------pagination
const paginatebikes =async (req, res) => {
  const { page } = req.query;
  const { limit, offset } = getPagination(page);
 try{
  await sequelize
   .sync()
   .then(async() => {
     await Bikes.findAll( { limit , offset})
       .then((data) => {      
        if(!data)
        {
          res.send(new errorHandler("page do not exist " , 404))
        }
        else{
        console.log("pages.");
        res.status(200).send(data);
        }
       })
       .catch((error) => {
        console.error("page do not exist : ", error);
        res.status(500).send(error.message);
       });
   })
   .catch((error) => {
    console.error("page do not exist : ", error);
    res.status(500).send(error.message);
   });
  }catch{
    console.error("page do not exist : ", error);
          res.status(500).send(error.message);
  }
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

const paginateinsurance = async (req, res) => {
  const { page } = req.query;
  const { limit, offset } = getPagination(page);
  try{
 await sequelize
   .sync()
   .then(async() => {
     await Insurance.findAll( { limit , offset})
       .then((data) => {      
        if(!data)
          {
            res.send(new errorHandler("page do not exist " , 404))
          }
          else{
          console.log("pages.");
          res.status(200).send(data);
          }
       })
       .catch((error) => {
        console.error("page do not exist : ", error);
          res.status(500).send(error.message);
       });
   })
   .catch((error) => {
    console.error("page do not exist : ", error);
    res.status(500).send(error.message);
   });
  }catch{
    console.error("page do not exist : ", error);
          res.status(500).send(error.message);
  }
};


const getPagination = (page) => {
  const limit = 5;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};



//-----------------------Filteration---------------
const filterCars = async (req, res) => {
  try{
    await sequelize
    .sync()
    .then(async() => {
        await Cars.findAll({
        where: {
          price: {
            [Op.between]: [req.body.fromPrice, req.body.toPrice]
          }
        }
      })
        .then((data) => {
          if(!data)
          {
            res.send(new errorHandler("canot filter data " , 404))
          }
          else{
          console.log("data filtered.");
          res.status(200).send(data);
          }
        })
        .catch((error) => {
          console.error("Failed to filter record : ", error);
          res.status(500).send(error.message);
        });
    })
    .catch((error) => {
      console.error("Failed to filter record : ", error);
    res.status(500).send(error.message);
    });
  }catch{
    console.error("Failed to filter record : ", error);
    res.status(500).send(error.message);
  }
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

const filterSpareParts = async (req, res) => {
  try{
  await sequelize
    .sync()
    .then(async() => {
        await spareParts.findAll({
        where: {
          picePkr: {
            [Op.between]: [req.body.fromPrice, req.body.toPrice]
          }
        }
      })
        .then((data) => {
          if(!data)
          {
            res.send(new errorHandler("canot filter data " , 404))
          }
          else{
          console.log("data filtered.");
          res.status(200).send(data);
          }
        })
        .catch((error) => {
          console.error("Failed to update record : ", error);
          res.status(500).send(error.message);
        });
    })
    .catch((error) => {
      console.error("Failed to update record : ", error);
      res.status(500).send(error.message);
    });
  }catch{
    console.error("Failed to update record : ", error);
    res.status(500).send(error.message);
  }
};


const filterInsurance = async (req, res) => {
  try{
    await sequelize
    .sync()
    .then(async() => {
        await Insurance.findAll({
        where: {
          amount: {
            [Op.between]: [req.body.fromPrice, req.body.toPrice]
          }
        }
      })
        .then((data) => {
          if(!data)
          {
            res.send(new errorHandler("canot filter data " , 404))
          }
          else{
          console.log("data filtered.");
          res.status(200).send(data);
          }
        })
        .catch((error) => {
          console.error("Failed to filter record : ", error);
          res.status(500).send(error.message);
        });
    })
    .catch((error) => {
      console.error("Failed to filter record : ", error);
    res.status(500).send(error.message);
    });
  }catch{
    console.error("Failed to filter record : ", error);
    res.status(500).send(error.message);
  }
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
