"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`group relative rounded-xl border border-black/6 bg-white p-6 [transition:transform_200ms_cubic-bezier(0.23,1,0.32,1),box-shadow_200ms_cubic-bezier(0.23,1,0.32,1)] [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-0.5 [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_8px_24px_-12px_rgba(17,24,39,0.12)] ${className}`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#D97706]/8 text-[#D97706]">
        <Icon size={20} />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-neutral-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-black/65">{description}</p>
    </div>
  );
}

export default FeatureCard;
