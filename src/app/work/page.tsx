import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function Page() {
  const PROJECTS = [
    {
      name: 'Nexstp',
      description:
        'Nexstp is a multi-tenant e-commerce platform built with Next.js, PayloadCMS, and tRPC, supporting multiple stores on a single system. The project features secure Stripe payments, crowdfunding campaigns, real-time chat with Pusher, advanced product reviews, and role-based access control. It offers a modern UI with TailwindCSS and Shadcn UI, lazy loading, streaming, and virtual scroll for large product lists. Nexstp integrates automated data seeding, comprehensive management for products, orders, banners, and categories, and is designed for scalability and extensibility.',
      liveLink: 'https://nexstp.store/',
      previewImage: '/project1.png',
      repoUrl: 'https://github.com/dolong2310/nexstp',
    },
    {
      name: 'NextAgent',
      description:
        'This project is a custom Next.js application that enables users to create, manage, and view software projects with an AI-powered assistant. It features a dynamic messaging UI, code fragment management, file explorer, authentication via Clerk, and a modern theme. The system leverages tRPC and Prisma for secure backend operations and integrates agent-based automation for code generation and project updates.',
      liveLink: 'https://nextagent-app.vercel.app/',
      previewImage: '/project2.png',
      repoUrl: 'https://github.com/dolong2310/nextagent-app',
    },
    {
      name: 'Messenger',
      description:
        'A real-time messenger chat application built with Next.js, TypeScript, and MongoDB. The project features user authentication via Google and GitHub, group and private conversations, message read receipts, and instant updates using Pusher. Users can update their profiles, send images, and experience seamless communication with a modern UI.',
      liveLink: 'https://messenger-chat-app-olive.vercel.app/',
      previewImage: '/project3.png',
      repoUrl: 'https://github.com/dolong2310/Messenger-Chat-App',
    },
    {
      name: 'Grocery Mart',
      description:
        'This project is a GroceryMart e-commerce website that provides a user interface for features such as sign-in, sign-up, personal information management, checkout, shipping, favorites, and product details. The source code uses HTML, CSS (SCSS), and JavaScript to build interactive pages and components, supporting dynamic templates, light/dark mode switching, and modern UI effects.',
      liveLink: 'https://dolong2310.github.io/Grocery-Mart/',
      previewImage: '/project4.png',
      repoUrl: 'https://github.com/dolong2310/Grocery-Mart',
    },
    {
      name: 'Tabzee',
      description:
        'Tabzee.js is a lightweight JavaScript library for creating tabbed interfaces without external dependencies. Easily customizable with CSS, supports tab state persistence via URL, and provides an intuitive API for tab management.',
      liveLink: 'https://dolong2310.github.io/tabzee/',
      previewImage: '/project5.png',
      repoUrl: 'https://github.com/dolong2310/tabzee',
    },
    {
      name: 'Modle',
      description:
        'Modle.js is a lightweight, dependency-free modal library built with pure JavaScript. It enables customizable modal dialogs, supports CSS styling, easy integration, and is optimized for user experience.',
      liveLink: 'https://dolong2310.github.io/modle/',
      previewImage: '/project6.png',
      repoUrl: 'https://github.com/dolong2310/modle',
    },
    {
      name: 'Slidezee',
      description:
        'Slidezee is a lightweight JavaScript library for creating sliders/carousels on web pages. It allows easy customization of visible slides, group movement, speed, looping, navigation, pagination, and autoplay. The library requires only a single JS and CSS file, with no external dependencies.',
      liveLink: 'https://dolong2310.github.io/slidezee/',
      previewImage: '/project5.png',
      repoUrl: 'https://github.com/dolong2310/slidezee',
    },
    {
      name: 'YC Directory',
      description:
        'YC App is a web platform built with Next.js that enables users to submit startup ideas, vote, and connect with other entrepreneurs. The project integrates Sanity CMS for content management, GitHub authentication, markdown support for pitch presentation, and a modern UI powered by Tailwind CSS.',
      liveLink: 'https://yc-app-nine.vercel.app/',
      previewImage: '/project8.png',
      repoUrl: 'https://github.com/dolong2310/YC-App',
    },
  ]

  return (
    <>
      {PROJECTS.map((project, id) => {
        return (
          <div
            className="text-foreground bg-bg w600:px-[30px] w400:px-5 border-r-4 border-b-4 border-r-black border-b-black p-8 py-10"
            key={id}
          >
            <div className="w800:w-full mx-auto w-3/4">
              <AspectRatio
                className="rounded-base shadow-shadow -bottom-[2px]! border-2 border-black"
                ratio={16 / 9}
              >
                <a href={project.liveLink} target="_blank">
                  <img
                    className="rounded-base aspect-[16/9] w-full object-cover"
                    src={`${project.previewImage}`}
                    alt={project.name}
                  />
                </a>
              </AspectRatio>

              <div className="mt-6">
                <h2 className="w700:text-2xl w450:text-xl text-3xl font-bold">
                  {project.name}
                </h2>

                <p className="w450:text-base mt-5 text-lg">
                  {project.description}
                </p>

                <div className="w400:text-sm mt-8 grid grid-cols-2 gap-5 text-base">
                  <a
                    className="border-border text-main-foreground shadow-shadow rounded-base bg-main hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center uppercase transition-all hover:shadow-none"
                    href={project.liveLink}
                    target="_blank"
                  >
                    Visit
                  </a>
                  <a
                    className="border-border text-main-foreground shadow-shadow rounded-base bg-main hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center uppercase transition-all hover:shadow-none"
                    href={project.repoUrl}
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
