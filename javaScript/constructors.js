/** 
 * Constructor in javaScript are used to  dynamically create
 * object
 * 
 * A constructor should start with a capital letter
 * A constructor does not have a return value
 * It return a new object .
*/

function Student(studentName, course, regNo)
{
    this.studentName = studentName;
    this.course = course;
    this.regNo = regNo;

    this.read = () =>
    {
        console.log("The student is reading..>>>");
    }
} 


let csStudent = new Student("stephen Muiru", 
"Computer Science", "C026-01-0931");



console.log(csStudent.read());

console.log("{");
for(let key in csStudent)
{
     console.log(`"${key}" : "${csStudent[key]}"`);
}

console.log("}");