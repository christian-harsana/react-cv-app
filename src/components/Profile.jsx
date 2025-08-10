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
    const nameDisplay = edit ? <input value={profile.name} name="name" onChange={handleInputChange} /> : profile.name;
    const emailDisplay = edit ? <input value={profile.email} name="email" onChange={handleInputChange} /> : profile.email;
    const phoneDisplay = edit ? <input value={profile.phone} name="phone" onChange={handleInputChange} /> : profile.phone;

    const ActionPanel = () => {

        if (edit) {
            return(
                <>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                    <button type="button" onClick={handleSave}>Save</button>
                </>
            )
        }

        return(
           <button type="button" onClick={handleEdit}>Edit</button>
        )
    };

    // RENDER
    return(
        <>
            <div>
                <label>Name:</label><br/>
                {nameDisplay}
            </div>
            <br/>
            <div>
                <label>Email:</label><br/>
                {emailDisplay}
            </div>
            <br/>
            <div>
                <label>Phone:</label><br/>
                {phoneDisplay}
            </div>
            <br/>
            <ActionPanel />
        </>
    )
}