import Navbar from '@/components/Navbar';
import ThreeDCircle from '@/components/ThreeDCircle';
import TypewriterText from '@/components/TypewriterText';

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white">
      <Navbar />
      <section id="title" className="flex flex-col md:flex-row items-center justify-center min-h-screen max-w-6xl mx-auto px-6 pt-32 gap-12">
        {/* Left: Text content */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <span className="text-cyan-400 text-base md:text-lg font-semibold mb-2 tracking-wide">Hi, my name is</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-2 leading-tight">Anson Lau.</h1>
          <TypewriterText
            text="I build things for the web."
            className="text-3xl md:text-5xl font-extrabold text-gray-300 mb-6 leading-tight"
            typingSpeed={40}
            startDelay={800}
          />
          <p className="max-w-xl text-left text-base md:text-lg opacity-80 mb-8">
            I'm a software engineer based in Toronto, ON specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-md hover:bg-cyan-400 hover:text-gray-900 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
        {/* Right: 3D Object */}
        <div className="flex-1 w-full flex items-center justify-center md:justify-end">
          <div className="w-full max-w-xl h-[400px] md:h-[550px] lg:h-[650px]">
            <ThreeDCircle />
          </div>
        </div>
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
            Hi, I'm Anson, a Computer Engineering graduate from the University of Waterloo with a passion for building impactful software. My experience spans full-stack development, cloud APIs, and AI, with internships at Magnet Forensics (C#/.NET forensics tools) and Geotab (real-time API systems). I thrive on solving complex problems—whether automating tests in Python, optimizing cloud infrastructure, or developing web applications. When I'm not coding, you'll find me exploring AI side projects or adding to my Pokémon card collection.
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
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">Work Experience</h2>
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