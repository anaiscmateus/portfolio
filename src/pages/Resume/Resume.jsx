import { Divider } from "@nextui-org/react";

function Resume() {
  return (
    <>
      <h1 className="text-2xl font-semibold">Resume</h1>
      <section id="portfolio-resume" className="grid gap-3">
        <section id="header" className="pb-2">
          <p className="text-xl">
            Driven by a passion for impactful digital innovation, I&apos;m
            well-versed in React, Javascript, and a broad range of web
            frameworks. Here&apos;s a summary of my work so far.
          </p>
        </section>
        <section id="experience" className="grid gap-2">
          <Divider />
          <h2 className="font-semibold text-xl">EXPERIENCE</h2>
          <Divider />
          <div className="grid gap-2 py-2">
            <section>
              <p className="font-semibold">Resilient Coders</p>
              <p className="text-sm text-zinc-400">
                Full-Stack Software Engineer, August 2023 - Present
              </p>
            </section>
            <ul className="ml-5 list-disc grid gap-3 leading-relaxed">
              <li>
                Collaborated with a team of developers to build modern and
                responsive web applications using best practices
              </li>
              <li>
                Routinely led planning sessions with 9+ engineers in technical
                design sessions and project planning.
              </li>
              <li>
                Employed Agile Scrum methodologies to manage project workflows
              </li>
              <li>
                Built semantically structured full-stack web applications,
                including:
              </li>
            </ul>
            <ul className="ml-10 grid gap-3 list-disc leading-relaxed">
              <li>
                <a
                  href="https://tradevault.up.railway.app/"
                  target="_blank"
                  className="underline underline-offset-4 decoration-sky-500 hover:text-gray-400 font-semibold"
                >
                  TradeVault
                </a>
                – A next-generation trading journal. Users sign in to log
                trades, record thoughts, and leverage the OpenAI API for
                feedback and analysis. An all-in-one platform for monitoring
                trading strategies, performance, and staying informed with the
                latest market news.
              </li>
              <li>
                <a
                  href="https://nourish.up.railway.app/"
                  target="_blank"
                  className="underline underline-offset-4 decoration-yellow-500 hover:text-gray-400 font-semibold"
                >
                  Nourish
                </a>
                – Designed to increase food accessibility in the city of
                Philadelphia, users can locate community fridges and pantries
                nearby, either through zip code searches or an interactive map.
                Organizations and locals can sign up for the Community Board to
                connect and discuss community fridges in the area.
              </li>
              <li>
                <a
                  href="https://studysync.up.railway.app/"
                  target="_blank"
                  className="underline underline-offset-4 decoration-purple-500 hover:text-gray-400 font-semibold"
                >
                  StudySync
                </a>
                – Users can log in to their profile and find their list of
                notes. They can add new notes through an input, which they can
                then edit or delete all notes in their profile.
              </li>
            </ul>
          </div>
          <Divider />
          <div className="grid gap-2 py-2">
            <section>
              <p className="font-semibold">Freelance</p>
              <p className="text-sm text-zinc-400">Software Consultant</p>
            </section>
            <p className="leading-relaxed">
              Created full-stack web applications and static websites for
              different content creators and small businesses. Also, consulted
              on SEO and social media strategy. Some clients included:{" "}
            </p>
            <ul className="grid gap-3 list-disc ml-5">
              <li>
                <a href="https://pizzadoro.netlify.app/" className="underline underline-offset-4 decoration-red-500 hover:text-gray-400 font-semibold">Pizza D’oro</a>– a local
                pizzeria chain in the Washington, DC area
              </li>
            </ul>
          </div>
          <Divider />
          <div className="grid gap-2 py-2">
            <section>
              <p className="font-semibold">Notable Finance</p>
              <p className="text-sm text-zinc-400">
                Business Operations Analyst, December 2019 - September 2022
              </p>
            </section>
            <ul className="ml-5 list-disc grid gap-3">
              <li>
                Developed a Python-based web application that cut application
                processing times by 30%
              </li>
              <li>
                Created daily-use Metabase dashboards from PostgreSQL databases
                for operations, accounting, and customer success teams
              </li>
              <li>
                Identified pain points and implemented changes to Notable’s
                identity verification process which led to a 70% decrease in
                application turnaround time
              </li>
            </ul>
          </div>
        </section>
        <section id="skills">
          <Divider />
          <h2 className="font-semibold py-2 text-xl">SKILLS</h2>
          <Divider />
          <section className="grid md:grid-cols-3 gap-3 py-2">
            <section>
              <h3 className="pb-3 font-semibold">Languages</h3>
              <ul className="grid gap-3 ml-5 list-disc">
                <li>JavaScript</li>
                <li>Python</li>
                <li>PostgreSQL</li>
                <li>HTML5</li>
                <li>CSS</li>
              </ul>
            </section>
            <section>
              <h3 className="pb-3 font-semibold">Frameworks</h3>
              <ul className="grid gap-3 ml-5 list-disc">
                <li>Express</li>
                <li>React</li>
                <li>Flask</li>
                <li>Tailwind CSS</li>
              </ul>
            </section>
            <section>
              <h3 className="pb-3 font-semibold">Tools</h3>
              <ul className="grid gap-3 ml-5 list-disc">
                <li>Git</li>
                <li>Postman</li>
                <li>Metabase</li>
                <li>GitHub</li>
                <li>Jira</li>
              </ul>
            </section>
          </section>
        </section>
        <section id="education">
          <Divider />
          <h3 className="font-semibold py-2 text-xl">EDUCATION</h3>
          <Divider />
          <section className="py-2">
            <p>
              <span className="font-semibold">International Relations, BA</span>
              , The Pennsylvania State University, University Park, PA August
              2019
            </p>
          </section>
        </section>
      </section>
    </>
  );
}

export default Resume;
