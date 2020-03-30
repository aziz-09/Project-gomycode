


  function myShow1() {
    var x = document.getElementById("myDiv1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
function myShow2() {
  var x = document.getElementById("myDiv2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myShow3() {
  var x = document.getElementById("myDiv3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myShow4() {
  var x = document.getElementById("myDiv4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myShow5() {
  var x = document.getElementById("myDiv5");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function myShow6() {
  var x = document.getElementById("myDiv6");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function myShow7() {
  var x = document.getElementById("myDiv7");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myShow8() {
var x = document.getElementById("myDiv8");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}
}

function myShow9() {
var x = document.getElementById("myDiv9");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}
}

function myShow10() {
var x = document.getElementById("myDiv10");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}
}

function myShow11() {
var x = document.getElementById("myDiv11");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}
}


function myShow12() {
var x = document.getElementById("myDiv12");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}
}

















































var firebaseConfig = {
    apiKey: "AIzaSyAdbhEeVyuN9VzQ2xMfEF-yCMwh94pMUwE",
    authDomain: "fitness-time-593ba.firebaseapp.com",
    databaseURL: "https://fitness-time-593ba.firebaseio.com",
    projectId: "fitness-time-593ba",
    storageBucket: "fitness-time-593ba.appspot.com",
    messagingSenderId: "170091582778",
    appId: "1:170091582778:web:ffe99cee472d5f2288ec03"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.database().ref("contact")
    $('#submit').click(function(){
        var name = $('#name').val()
        var email = $("#email").val()
        var number = $("#number").val()
        var  gender = $("#gender").val()
        var  password = $("#password").val()
        var  repeatpassword = $("#repeat-password").val()
          var newMsg = db.push()

          newMsg.set({
              name:name,
              email:email,
              phone:number,
              gender:gender,
              password:password,
              repeatpassword: repeatpassword
          })
    })
    

    

   
