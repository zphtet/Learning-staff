import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <div className="space-y-2">
        <p className="text-lg text-gray-700">I am a software developer with a passion for learning.</p>
        <p className="text-lg text-gray-700">I enjoy building web applications using React and TypeScript.</p>
        <p className="text-lg text-gray-700">I have experience in frontend and backend development.</p>
        <p className="text-lg text-gray-700">In my free time, I love exploring new technologies.</p>
        <p className="text-lg text-gray-700">I am always eager to take on new challenges.</p>
      </div>
    </div>
  );
};

export default About;
