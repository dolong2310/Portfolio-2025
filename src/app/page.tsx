import { AspectRatio } from '@/components/ui/aspect-ratio'
import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
} from '@icons-pack/react-simple-icons'

export default function Home() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:dolong2310@gmail.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/dolong2310',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/long-do-963682211/',
    },
  ]

  return (
    <div className="w600:p-[30px] w600:text-lg w400:p-5 w400:text-base p-10 text-xl leading-[1.7]">
      <div className="mb-8">
        <img
          className="rounded-base shadow-shadow aspect-square w-[200px] border-4 border-black object-cover"
          src="/me.jpg"
          alt="me"
        />
      </div>

      <h2 className="mb-2 text-2xl">Overview:</h2>
      <p>
        Frontend engineer with 4 years of experience. Previously worked at a
        fast-growing startup and a large enterprise company.
        <br />
        Always seeking to take ownership of the project and deliver faster than
        expected. Comfortable for web, mobile, and API development.
      </p>

      <br />

      <h2 className="mb-2 text-2xl">Skills:</h2>
      <p>
        Frontend Development: React, Next.js, TypeScript, JavaScript, HTML, CSS,
        SCSS, Tailwind CSS.
      </p>
      <p>Backend Development: Node.js, Express.js, Mongodb.</p>
      <p>Tools & Practices: Git, Agile Methodologies, CI/CD, Serverless.</p>

      <br />

      <h2 className="mb-2 text-2xl">Personal:</h2>
      <p>
        I have a deep passion for learning new things, especially frontend
        development concepts. Traveling and exploring new places fuels my
        creativity and broadens my perspective. I also enjoy playing games,
        football, and listening to music in my free time. Currently, I&apos;m
        cultivating a habit of reading books to enrich my knowledge further 😬
      </p>

      <br />

      <div className="mt-10 mr-auto flex w-full flex-wrap items-center gap-10">
        {links.map((link, id) => {
          return (
            <a target="_blank" key={id} href={link.href}>
              <link.icon title="" />
            </a>
          )
        })}
      </div>
    </div>
  )
}
