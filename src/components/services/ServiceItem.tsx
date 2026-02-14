import { Link } from "react-router-dom";

interface ServiceItemProps {
  name: string;
  price: string;
  description?: string;
  duration?: string;
  categorySlug: string;
}

const ServiceItem = ({
  name,
  price,
  description,
  duration,
  categorySlug,
}: ServiceItemProps) => {
  const bookingUrl = `/booking?service=${categorySlug}&treatment=${encodeURIComponent(name)}`;
  const isQuotePrice = price.toLowerCase().includes("send");

  return (
    <Link
      to={bookingUrl}
      className="group flex items-center justify-between py-4 border-b border-border/40 last:border-b-0 hover:border-primary/20 transition-colors duration-300 cursor-pointer"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2">
          <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
            {name}
          </span>
          {duration && (
            <span className="text-xs text-muted-foreground/60">
              · {duration}
            </span>
          )}
        </div>
        {description && (
          <p className="text-sm text-muted-foreground/70 mt-0.5 line-clamp-1">
            {description}
          </p>
        )}
      </div>

      <div className="flex items-center gap-3 ml-4 shrink-0">
        <span className={`font-semibold text-sm ${isQuotePrice ? "text-muted-foreground italic" : "text-primary"}`}>
          {price}
        </span>
        <svg
          className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
};

export default ServiceItem;
