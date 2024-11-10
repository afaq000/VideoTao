import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card"; // Import your custom Card components
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
    <Card className="w-full rounded-2xl border-[3px] border-gray-200 bg-white ">
      <div className="w-full flex justify-between">
        <div className="h-6" />

        {isMiddleCard && (
          <div className="flex justify-end items-center">
            <span className="bg-[#e3ddfd] min-w-[70px] text-[#5b3cd5] text-[12px] p-1 mt-2 mr-2 rounded-2xl flex justify-center">
              Popular
            </span>
          </div>
        )}
      </div>

      <CardHeader className="flex gap-4 flex-row">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        {isAnnual && (
          <span className="min-w-[100px] bg-yellow-200 rounded-2xl h-5 text-center text-xs flex items-center justify-center text-yellow-600">
            Save $50/year
          </span>
        )}
      </CardHeader>

      <CardContent>
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
      </CardContent>

      <CardFooter className="flex flex-col">
        <div className="w-full">
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
      </CardFooter>
    </Card>
  );
};

export default PlanCard;
