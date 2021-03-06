import { Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const projects = [
  {
    name: "SolCoinFlip",
    role: "Provable coin flip Solana program using Anchor",
    githubUrl: "https://github.com/m2ozgun/coin-flip",
  },
  {
    name: "RarityList",
    role: "Rarity engine for Solana NFT collections",
    githubUrl: "https://github.com/m2ozgun/raritylist",
  },
  {
    name: "Tweemo",
    role: "Etsy competitor analysis tool (SaaS)",
    githubUrl: "https://github.com/m2ozgun/tweemo",
  },
  {
    name: "metaDAO",
    role: "Multi-agent autonomous DAO simulation (WIP)",
    githubUrl: "https://github.com/m2ozgun/metadao",
  },
]

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="About" />

      <div className="flex items-center gap-2">
        <img
          className="h-20 w-20 rounded-full"
          src={"https://avatars.githubusercontent.com/u/16434662?v=4"}
          alt=""
        />
        <h2 className="text-gray-900 dark:text-white font-bold mt-0">
          Building useful web3 experiences.
        </h2>
      </div>

      <h3 className="text-gray-900 dark:text-white font-bold">Who am I?</h3>
      <p className="text-gray-900 dark:text-white">
        I'm Mert, a full-stack developer with experience in building SaaS
        software and web3 experiences.
      </p>
      <p className="text-gray-900 dark:text-white">
        I share things I work on and some gotchas that I learned by trial and
        error on my{" "}
        <Link to="/blog" className="hover:underline">
          <span className="font-bold">blog</span>
        </Link>{" "}
        in a not so consistent basis.
      </p>
      <p className="text-gray-900 dark:text-white">
        Currently, I'm focused on Solana development and I share my progress on{" "}
        <a href="https://twitter.com/m2ozgun" className="hover:underline">
          <span className="font-bold">Twitter</span>.
        </a>
      </p>
      <p className="text-gray-900 dark:text-white">
        Curious about what I am up to? Hit me up on my Twitter or via email, I'm
        always cooking up something.
      </p>

      <h3 className="text-gray-900 dark:text-white font-bold mt-8">Projects</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
        {projects.map(project => (
          <div
            key={project.name}
            className="relative rounded-lg border border-gray-300 bg-white dark:bg-neutral-200 px-6 py-4 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
          >
            <div className="flex-1 min-w-0">
              <a href={project.githubUrl} className="focus:outline-none">
                <p className="text-md font-bold text-gray-900">
                  {project.name}
                </p>
                <p className="text-sm text-gray-500">{project.role}</p>
                <p className="text-sm text-gray-500">Github -{">"}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-gray-900 dark:text-white font-bold mt-8">Contact</h3>
      <div className="text-gray-900 dark:text-white  text-sm leading-4">
        <p>me[at]m2ozgun.com</p>
        <a href="https://github.com/m2ozgun" className="hover:underline">
          <p>Github -{">"}</p>
        </a>
        <a href="https://twitter.com/m2ozgun" className="hover:underline">
          <p>Twitter -{">"}</p>
        </a>
      </div>
    </Layout>
  )
}

export default IndexPage
