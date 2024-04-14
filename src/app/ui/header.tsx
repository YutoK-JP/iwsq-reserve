import Image from "next/image";
import '@/app/ui/header.css'

type Props = {
  subtitle: string
}

export function Header({subtitle}:Props){
  return(
    <div>
      <div className="header-wrapper">
        <Image
          src='/IWSQLogo.svg'
          width={54}
          height={54}
          alt="IW square logo"
          className="header-logo"
        />
        <h2 className="header-title">IWスクエア ｜ {subtitle}</h2>
      </div>
      <hr />
    </div>
  )
}
