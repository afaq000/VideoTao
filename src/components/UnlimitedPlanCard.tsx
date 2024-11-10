import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';

interface Props {
  title: string;
  cardClassName?: string;
}

const UnlimitedPlanCard: React.FC<Props> = ({ title, cardClassName }) => {
  return (
    <div className='w-full'>
    <Card className={`bg-white w-full ${cardClassName}`}>
      <CardHeader className="flex flex-col">
        <CardTitle className="text-lg font-medium text-gray-700">{title}</CardTitle>
        <CardDescription className="text-gray-400 text-base">Unlimited in all plans</CardDescription>
      </CardHeader>
    </Card>
    </div>
  );
};

export default UnlimitedPlanCard;
