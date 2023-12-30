import React from "react";

// export const Label = () => {
//   return (
//     <div className="w-1/2">
//       <div className="bg-emerald-200 w-full h-[100px] flex items-center justify-center rounded-md">
//         <span className="text-emerald-700 text-lg font-semibold">
//           10% New Year Offer
//         </span>
//       </div>
//     </div>
//   );
// };

// import clsx from "clsx";

type LabelProps = {
  fontColor?:
    | "text-white"
    | "black"
    | "text-violet-600"
    | "text-green-600"
    | "text-yellow-500";
  bgColor?:
    | "bg-green-100"
    | "bg-red-300"
    | "bg-blue-300"
    | "bg-yellow-100"
    | "bg-violet-200"
    | "bg-gray-300";
  text: string;
};

export const Label: React.FC<LabelProps> = ({
  fontColor = "white",
  bgColor = "green",
  text = "Best in UAE",
}) => {
  return (
    <p
      className={`px-5 mr-2  rounded-sm w-fit ${fontColor} ${bgColor} font-bold`}
    >
      {text}
    </p>
  );
};
