import {useState} from "react";

const Search = ()=>{
    const [searchTerm, setSearchTerm] = useState(null);
    const handleSubmission = (event)=>{

    };

    return (
        <form onSubmit={(event)=>handleSubmission(event)} className="flex flex-col">
            <input type="text" name="search" value={searchTerm} onChange={(e)=>{ setSearchTerm(values => e.target.value) }}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mb-5 w-full p-2.5"
                placeholder="Enter Asset ID to search" required/>
            {/* <button type="submit" className="btn bg-blue-600 text-white p-3 rounded-lg pl-2 pr-2 m-auto w-56 hover:shadow-xl hover:border-spacing-2 border-black">Submit</button> */}
        </form>
    );
};

export default Search;