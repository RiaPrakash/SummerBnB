var mysqlConn = require("../database/database");

var User = (user) => {
    this.name = user.name;
    this.surname = user.surname;
    this.role = user.role;
    this.email = user.email;
    this.password = user.password;
};

// Get All
User.findAllUsers = (result) => {
    mysqlConn.query("Select * from user", (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

// Get All of Type User
User.findAllUsersOfTypeUser = (result) => {
    mysqlConn.query("Select * from user where role = ?", "user", (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

// Get All of Type Provider
User.findAllUsersOfTypeProvider = (result) => {
    mysqlConn.query("Select * from user where role = ?", "provider", (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

// Get by Name
User.findUserByName = (userName, result) => {
    mysqlConn.query("Select * from user where name = ?", userName, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

// Find by Email And Password
User.findUserByEmailAndPasswordAndRole = (userReq, result) => {
    mysqlConn.query("Select * from user where email = ? and password = ? and role = ?", [userReq.email, userReq.password, userReq.role], (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

// Get by Id
User.findUserById = (userId, result) => {
    mysqlConn.query("Select * from user where Id = ?", userId, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

// Get by Role
User.findUserByRole = (userRole, result) => {
    mysqlConn.query("Select * from user where role = ?", userRole, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

// Get by Email
User.findUserByEmail = (role, email, result) => {
    mysqlConn.query("Select * from user where email = ?", email, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

// Create 
User.createUser = (user, result) => {
    mysqlConn.query("INSERT user set ?", user, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        result(null, res);
        }
    });
};

// Delete
User.deleteUser = (userId, result) => {
    mysqlConn.query("DELETE FROM user where id = ?", userId, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

// Update
User.updateUser = (updatedUser, result) => {
    // create query to update User
    let query = "UPDATE user SET "; // update part of MySQL query
    let keys = Object.keys(updatedUser); // get keys / parameters of user object
    let userArray = []; // create empty array which will be our input parameters / columns for the MySQL query
    keys.forEach(key => { // loop through our array of user object keys
        if (key != "Id") { // do not update the userId
            query = query + key + " = ?, " // add insert query parameter for each key / column
            bookingArray.push(updatedUser[key]); // push the value (associated with the key  parameter in the line above) that we want to insert into our MySQL table 
        }
    });
    query = query.substring(0, query.length-2); // remove the (, ) section at the end of our current query string so that the query syntax is correct
    query = query + " WHERE Id = ?"; // add the part of the query to update by userId
    userArray.push(updatedUser.Id); // this is the userId associated with the row we want to update

    mysqlConn.query(query, userArray, (err, res) => { // perform our query. The userArray contains all the values we want to insert and the id specifying the row we want to update
        if (err) {
          console.log("error: ", err);
          result(null, err);
        } else {
          result(null, res);
        }
      }
    );

};

module.exports = User;