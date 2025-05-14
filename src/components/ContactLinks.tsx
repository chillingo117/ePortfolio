import { Github, Linkedin, Mail } from "lucide-react"

const GithubLink: React.FC = () => {
    return <a href="https://github.com/chillingo117" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
    <Github size={24} />
    <span className="sr-only">GitHub</span>
  </a>
}

const LinkedinLink: React.FC = () => {
    return <a href="https://www.linkedin.com/in/wilchen117" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
    <Linkedin size={24} />
    <span className="sr-only">LinkedIn</span>
  </a>
}

const EmailLink: React.FC = () => {
    return <a href="mailto:kiwitwwilliam@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
    <Mail size={24} />
    <span className="sr-only">Email</span>
  </a>
}

export const ContactLinks: React.FC = () => {
    return (
        <div className="flex gap-6 justify-center md:justify-start">
            <GithubLink />
            <LinkedinLink />
            <EmailLink />
        </div>
    )
}