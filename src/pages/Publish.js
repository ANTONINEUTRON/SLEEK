import NavBar from "./../components/NavBar";
import {useState} from "react";

const Publish = ()=>{
    const [errorResponse, setErrorResponse] = useState(null);
    const [title, setTitle] = useState(null);
    const [author, setAuthor] = useState(null);
    const [synopsis, setSynopsis] = useState(null);
    const [coverImage, setCoverImage] = useState(null);
    const [url, setUrl] = useState(null);
    const [price, setPrice] = useState(null);

    const handleSubmission = (event)=>{
        event.preventDefault();
        if(!title){
            setErrorResponse("Book Title cannot be empty!")
            return;
        }
        //package into a json file dat d user will download and save to directory containing the book
        let metadataObj = {
            title : title,
            author : author,
            synopsis: synopsis,
            cover_image: coverImage,
            url: url,
            price: price
        };
        //verify if they are in thesame repo
        //mint to blockchain - create ass
    };

    return (
        <div>
            <NavBar />
            <div className="container m-6 px-10 pb-5 rounded-md bg-gray-50 shadow-xl">
                <h2 className="flex flex-col p-2 items-center text-3xl text-indigo-800 pb-4">Book Details</h2>
                {errorResponse && (
                    <div className="flex flex-col container shadow-2xl text-red-500 text-2xl items-center">{errorResponse}</div>
                )}
                <form onSubmit={(event)=>handleSubmission(event)} className="flex flex-col">                    
                    <label htmlFor="title" className="block font-medium text-sm text-gray-700">Book Title</label>
                    <input type="text" name="title" value={title} onChange={(e)=>{ setTitle(values => e.target.value) }}
                        class="bg-white hover:bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mb-5 w-full p-2.5"
                        placeholder="Book Title" required/>

                    <label htmlFor="author" className="block font-medium text-sm text-gray-700">Author Name</label>
                    <input type="text" name="author" value={author} onChange={(e)=>{ setAuthor(values => e.target.value) }}
                        class="bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mb-5 w-full p-2.5"
                        placeholder="Author's Name" required/>

                    <label htmlFor="synopsis" className="block font-medium text-sm text-gray-700">Synopsis/Introduction<sup>(optional)</sup></label>
                    <textarea type="text" name="synopsis" value={synopsis} onChange={(e)=>{ setSynopsis(values => e.target.value) }} rows="6"
                        class="bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mb-5 w-full p-2.5"
                        placeholder="Introduction"/>

                    <label htmlFor="cover_image" className="block font-medium text-sm text-gray-700">Link to cover image <sup>(optional but recommended)</sup></label>
                    <input type="text" name="cover_image" value={coverImage} onChange={(e)=>{ setCoverImage(values => e.target.value) }}
                        class="bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mb-5 w-full p-2.5"
                        placeholder="Cover Image URL" />

                    <label htmlFor="url" className="block font-medium text-sm text-gray-700">Link to book <sup>(it should be a pdf file)</sup></label>
                    <input type="text" name="url" value={url} onChange={(e)=>{ setUrl(values => e.target.value) }}
                        class="bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mb-5 w-full p-2.5"
                        placeholder="Enter link to book" required/>

                    <label htmlFor="price" className="block font-medium text-sm text-gray-700">Price <sup>(optional)</sup></label>
                    <input name="price" value={price} onChange={(e)=>{ setPrice(values => e.target.value) }} type="number"
                        class="bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mb-5 w-full p-2.5"
                        placeholder="Price of book"/>
                    <button type="submit" className="btn bg-blue-600 hover:bg-blue-400 text-white p-3 rounded-lg pl-2 pr-2 m-auto w-56 hover:shadow-xl hover:border-spacing-2 border-black">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Publish;