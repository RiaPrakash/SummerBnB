var mysqlConn = require("../database/database");

var Listing = (listing) => {
    this.listingID = listing.listingID;
    this.title = listing.title;
    this.location = listing.location;
    this.description = listing.description;
    this.numberOfPeople = listing.numberOfPeople;
    this.pricePerNight = listing.pricePerNight;
    this.userId = listing.userId;
    this.img = listing.img;
};

// Get All
Listing.findAllListings = (result) => {
    mysqlConn.query("Select * from listing", (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};


// Get by title
Listing.findListingBytitle = (listingtitle, result) => {
    mysqlConn.query("select * from listing where title = ?", listingtitle, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

// Get by listingId
Listing.findListingBylistingId = (listingID, result) => {
    mysqlConn.query("select * from listing where listingID = ?", listingID, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

// Get by userId
Listing.findListingByuserId = (userId, result) => {
    mysqlConn.query("select * from listing where userId = ?", userId, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

// Add
Listing.addListing = (newListing, result) => {
    mysqlConn.query("INSERT INTO listing set ?", newListing, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

// Delete
Listing.deleteListing = (listingId, result) => {
    mysqlConn.query("DELETE FROM listing where listingID = ?", listingId, (err, res) => {
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
Listing.updateListing = (updatedListing, result) => {
    // create query to update listing
    let query = "UPDATE listing SET "; // update part of MySQL query
    let keys = Object.keys(updatedListing); // get keys / parameters of user object
    let listingArray = []; // create empty array which will be our input parameters / columns for the MySQL query
    keys.forEach(key => { // loop through our array of user object keys
        if (key != "listingID" && key != "userId") { // do not update the userId
            query = query + key + " = ?, " // add insert query parameter for each key / column
            listingArray.push(updatedListing[key]); // push the value (associated with the key  parameter in the line above) that we want to insert into our MySQL table 
        }
    });
    query = query.substring(0, query.length-2); // remove the (, ) section at the end of our current query string so that the query syntax is correct
    query = query + " WHERE listingID = ?"; // add the part of the query to update by userId
    listingArray.push(updatedListing.listingID); // this is the userId associated with the row we want to update

    mysqlConn.query(query, listingArray, (err, res) => { // perform our query. The userArray contains all the values we want to insert and the id specifying the row we want to update
        if (err) {
          console.log("error: ", err);
          result(null, err);
        } else {
          result(null, res);
        }
      }
    );
};

module.exports = Listing;