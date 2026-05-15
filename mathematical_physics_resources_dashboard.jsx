export default function MathematicalPhysicsResources() {
  const resources = [
    {
      topic: "Linear Algebra and Vector Space",
      items: [
        {
          type: "Video",
          title: "Lecture Video",
          link: "https://www.youtube.com/live/HFHGRmoBzb4?si=c9HMM9YZpyTHM301",
        },
        {
          type: "Notes",
          title: "Lecture Notes",
          link: "https://courses.smp.uq.edu.au/MATH2301/linalglecturenotes.pdf",
        },
      ],
    },
    {
      topic: "Ordinary Differential Equations and Partial Differential Equations",
      items: [
        {
          type: "Video",
          title: "ODE & PDE Lecture 1",
          link: "https://www.youtube.com/live/uH1xZ_-bTQE?si=292KTwUO1ey_g4Ct",
        },
        {
          type: "Video",
          title: "ODE & PDE Lecture 2",
          link: "https://youtu.be/VIMZq5x4Wqk?si=r2ATYYSdJITgMR30",
        },
        {
          type: "Notes",
          title: "ODE Notes",
          link: "https://people.bath.ac.uk/mir20/images/odenotes.pdf",
        },
        {
          type: "Notes",
          title: "PDE Notes",
          link: "https://www.math.iitb.ac.in/~siva/ma515152022/1MA515Notes.pdf",
        },
      ],
    },
    {
      topic: "Fourier Series and Transform",
      items: [
        {
          type: "Video",
          title: "Fourier Lecture 1",
          link: "https://youtu.be/oLPIPT_hu3s?si=Qc-i_fa4V_Qq7MAI",
        },
        {
          type: "Video",
          title: "Fourier Lecture 2",
          link: "https://youtu.be/GtXmS5YH7XM?si=xo3cUIzBn2Sm_u8_",
        },
        {
          type: "Notes",
          title: "Fourier Notes",
          link: "https://math.uchicago.edu/~may/REU2023/REUPapers/Tarquino.pdf",
        },
      ],
    },
    {
      topic: "Laplace Transform",
      items: [
        {
          type: "Video",
          title: "Laplace Lecture 1",
          link: "https://youtu.be/NqeUG8FEvCo?si=C_-Z-yuNg3IoRKtQ",
        },
        {
          type: "Video",
          title: "Laplace Lecture 2",
          link: "https://youtu.be/uNefokVwX2g?si=32OUuvhavDN3H3R_",
        },
        {
          type: "Notes",
          title: "Laplace Notes",
          link: "https://web.stanford.edu/~boyd/ee102/laplace.pdf",
        },
      ],
    },
    {
      topic: "Complex Analysis",
      items: [
        {
          type: "Video",
          title: "Complex Analysis Lecture",
          link: "https://www.youtube.com/live/dQ4GqIqBIwo?si=qW5ZcydjBIPmwo_l",
        },
        {
          type: "Notes",
          title: "Complex Analysis Notes",
          link: "https://math.mit.edu/~dunkel/Teach/18.04_2019S/notes/1804_Main.pdf",
        },
      ],
    },
    {
      topic: "Assignments",
      items: [
        {
          type: "Assignment",
          title: "Mathematical Physics Assignment",
          link: "https://drive.google.com/file/d/1U_mNgt8yFBIz-QlDvdLh4WRe3a1GLKGD/view?usp=sharing",
        },
      ],
    },
  ];

  const badgeColor = (type) => {
    if (type === "Video") return "bg-slate-700 text-white";
    if (type === "Notes") return "bg-purple-600 text-white";
    return "bg-emerald-600 text-white";
  };

  return (
    <div className="min-h-screen bg-[#08111f] text-white px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              Mathematical Physics Resources
            </h1>
            <p className="text-slate-400 mt-2 text-lg">
              Curated mentoring resources by Ritika Dixit (24B1839)
            </p>
          </div>

          <div className="bg-[#111c2d] border border-slate-700 rounded-2xl px-5 py-4 shadow-lg">
            <p className="text-sm text-slate-400">Mentor</p>
            <h2 className="text-xl font-semibold">Ritika Dixit</h2>
            <p className="text-sm text-slate-500">24B1839</p>
          </div>
        </div>

        <div className="bg-[#0f1a2c] border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
          <div className="px-6 py-5 border-b border-slate-700 flex items-center justify-between bg-[#101d31]">
            <h2 className="text-3xl font-bold">Resources</h2>
            <div className="flex gap-3 text-slate-400">
              <div className="w-9 h-9 rounded-full bg-[#17263b] flex items-center justify-center hover:bg-[#21314b] cursor-pointer transition">
                ☰
              </div>
              <div className="w-9 h-9 rounded-full bg-[#17263b] flex items-center justify-center hover:bg-[#21314b] cursor-pointer transition">
                ⇅
              </div>
              <div className="w-9 h-9 rounded-full bg-[#17263b] flex items-center justify-center hover:bg-[#21314b] cursor-pointer transition">
                🔍
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-slate-400 border-b border-slate-700 bg-[#0d1727]">
                  <th className="px-6 py-4 text-lg font-medium">Topic</th>
                  <th className="px-6 py-4 text-lg font-medium">Type</th>
                  <th className="px-6 py-4 text-lg font-medium">Title</th>
                  <th className="px-6 py-4 text-lg font-medium">Resource Link</th>
                  <th className="px-6 py-4 text-lg font-medium">Status</th>
                </tr>
              </thead>

              <tbody>
                {resources.map((section, sectionIndex) =>
                  section.items.map((item, itemIndex) => (
                    <tr
                      key={`${sectionIndex}-${itemIndex}`}
                      className="border-b border-slate-800 hover:bg-[#122038] transition"
                    >
                      <td className="px-6 py-5 align-top font-semibold text-slate-100 max-w-xs">
                        {itemIndex === 0 ? section.topic : ""}
                      </td>

                      <td className="px-6 py-5">
                        <span
                          className={`px-3 py-1 rounded-lg text-sm font-medium ${badgeColor(
                            item.type
                          )}`}
                        >
                          {item.type}
                        </span>
                      </td>

                      <td className="px-6 py-5 text-slate-200">
                        {item.title}
                      </td>

                      <td className="px-6 py-5">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sky-400 hover:text-sky-300 underline break-all"
                        >
                          Open Resource
                        </a>
                      </td>

                      <td className="px-6 py-5">
                        <span className="bg-slate-600/70 text-slate-100 px-4 py-1.5 rounded-full text-sm font-medium">
                          Not Started
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-[#101c2d] border border-slate-700 rounded-2xl p-5 shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Topics Covered</h3>
            <p className="text-4xl font-bold text-sky-400">5</p>
          </div>

          <div className="bg-[#101c2d] border border-slate-700 rounded-2xl p-5 shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Total Resources</h3>
            <p className="text-4xl font-bold text-purple-400">14</p>
          </div>

          <div className="bg-[#101c2d] border border-slate-700 rounded-2xl p-5 shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Assignments</h3>
            <p className="text-4xl font-bold text-emerald-400">1</p>
          </div>
        </div>
      </div>
    </div>
  );
}
