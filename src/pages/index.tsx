import React, { useState } from "react";
import { useRouter } from "next/router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import PlanCard from "@/components/PlanCard";
import UnlimitedPlanCard from "@/components/UnlimitedPlanCard";
import ReviewCard from "@/components/ReviewCard";

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



  const reviews = [
    {
      name: "Anna Smith",
      title: "Product Manager",
      avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
      reviewContent: "The tool provides incredible results, I find this tool incredibly useful for prototyping and wireframing.  but occasionally it makes small mistakes. Despite this, it has significantly boosted our productivity."
    },
    {
      name: "John Doe",
      title: "Software Engineer",
      avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
      reviewContent: "An amazing tool that saves us a lot of time! I find this tool incredibly useful for prototyping and wireframing.  I find this tool incredibly useful for prototyping and wireframing.  We’ve encountered a few bugs, but they’re minor compared to the overall benefits."
    },
    {
      name: "Sophia Williams",
      title: "UX Designer",
      avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
      reviewContent: "I love the user interface, it's intuitive and simple to use. However, it could use some enhancements in terms of customization."
    },
    {
      name: "David Johnson",
      title: "Data Scientist",
      avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg",
      reviewContent: "The accuracy of the predictions is impressive, I find this tool incredibly useful for prototyping and wireframing. I find this tool incredibly useful for prototyping and wireframing. I find this tool incredibly useful for prototyping and wireframing.  but I would love to see faster processing times. Overall, it's a great addition to our workflow."
    },
    {
      name: "Emma Davis",
      title: "Marketing Director",
      avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
      reviewContent: "We’ve seen a noticeable improvement in our campaigns since implementing this tool. It still has room for growth, but it’s been a game-changerI find this tool incredibly useful for prototyping and wireframing. I find this tool incredibly useful for prototyping and wireframing.  for our team."
    },
    {
      name: "James Wilson",
      title: "Sales Executive",
      avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
      reviewContent: "The tool has made it easier to manage our leads and track performance. It’s not perfect, but it certainly adds a lot of value to our I find this tool incredibly useful for prototyping and wireframing.  daily operations."
    },
    {
      name: "Olivia Brown",
      title: "Customer Success Manager",
      avatarUrl: "https://randomuser.me/api/portraits/women/4.jpg",
      reviewContent: "A powerful tool for increasing efficiency. It’s not without flaws, but the support team is very responsive, which helps address issues quickly."
    },
    {
      name: "Liam Anderson",
      title: "Software Developer",
      avatarUrl: "https://randomuser.me/api/portraits/men/4.jpg",
      reviewContent: "Great product with a lot of potential. There are some minor glitches, but overall, it has improved our I find this tool incredibly useful for prototyping and wireframing.  development process considerably."
    },
    {
      name: "Mia Thomas",
      title: "Content Strategist",
      avatarUrl: "https://randomuser.me/api/portraits/women/5.jpg",
      reviewContent: "It’s an incredibly helpful tool for organizing content. Some features need improvement, but overall, it has made collaboration so much easier."
    },
    {
      name: "William Garcia",
      title: "Operations Manager",
      avatarUrl: "https://randomuser.me/api/portraits/men/5.jpg",
      reviewContent: "A solid tool for streamlining workflows. It still needs some refinement in certain areas, but it’s been a great addition to our processes  I find this tool incredibly useful for prototyping and wireframing.  I find this tool incredibly useful for prototyping and wireframing. ."
    },
    {
      name: "Isabella Martinez",
      title: "HR Specialist",
      avatarUrl: "https://randomuser.me/api/portraits/women/6.jpg",
      reviewContent: "Efficient and easy to use, though there are occasional I find this tool incredibly useful for prototyping and wireframing.  I find this tool incredibly useful for prototyping and wireframing.  bugs that affect performance. Nevertheless, it’s definitely helped improve our team’s productivity."
    },
    {
      name: "Benjamin Lee",
      title: "Product Designer",
      avatarUrl: "https://randomuser.me/api/portraits/men/6.jpg",
      reviewContent: "I find this tool incredibly useful for prototyping and wireframing. I find this tool incredibly useful for prototyping and wireframing. I find this tool incredibly useful for prototyping and wireframing. I find this tool incredibly useful for prototyping and wireframing.  There’s room for improvement in terms of export options, but it’s still a top choice for our design team."
    },
    {
      name: "Charlotte Walker",
      title: "Financial Analyst",
      avatarUrl: "https://randomuser.me/api/portraits/women/7.jpg",
      reviewContent: "A game-changer for data analysis. The tool is powerful, but it could use better data visualization features. Overall, it’s improved our efficiency I find this tool incredibly useful for prototyping and wireframing.  significantly."
    },
    {
      name: "Ethan Scott",
      title: "Project Manager",
      avatarUrl: "https://randomuser.me/api/portraits/men/7.jpg",
      reviewContent: "This tool has streamlined our project management I find this tool incredibly useful for prototyping and wireframing. I find this tool incredibly useful for prototyping and wireframing.  process, but it sometimes has issues with syncing tasks. Despite that, it's been a great asset for our team."
    },
    {
      name: "Ava Harris",
      title: "Creative Director",
      avatarUrl: "https://randomuser.me/api/portraits/women/8.jpg",
      reviewContent: "I appreciate the creative possibilities this tool offers, though some features are more complicated than necessary. I find this tool incredibly useful for prototyping and wireframing.  However, it’s been useful in speeding up workflows."
    }
  ];
  


  const [visibleReviews, setVisibleReviews] = useState(5);  // Initially show 5 reviews

  const handleShowMore = () => {
    setVisibleReviews(prevVisibleReviews => prevVisibleReviews + 5);
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

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-10">

      <UnlimitedPlanCard 
        title="Clips"
      />
      <UnlimitedPlanCard 
        title="Blog posts"
      />
      <UnlimitedPlanCard 
        title="Podcast shownotes"
      />

<UnlimitedPlanCard 
        title="Chapters"
      />

<UnlimitedPlanCard 
        title="Social Posts"
      />

<UnlimitedPlanCard 
        title="Translations"
      />

<UnlimitedPlanCard 
        title="Subtitles"
      />

<UnlimitedPlanCard 
        title="Transcripts"
      />
    </div>

    <div className="w-full mt-28 mb-10">
    <div className="w-full flex flex-wrap justify-center items-center gap-2  space-y-4">
      {reviews.map((review, index) => (
        <>
        <div className="w-[30%]">
        <ReviewCard
          key={index}
          name={review.name}
          title={review.title}
          avatarUrl={review.avatarUrl}
          reviewContent={review.reviewContent}
        />
        </div>
        </>
      ))}
    </div>

    {visibleReviews < reviews.length && (
        // <button 
        //   onClick={handleShowMore} 
        //   className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        //   Show More
        // </button>
        <div className="w-full flex justify-center py-5 mb-20">
        <Button variant={"default"}  onClick={handleShowMore}>
           Show More
        </Button>
        </div>
      )}

    </div>
    </div>
  );
}

export default Index;
