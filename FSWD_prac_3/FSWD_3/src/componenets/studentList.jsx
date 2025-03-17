import StudentItem from "./StudentItem";
const studentObject=[{
    id:1,
    name:"Alice",
    registerNumber:2463218
},
{
    id:2,
    name:"James",
    registerNumber:2463205
}]

function StudentList() {
  return (
    <div>
        {studentObject.map((student)=>{
            return <StudentItem key={student.id} student={student} />
})}
    </div>
  )
}

export default StudentList
