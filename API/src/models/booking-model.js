var mysqlConn = require("../database/database");

var Booking = (booking) => {
    this.bookingID = booking.bookingID;
    this.listingID = booking.listingID;
    this.userId = booking.userId;
    this.hostId = booking.hostId;
    this.status = booking.status;
    this.dateStart = booking.dateStart;
    this.dateEnd = booking.dateEnd;
};

module.exports = Booking;

// Get All
Booking.findAllBookings = (result) => {
    mysqlConn.query("Select * from booking", (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

// ? Is this requirement
// Get by bookingId
Booking.findBookingBybookingId = (bookingId, result) => {
    mysqlConn.query("Select * from booking where Id = ?", bookingId, (err, res) => {
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
Booking.findBookingBylistingId = (listingId, result) => {
    mysqlConn.query("Select * from booking where listingId = ?", listingId, (err, res) => {
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
Booking.findBookingByuserId = (name, userId, result) => {
    mysqlConn.query("Select * from booking where userId = ?", userId, (err, res) => {
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
Booking.addBooking = (newBooking, result) => {
    mysqlConn.query("INSERT INTO booking set ?", newBooking, (err, res) => {
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
Booking.deleteBooking = (bookingId, result) => {
    mysqlConn.query("DELETE FROM booking where Id = ?", bookingId, (err, res) => {
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
Booking.updateBooking = (updatedBooking, result) => {
    // create query to update booking
    let query = "UPDATE booking SET "; // update part of MySQL query
    let keys = Object.keys(updatedBooking); // get keys / parameters of user object
    let bookingArray = []; // create empty array which will be our input parameters / columns for the MySQL query
    keys.forEach(key => { // loop through our array of user object keys
        if (key == "status") { // do not update the userId
            query = query + key + " = ?, " // add insert query parameter for each key / column
            bookingArray.push(updatedBooking[key]); // push the value (associated with the key  parameter in the line above) that we want to insert into our MySQL table 
        }
    });
    query = query.substring(0, query.length-2); // remove the (, ) section at the end of our current query string so that the query syntax is correct
    query = query + " WHERE Id = ?"; // add the part of the query to update by userId
    bookingArray.push(updatedBooking.Id); // this is the userId associated with the row we want to update

    mysqlConn.query(query, bookingArray, (err, res) => { // perform our query. The userArray contains all the values we want to insert and the id specifying the row we want to update
        if (err) {
          console.log("error: ", err);
          result(null, err);
        } else {
          result(null, res);
        }
      }
    );

};