"use client"
import { useState } from "react"
import Image from "next/image"

export default function Boxes() {
  const [activeCard, setActiveCard] = useState<number | null>(1)

  const cards = [
    {
      id: 0,
      icon: <Image src='/Images/Circles.png'
        alt="Circles"
        width={93}
        height={55}
        className="relative left-2"
      />,
      title: "Create smarter templates with built-in legal intelligence",
    },
    {
      id: 1,
      icon: <Image src='/Images/G1.png'
        alt="G1"
        width={51}
        height={60}
        className="relative left-2"
      />,
      title: "Negotiate faster with version tracking and smart suggestions",
    },
    {
      id: 2,
      icon: <Image src='/Images/Tick.png'
        alt="G1"
        width={58}
        height={68}
        className="relative left-2"
      />,
      title: "Approve with automated routing and role-based access",
    },
    {
      id: 3,
      icon: <Image src='/Images/Clock.png'
        alt="Clock"
        width={58}
        height={58}
        className="relative left-2"
      />,
      title: "Renew on time with intelligent reminders and audit-ready trails",
    },
  ]

  const handleCardClick = (cardId: number) => {
    setActiveCard(activeCard === cardId ? null : cardId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br bg-[#FFFFFF] p-4 md:p-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 lg:gap-20 px-4 md:px-8 lg:px-1 justify-center">
          {cards.map((card, index) => {
            const isActive = activeCard === card.id

            return (
              <div
                key={card.id}
                className={`relative group cursor-pointer rounded-3xl transition-transform duration-300 ${isActive ? "scale-105 z-10" : "hover:scale-105"
                  }`}
                onClick={() => handleCardClick(card.id)}
              >
                <div
                  className={`relative rounded-3xl border border-gray-200 shadow-md p-6 md:p-8 flex flex-col items-center text-center min-h-[320px] transition-colors duration-500 ${isActive
                    ? "bg-[#1E1B4B] text-white"
                    : "bg-white text-gray-900 hover:bg-gray-50"
                    }`}
                  style={{ width: "306px" }}
                >
                 
                  <div
                    className={`mb-6 transform transition-transform ${isActive ? "scale-110" : ""
                      }`}
                  >
                    <div className="scale-100 lg:scale-125">{card.icon}</div>
                  </div>

                  
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold leading-tight">
                    {card.title}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
