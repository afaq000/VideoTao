import React, { useState } from "react";
import { useRouter } from "next/router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import PlanCard from "@/components/PlanCard";

function Index() {
  const router = useRouter();
  const [activePlan, setActivePlan] = useState("monthly");

  const handleGoBack = () => {
    router.back();
  };

  const Data = {
    monthly: [
      {
        title: "Creator",
        description:
          "Pro plan description goes here. Includes more features for growing businesses.",
        price: "200",
        features: [
          "100 minutes every month",
          "Up to 45 minute videos",
          "Good transcription quality",
          "Good AI content generation",
          "Max resolution: 1080p",
          "0 team members",
          "Priority email support",
        ],
      },
      {
        title: "Crew",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: "100",
        features: [
          "400 minutes every month",
          "Up to 2 hour videos",
          "Better AI content generation",
          "Better transcription quality",
          "Max resolution: 1080p",
          "3 team members",
          "Priority email support",
        ],
      },
      {
        title: "Studio",
        description:
          "Pro plan description goes here. Includes more features for growing businesses.",
        price: "300",
        features: [
          "400 minutes every month",
          "Up to 2 hour videos",
          "Better AI content generation",
          "Better transcription quality",
          "Max resolution: 1080p",
          "3 team members",
          "Priority email support",
        ],
      },
    ],
    annual: [
      {
        title: "Creator",
        description:
          "Pro plan description goes here. Includes more features for growing businesses.",
        price: "2000",
        features: [
          "100 minutes every month",
          "Up to 45 minute videos",
          "Good transcription quality",
          "Good AI content generation",
          "Max resolution: 1080p",
          "0 team members",
          "Priority email support",
        ],
      },
      {
        title: "Crew",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: "1000",
        features: [
          "400 minutes every month",
          "Up to 2 hour videos",
          "Better AI content generation",
          "Better transcription quality",
          "Max resolution: 1080p",
          "3 team members",
          "Priority email support",
        ],
      },
      {
        title: "Studio",
        description:
          "Pro plan description goes here. Includes more features for growing businesses.",
        price: "3000",
        features: [
          "400 minutes every month",
          "Up to 2 hour videos",
          "Better AI content generation",
          "Better transcription quality",
          "Max resolution: 1080p",
          "3 team members",
          "Priority email support",
        ],
      },
    ],
  };

  return (
    <div className="w-full bg-[#FAFAFA]">
      <div className="flex p-4 ">
        <Button variant="ghost" onClick={handleGoBack}>
          <ArrowLeft className="text-gray-400" />
          <p className="text-gray-400">Go Back</p>
        </Button>
      </div>

      <div className={cn("flex justify-center items-center p-3")}>
        <p className="text-black text-4xl font-medium font-sans font-dlig font-ss07">Subscribe and Go Pro</p>
      </div>

      <div className="w-full items-center justify-center flex mt-5">
        <div className="min-w-[150px] px-1 py-1 bg-[#E5E5E5] rounded-full">
          <Button
            variant={activePlan === "monthly" ? "active" : "active"}
            onClick={() => setActivePlan("monthly")}
            className={
              activePlan === "monthly"
                ? "bg-white text-xs text-primary-foreground rounded-full px-10"
                : "text-gray-400 text-xs"
            }
          >
            Monthly
          </Button>
          <Button
            variant={activePlan === "annual" ? "active" : "active"}
            onClick={() => setActivePlan("annual")}
            className={
              activePlan === "annual"
                ? "bg-white text-xs text-primary-foreground rounded-full px-10"
                : "text-gray-400 text-xs"
            }
          >
            Annual{" "}
            <span
              className={
                activePlan === "annual"
                  ? "bg-white text-xs text-primary-foreground text-[10px]"
                  : "text-gray-400  text-[10px]"
              }
            >
              {" "}
              - 2 months free
            </span>
          </Button>
        </div>
      </div>

      <div className="w-full flex space-x-8 mt-6 justify-center">
        {activePlan === "monthly" ? (
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mx-20">
            {Data.monthly.map((plan, index) => (
              <PlanCard
                details={""}
                key={index}
                {...plan}
                isAnnual={false}
                isMiddleCard={index === 1}
                annualPrice={parseInt(plan.price) * 12}
              />
            ))}
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mx-20">
            {Data.annual.map((plan, index) => (
              <PlanCard
                details={""}
                key={index}
                {...plan}
                isAnnual={true}
                isMiddleCard={index === 1}
                annualPrice={parseInt(plan.price) * 12}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Index;
