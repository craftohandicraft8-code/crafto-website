function Team() {
  const team = [
    {
      name: "Rakshit Bhardwaj",
      role: "Founder & CEO",
      image: "/team/rakshit.jpg",
    },
    {
      name: "Purojit Sarkar",
      role: "Product Designer & HR",
      image: "/team/purojit.jpg",
    },
    {
      name: "Abhishek Tiwari",
      role: "Chief Operating Officer (COO)",
      image: "/team/abhishek.jpg",
    },
    {
      name: "Satyam",
      role: "Chief Marketing Officer (CMO)",
      image: "/team/satyam.jpg",
    },
    {
      name: "Ashutosh",
      role: "Chief Financial Officer (CFO)",
      image: "/team/ashutosh.jpg",
    },
  ];

  return (
    <section className="bg-zinc-950 py-24 px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white">
          Meet Our Team
        </h2>

        <p className="text-center text-gray-400 mt-5 mb-16">
          The passionate people building Crafto and promoting sustainable innovation.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">

          {team.map((member, index) => (

            <div
              key={index}
              className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-green-500/20 hover:-translate-y-2 transition-all duration-300"
            >

              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-5 text-center">

                <h3 className="text-xl font-bold text-white">
                  {member.name}
                </h3>

                <p className="text-green-400 mt-2 text-sm font-semibold">
                  {member.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Team;