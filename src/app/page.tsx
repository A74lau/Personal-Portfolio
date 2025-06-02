import Navbar from '@/components/Navbar';
import ThreeDCircle from '@/components/ThreeDCircle';

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white">
      <Navbar />
      <section id="title" className="flex flex-col items-center justify-center min-h-screen pt-32">
        <ThreeDCircle />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-12">Anson Lau</h1>
        <p className="max-w-xl text-center text-lg md:text-xl opacity-80">
          Hi! I'm Anson, a creative developer passionate about building interactive web experiences. I love blending technology and design to craft engaging, modern, and performant websites. Welcome to my portfolio!
        </p>
      </section>
      <section id="about" className="min-h-screen flex flex-col items-center justify-center py-24">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <img
            src="/profile.jpg"
            alt="Anson Lau profile"
            className="w-64 h-64 rounded-full shadow-lg border-4 border-cyan-500 object-cover"
          />
          <div className="max-w-2xl text-center md:text-left opacity-80">
            <p>
            Hey there!

My name is Anson, and I have recently graduated as a Computer Engineering student from the University of Waterloo, with an option in Artificial Intelligence!

During my recent internship at Magnet Forensics, I contributed to the core digital forensics platform by using C#/.NET to maintain platform compatibility, enhance data extraction capabilities, and optimize performance for critical investigative workflows.

Before that, I worked as a Software Developer Intern at Geotab, where I implemented error-handling policies using C#/.NET, developed a real-time API usage monitoring dashboard, and spearheaded cloud API rate-limiting policies.

Earlier in my co-op journey, I gained diverse technical experience across multiple domains. At Brickeye, I engineered automation tests using Python and implemented user analytics tracking with Typescript. My time at Algal Engineering involved designing electrical systems while developing the company web application using Javascript, HTML/CSS. I also provided executive IT support for Ontario's Cabinet Office, troubleshooting systems for the Premier's office, and configuring secure devices for senior government officials. Additionally, I served as an On-Site Support Technician at Sun Life, where I adapted tech operations during COVID-19 and managed enterprise hardware deployments.

Beyond my technical roles, I enjoy diving into tech side projects, exploring AI applications, collecting Pokémon cards, and playing badminton. I’m always eager to connect with fellow tech enthusiasts, so feel free to reach out! 😊
            </p>
          </div>
        </div>
      </section>
      <section id="skills" className="flex flex-col items-center justify-center py-16">
        <div className="bg-[#10213a] rounded-3xl shadow-xl flex flex-col md:flex-row items-center md:items-stretch w-full max-w-5xl p-8 md:p-12 gap-8">
          {/* Left: Heading and description */}
          <div className="flex-1 flex flex-col justify-center mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to use out of the box</h2>
            <p className="text-white/90 text-base md:text-lg">
              Get straight to coding without having to install and configure lots of plugins. My toolkit includes everything you need for JavaScript and TypeScript development right from the start. You can personalize it further with various plugins and settings.
            </p>
          </div>
          {/* Right: Skills grid */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 place-items-center">
            {/* Skill cards */}
            <button type="button" tabIndex={0} className="bg-[#0d1727] rounded-xl flex flex-col items-center p-4 w-28 h-28 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:scale-110 hover:shadow-xl hover:ring-2 hover:ring-cyan-400">
              <span className="text-4xl mb-2">🟨</span>
              <span className="text-white text-sm font-medium">JavaScript</span>
            </button>
            <button type="button" tabIndex={0} className="bg-[#0d1727] rounded-xl flex flex-col items-center p-4 w-28 h-28 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:scale-110 hover:shadow-xl hover:ring-2 hover:ring-cyan-400">
              <span className="text-4xl mb-2">🟦</span>
              <span className="text-white text-sm font-medium">TypeScript</span>
            </button>
            <button type="button" tabIndex={0} className="bg-[#0d1727] rounded-xl flex flex-col items-center p-4 w-28 h-28 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:scale-110 hover:shadow-xl hover:ring-2 hover:ring-cyan-400">
              <span className="text-4xl mb-2">🌐</span>
              <span className="text-white text-sm font-medium">HTML</span>
            </button>
            <button type="button" tabIndex={0} className="bg-[#0d1727] rounded-xl flex flex-col items-center p-4 w-28 h-28 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:scale-110 hover:shadow-xl hover:ring-2 hover:ring-cyan-400">
              <span className="text-4xl mb-2">🎨</span>
              <span className="text-white text-sm font-medium">CSS</span>
            </button>
            <button type="button" tabIndex={0} className="bg-[#0d1727] rounded-xl flex flex-col items-center p-4 w-28 h-28 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:scale-110 hover:shadow-xl hover:ring-2 hover:ring-cyan-400">
              <span className="text-4xl mb-2">⚛️</span>
              <span className="text-white text-sm font-medium">React</span>
            </button>
            <button type="button" tabIndex={0} className="bg-[#0d1727] rounded-xl flex flex-col items-center p-4 w-28 h-28 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:scale-110 hover:shadow-xl hover:ring-2 hover:ring-cyan-400">
              <span className="text-4xl mb-2">🅰️</span>
              <span className="text-white text-sm font-medium">Angular</span>
            </button>
            <button type="button" tabIndex={0} className="bg-[#0d1727] rounded-xl flex flex-col items-center p-4 w-28 h-28 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:scale-110 hover:shadow-xl hover:ring-2 hover:ring-cyan-400">
              <span className="text-4xl mb-2">🟩</span>
              <span className="text-white text-sm font-medium">Node.js</span>
            </button>
            <button type="button" tabIndex={0} className="bg-[#0d1727] rounded-xl flex flex-col items-center p-4 w-28 h-28 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:scale-110 hover:shadow-xl hover:ring-2 hover:ring-cyan-400">
              <span className="text-4xl mb-2">🟩</span>
              <span className="text-white text-sm font-medium">MongoDB</span>
            </button>
            <button type="button" tabIndex={0} className="bg-[#0d1727] rounded-xl flex flex-col items-center p-4 w-28 h-28 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:scale-110 hover:shadow-xl hover:ring-2 hover:ring-cyan-400">
              <span className="text-4xl mb-2">🟦</span>
              <span className="text-white text-sm font-medium">SQL</span>
            </button>
            <button type="button" tabIndex={0} className="bg-[#0d1727] rounded-xl flex flex-col items-center p-4 w-28 h-28 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:scale-110 hover:shadow-xl hover:ring-2 hover:ring-cyan-400">
              <span className="text-4xl mb-2">🟩</span>
              <span className="text-white text-sm font-medium">Vue</span>
            </button>
          </div>
        </div>
      </section>
      <section id="experience" className="min-h-screen flex flex-col items-center justify-center py-24 bg-transparent">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">Experience</h2>
        <div className="relative max-w-2xl w-full">
          {/* Timeline vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400/60 to-cyan-800/10 rounded-full" style={{ zIndex: 0 }} />

          {/* Magnet Forensics */}
          <div className="relative flex items-start mb-12" style={{ zIndex: 1 }}>
            <div className="flex flex-col items-center mr-8">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500 text-white text-2xl shadow-lg border-4 border-cyan-300">
                🗓️
              </span>
              <div className="flex-1 w-px bg-cyan-300/30 h-full" />
            </div>
            <button type="button" tabIndex={0} className="bg-black/70 rounded-xl shadow-lg p-6 flex-1 text-left transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-cyan-400">
              <h3 className="text-xl font-bold mb-1">Software Developer Intern <span className="text-cyan-400">@ Magnet Forensics</span></h3>
              <p className="text-sm text-gray-300 mb-2">Waterloo, ON &middot; Sep 2024 - Dec 2024</p>
              <ul className="list-disc list-inside text-base opacity-90 pl-4">
                <li>Maintained platform compatibility using C# and .NET by updating data extraction logic to recover digital forensics evidence across 5+ industry-leading platforms, such as Safari and Telegram.</li>
                <li>Optimized data processing workflows using efficient retrieval techniques for parsed/carved data from SQLite databases, resolving performance bottlenecks.</li>
                <li>Developed unit/integration tests using xUnit, and utilized CI/CD pipelines in Jenkins to automate builds and NuGet deployments.</li>
              </ul>
            </button>
          </div>

          {/* Geotab */}
          <div className="relative flex items-start mb-12" style={{ zIndex: 1 }}>
            <div className="flex flex-col items-center mr-8">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500 text-white text-2xl shadow-lg border-4 border-cyan-300">
                🗓️
              </span>
              <div className="flex-1 w-px bg-cyan-300/30 h-full" />
            </div>
            <button type="button" tabIndex={0} className="bg-black/70 rounded-xl shadow-lg p-6 flex-1 text-left transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-cyan-400">
              <h3 className="text-xl font-bold mb-1">Software Developer Intern <span className="text-cyan-400">@ Geotab</span></h3>
              <p className="text-sm text-gray-300 mb-2">Waterloo, ON &middot; Jan 2024 - Apr 2024</p>
              <ul className="list-disc list-inside text-base opacity-90 pl-4">
                <li>Implemented error-handling policies using C#, .NET, and Polly, updating error code mapping for the Swagger API endpoint, resulting in a 20% error rate reduction.</li>
                <li>Developed a real-time API usage monitoring dashboard utilizing Superset and SQL, facilitating the tracking of 10,000+ daily API calls.</li>
                <li>Spearheaded cloud API rate-limiting policies using GCP and Terraform, reducing excessive traffic by 35%.</li>
                <li>Created and validated unit/integration tests using Moq and xUnit, ensuring the stability and scalability of newly implemented features.</li>
              </ul>
            </button>
          </div>

          {/* Brickeye */}
          <div className="relative flex items-start mb-12" style={{ zIndex: 1 }}>
            <div className="flex flex-col items-center mr-8">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500 text-white text-2xl shadow-lg border-4 border-cyan-300">
                🗓️
              </span>
              <div className="flex-1 w-px bg-cyan-300/30 h-full" />
            </div>
            <button type="button" tabIndex={0} className="bg-black/70 rounded-xl shadow-lg p-6 flex-1 text-left transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-cyan-400">
              <h3 className="text-xl font-bold mb-1">Software Developer Intern <span className="text-cyan-400">@ Brickeye</span></h3>
              <p className="text-sm text-gray-300 mb-2">Markham, ON &middot; Jan 2023 - Apr 2023</p>
              <ul className="list-disc list-inside text-base opacity-90 pl-4">
                <li>Engineered end-to-end automation testing for new Android mobile application features using Python, Android Studio, Browserstack, Appium, and Docker.</li>
                <li>Utilized TypeScript, React, and Segment to track 5,000+ monthly user events on the mobile/web application to gather user behavior analytics data on Mixpanel.</li>
                <li>Managed daily tasks using Jira and submitted pull requests via AWS CodeCommit.</li>
              </ul>
            </button>
          </div>

          {/* Algal Engineering */}
          <div className="relative flex items-start mb-12" style={{ zIndex: 1 }}>
            <div className="flex flex-col items-center mr-8">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500 text-white text-2xl shadow-lg border-4 border-cyan-300">
                🗓️
              </span>
              <div className="flex-1 w-px bg-cyan-300/30 h-full" />
            </div>
            <button type="button" tabIndex={0} className="bg-black/70 rounded-xl shadow-lg p-6 flex-1 text-left transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-cyan-400">
              <h3 className="text-xl font-bold mb-1">Electrical Engineer Intern <span className="text-cyan-400">@ Algal Engineering</span></h3>
              <p className="text-sm text-gray-300 mb-2">Markham, ON &middot; May 2022 - Aug 2022</p>
              <ul className="list-disc list-inside text-base opacity-90 pl-4">
                <li>Developed the company's web application utilizing JavaScript, HTML, and CSS.</li>
                <li>Designed electrical wiring diagrams for nuclear projects, power systems, and building services using AutoCAD.</li>
                <li>Conducted short circuit analysis and electrical load calculations using ETAP software for 10+ projects.</li>
              </ul>
            </button>
          </div>

          {/* Cabinet Office */}
          <div className="relative flex items-start mb-12" style={{ zIndex: 1 }}>
            <div className="flex flex-col items-center mr-8">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500 text-white text-2xl shadow-lg border-4 border-cyan-300">
                🗓️
              </span>
            </div>
            <button type="button" tabIndex={0} className="bg-black/70 rounded-xl shadow-lg p-6 flex-1 text-left transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-cyan-400">
              <h3 className="text-xl font-bold mb-1">Executive IT Support Intern <span className="text-cyan-400">@ Cabinet Office, Le Bureau du Conseils des ministres</span></h3>
              <p className="text-sm text-gray-300 mb-2">Toronto, ON &middot; Sep 2021 - Dec 2021</p>
              <ul className="list-disc list-inside text-base opacity-90 pl-4">
                <li>Delivered IT support to the Premier of Ontario and Cabinet, ensuring seamless operation of critical government systems and promptly responding to high-priority technical issues.</li>
                <li>Resolved software, network, and database issues, optimizing system performance and reducing downtime by 15%.</li>
                <li>Configured 100+ laptops, mobile devices, and desktops for provincial government employees, accelerating onboarding by 30%.</li>
              </ul>
            </button>
          </div>
        </div>
      </section>
      <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-24">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Projects</h2>
        <div className="max-w-2xl text-center opacity-80">
          {/* Add your projects here */}
          <p>Coming soon...</p>
        </div>
      </section>
      <section id="resume" className="min-h-screen flex flex-col items-center justify-center py-24">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Resume</h2>
        <div className="max-w-2xl text-center opacity-80 mb-6">
          {/* Add your resume or a download link here */}
          <p>Click to download my resume below!</p>
        </div>
        <a
          href="/resume.pdf"
          download
          className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow transition-colors duration-200"
        >
          Download Resume
        </a>
      </section>
      <section id="contact" className="min-h-[40vh] flex flex-col items-center justify-center py-16">
        <div className="bg-[#10213a] rounded-3xl shadow-xl flex flex-col items-center w-full max-w-lg p-8 gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Contact Me</h2>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center gap-3">
              <span className="text-cyan-400 text-xl">📞</span>
              <span className="text-white text-base md:text-lg">(416) 456-8383</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-cyan-400 text-xl">✉️</span>
              <span className="text-white text-base md:text-lg">a74lau@gmail.com</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}