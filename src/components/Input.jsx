import { useState } from "react";

export default function Input({text, onTextChange}) {

    const handleChange = (e) => {
        onTextChange(e.target.value);
    };

    return(
        <input type="text" value={text} onChange={ handleChange } />
    )

}