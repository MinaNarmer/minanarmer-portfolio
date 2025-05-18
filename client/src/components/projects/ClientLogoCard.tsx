import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ClientLogoCardProps {
  name: string;
  logo: string;
  websiteUrl?: string;
  isConfidential?: boolean;
  tooltipText?: string;
}

export default function ClientLogoCard({ 
  name, 
  logo, 
  websiteUrl, 
  isConfidential = false,
  tooltipText
}: ClientLogoCardProps) {
  const CardComponent = (
    <Card className="overflow-hidden border border-light-color-darker dark:border-dark-color shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 group flex items-center justify-center h-40 bg-white dark:bg-dark-color-deeper">
      <CardContent className="flex items-center justify-center p-6 h-full">
        {isConfidential ? (
          <div className="flex flex-col items-center justify-center text-center space-y-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-primary-color"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <p className="font-medium text-dark-color dark:text-light-color">{name}</p>
          </div>
        ) : (
          <img 
            src={logo} 
            alt={`${name} logo`} 
            className="max-h-24 max-w-full object-contain filter transition-all duration-300 dark:invert-[.25] dark:brightness-90"
          />
        )}
      </CardContent>
    </Card>
  );

  // If there's a tooltip and it's confidential, wrap it in a tooltip
  if (tooltipText && isConfidential) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {websiteUrl ? (
              <a href={websiteUrl} target="_blank" rel="noopener noreferrer" aria-label={name} className="block">
                {CardComponent}
              </a>
            ) : (
              CardComponent
            )}
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltipText}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  // If there's a website URL but no tooltip/not confidential
  if (websiteUrl) {
    return (
      <a href={websiteUrl} target="_blank" rel="noopener noreferrer" aria-label={name} className="block">
        {CardComponent}
      </a>
    );
  }

  // Default case - just return the card
  return CardComponent;
}