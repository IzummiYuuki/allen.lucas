import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row gap-5 justify-between items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Allen James Lucas. All rights reserved.
        </p>

        <a
          href="#hero"
          aria-label="Back to top"
          className="p-2.5 rounded-full border border-border bg-primary/5 hover:bg-primary/10 hover:border-primary/40 text-primary transition-all duration-300"
        >
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
};