
const Intro = () => {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white">Hi , I am </h1>
      <h1 className="text-7xl text-secondary font-semibold">Shashwat Pal</h1>
      <h1 className="text-7xl text-white font-semibold">I am a Full Stack Developer</h1>
      <p className="text text-white w-2/3">
        I am a Full Stack Developer. Currently working as a Software Developer at HTS Tech Solutions pvt. Ltd. Having a skills in ReactJS, NextJS, NodeJS, ExpresJs MongoDB, PostgreSQL, Supabase, Docker, AWS.
      </p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">Get Started</button>
    </div>
  )
}

export default Intro