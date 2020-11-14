let e1 = document.getElementById("proj");
let e2 = document.getElementById("prodes");
e1.setAttribute("project-name", "covidline");
e2.setAttribute(
  "project-description",
  "covidline is a online learming platform for school kids"
);
e1.innerHTML = e1.getAttribute("project-name");
e2.innerHTML = e2.getAttribute("project-description");
