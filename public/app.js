$(document).ready(function() {
  fetchApp.init();
});

templates = [];

templates.userRequest = [
  // this will be the HTML for the request listings
  // that the USER sees
  // will have a DRIVER name if accepted
].join("");

templates.acceptedRequest = [
  // very similar to above except
  // this will be the HTML for the request listings
  // that the DRIVER has accepted but not completed
  // will have USER name on it
].join("");

templates.openRequest = [
  // very similar to above except
  // this will be the HTML for the  open request listings
  // that the DRIVER sees
  // will have USER name on it
].join("");


var fetchApp = {
  urls: {
    // usersUrl: 'http://tiny-tiny.herokuapp.com/collections/users',
    // driversUrl: 'http://tiny-tiny.herokuapp.com/collections/drivers',
    // requestsUrl: 'http://tiny-tiny.herokuapp.com/collections/requests',
    // URL ROUTES JAMES CREATES WILL GO HERE
    userUrl:          '/user',
    driversUrl:       '/login-Driver',
    usersUrl:         '/login-User',
    userRequestsUrl:  '/user-requests',
    requestUrl:       '/request',
  },

  // MAYBE SOME EMPTY OBJECTS TO STORE 'GET' DATA LOCALLY
    // ONE FOR USER DATA
    // ONE FOR OPEN REQUESTS TO BE FILTERED

  init: function(){
    fetchApp.initStyling();
    fetchApp.initEvents();
  },

  initStyling: function(){
    // ANY PAGE-LOAD STYLING WILL GO HERE
    // (probably won't have any)
  },

  initEvents: function(){
    // ALL OUR CLICK EVENTS WILL LIVE HERE

    // ON LOGIN FORM SUBMISSION
    $('#letsGo').on('click', function () {
      $('#loginPage').removeClass('active');
      if ($('select[name=userType]').val() === 'user') {
        $('#userPage').addClass('active');
        var username = $('input[name="username"]').val();
        fetchApp.postUserId(username);
        // add only this user's open requests to DOM
      }
      else {
        $('#driverPage').addClass('active');
        // fetchApp.getDriverId(username)
        // IF user not in database addUser(username)
        // add this driver's accepted requests
        // followed by all open requests to DOM
      }
    });

    $('.logoutButton').on('click', function () {
      $('#loginPage').addClass('active');
      $('#loginPage').siblings().removeClass('active');
    });

    // ON NEW REQUEST FORM SUBMISSION (USER SIDE)
      // get value of request text input
      // add new request to database and DOM

    // ON DELETE/COMPLETE REQUEST BUTTON CLICK (USER SIDE)
      // delete request from database and DOM

    // ON ACCEPT REQUEST BUTTON CLICK (DRIVER SIDE)
      // change request status to accepted
  },

  // ALL THE OTHER FUNCTIONS WE WRITE WILL GO HERE
  postDriverId: function(driverName) {
    $.ajax({
      url: fetchApp.driversUrl,
      method: 'POST',
      data: userName,
      success: function(driver) {
        console.log("gave drivername name to james");
      },
      error: function(err) {
        console.log("ERROR", err);
      },
    });
  },

  addNewDriver: function(driverName) {
      // ajax POST call to driversUrl
      // will add a new driver object to database
  },

  getDriverRequests: function(driverId) {
      // will filter requests matching the driverId
      // these will be requests the driver has committed to
      // fulfill, but has not yet completed
  },

  postUserId: function(userName) {
    $.ajax({
      url: fetchApp.usersUrl,
      method: 'POST',
      data: userName,
      success: function(user) {
        console.log("gave username to james");
      },
      error: function(err) {
        console.log("ERROR", err);
      },
    });
  },

  addNewUser: function(userName) {
    $.ajax({
      url: fetchApp.userUrl,
      method: 'POST',
      data: userName,
      success: function(response) {
        console.log("added" + userName);
      },
    });
  },

  getUserRequests: function(userId) {
      // will filter requests matching the userId
      // these will be requests the user has posted,
      // but have not yet had delivered
  },

  getRequests: function() {
    // ajax GET call to requestsUrl
    // will return ALL existing requests to be filtered by other functions
  },

  addRequest: function(requestText) {
    $.ajax({
      url: fetchApp.requestUrl,
      method: 'POST',
      data: requestText,
      success: function(response) {
        console.log("gave new request to james");
      },
    });
    // now needs to add to DOM
  },

  acceptRequest: function(requestId, driverId) {
    // ajax PUT call to requestsUrl
    // will change the status of a request from open to committed
    // and add the driverId to the request
  },

  deleteRequest: function(requestId) {
    // ajax DELETE call to requestsUrl
    // will delete a request from the requests JSON object
    // when a user deletes or confirms delivery
  },

  addRequestsToDom: function(requests) {
    // will add the given requests to the DOM
  },

  buildUserRequestHtml: function(request) {
    // will use userRequest template and underscore
  },

  buildAcceptedRequestHtml: function(request) {
    // will use acceptedRequest template and underscore
  },

  buildOpenRequestHtml: function(request) {
    // will use openRequest template and underscore
  },

};
