import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n4xh2mc", // Your Service ID
        "template_0r1wajc", // Your Template ID
        form.current!, // Form reference
        "2HOZeWsytsVwS6M7s" // Your Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          toast({
            title: "Message sent!",
            description: "Thanks for reaching out. I'll get back to you soon.",
          });

          // Reset the form after a successful submission
          form.current?.reset();
        },
        (error) => {
          console.error("Error sending message:", error);
          toast({
            title: "Error sending message",
            description: "Something went wrong. Please try again later.",
          });
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700">
                  janardhanchikale@gmail.com
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700">+91 9527553202</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700">
                  Dehu Phata Alandi, Pune-412105
                </span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/janardhan022001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 p-2 rounded-full text-white hover:bg-blue-800 transition"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/janardhan-chikale-702175306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 p-2 rounded-full text-white hover:bg-blue-800 transition"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="https://www.instagram.com/janardhanchikale/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 p-2 rounded-full text-white hover:bg-blue-800 transition"
                >
                  <FaInstagram size={30} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="user_name"
                  placeholder="Your Fullname"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  name="user_email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full resize-none"
                />
              </div>
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 w-full"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
