export default function ActionPanel({mode, editCallback, addCallback, saveCallback, cancelCallback}) {

     if (mode !== "view") {

            const saveButtonText = mode == "edit" ? "Save" : "Submit";

            return(
                <>
                    <button className="px-4 py-1.5 mr-1 bg-transparent hover:bg-green-700 font-bold text-green-500 hover:text-gray-100 rounded-md border-1 border-green-500 hover:border-green-700 transition-colors cursor-pointer" type="button" onClick={cancelCallback}>Cancel</button>
                    <button className="px-4 py-1.5 mr-1 bg-green-500 hover:bg-green-700 font-bold text-gray-100 rounded-md border-1 border-green-500 hover:border-green-700 transition-colors cursor-pointer" type="button" onClick={saveCallback}>{saveButtonText}</button>
                </>
            )
        }

        return(
            <>
                <button className="px-4 py-1.5 mr-1 bg-green-500 hover:bg-green-700 font-bold text-gray-100 rounded-md border-1 border-green-500 hover:border-green-700 transition-colors cursor-pointer" type="button" onClick={editCallback}>Edit</button>
                <button className="px-4 py-1.5 bg-green-500 hover:bg-green-700 font-bold text-gray-100 rounded-md border-1 border-green-500 hover:border-green-700 transition-colors cursor-pointer" type="button" onClick={addCallback}>Add</button>
            </>
        )
}