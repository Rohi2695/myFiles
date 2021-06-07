function getResult()
{
     let candName = document.getElementById("name").value 
     let rollNum = document.getElementById("rollNo").value 
     let enrolNo = document.getElementById("enrlNo").value 
     let exmName = document.getElementById("exam").value 
     let centreNo= document.getElementById("centNo").value 
     let clgNo = document.getElementById("collNo").value 
     let mid = document.getElementById("medium").value 
     let cate = document.getElementById("cat").value 
     let grade = document.getElementById("grd").value 
     let result = document.getElementById("res").value 
     

      let aca = document.getElementById("acArch").value
      let algo = document.getElementById("alg").value 
      let osd = document.getElementById("osDesign").value 
      let oos = document.getElementById("ooSystem").value 
      let mc = document.getElementById("mCom").value 
      let aLab = document.getElementById("alab").value 
      let osdLab = document.getElementById("oslab").value 


    let total = parseInt(aca) + parseInt(algo) + parseInt(osd) + parseInt(oos)+ parseInt(mc)+ parseInt(aLab)+ parseInt(osdLab);

    let avgMarks = total / 7;

    let percent = (total / 600) * 100;
    
    if(percent>75){
      grade = "A+"
    }
    else if(percent>65){
      grade = "A"
    }
    else if(percent>55){
      grade = "B"
    }
    else if(percent>=40){
      grade = "C"
    }
    else if(percent<40){
      grade = "D"
    }

    let individualSub = ((aca >= 40) && (algo >= 40)) && ((osd >= 40) && (oos >= 40)) && ((mc >= 40) && (aLab >= 40)) && (osdLab >= 40) ;

    if(individualSub == false){
       result = "Failed"
      
    }
    else if(individualSub == true) {
      result = "Passed"
   
    } 
       
    document.getElementById('ttlMarks').value =  total;
    document.getElementById('avg').value = avgMarks;
    document.getElementById('perc').value = percent;
    document.getElementById('grd').value = grade;
    document.getElementById('res').value = result;

    console.log(candName)
    console.log(total)
    console.log(avgMarks)
    console.log(percent)
    console.log(grade)
    console.log(result)
    
}