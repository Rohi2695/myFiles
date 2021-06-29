function displayForm(){
    let costId = document.getElementById("cstId").value
    let firstName = document.getElementById("fname").value
    let lastName = document.getElementById("lname").value
    
    let date = document.getElementById("date").value
    let city = document.getElementById("city").value
    let email = document.getElementById("mail").value
    let phone = document.getElementById("phone").value
    let menu = document.getElementById("mlist").value
    let gender = document.getElementsByName("gender")

    for(let i=0; i<gender.length; i++) {
        if(gender[i].checked){
            var genderValue = gender[i].value;
            break;
        } 
    } 
    
    if(document.getElementById("active").checked) {
        var activeStatus = document.getElementById("active").value
    }else {
        var x = document.getElementById("active").value = "No"
        activeStatus = x
    }
    let formData = {
        costId:costId,
        firstName: firstName,
        lastName: lastName,
        date:date,
        city:city,
        email:email,
        phone:phone,
        gender:genderValue,
        menu:menu,
        active:activeStatus 

    }

    console.log(formData)

    




   
}