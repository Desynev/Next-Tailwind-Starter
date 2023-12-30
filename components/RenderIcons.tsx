import React from "react";

interface IconContainerProps {
  icon?: React.ReactNode;
}

export const IconContainer: React.FC<IconContainerProps> = ({ icon }) => {
  return <div className="flex-col mx-2 bg-gray-200 h-12 w-16">{icon}</div>;
};
