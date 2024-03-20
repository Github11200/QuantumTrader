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
    <div className="bg-gradient-to-br from-[#40c9ff9e] to-[#e81cff87] rounded-[var(--radius)] p-0.5 z-10 lg:w-9/12">
        <Card className="w-[100%] z-10 bg-black h-full">
            <CardHeader>
                <CardTitle>{cardTitle}</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={cardImage} width={500} height={500} alt="placeholder???" className="rounded-[var(--radius)] mb-7 mx-auto" />
                {cardContent}
            </CardContent>
        </Card>
    </div>
  )
}
