import Curso from "./class/Curso.js"
import Teacher from "./class/Teacher.js"
import Student from "./class/Student.js"


const element = document.getElementById("cursos")

//print a course in DOM 
//receives an object of Course
function mostrarcurso(curso) {
    const hijo = document.createElement("div")
    hijo.classList.add('card')
    hijo.innerHTML = `
    <div class="img-container s-ratio-16-9 s-radius-tl">
        <img src="${curso.getPoster()}" alt="${curso.getNombre()}"/>    
    </div>
        <div class="card_data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 class="t5 s-mb-0 s-center">${curso.getNombre()}</h3>                     
            <div class="s-center">
                <span class="small "> No. de clases:${curso.getClases()}</span>            
            </div>
        </div>
    </div>`
    element.appendChild(hijo)
}

function mostrarProfesores() {}
// //Llamadas a la función mostrar curso
// mostrarcurso(html)
// mostrarcurso(css)
// mostrarcurso(javascript)

const formulario = document.getElementById("formCursos")
formulario.addEventListener("submit", e => {
    e.preventDefault()
    const target = e.target
    const curso = new Curso(target.nombreCurso.value, target.posterCurso.value, target.clasesCurso.value)
    mostrarcurso(curso)
})


const formularioProfesor = document.getElementById("formProfesores")
formularioProfesor.addEventListener("submit", e => {
    e.preventDefault()
    const target = e.target
    const teacher = new Teacher(target.nombreProfesor.value, target.apellidosProfesor.value, target.correoProfesor.value, target.estadoProfesor.value, target.cursosProfesor.value, target.calificacionProfesor.value)
    console.log(teacher)
})

const formularioAlumno = document.getElementById("formAlumnos")
formularioAlumno.addEventListener("submit", e => {
    e.preventDefault()
    const target = e.target
    const student = new Student(target.nombreAlumno.value, target.apellidosAlumno.value, target.correoAlumno.value, target.estadoAlumno.value, target.cursosAlumno.value)
    console.log(student)
})



//curso.SetInscritos(...Curso.getInscritos,alumno)