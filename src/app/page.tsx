import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"

export default function Home() {
  return (
    <div className="px-4 md:px-0 py-8">
      <div className="border rounded-lg bg-white p-4 md:max-w-md w-full mx-auto shadow-lg">
        <Image src="/avatar.jpg" alt="Avatar" width={100} height={100} className="rounded-full aspect-square w-24" />
        <h1 className="font-semibold text-xl mt-2">meiwa</h1>
        <div className="flex flex-wrap gap-2 mt-2 text-sm">
          <Link href="https://github.com/meiwacreate" target="_blank" rel="noopener noreferrer" passHref><p className="px-2.5 py-0.5 bg-gray-50 border text-gray-600 rounded-full flex items-center hover:bg-gray-200 duration-200"><FaGithub className="mr-1.5" />GitHub</p></Link>
          <Link href="https://zenn.dev/meiwacreate" target="_blank" rel="noopener noreferrer" passHref><p className="px-2.5 py-0.5 bg-gray-50 border text-gray-600 rounded-full flex items-center hover:bg-gray-200 duration-200"><Image src="/zenn-logo.svg" alt="Zenn Logo" width={100} height={100} className="w-4 mr-1.5 select-none" />Zenn</p></Link>
        </div>
        <p className="mt-2 text-gray-600">I am a student. I mainly focus on front-end development and build things that I want to create.</p>
        <div className="flex flex-wrap gap-2 mt-2">
          <p className="px-2 py-1 bg-gray-200 text-gray-600 rounded-md text-sm">HTML</p>
          <p className="px-2 py-1 bg-gray-200 text-gray-600 rounded-md text-sm">CSS</p>
          <p className="px-2 py-1 bg-gray-200 text-gray-600 rounded-md text-sm">JavaScript</p>
          <p className="px-2 py-1 bg-gray-200 text-gray-600 rounded-md text-sm">TypeScript</p>
          <p className="px-2 py-1 bg-gray-200 text-gray-600 rounded-md text-sm">Node.js</p>
          <p className="px-2 py-1 bg-gray-200 text-gray-600 rounded-md text-sm">React</p>
          <p className="px-2 py-1 bg-gray-200 text-gray-600 rounded-md text-sm">Next.js</p>
          <p className="px-2 py-1 bg-gray-200 text-gray-600 rounded-md text-sm">Ruby</p>
          <p className="px-2 py-1 bg-gray-200 text-gray-600 rounded-md text-sm">Ruby on Rails</p>
        </div>
      </div>
    </div>
  )
}