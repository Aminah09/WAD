$(document).ready(function () {
    getData();
  });
  
  function getData() {
    let localStorageData = localStorage.getItem("student");
    let studentObj = JSON.parse(localStorageData);
    console.log(studentObj);
 
    $("#fname").text(studentObj.fname);
    $("#lname").text(studentObj.lname);
    $("#email").text(studentObj.email);
    $("#rdbGender").text(studentObj.rdbGender);
    $("#phone").text(studentObj.phone);
    $("#message").text(studentObj.message);

    
  }