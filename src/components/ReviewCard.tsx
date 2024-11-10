/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface ReviewCardProps {
  name: string;
  title: string;
  avatarUrl: string;
  reviewContent: string;
}


const ReviewCard: React.FC<ReviewCardProps> = ({ name, title, avatarUrl, reviewContent }) => {
  return (
    <div className="w-full">
      <Card className="bg-white w-full">
        <div className="flex items-center pl-4">
          <img
            src={avatarUrl}
            alt={name}
            className="w-10 h-10 bg-red-300 rounded-full"
            width={40}
            height={40}
          />
          <CardHeader>
            <CardTitle className="font-extralight text-gray-600">{name}</CardTitle>
            <CardDescription className="text-gray-300 text-xs">{title}</CardDescription>
          </CardHeader>
        </div>
        <CardContent className="text-gray-400 text-sm font-thin">
          {reviewContent}
        </CardContent>
      </Card>
    </div>
  );
};

export default ReviewCard;
