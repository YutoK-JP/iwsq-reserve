import Image from "next/image";
import '@/app/ui/header.css'

export function Header(){
  return(
    <div className="header-wrapper">
      <Image
        src='/IWSQLogo.svg'
        width={64}
        height={64}
        alt="IW square logo"
        className="header-logo"
      />
      <h2 className="header-title">IWスクエア</h2>
    </div>
  )
}
