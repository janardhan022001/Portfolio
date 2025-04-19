import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);

  const projects = [
    {
      title: "Document Storage and Verification using Blockchain",
      description: `
        This project implements a secure and decentralized system for <strong>document storage and verification</strong> using <strong>blockchain technology</strong>. It ensures <strong>integrity</strong>, <strong>authenticity</strong>, and <strong>tamper-proof</strong> nature of documents.<br/>
        <strong>Key Features:</strong>
         <strong>Document Upload and Storage:</strong> Upload documents through a web interface. Metadata and hash are recorded on the blockchain.
         <strong>Blockchain Integration:</strong> Custom blockchain in Java to store hashes in a distributed ledger format.
         <strong>Verification Mechanism:</strong> Verifies document authenticity via hash comparison.
         <strong>Tamper Detection:</strong> Detects any changes via hash mismatch.
         <strong>User-Friendly Interface:</strong> Built using HTML, CSS, and JavaScript.<br/>
        <strong>Tech Stack:</strong>
         <strong>Frontend:</strong> HTML, CSS, JavaScript
         <strong>Backend:</strong> Java (Servlets and JSP)
         <strong>IDE:</strong> Eclipse
         <strong>Server:</strong> Apache Tomcat
         <strong>Database:</strong> HideSQL
         <strong>Blockchain:</strong> Custom-built in Java<br/>
        <strong>Blockchain Highlights:</strong>
         Each block has a document hash, timestamp, and previous block’s hash.
         Proof-of-concept for decentralized verification without third-party.
         Scalable for real-world applications.<br/>
        <strong>Learning Outcomes:</strong>
         Practical understanding of blockchain implementation.
         Secure document handling & hash-based validation.
         Full-stack development experience.
      `,
      images: [
        "/src/assets/Blockchain-1.png",
        "/src/assets/Blockchain-2.png",
        "/src/assets/Blockchain-3.png",
      ],
      demoLink: "#",
      repoLink: "#",
    },
    {
      title: "Real-Time Chat App",
      description: `
        This project is a feature-rich <strong>real-time chat application</strong> built with <strong>React.js</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong>, and <strong>Socket.IO</strong>, enabling <strong>instant messaging</strong> between users with <strong>real-time updates</strong>, <strong>persistent chat history</strong>, and a <strong>clean, responsive UI</strong>.<br/>
        <strong>Key Features:</strong>
         <strong>User Authentication:</strong> Sign up and login functionality using secure password hashing and JWT tokens.
         <strong>Real-Time Messaging:</strong> Messages are instantly delivered and received using <strong>Socket.IO</strong>.
         <strong>Chat Rooms / Direct Messages:</strong> Support for one-to-one chats and dynamic chat rooms.
         <strong>Message Persistence:</strong> All conversations are stored in <strong>MongoDB</strong>, allowing users to revisit old chats.
         <strong>Typing Indicators:</strong> Real-time indicators show when the other user is typing.
         <strong>Online Status:</strong> Displays which users are currently online or offline.
         <strong>Responsive Design:</strong> Fully responsive UI using <strong>ReactJS</strong> and modern CSS, optimized for both desktop and mobile devices.<br/>
        <strong>Tech Stack:</strong>
         <strong>Frontend:</strong> React.js
         <strong>Backend:</strong> Node.js
         <strong>Real-Time Communication:</strong> Socket.IO
         <strong>Database:</strong> MongoDB with Mongoose ODM
         <strong>Authentication:</strong> JWT + bcrypt<br/>
        <strong>Learning Outcomes:</strong>
         Built a full-stack real-time application with <strong>bidirectional event-based communication</strong>.
         Gained hands-on experience with <strong>Socket.IO integration</strong>, <strong>REST APIs</strong>, and <strong>WebSockets</strong>.
         Learned to handle <strong>state synchronization</strong>, <strong>database modeling</strong>, and <strong>user session management</strong> effectively.
      `,
      images: [
        "/src/assets/ChatApp-1.png",
        "/src/assets/ChatApp-2.png",
        "/src/assets/ChatApp-3.png",
        "/src/assets/ChatApp-4.png",
        "/src/assets/ChatApp-5.png",
        "/src/assets/ChatApp-6.png",
        "/src/assets/ChatApp-7.png",
      ],
      demoLink: "#",
      repoLink: "#",
    },
    {
      title: "Emojify – Create emoji with Deep Learning",
      description: `
        Emojify is a deep learning-based project that detects facial expressions and overlays an appropriate emoji on the user's face in real time. Using a <strong>Convolutional Neural Network (CNN)</strong>, this system classifies expressions into seven categories: Happy, Angry, Disgusted, Sad, Neutral, Fearful, and Surprised. The emoji matching the detected emotion is superimposed on the user's face using OpenCV. <br/>
        <strong>Key Features:</strong>
         <strong>Facial Emotion Recognition:</strong> Utilizes CNN for classifying facial expressions into seven categories.
         <strong>Real-Time Emoji Overlay:</strong> Emoji corresponding to the detected emotion is added to the live video stream.
         <strong>Dataset:</strong> FER-2013 dataset from Kaggle used for training the model.
         <strong>Real-Time Processing:</strong> Uses OpenCV for efficient real-time processing of the webcam feed.
         <strong>High Accuracy:</strong> Achieved an accuracy of 95% after training with optimized parameters.<br/>
        <strong>Tech Stack:</strong>
         <strong>Deep Learning:</strong> Convolutional Neural Network (CNN) with Keras
         <strong>Real-Time Processing:</strong> OpenCV
         <strong>Frontend:</strong> Python
         <strong>Dataset:</strong> FER-2013 dataset<br/>
        <strong>Learning Outcomes:</strong>
         Gained hands-on experience in implementing facial emotion recognition using deep learning.
         Learned how to train and optimize CNN models for image classification.
         Worked on integrating deep learning models with real-time systems (OpenCV).
      `,
      images: [
        "/src/assets/emoji-1.png",
        "/src/assets/emoji-2.png",
        "/src/assets/emoji-3.png",
        "/src/assets/emoji-4.png",
        "/src/assets/emoji-5.png",
        "/src/assets/emoji-6.png",
        "/src/assets/emoji-7.png",
      ],
      demoLink: "#",
      repoLink: "#",
    },
  ];

  const containerRefs = useRef([]);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  useEffect(() => {
    const intervals = projects.map((project, idx) => {
      const ref = containerRefs.current[idx];
      if (!ref) return;

      let index = 0;
      const totalImages = project.images.length;

      const scroll = () => {
        if (!ref) return;
        const width = ref.clientWidth;

        index++;

        ref.scrollTo({
          left: width * index,
          behavior: "smooth",
        });

        if (index === totalImages) {
          setTimeout(() => {
            ref.scrollTo({ left: 0, behavior: "auto" });
            index = 0;
          }, 500);
        }
      };

      return setInterval(scroll, 5000);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [projects]);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Recent Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className={`prose max-w-none text-gray-700 transition-all ${
                    expanded === index ? "" : "line-clamp-6"
                  }`}
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
                <Button
                  variant="link"
                  size="sm"
                  className="text-blue-500 mt-2"
                  onClick={() => toggleExpand(index)}
                >
                  {expanded === index ? "Show Less" : "Read More"}
                </Button>
              </CardContent>
              <div
                ref={(el) => (containerRefs.current[index] = el)}
                className="overflow-hidden w-full h-[18rem] md:h-[22rem] relative bg-black"
              >
                <div className="flex w-full h-full">
                  {[...project.images, project.images[0]].map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt={`${project.title} - Image ${idx + 1}`}
                      className="w-full h-full object-contain flex-shrink-0 bg-white"
                      style={{ minWidth: "100%" }}
                    />
                  ))}
                </div>
              </div>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1 bg-blue-500 text-white hover:bg-blue-600"
                  onClick={handleModalOpen}
                >
                  <ExternalLink size={20} /> Demo
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1 bg-blue-500 text-white hover:bg-blue-600"
                  onClick={handleModalOpen}
                >
                  <Github size={20} /> Code
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="flex flex-col items-center justify-center gap-4 py-8 px-6 text-center max-w-md">
          <div className="w-20 h-20 rounded-full border-4 border-blue-400 flex items-center justify-center">
            <span className="text-blue-400 text-5xl font-bold">i</span>
          </div>
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">
              Coming Soon!
            </DialogTitle>
          </DialogHeader>
          <p className="text-gray-600">This feature will be available soon.</p>
          <Button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={() => setShowModal(false)}
          >
            OK
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
