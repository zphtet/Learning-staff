
const Contact = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold">Phone:</span>
          <span className="text-lg text-gray-700">+1 (123) 456-7890</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold">Email:</span>
          <span className="text-lg text-gray-700">example@example.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold">Address:</span>
          <span className="text-lg text-gray-700">1234 Main St, Anytown, USA</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
