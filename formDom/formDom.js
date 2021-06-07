function displayForm(){
    let firstName = document.getElementById("fname").value
    let lastName = document.getElementById("lname").value
    let screenName = document.getElementById("sname").value
    let date = document.getElementById("date").value
    let email = document.getElementById("mail").value
    let phone = document.getElementById("phone").value
    let country = document.getElementById("cont").value
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
        firstName: firstName,
        lastName: lastName,
        screenName:screenName,
        date:date,
        email:email,
        phone:phone,
        country:country,
        gender:genderValue,
        active:activeStatus 

    }

    console.log(formData)

    




   
}
       
