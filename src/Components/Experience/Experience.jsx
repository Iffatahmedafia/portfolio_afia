import React from 'react';

const Experience = () => {
  return (
    <div id="Experience" className="p-6 md:p-12">
      <h1 className="text-2xl md:text-4xl text-white font-bold border-b-4 border-[#0e7490] pb-2 inline-block">
        Experience
      </h1>

      <div className="flex flex-col items-center gap-6 mt-10">
        {/* CARD 1 */}
        <div className="w-full max-w-4xl bg-slate-950 bg-opacity-45 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:bg-[#0e7490] transition-transform transform hover:scale-105 duration-300">
          <h1 className="text-white leading-tight font-semibold pb-2">
            Full Stack Software Engineer (Remote), Integrate Tech Solution
          </h1>
          <p className="text-sm text-white font-thin">Oct 2024 to Present</p>
          <ul className="text-sm list-disc text-white p-2 pl-5">
            <li>Migrated legacy system to React-Django architecture for scalability.</li>
            <li>Automated data workflows with Python, REST APIs, and databases.</li>
            <li>Built UI with React and Material UI components.</li>
            <li>Tested and debugged systems to ensure robust performance.</li>
          </ul>
        </div>

        {/* CARD 2 */}
        <div className="w-full max-w-4xl bg-slate-950 bg-opacity-45 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:bg-[#0e7490] transition-transform transform hover:scale-105 duration-300">
          <h1 className="text-white leading-tight font-semibold pb-2">
            Junior RPA Developer, DHL APSSC
          </h1>
          <p className="text-sm text-white font-thin">September 2022 - October 2023</p>
          <ul className="text-sm list-disc text-white p-2 pl-5">
            <li>Automated PDF workflows, boosting operational efficiency.</li>
            <li>Resolved critical support tickets with quick turnaround.</li>
            <li>Developed RPA bots using UiPath across departments.</li>
            <li>Led testing and deployments for automation projects.</li>
            <li>Created Power BI and SSRS dashboards for insights.</li>
          </ul>
        </div>

        {/* CARD 3 */}
        <div className="w-full max-w-4xl bg-slate-950 bg-opacity-45 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:bg-[#0e7490] transition-transform transform hover:scale-105 duration-300">
          <h1 className="text-white leading-tight font-semibold pb-2">
            Web Developer Intern, HomeCrowd Sdn Bhd
          </h1>
          <p className="text-sm text-white font-thin">February 2022 - July 2022</p>
          <ul className="text-sm list-disc text-white p-2 pl-5">
            <li>Worked on Laravel system testing and debugging.</li>
            <li>Improved UI and added new features for user experience.</li>
            <li>Planned Web3-based projects with smart contracts.</li>
            <li>Maintained technical documentation across phases.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
