import Image from 'next/image'
import React from 'react'

interface ContactInfo {
    icon: string,
    text: string,
    link: string
}

export default function ContactBox({ icon, text, link }: ContactInfo) {
  return (
    <div>
        <Image src={icon} height={500} width={500} />
    </div>
  )
}
