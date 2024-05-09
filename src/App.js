import React, {createContext, useEffect, useState} from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Students from "./components/Students";
import Group from "./components/group";
import Subject from "./components/subject";
import Teacher from "./components/teacher";
import CreateTeacherpage from "./components/createTeacherpage";
import CreateStudentpage from './components/createStudent';
import TeacherProfile from "./components/teacherProfile";
import EditTeacherPage from "./components/editTeacherPage";
import StudentProfile from "./components/studentProfile";
import EditStudentPage from "./components/editStudentPage";


export const Mycontext = createContext();


function App(props) {


    const [activecomponent, setActivecomponent] = useState(1)
    const [teacherFirstName, setTeacherFirstName] = useState('') ;
    const [teacherMiddleName, setTeacherMiddleName] = useState('');
    const [teacherLastName, setTeacherLastName] = useState('');
    const [teacherPhone, setTeacherPhone] = useState('');
    const [teacherSciences, setTeacherSciences] = useState('');
    const [teacherGroups, setTeacherGroups] = useState('');
    const [teacherStatus, setTeacherStatus] = useState('');
    const [teacherBeginingDate, setTeacherBeginingDate] = useState('');
    const [teacherFinishingDate, setTeacherFinishingDate] = useState('');

    // const [studentInfo , setStudentInfo] = useState([])

    const [arryTeacher , setArryTeacher] = useState([])
    const [arryStudent , setArryStudent] = useState([])
    const [teacherProfileIndex , setTeacherProfileIndex] = useState(1)
    const [studentProfileIndex , setStudentProfileIndex] = useState(1)

    function createTeacher() {
    }


    useEffect(() => {

    } ,[]);



    return (


        <Mycontext.Provider value={{
            activecomponent,
            setActivecomponent,
            setTeacherFinishingDate,
            teacherFinishingDate,
            setTeacherBeginingDate,
            teacherBeginingDate,
            setTeacherFirstName,
            teacherFirstName,
            setTeacherMiddleName,
            teacherMiddleName,
            teacherLastName,
            setTeacherLastName,
            setTeacherPhone,
            teacherPhone,
            setTeacherSciences,
            teacherSciences,
            setTeacherStatus,
            teacherStatus,
            setTeacherGroups,
            teacherGroups,
            createTeacher,
            arryTeacher,
            setArryTeacher,
            teacherProfileIndex,
            setTeacherProfileIndex,
            arryStudent,
            setArryStudent,
            studentProfileIndex,
            setStudentProfileIndex
        }}>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/students"} element={<Students/>}/>
                <Route path={"/group"} element={<Group/>}/>
                <Route path={"/subject"} element={<Subject/>}/>
                <Route path={"/teacher"} element={<Teacher/>}/>
                <Route path={"/create-teacher-page"} element={<CreateTeacherpage/>}/>
                <Route path={"/create-student-page"} element={<CreateStudentpage/>}/>
                <Route path={"/teacher-profile"} element={<TeacherProfile/>}/>
                <Route path={"/student-profile"} element={<StudentProfile/>}/>
                <Route path={"/edit-teacher-page"} element={<EditTeacherPage/>}/>
                <Route path={"/edit-student-page"} element={<EditStudentPage/>}/>

            </Routes>
        </Mycontext.Provider>

    );
}

export default App;