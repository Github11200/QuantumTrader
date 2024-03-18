import * as React from "react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Image from "next/image";

interface CardInfo {
    cardTitle: string;
    cardContent: string;
    cardImage: string;
}

export function InfoCard({ cardTitle, cardContent, cardImage }: CardInfo) {
  return (
    <Card className="w-[80%] p-[2%]">
      <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image src={cardImage} width={500} height={500} alt="placeholder???" className="rounded-[var(--radius)] mb-7" />
        {cardContent}
      </CardContent>
    </Card>
  )
}
