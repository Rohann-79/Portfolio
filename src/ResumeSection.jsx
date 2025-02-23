import React from "react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10" data-aos="flip-left">
          My Resume
        </h2>
        <div className="text-center" data-aos="slide-up">
          <a
            href="https://drive.google.com/file/d/1W8OSY8VZLXHAfQlx3tAMJDvXJgccrtt0/view"
            download
            className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;