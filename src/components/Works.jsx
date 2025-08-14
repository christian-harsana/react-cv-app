import { useState } from 'react';
import ActionPanel from '../components/ActionPanel';

const WORKS = [{
    id: crypto.randomUUID(),
    position: "Front-end Developer",
    company: "Trackit Energy",
    start: "November 2019",
    end: "August 2025",
    responsibilities: "Developing and maintain the UI of the application. Providing support for front-end related matters."
}, {
    id: crypto.randomUUID(),
    position: "Web Developer & Support",
    company: "Efinity Digital",
    start: "November 2009",
    end: "November 2019",
    responsibilities: "Developing the front-end of web based project and providing 1st line support to clients."
}, {
    id: crypto.randomUUID(),
    position: "Software System Programmer",
    company: "PT Arta Boga Cemerlang",
    start: "August 2004",
    end: "June 2006",
    responsibilities: "Developing and maintain information system application that support various business units."
}];

export default function Works() {

    const [initialData, setInitialData] = useState(WORKS);
    const [works, setWorks] = useState([...initialData]);
    const [mode, setMode] = useState("view");

    // HANDLER
    function handleEdit() {
        setMode("edit");
    }


    function handleCancel() {
        setMode("view");
        setWorks(initialData);
    }

    function handleSave() {
        setInitialData(works);
        setMode("view");
    }

    function handleChange(e, id) {
       
        const {name, value} = e.target;

        setWorks((prev) =>
            prev.map((work) => 
                id === work.id
                    ? {...work, [name]: value }
                    : work
            )
        );

    }

    function handleAdd() {

        const newWork = {
            id: crypto.randomUUID(),
            position: "",
            company: "",
            start: "",
            end: "",
            responsibilities: ""
        };
        
        setWorks((prev) => [...prev, newWork]);
        setMode("add");
    }

    // SUB COMPONENTS
    const workList = works.map((work) => {

        const positionDisplay = mode != "view" ? <input className="block px-2 py-1 mb-3 w-full max-w-sm rounded border-1" type="text" name="position" placeholder='Position' value={work.position} onChange={(e) => handleChange(e, work.id)} /> : <h3 className="font-bold text-lg">{work.position}</h3>;
        const companyDisplay = mode != "view" ? <input className="block px-2 py-1 mb-3 w-full max-w-sm rounded border-1" type="text" name="company" placeholder='Company' value={work.company} onChange={(e) => handleChange(e, work.id)} /> : <h4 className="italic">{work.company}</h4>;
        const startDisplay = mode != "view" ? <input className="inline-block px-2 py-1 mb-3 w-1/3 max-w-sm rounded border-1" type="text" name="start" placeholder='Start' value={work.start} onChange={(e) => handleChange(e, work.id)} /> : work.start;
        const endDisplay = mode != "view" ? <input className="inline-block px-2 py-1 mb-3 w-1/3 max-w-sm rounded border-1" type="text" name="end" placeholder='End' value={work.end} onChange={(e) => handleChange(e, work.id)} /> : work.end;
        const responsibilitiesDisplay = mode != "view" ? <input className="block px-2 py-1 mb-3 w-full max-w-sm rounded border-1" type="text" name="responsibilities" placeholder='Responsibilities' value={work.responsibilities} onChange={(e) => handleChange(e, work.id)} /> : work.responsibilities;

        return(
            <li key={work.id} className="mb-5">
                {positionDisplay}
                {companyDisplay}
                <p className="mb-1.5">{startDisplay} - {endDisplay}</p>
                <h5 className="font-bold mb-0.5">Responsibilities:</h5>
                <p>{responsibilitiesDisplay}</p>
            </li>
        )
    });

    // RENDER
    return(
        <>
            <ul>
                {workList}
            </ul>

            <ActionPanel mode={mode} editCallback={handleEdit} addCallback={handleAdd} saveCallback={handleSave} cancelCallback={handleCancel} />
        </>
    )
}