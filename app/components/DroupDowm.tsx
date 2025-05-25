"use client"
import { useState } from "react"

export default function DroupDowm() {
  const [expandedItem, setExpandedItem] = useState<string | null>("ai-quality")

  const contractFeatures = [
    {
      id: "lifecycle",
      title: "Contract Lifecycle Management",
      content: "Draft, review, approve, store, milestone obligation management—all in one flow.",
    },
    {
      id: "ai-quality",
      title: "AI-Powered Quality Checks",
      content: "Detect clause anomalies, validate inputs, and flag risks instantly.",
    },
    {
      id: "onboarding",
      title: "Onboarding Agreements & KYC",
      content: "Auto-fill forms, verify documents, and ensure compliance—without back-and-forth.",
    },
    {
      id: "renewals",
      title: "Smart Renewals",
      content: "Proactive alerts. Pre-filled templates. Zero missed opportunities.",
    },
    {
      id: "deployment",
      title: "Deployment Options",
      content: "Industry leading security and compliance standards. Private cloud. Fully compliant.",
    },
  ]

  const toggleItem = (itemId: string) => {
    setExpandedItem(expandedItem === itemId ? null : itemId)
  }

  return (
    <div className="w-full max-w-2xl mx-auto lg:mx-0 px-4 lg:px-0">
      <div className="space-y-6 lg:space-y-8">
        {contractFeatures.map((feature) => {
          const isExpanded = expandedItem === feature.id
          const borderColor = isExpanded ? "border-indigo-600" : "border-gray-200 hover:border-gray-300"

          return (
            <div
              key={feature.id}
              className={`border-l-4 ${borderColor} pl-4 py-2 group cursor-pointer transition-all duration-200 ease-in-out`}
              onClick={() => toggleItem(feature.id)}
            >
              <h3 className="font-bold text-xl lg:text-2xl text-gray-900 group-hover:text-gray-700 transition-colors">
                {feature.title}
              </h3>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isExpanded ? "max-h-40 opacity-100 mt-1" : "max-h-0 opacity-0 mt-0"
                }`}
              >
                <p className="text-[#000000] text-sm md:text-base leading-relaxed pr-4">{feature.content}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
