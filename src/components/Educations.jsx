import { useState } from 'react';
import ActionPanel from '../components/ActionPanel';

const EDUCATIONS = [{
    id: crypto.randomUUID(),
    title: "Master of Computer and Information Science",
    school: "Auckland University of Technology",
    start: "July 2006",
    end: "February 2009"
}, {
    id: crypto.randomUUID(),
    title: "Bachelor of Computer Science and Mathematics",
    school: "Bina Nusantara University",
    start: "February 1999",
    end: "October 2003"
}];

export default function Educations() {

    const [initialData, setInitialData] = useState(EDUCATIONS);
    const [educations, setEducations] = useState([...initialData]);
    const [mode, setMode] = useState("view");

    // HANDLERS

    function handleEdit() {
        setMode("edit");
    }

    function handleAdd() {
        
        const newEducationEntry = {
            id: crypto.randomUUID(),
            title: "",
            school: "",
            start: "",
            end: ""
        };

        setEducations((prev) => [...prev, newEducationEntry]);
        setMode("add");
    }

    function handleCancel() {
        setEducations(initialData);
        setMode("view");
    }

    function handleSave() {
        setInitialData(educations);
        setMode("view");
    }

    function handleInputChange(e, id) {

        const { name, value } = e.target;

        setEducations((prev) =>
            prev.map((education) =>
                education.id === id 
                    ? { ...education, [name]: value }
                    : education
            )
        );
    }

    // SUB COMPONENT

    const educationList = educations.map((education) => {
        
        const educationTitleDisplay = mode !== "view" ? <input className="block px-2 py-1 mb-3 w-full max-w-sm rounded border-1" type="text" value={education.title} name="title" placeholder="Title" onChange={(e) => handleInputChange(e, education.id)} /> : <h3 className="font-bold text-lg">{education.title}</h3>;
        const educationSchoolDisplay = mode !== "view" ? <input className="block px-2 py-1 mb-3 w-full max-w-sm rounded border-1" type="text" value={education.school} name="school" placeholder="School" onChange={(e) => handleInputChange(e, education.id)} /> : <h4 className="italic">{education.school}</h4>;
        const educationStartDisplay = mode !== "view" ? <input className="inline-block px-2 py-1 w-1/3 max-width-sm rounded border-1" type="text" value={education.start} name="start" placeholder="Start" onChange={(e) => handleInputChange(e, education.id)} /> : education.start;
        const educationEndDisplay = mode !== "view" ? <input className="inline-block px-2 py-1 w-1/3 max-width-sm rounded border-1" type="text" value={education.end} name="end" placeholder="End" onChange={(e) => handleInputChange(e, education.id)} /> : education.end;
        
        return(
            <li key={education.id} className="mb-5">
                {educationTitleDisplay}
                {educationSchoolDisplay}
                <p>{educationStartDisplay} - {educationEndDisplay}</p>
            </li>
        )
    });

    // RENDER

    return(
        <>
            <ul>
                {educationList}
            </ul>
            <ActionPanel mode={mode} editCallback={handleEdit} addCallback={handleAdd} saveCallback={handleSave} cancelCallback={handleCancel} />
        </>
    )
}