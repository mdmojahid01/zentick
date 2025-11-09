import { AuthForm } from "@/components/auth";
import { authPageContent } from "@/constant/auth";
import { CheckCircle } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function AuthPage() {
  const { leftSection, rightSection, footer } = authPageContent;

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Dotted Background with Content */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary dark:bg-card relative overflow-hidden">
        {/* Dotted Pattern Background */}
        <div
          className="absolute inset-0 opacity-10 dark:opacity-0"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
        <div
          className="absolute inset-0 opacity-0 dark:opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center px-12 text-primary-foreground dark:text-card-foreground w-full">
          <div className="max-w-md space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">{leftSection.title}</h1>
              <p className="text-xl font-medium opacity-90">
                {leftSection.subtitle}
              </p>
              <p className="opacity-80 leading-relaxed">
                {leftSection.description}
              </p>
            </div>

            <div className="space-y-4">
              {leftSection.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 opacity-90" />
                  <span className="text-base opacity-90">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Auth Form */}
      <div className="flex-1 flex flex-col">
        {/* Theme Toggle */}
        <div className="flex justify-end p-4">
          <ThemeToggle />
        </div>
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold">{rightSection.title}</h2>
              <p className="text-muted-foreground">{rightSection.subtitle}</p>
            </div>
            <AuthForm />
          </div>
        </div>

        {/* Footer */}
        <footer className="p-6 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">{footer.copyright}</p>
            <div className="flex space-x-6">
              {footer.links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
