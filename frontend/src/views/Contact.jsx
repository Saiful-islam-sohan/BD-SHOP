import {  useState } from "react";
import { useDispatch } from "react-redux";
import { createContact } from "../slice/contactDetailsSlice";

const Contact = () => {

  const dispatch= useDispatch()

  const [contact, setContact] = useState({})

  const getData = (e) => {
    // const { name, value } = e.target;

    setContact((prevContact) => ({
      ...prevContact, // Preserve previous state
      [e.target.name]: e.target.value,  // Update the current field
    }));

  
  };

const handleSubmit=(e) =>{
  e.preventDefault()
  console.log(contact)
  dispatch(createContact(contact))
  
}





return (
  <div>
    <h2>Contact Us</h2>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1422238863292!2d90.4242393!3d23.813541099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fb95f16c1%3A0xb333248370356dee!2sJamuna%20Future%20Park!5e0!3m2!1sen!2sbd!4v1734003590585!5m2!1sen!2sbd"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>

    <div className="flex items-center justify-center min-h-[100px] w-auto my-3">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold text-center text-gray-700">
          Contact Us
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>

          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={getData}
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={getData}
            />
          </div>


          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-600">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message..."
              rows="4"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={getData}
            ></textarea>
          </div>


          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-2 font-semibold text-white transition duration-200 bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>

  </div>
);
};

export default Contact;
