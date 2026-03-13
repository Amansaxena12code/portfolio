import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-indigo-950 text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-4">Let's Connect 🤝</h2>

      <p className="text-gray-400 mb-10">
        If you would like to collaborate or discuss a project, feel free to
        reach out using the links below.
      </p>

      {/* Resume Buttons */}
      <div className="flex justify-center gap-6 flex-wrap mb-10">

        <a
          href="/Aman_Resume.pdf"
          target="_blank"
          className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition"
        >
          View Resume
        </a>

        <a
          href="/Aman_Resume.pdf"
          download
          className="px-6 py-3 rounded-lg border border-blue-400 hover:bg-blue-400 hover:text-black transition"
        >
          Download Resume
        </a>

      </div>

      {/* Contact Links */}
      <div className="flex justify-center gap-6 flex-wrap">

        <a
          href="https://github.com/Amansaxena12code"
          target="_blank"
          className="px-5 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
        >
          💻 GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/aman813063"
          target="_blank"
          className="px-5 py-3 bg-blue-700 rounded-lg hover:bg-blue-800 transition"
        >
          🔗 LinkedIn
        </a>

        <a
          href="mailto:aman813063@gmail.com"
          className="px-5 py-3 bg-red-600 rounded-lg hover:bg-red-700 transition"
        >
          📧 Email
        </a>

        <a
          href="tel:+918130637047"
          className="px-5 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition"
        >
          📱 Call
        </a>

      </div>

      {/* Footer Text */}
      <div className="mt-12 text-gray-500 text-sm">
        <p>📍 India | Computer Science Student</p>
        <p className="mt-2">Thanks for visiting my portfolio</p>
      </div>
    </section>
  );
}

export default Contact;