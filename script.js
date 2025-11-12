let google = document.getElementsByClassName("navLetter");
google[0].style.color = "rgb(66,133,244)";
google[1].style.color = "rgb(234,67,53)";
google[2].style.color = "rgb(251,188,5)";
google[3].style.color = "rgb(66,133,244)";
google[4].style.color = "rgb(83,181,109)";
google[5].style.color = "rgb(234,67,53)";

let burgerMenu = document.getElementById("burgerMenu1");
burgerMenu.style.visibility = "hidden";
document.getElementById("pageOverlay").style.visibility = "hidden";
document.getElementById("burgerBox").onclick = function(){
	burgerMenu.style.visibility = "visible";
	document.getElementById("pageOverlay").style.visibility = "visible";

}

document.getElementById("pageOverlay").onclick = function(){
	burgerMenu.style.visibility = "hidden";
	document.getElementById("pageOverlay").style.visibility = "hidden";
}
var contentStudents = document.getElementById("studentsDropdown");
var checkboxStudents = document.getElementById("checkboxStudents");
checkboxStudents.addEventListener('change', function(){
    if (checkboxStudents.checked) {
      contentStudents.style.display = 'block';
    } else {
      contentStudents.style.display = 'none';
    }
  });
var contentJobs = document.getElementById("jobsDropdown");
var checkboxJobs = document.getElementById("checkboxJobs");
checkboxJobs.addEventListener('change', function(){
    if (checkboxJobs.checked) {
      contentJobs.style.display = 'block';
    } else {
      contentJobs.style.display = 'none';
    }
  });
var contentWork = document.getElementById("workDropdown");
var checkboxWork = document.getElementById("checkboxWork");
document.getElementById("checkboxWork").addEventListener('change', function(){
    if (checkboxWork.checked) {
      contentWork.style.display = 'block';
    } else {
      contentWork.style.display = 'none';
    }
  });
var contentHire = document.getElementById("hireDropdown");
var checkboxhire = document.getElementById("checkboxHire");
document.getElementById("checkboxHire").addEventListener('change', function(){
    if (checkboxHire.checked) {
      contentHire.style.display = 'block';
    } else {
      contentHire.style.display = 'none';
    }
  });
var contentCareer = document.getElementById("careerDropdown");
var checkboxCareer = document.getElementById("checkboxCareer");
document.getElementById("checkboxCareer").addEventListener('change', function(){
    if (checkboxCareer.checked) {
      contentCareer.style.display = 'block';
    } else {
      contentCareer.style.display = 'none';
    }
  });

