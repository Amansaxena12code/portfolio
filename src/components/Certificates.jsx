function Certificates() {

  const certificates = [
    {
      title: "Generative AI Tools",
      org: "Infosys",
      year: "2025",
      link: "/Certificates/Master Generative AI & Generative AI tools.pdf"
    },
    {
      title: "ChatGPT Prompt Engineering",
      org: "Infosys",
      year: "2025",
      link: "/Certificates/ChatGPT-4 Prompt Engineering ChatGPT.pdf"
    },
    {
      title: "Privacy in Social Media",
      org: "NPTEL",
      year: "2025",
      link: "/Certificates/SocialMedia.pdf"
    },
    {
      title: "Responsive Web Design",
      org: "freeCodeCamp",
      year: "2023",
      link: "/Certificates/freecodecampcertificate.pdf"
    }
  ];

  return (
    <section
      id="certificates"
      className="py-24 bg-gradient-to-br from-black via-gray-900 to-indigo-950 text-white px-6"
    >

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Certificates
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition shadow-lg"
            >

              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {cert.title}
              </h3>

              <p className="text-gray-400">
                {cert.org} • {cert.year}
              </p>

              <a
                href={cert.link}
                target="_blank"
                className="inline-block mt-4 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
              >
                View Certificate
              </a>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Certificates;