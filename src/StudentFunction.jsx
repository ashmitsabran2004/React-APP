function StudentFunction(props){
    return(
        <div>
            <h1>This is the Student Function Component</h1>
            <p>The name of the student is {props.name} and age is {props.age}</p>
            <p>The state where the student belong to is {props.state}</p>
            <p>Currently he is pursuing Btech {props.course}</p>
        </div>
    )
}

export default StudentFunction;

// function StudentFunction(age, course, ...rest){
//     return(
//         <div>
//             <p>The age of the student is {age} and the course is {course}.
//                 The name of the student is {rest.name} and state is {rest.state}.
//             </p>
//         </div>
//     )
// }
