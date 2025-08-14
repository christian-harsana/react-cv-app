import { useState } from 'react';

const PROFILE = {name: "Christian Harsana", email: "christian.harsana@gmail.com", phone: "(+64) 021-167-8386"};

export default function Profile() {

    const [initialData, setInitialData] = useState(PROFILE);
    const [profile, setProfile] = useState({...initialData});
    const [edit, setEdit] = useState(false);


    // HANDLERS
    function handleCancel() {
        setProfile({...initialData});
        setEdit(false);
    }

    function handleEdit() {
        setEdit(true);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setProfile((prev) => ({
            ...prev, [name]: value
        }));
    }

    function handleSave() {
        setInitialData(profile);
        setEdit(false);
    }


    // SUB COMPONENTS
    const nameDisplay = edit ? <input className="px-2 py-1 w-full max-w-sm rounded border-1" type="text" value={profile.name} name="name" onChange={handleInputChange} /> : profile.name;
    const emailDisplay = edit ? <input className="px-2 py-1 w-full max-w-sm rounded border-1" type="email" value={profile.email} name="email" onChange={handleInputChange} /> : profile.email;
    const phoneDisplay = edit ? <input className="px-2 py-1 w-full max-w-sm rounded border-1" type="text" value={profile.phone} name="phone" onChange={handleInputChange} /> : profile.phone;

    const ActionPanel = () => {

        if (edit) {
            return(
                <>
                    <button className="px-4 py-1.5 bg-transparent hover:bg-green-700 font-semibold text-green-500 hover:text-gray-100 rounded-md border-1 border-green-500 hover:border-green-700 transition-colors cursor-pointer" type="button" onClick={handleCancel}>Cancel</button>
                    <button className="px-4 py-1.5 bg-green-500 hover:bg-green-700 font-semibold text-gray-100 rounded-md border-1 border-green-500 hover:border-green-700 transition-colors cursor-pointer" type="button" onClick={handleSave}>Save</button>
                </>
            )
        }

        return(
           <button className="px-4 py-1.5 bg-green-500 hover:bg-green-700 font-bold text-gray-100 rounded-md border-1 border-green-500 hover:border-green-700 transition-colors cursor-pointer" type="button" onClick={handleEdit}>Edit</button>
        )
    };

    // RENDER
    return(
        <>
            <div className="mb-3">
                <label className="block mb-0.5 font-bold">Name:</label>
                {nameDisplay}
            </div>
            <div className="mb-3">
                <label className="block mb-0.5 font-bold">Email:</label>
                {emailDisplay}
            </div>
            <div className="mb-5">
                <label className="block mb-0.5 font-bold">Phone:</label>
                {phoneDisplay}
            </div>
            <ActionPanel />
        </>
    )
}