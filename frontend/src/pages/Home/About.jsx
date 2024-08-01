import SectionTitle from "../../components/SectionTitle"

const About = () => {
  const skills = [
    "ReactJS",
    "NextJS",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "PostgreSQL",
    "Supabase",
    "Docker",
    "AWS",
  ]
  return (
    <div>
      <SectionTitle title="About" />

      <div className="flex w-full items-center gap-10">
        <div className="h-[70vh] w-1/2">
          <lottie-player src="https://lottie.host/ad768da2-c38b-4378-8b6b-0123c2aab63e/7nD0eD2rGP.json" background="##fff" speed="1" ></lottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2">
          <p className="text-white">I am a Full Stack Developer. Currently working as a Software Developer at HTS Tech Solutions pvt. Ltd. Having a skills in ReactJS, NextJS, NodeJS, ExpresJs MongoDB, PostgreSQL, Supabase, Docker, AWS.</p>
          <p className="text-white">I am a Full Stack Developer. Currently working as a Software Developer at HTS Tech Solutions pvt. Ltd. Having a skills in ReactJS, NextJS, NodeJS, ExpresJs MongoDB, PostgreSQL, Supabase, Docker, AWS.</p>
        </div>
      </div>
      <div>
        <h1 className="text-tertiary text-2xl">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div key={index} className="border-2 border-tertiary px-10 py-3 rounded">
              <h1 className="text-tertiary ">{skill}</h1>
              {/* {console.log("skillcdnklavibv", skill)} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About