import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Ayush Dixit - Software Engineer Portfolio";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Software Engineer at Oracle specializing in AI-powered solutions, full-stack development, and cloud technologies. View my projects and experience.",
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Software Engineer at Oracle specializing in AI-powered solutions, full-stack development, and cloud technologies. View my projects and experience.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-bg-primary">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-portfolio-bg-primary py-8 border-t border-portfolio-neutral/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <p className="text-portfolio-neutral mb-4">
              Built with ❤️ by Ayush Dixit
            </p>
            <p className="text-portfolio-neutral/60 text-sm">
              © 2025 Ayush Dixit. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
