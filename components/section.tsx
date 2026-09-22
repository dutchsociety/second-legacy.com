import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
};

export function Section({
  id,
  title,
  description,
  children,
  className,
  narrow,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", className)}
      aria-labelledby={title ? `${id}-heading` : undefined}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-6xl px-6",
          narrow && "max-w-3xl"
        )}
      >
        {(title || description) && (
          <header className="mb-10 md:mb-14 max-w-2xl">
            {title && (
              <h2
                id={id ? `${id}-heading` : undefined}
                className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
              >
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
