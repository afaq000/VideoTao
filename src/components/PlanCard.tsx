import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Icons from "./Icons/Index";
import TickIcon from "./Icons/TickIcon";

type PlanCardProps = {
  title: string;
  description: string;
  price: string;
  details: string;
  features: string[];
  isAnnual: boolean;
  isMiddleCard: boolean;
  annualPrice: number;
};

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  price,
  features,
  isAnnual,
  isMiddleCard,
  annualPrice,
}) => {
  return (
    <div className="w-full p-6 rounded-2xl border-[2px] border-gray-300 shadow-inner bg-white">
      {isMiddleCard && (
        <div className="flex justify-end items-center">
          <span className="bg-[#e3ddfd] min-w-[70px] text-[#5b3cd5] text-[12px] -mt-3 rounded-2xl flex justify-center">
            Popular
          </span>
        </div>
      )}
      <div className="flex gap-4 items-center">
        <h3 className="text-xl font-bold">{title}</h3>
        {isAnnual && (
          <span className="min-w-[100px] bg-yellow-200 rounded-2xl h-5 text-center text-xs flex items-center justify-center text-yellow-600">
            Save $50/year
          </span>
        )}
      </div>
      <p className="text-gray-400 text-4xl font-semibold mt-5">
        $<span className="text-black font-bold">{price} </span>
        <span className="text-gray-400 text-base font-normal">per month</span>
      </p>

      {!isAnnual && (
        <Link
          href={"/"}
          className="hover:underline flex items-center mt-1 text-gray-400"
        >
          Save 20% with yearly{" "}
          <span className="mt-1">
            <Icons />
          </span>
        </Link>
      )}

      {isAnnual && (
        <p className="text-gray-400">Billed annually as ${annualPrice}</p>
      )}

      <div className="mt-4">
        {isMiddleCard ? (
          <Link href={"/"}>
            <Button
              variant="selectPlan"
              className="min-w-[100px] mt-4 h-12 w-full text-lg bg-[#7c3aed] text-white"
            >
              Choose plan
            </Button>
          </Link>
        ) : (
          <Button
            variant="selectPlan"
            className="min-w-[100px] mt-4 h-12 w-full text-lg text-[#7c3aed]"
          >
            Choose plan
          </Button>
        )}
      </div>

      <div className="mt-4">
        <ul>
          {features.map((feature, index) => (
            <li
              key={index}
              className={`flex text-gray-500 text-lg gap-3 items-center ${
                index === 0 ? "font-bold text-gray-700" : ""
              }`}
            >
              <TickIcon /> {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanCard;
