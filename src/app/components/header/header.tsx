import Image from 'next/image'
import "./header.scss"

export function Header(){
    return(
        <div className="header">
        <div>
          <h1>Olá, eu sou a Maria Clara</h1>
          <h2>Front-end Developer</h2>
        </div>
        <Image
          src="/eu.jpeg"
          alt="Vercel Logo"
          width={260}
          height={277}
          priority
        />
      </div>
    )
}