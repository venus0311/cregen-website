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
      className={`flex flex-col gap-10 max-w-[300px] sm:max-w-[400px] lg:max-w-[550px] text-white ${className}`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-2xl w-2/3 uppercase">{title}</h3>
        {Icon && <Icon />}
      </div>
      <p className="mt-4 text-base font-light leading-relaxed">{description}</p>
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
};

export default ImageCard; 