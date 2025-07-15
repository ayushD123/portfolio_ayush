import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ayushdixit244@gmail.com",
      href: "mailto:ayushdixit244@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9559621930",
      href: "tel:+919559621930",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bangalore, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/ayushdixit244",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/ayushdixit244",
      label: "LinkedIn",
    },
    {
      icon: Code,
      href: "https://leetcode.com/ayushdixit244",
      label: "LeetCode",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-portfolio-primary">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-portfolio-secondary">04.</span> Get In Touch
          </h2>
          <div className="w-24 h-1 bg-portfolio-secondary mx-auto mb-6"></div>
          <p className="text-lg text-portfolio-neutral max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. 
            Feel free to reach out if you'd like to connect!
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glassmorphism p-6 rounded-xl"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-portfolio-secondary/20 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-portfolio-secondary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-portfolio-text-primary">{info.title}</h3>
                      {info.href !== "#" ? (
                        <a
                          href={info.href}
                          className="text-portfolio-neutral hover:text-portfolio-secondary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-portfolio-neutral">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex space-x-4 justify-center"
            >
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-portfolio-secondary/20 rounded-full flex items-center justify-center text-portfolio-secondary hover:bg-portfolio-secondary hover:text-portfolio-primary transition-all duration-300"
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glassmorphism p-6 rounded-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-portfolio-text-primary mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="bg-portfolio-bg-primary border-portfolio-neutral/30 focus:border-portfolio-secondary text-portfolio-text-primary"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-portfolio-text-primary mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="bg-portfolio-bg-primary border-portfolio-neutral/30 focus:border-portfolio-secondary text-portfolio-text-primary"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-portfolio-text-primary mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="bg-portfolio-bg-primary border-portfolio-neutral/30 focus:border-portfolio-secondary text-portfolio-text-primary"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-portfolio-text-primary mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="bg-portfolio-bg-primary border-portfolio-neutral/30 focus:border-portfolio-secondary text-portfolio-text-primary resize-none"
                  placeholder="Tell me about your project or just say hi!"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-portfolio-secondary text-portfolio-primary hover:bg-portfolio-secondary/90 font-medium py-3"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
