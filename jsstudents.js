import { db, hasFirebaseConfig } from "./jsfirebase.js";

import {
collection,
getDocs
}
from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

let students = [];

async function loadStudents(){

    if(!hasFirebaseConfig || !db){

        displayStudents([]);

        return;

    }

    const querySnapshot =
    await getDocs(collection(db,"students"));

    students = [];

    querySnapshot.forEach((doc)=>{

        students.push(doc.data());

    });

    displayStudents(students);

}

function displayStudents(data){

    const container =
    document.getElementById("studentsContainer");

    container.innerHTML="";

    if(data.length===0){

        document.getElementById("noData")
        .style.display="block";

        return;
    }

    document.getElementById("noData")
    .style.display="none";

    data.forEach(student=>{

        container.innerHTML += `

        <div class="student-card">

            <img
            src="${student.photo}"
            class="student-photo">

            <div class="student-info">

                <h3>${student.name}</h3>

                <p><strong>Admission No:</strong>
                ${student.admissionNo}</p>

                <p><strong>Class:</strong>
                ${student.class}</p>

            </div>

        </div>

        `;

    });

}

window.filterStudents = function(){

    let search =
    document.getElementById("searchInput")
    .value.toLowerCase();

    let selectedClass =
    document.getElementById("classFilter")
    .value;

    let filtered =
    students.filter(student=>{

        let matchSearch =

        student.name.toLowerCase()
        .includes(search)

        ||

        student.admissionNo.toLowerCase()
        .includes(search);

        let matchClass =

        selectedClass===""

        ||

        student.class===selectedClass;

        return matchSearch && matchClass;

    });

    displayStudents(filtered);

}

loadStudents();