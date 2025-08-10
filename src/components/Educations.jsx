import { useState } from 'react';

const EDUCATIONS = [{
    id: crypto.randomUUID(),
    title: "Bachelor of Computer Science and Mathematics",
    school: "Bina Nusantara University",
    start: "February 1999",
    end: "October 2003"
}, {
    id: crypto.randomUUID(),
    title: "Master of Computer and Information Science",
    school: "Auckland University of Technology",
    start: "July 2006",
    end: "February 2009"
}];

export default function Educations() {

    const [initialData, setInitialData] = useState(EDUCATIONS);
    const [educations, setEducations] = useState([...initialData]);
    const [mode, setMode] = useState("view");

    const createNewEducationEntry = () => ({
        id: crypto.randomUUID(),
        title: "",
        school: "",
        start: "",
        end: ""
    });


    // HANDLERS

    function handleEdit() {
        setMode("edit");
    }

    function handleAdd() {
        setMode("add");

        const newEducationEntry = createNewEducationEntry();

        setEducations((prev) => [...prev, newEducationEntry]);
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

    // SUB COMPONENTS

    const educationList = educations.map((education) => {
        
        const educationTitleDisplay = mode !== "view" ? <input value={education.title} name="title" onChange={(e) => handleInputChange(e, education.id)} /> : education.title;
        const educationSchoolDisplay = mode !== "view" ? <input value={education.school} name="school" onChange={(e) => handleInputChange(e, education.id)} /> : education.school;
        const educationStartDisplay = mode !== "view" ? <input value={education.start} name="start" onChange={(e) => handleInputChange(e, education.id)} /> : education.start;
        const educationEndDisplay = mode !== "view" ? <input value={education.end} name="end" onChange={(e) => handleInputChange(e, education.id)} /> : education.end;
        
        return(
            <li key={education.id}>
                <h3>{educationTitleDisplay}</h3>
                <h4>{educationSchoolDisplay}</h4>
                <p>{educationStartDisplay} - {educationEndDisplay}</p>
            </li>
        )
    });

    const ActionPanel = () => {

        if (mode !== "view") {

            const saveButtonText = mode == "edit" ? "Save" : "Submit";

            return(
                <>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                    <button type="button" onClick={handleSave}>{saveButtonText}</button>
                </>
            )
        }

        return(
            <>
                <button type="button" onClick={handleEdit}>Edit</button>
                <button type="button" onClick={handleAdd}>Add</button>
            </>
        )
    };

    // RENDER
    return(
        <>
            <ul>
                {educationList}
            </ul>
            <br/>
            <ActionPanel />
        </>
    )
}