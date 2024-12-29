import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.bluesky} target="_blank">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
      Developer, Thinker, Builder.
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
        I'm a freelance developer with 2 years of hands-on experience in the JavaScript ecosystem. I enjoy building everything from smooth, interactive frontends to solid, reliable backends. Turning ideas into real, usable solutions? That's my thing.
        </p>
     
        <div>
        <h2 className="text-3xl font-bold mb-4">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div>
    <h3 className="text-lg font-semibold">Frontend Development</h3>
    <p className="text-gray-600">React, Next.js, Vite, Zustand, Material UI  — crafting engaging UIs.</p>
  </div>

  <div>
    <h3 className="text-lg font-semibold">Backend Development</h3>
    <p className="text-gray-600">Node.js, Express, Prisma — building robust APIs and managing databases with PostgreSQL and (or) MongoDB.</p>
  </div>

  <div>
    <h3 className="text-lg font-semibold">Hosting</h3>
    <p className="text-gray-600">DigitalOcean, AWS S3 — deploying scalable and reliable applications and hosting assets.</p>
  </div>
</div>
</div>


      </div>
    </section>
  );
}
