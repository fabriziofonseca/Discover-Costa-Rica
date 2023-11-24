import React from 'react';

const ContactPage = () => {
    return (
        <div className="container mx-auto h-[100vh] p-4 flex flex-wrap justify-between items-start bg-contact">
            <div className="w-full lg:w-1/2 p-4 mt-10">
                <h2 className="text-2xl font-bold mb-4">Send Us Your Suggestions</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                        <input type="text" id="name" name="name" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm" />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input type="email" id="email" name="email" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm" />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
                        <textarea id="message" name="message" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"></textarea>
                    </div>

                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">Submit</button>
                </form>
            </div>
            <div className="w-full lg:w-1/2 p-4 mt-10">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="mb-2">Your Name</p>
                <p className="mb-2">Email: your-email@example.com</p>
                <p className="mb-4">Phone: +123 456 7890</p>
                <div className="flex flex-col space-y-2">
                    <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">GitHub</a>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
