description.addEventListener('click',summaryInfo);
skills.addEventListener('click',skillsInfo);
education.addEventListener('click',educationInfo);

document.getElementById("info__text").innerHTML = "Junior Software Developer. Basic knowledge of front-end development using HTML/CSS, and JavaScript technologies. Self-motivated, proactive, and responsible team player with strong communication and analytical skills. Curious and intensely interested in new technologies, capable of understanding new information at a rapid pace.";
document.getElementById("courses").style.visibility = "hidden";
document.getElementById("description__button").style.color = "#6495ED";
document.getElementById("skills__button").style.color = "silver";
document.getElementById("education__button").style.color = "silver";

function summaryInfo() {
  document.getElementById("info__text").innerHTML = "Junior Software Developer. Basic knowledge of front-end development using HTML/CSS, and JavaScript technologies. Self-motivated, proactive, and responsible team player with strong communication and analytical skills. Curious and intensely interested in new technologies, capable of understanding new information at a rapid pace.";
  document.getElementById("courses").style.visibility = "hidden";
  document.getElementById("description__button").style.color = "#6495ED";
  document.getElementById("skills__button").style.color = "silver";
  document.getElementById("education__button").style.color = "silver";
}

function skillsInfo() {
  document.getElementById("info__text").innerHTML = "PROGRAMMING LANGUAGES, FRAMEWORKS: <br/> · HTML (6/10)<br/> · CSS(SCSS) (6/10)<br/> · JavaScript (3/10)<br/><br/> FOREIGN LANGUAGES:<br/> · English (intermediate)<br/> · German (pre-intermediate)";
  document.getElementById("courses").style.visibility = "hidden";
  document.getElementById("description__button").style.color = "silver";
  document.getElementById("skills__button").style.color = "#6495ED";
  document.getElementById("education__button").style.color = "silver";
}

function educationInfo() {
  document.getElementById("info__text").innerHTML = "Bachelor Degree in Computer Science - currently study here: National Politechnic University (Odessa, Ukraine). </br> 2020 - currently study here";
  document.getElementById("courses").style.visibility = "visible";
  document.getElementById("description__button").style.color = "silver";
  document.getElementById("skills__button").style.color = "silver";
  document.getElementById("education__button").style.color = "#6495ED";
}
