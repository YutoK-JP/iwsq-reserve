import Image from "next/image";

export function Header(){
  return(
    <div>
      <Image
        src='../../public/IWSQLogo_simple.svg'
        width={320}
        height={320}
        alt="IW square logo"
      />
    </div>
  )
}
