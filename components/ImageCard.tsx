import React from "react";

interface ImageCardProps {
  title: string;
  description: string;
  Icon?: React.FC;
  children?: React.ReactNode;
  className?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  title,
  description,
  Icon,
  children,
  className = "",
}) => {
  return (
    <div
      className={`relative group w-full min-h-40 rounded-b-[30px] rounded-tr-[30px] border-2 border-transparent bg-[#FFFFFF1A] px-6 py-[26px] backdrop-blur-[2px] text-white group-hover:border-2 hover:border-[#B8E43F] transition-colors duration-300 gap-4 ${className}`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-normal w-2/3">{title}</h3>
        {Icon && <Icon />}
      </div>
      <p className="mt-4 text-sm font-light leading-relaxed">{description}</p>
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
};

export default ImageCard; 