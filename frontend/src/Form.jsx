export default function Form() {
    return (
        <div className="h-screen w-[75vw] mx-auto bg-white p-8 rounded-lg shadow-md my-10">
            <h2 className="text-4xl font-bold mb-4">Tell us your travel preferences</h2>
            <p className="mb-6 text-xl">Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences</p>
            
            <form >
                <div className="mb-4">
                    <label className="block text-gray-700">Destination of choice</label>
                    <input type="text" placeholder="Enter destination" className="w-full px-3 py-2 border rounded-lg"/>
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700">Travel dates</label>
                    <input type="date" className="w-full px-3 py-2 border rounded-lg"/>
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700">Number of travelers</label>
                    <input type="number" min="1" className="w-full px-3 py-2 border rounded-lg"/>
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700">Budget per person</label>
                    <input type="number" min="0" className="w-full px-3 py-2 border rounded-lg"/>
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700">Travel preferences</label>
                    <textarea placeholder="Describe your preferences" className="w-full px-3 py-2 border rounded-lg"></textarea>
                </div>
                
                <button type="submit" className="w-20 bg-black text-white py-2 rounded-lg">Submit</button>
            </form>
        </div>
    )
}