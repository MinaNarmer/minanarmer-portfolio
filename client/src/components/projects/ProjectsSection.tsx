import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ChevronRight, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function ProjectsSection() {
  const { t } = useTranslation();
  
  // Define clients with their logos, names, and website URLs
  const clients = [
    {
      name: "Adnoc",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAADeCAMAAAD4tEcNAAAA9lBMVEX///8AP5XsCTgAM5EAIozt7vQANJEAMpEALY8AI4wAOJMAPJQALI8AL48AIYsAM5PrACL0+PrsCTn71NkAKY73q7X6x87V2+gqUqDj5/D96u33pb/++vv3n7f705vG0OL+8/XxZnr5vcb1iJv0gJRKZanwV28AGonP1+YcS5zxXnT83eKfr8+JnMX95+r+7/H4r7z2mKfzeI7vQl3uJUiAksFVa6ttgLfm6vOXpcvtE0DsACutt9S0vtl4ibzvPFnuK0z5wMm/yN5ifLQAFIdzh7spUZ/4tL/1jJ7s7/TtHUZIYqgAC4eHmMRbc7GUpcuNn8ccpv8WAAANDElEQVR4nO1dC3faOBa2nUhJmmV5GEaEBCyDXzCQQMI7mTYhTXtmO5Puzvz/P7MCS7mS7JvpdLpbKN+ZFmLLkT5JV492CQJHF1pSBQgAXOBd1+XdIZC83Q67xaAGSH3jtK7rcm94hxgR4I13XaN7oXXrLWTEgNt013W6O44ZIoLtl51AEUPfZsSAL3ddq7vjmCFNkWvX9borelFmDEXZR9c1uxtmecI6oPSO63ZPXOWyjoBl1zW7H8aQDWNv23XN7oerKJtA/b91XbN7osHMGAivu27jnUHNGMYGRt5TXCpnXbfxzgDsgtrRt6Tv+YQqOXO7buKdUYtUHNz70Oi6iXdGSNPzEW9XdN3CewOoJDEt7HZyQMvjXADvTTeuBNcVpeuK3RtjKQe7FKL2+3RGYq2hAA+VV12bvQXhHKR8UUZnH5yPQNtZ1uvcezr7D/WJiUQnJhKdmEh0YiLRiYlEJyYSnZhIdGIi0YmJRCcmEp2YSHRiItGJiUQnJhLtrP2nxanJlYZTT/vUabCQk1Q6UZlYLTBTk+FkoIlwM3GrmLsYadw1RGEG1FqBa6hdLgR5HXXduVLQrmuyRwQ/WsaNhI8RHt0G3r9YVlWB9qp6OpBPU2CwfFlBxnw3nK7sNeuMrIfLQDfqr8qH2q1QnSAUHadX3Dz55Yvfr16PCTVgZA5FdXDQgcPVcnw1I+xdZjgZ9pLDDzrqzTkwGzJhIoOqm6t2PauWS+v3pM+FjLPOeO3UEYKdH9R2JYuNaFfLjnodRWFKKiWlUV7N1HGbNtfHVTCrfMBhuA4qOylZQaqPLkdGqjpDyBq/oqCCMXsW6u02JwPpS4v4KhcIyXBbcPOFy4iM5qQXfbFQHFcW8aw+SoxSmLBXhDp+vDnPqtNxstCkRLojQZqdHqVhNFZXteMJXuQxbY0Oo50G1M/lO73VoYSSDSxGU63jqT+VyFzlIaqYGUHnUEbaXKC6XZYhyhuXqqhgm7SQTcnA/R6Vj/2oBzFtcCwbqPokTYPpVXM44qhbsQBKjdMNRfRw9xmqtPGBLqYFZqQOzOVFFPF9Z4Z2sTJjqJ5dI9lQSxOmgRFKv+1YuDoYtMqQaVSvzPz5YTH8iLsGJY2pqk7aMOshzV5nnJnGUFvNQcYfJWbYzLX+H1uEqeVbKgUYX5TXRTvNTk+wNDaXN5rNhNB1z7+OaWFDqGwpJ+V2nhmqpttRakhmZPXFlhCqqOKbVLJdOePAMoyBnDWLxBqQGbU1e5jAXHKwYlq4KSf5kMgIFrZDRsIUFUgSG2D+dM+wDsXdwPG7VCYvQupyKP45U8SYmtVzWUSBzH/CglK42YdFZP5wXr4FMJfcwXQ5FfX+xXOZUTB3MYUdnAwVdxG+a5UwBZ9lzMK/E5RKcGIi0YmJRCcmEp2YSHRiItGJiUQnJhKdmEh0YiLRiYlEJyYSnZhIdGIi0a6YSI1KMTbvUoVDM4FfmBBj867dMvGMT9Lhi3jfUZ2YSHRiItHDMpG/q1FikvhLZ0KML6W/ygRvtxfuBn0uJvZzLvtFOJJXSAxTqffFnIfn8+oAxojJXfXzCsRvDZKME0rKgRlXBwqAySzZg6v/7I2LZPJjF+xvXCQBHHdRmA9fJQlInRTng1dJQuCPSooGrhKUPBuDgaukINXnpQoGrZIkGVIpw/QGq5LsuEjCwJkEzh4NVSUpibM4jF/VbKAqSQdNZj8gUB7BZsGgXCV+aeSE9fFG2ZuvcasKmTwPEjlS4IPGrUYvDcuuktb9QgLSF0O2jc9YJYnc95kQnYiZMBHizC32PQ+yOdxI9P2VEW9XxZMPXaZrxX4sTu6PqxQvsjWxB+5/vz1yY+LRRKlH+7OQoL/Kh2ZCd5XPWyUkOjGR6MREov0xqd6wd2O6NV6k5r6Y1IetvLNWPtjXXOr9MTl8c/H5PcZuMvWTdM/XMZaPMbEuv/xyDrFjxvLR3x+/M4zNi+sfVy9CscKI9dfvHz/+9YbNrWZckjNiuDnkGa1fnj+//v7jI0a6STHp4/g7IHrx4eLDh69fqxeTLVNjTNrYxKSjKwlYiyQtM+P3LY9hDEQv3l28eXvx4uv3UdKMImREeVmWpcmyxjIx78w4cCi1M8YTky6Wl9wI9gDjwD4OZx/lB+JiJREvb/1jUj8L7WZ4+QFxJ4zHsYJM3/hg0vyNjPKyM7V4cTESXpZxHMpJL5SvWQZgQw1VGZE7dRXGlP/IqC7Tq/mGJTqwRHvCQXIwmRUmk9REH2IUGL7eJ0GZkdtTXiVQR+O8RNb8MhbvY2NycCyaC50Gj54jxrOEpTIwDi0p6yGIeYWaZxS3/yGqjGdnLnM9Xby4zLYLWzuZrB/yzMhNYRMZOebZznWtlstRUkxc7FWkBNUL0zKIGV/vV6XPeEZ4zYmJRCcmEp2YSJSdiTt7+Whmzh+T0zfvLl4kC6bJmfiMhaPtw+9bHsNIRhp1rP/+/Q/fbCaL1++//DG+OEpfuYZDKGAyMX08vPntFzJK48v8/uXvN8+/jg58HpWDiLiH2X82kZNWNaO8f/n86+txqjEXcVGfNSYDwljJRnXbHUgmczAMwyHcl1tnK7Ov7CbGhJbNJY3uh6I9mfA7u4ltpdjH4bxU9XkwrlLG9QL7ONj84y0Oe8R9fIAbzwpG7ntkEk9nKvkGszgPTYHRvY+9X1GFuVY+3o2LlYxJLLyL04Ri/NrTPXJJB6tZVL6nG/uZ7o51T1M+NnGTaYmXfcuY7WmSKe5IfGIi0YmJRCcmEn1aJpWA+7JVJr6AzLtiMkgmyUdWD8xEFWcXgqMFFD8Q/FhT6lMz8fnmZTFpZ/FeBsQKEwdDVb+4E3fuCOyuTFyBkfuqiIMxaf/O8RvtfCcmOxnT2TlnVCajG25lh1OmXj8t3v/9lR/RXvRBOidqGJWJlXZUKRYNZ//eRGdEH9GkshVklJ2ky2s25+f/SsKqLvJf94T7Zy/KXp5+WjzrE0QRMxDXmGSTMyrIzKB2nzANrQjNaJaWNLHBN7Vns9lHrwOlNvUOuZW6jYirnf2vOSM9mxFsaSrb0vQV2nVtD21VUxHa1dQ03FV6tgDaGl6yULTUFrQhsoTWqmeg80YD2sRmN9SrrVONnknf1iG5XXPcgNR8WLNC7gGibjUbuNbU0yQh2g1oSQiaZKwN6XZD9Taw3aw1NOJLRPw91RveRN1NN9rBhHUBIehBLTpQhWXCzFg0NLLFqlYzHagShgVA0EloQ/+mGQ44NGGb/JJTLqeUO4Nt8jMNomnQjdvNlnFLuZvyHfS+Qs5QVVs7D4aFNkodatuM9XbCrVq3W43/jYkk0A7qVnNDmcAm/RENBrppG5L8Xjc1JeTeMQG1qtZoNRYNxTQU74aZscXMCDTNNIxGwzDEG/omz26Qp+1GQ2t5LcMs3qhtk+lGaHpms9HwvGaD2HEbOIzcuOu5aAttvdGWoN4g3yQzbU9tPPpZlG9MNK2dkXdraZrEHBM8dIQmZGY07R09T1Q9YkbFI1YDnqlJ9j5zDdFPjwkNmtXrpplxhBiHWA3TJxnOqGgtU9I0ukejDW3Z1BsWaJqQWLGu25SJBsSmqa3I0HT7D7sZpyZk2Vq2ZJqSRb6vkQ7xNLON6z0fE7TDyDOJZiQ+QZtECWgaBCK1bRyMRpOoUbNNxqehN4n1aGgt8i7pmLiPMV1j/UJPJPtv09cZcZ2ZcRU8qhnRn9GRuorJHB7VLYqJ7Ot+x1/H8Wfe48i+Tj/9xB1PRyiTf6pG/k9VnZhIdGIi0YmJRCcmEp2YSHRiItGJiUQnJhKdmEj0uZloFWGJ4kyqWqCyzIq8FpPK9iImlZuxnEmgchKlChO/IlpyJgFxKtZLMHEPJwUL6c00GypfRCvOxIKCVUfWcxUqx8MqG9qLmASSLZR9J/aJmQRBqaAVWjUmgvJ5mYSl2qIys0BMJE1cmUnAKoGcjOnFRAINKzZalp+IibAIlkx9Uq6J2vYKWjEm/aHCb3YcMxQJKswkEHTrDkyCwFIYN1QQu3chqf9kTILAjDFBo+SIuoUqMgmElRUrNYpd0ytRyDIxkWyxCpMgWCKuTmSX4/LRVLSKTIJxrEjM1K9bkM84E6+B/QeZ2DalD3cxUYdFqbkXk2BTLExVXbSSq2kWdV1VZxJMLFTIwkDYqv5GJsHc5zTj0UzaDT6jDUmj0/9tHsLkE+LMRKKi5/e7xiA5M5FoCEwEZ58exzvOTCQaApNlF0X5nJmcmXxSJv8DSQ16nQiYbf8AAAAASUVORK5CYII=",
      websiteUrl: "https://www.adnoc.ae/",
    },
    {
      name: "CEPRES",
      logo: "https://cepres.com/wp-content/uploads/2022/03/cepres-logo.svg",
      websiteUrl: "https://cepres.com/"
    },
    {
      name: "Giza Systems",
      logo: "assets/giza-systems.png",
      websiteUrl: "https://www.gizasystems.com/"
    },
    {
      name: "Bnsights",
      logo: "assets/bnsights.png",
      websiteUrl: "https://bnsights.com/"
    },
    {
      name: "Al-Dawaa Pharmacies",
      logo: "assets/al-dawaa.png",
      websiteUrl: "https://www.al-dawaa.com/"
    },
    {
      name: "Microwize Technology",
      logo: "https://www.microwize.com/images/logo.png",
      websiteUrl: "https://www.microwize.com/"
    },
    {
      name: "Vosita",
      logo: "https://play-lh.googleusercontent.com/72pRtYPCsOCDrhsOhSlPG-DhbXiNyPLWnK1jM-bO-9AJUVYrhE9pOnBlRxZ4hIB-FA",
      websiteUrl: "https://vosita.com/"
    },
    {
      name: "Ibn Sina Pharma",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLIQEV95Q-RRBDXl0OeTF60dSxl8yMSXFt3b7CsQ26JQ&s",
      websiteUrl: "https://ibnsina-pharma.com/"
    },
    {
      name: "Cura",
      logo: "https://www.cura.healthcare/img/cura-logo.png",
      websiteUrl: "https://www.cura.healthcare/"
    },
    // Confidential clients card
    {
      name: t("projects.confidential"),
      isConfidential: true,
      tooltipText: t("projects.confidentialTooltip")
    }
  ];
  
  // Client logo card component
  const ClientLogoCard = ({ 
    name, 
    logo, 
    websiteUrl, 
    isConfidential = false,
    tooltipText
  }) => {
    const CardComponent = (
      <Card className="overflow-hidden border border-light-color-darker dark:border-dark-color shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 group flex flex-col items-center justify-center h-28 w-32 min-w-32 bg-white dark:bg-dark-color-deeper">
        <CardContent className="flex flex-col items-center justify-center p-3 h-full space-y-1 w-full">
          {isConfidential ? (
            <div className="flex flex-col items-center justify-center text-center space-y-1">
              <Lock className="h-8 w-8 text-primary-color" />
              <p className="font-medium text-dark-color dark:text-light-color text-xs">{name}</p>
            </div>
          ) : (
            <>
              <p className="font-medium text-dark-color dark:text-light-color text-sm m-0">{name}</p>
            </>
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
  };
  
  return (
    <section id="clients" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-light-color dark:bg-dark-color">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-dark-color dark:text-light-color code-bracket">
          {t("projects.title")}
        </h2>
        <p className="text-lg text-dark-color dark:text-light-color-darker max-w-xl mx-auto">
          {t("projects.description")}
        </p>
      </div>
      
      {/* Client Logo Cards Grid */}
      <div className="relative">
        <div className="overflow-x-auto pb-4 pt-2 client-scroll" style={{ paddingBottom: '15px' }}>
          <div className="flex space-x-4 px-4 py-2" style={{ width: 'max-content', paddingRight: '20px' }}>
            {clients.map((client, index) => (
              <ClientLogoCard 
                key={index} 
                name={client.name} 
                logo={client.logo} 
                websiteUrl={client.websiteUrl}
                isConfidential={client.isConfidential}
                tooltipText={client.tooltipText}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* No More Clients Button */}
    </section>
  );
}
