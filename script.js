document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        console.log("Currently viewing:", id, "Visible:", entry.isIntersecting);
        const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          if (navLink) navLink.classList.add("active");
        }
      });
    },
    {
      threshold: 0.3, // Reduce threshold if sections are short
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Handle active state on page load (e.g., from #skills in URL)
  const hash = window.location.hash;
  if (hash) {
    const targetLink = document.querySelector(`.nav-link[href="${hash}"]`);
    if (targetLink) {
      navLinks.forEach((link) => link.classList.remove("active"));
      targetLink.classList.add("active");
    }
  }

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    const homeSection = document.getElementById("home");
    const homeBottom = homeSection.getBoundingClientRect().bottom;

    if (homeBottom <= 0) {
      // Scrolled past home
      navbar.style.background = "black";
    } else {
      // Still in home section
      navbar.style.background = "transparent";
    }
  });

  const projects = [
    {
      title: "Document Storage and Verification using Blockchain",
      description: ` This project implements a secure and decentralized system for <strong>document storage and verification</strong> using <strong>blockchain technology</strong>. It ensures <strong>integrity</strong>, <strong>authenticity</strong>, and <strong>tamper-proof</strong> nature of documents.<br/><br/>
        <strong>Key Features:</strong><br/>
         <strong>Document Upload and Storage:</strong> Upload documents through a web interface. Metadata and hash are recorded on the blockchain.<br/>
         <strong>Blockchain Integration:</strong> Custom blockchain in Java to store hashes in a distributed ledger format.<br/>
         <strong>Verification Mechanism:</strong> Verifies document authenticity via hash comparison.<br/>
         <strong>Tamper Detection:</strong> Detects any changes via hash mismatch.<br/>
         <strong>User-Friendly Interface:</strong> Built using HTML, CSS, and JavaScript.<br/><br/>
        <strong>Tech Stack:</strong><br/>
         <strong>Frontend:</strong> HTML, CSS, JavaScript<br/>
         <strong>Backend:</strong> Java (Servlets and JSP)<br/>
         <strong>IDE:</strong> Eclipse<br/>
         <strong>Server:</strong> Apache Tomcat<br/>
         <strong>Database:</strong> HideSQL<br/>
         <strong>Blockchain:</strong> Custom-built in Java<br/><br/>
        <strong>Blockchain Highlights:</strong><br/>
         Each block has a document hash, timestamp, and previous block’s hash.<br/>
         Proof-of-concept for decentralized verification without third-party.<br/>
         Scalable for real-world applications.<br/><br/>
        <strong>Learning Outcomes:</strong><br/>
         Practical understanding of blockchain implementation.<br/>
         Secure document handling & hash-based validation.<br/>
         Full-stack development experience.`,
      images: [
        "images/Blockchain-1.png",
        "images/Blockchain-2.png",
        "images/Blockchain-3.png",
      ],
    },
    {
      title: "Real-Time Chat App",
      description: `  This project is a feature-rich <strong>real-time chat application</strong> built with <strong>React.js</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong>, and <strong>Socket.IO</strong>, enabling <strong>instant messaging</strong> between users with <strong>real-time updates</strong>, <strong>persistent chat history</strong>, and a <strong>clean, responsive UI</strong>.<br/><br/>
        <strong>Key Features:</strong><br/>
         <strong>User Authentication:</strong> Sign up and login functionality using secure password hashing and JWT tokens.<br/>
         <strong>Real-Time Messaging:</strong> Messages are instantly delivered and received using <strong>Socket.IO</strong>.<br/>
         <strong>Chat Rooms / Direct Messages:</strong> Support for one-to-one chats and dynamic chat rooms.<br/>
         <strong>Message Persistence:</strong> All conversations are stored in <strong>MongoDB</strong>, allowing users to revisit old chats.<br/>
         <strong>Typing Indicators:</strong> Real-time indicators show when the other user is typing.<br/>
         <strong>Online Status:</strong> Displays which users are currently online or offline.<br/>
         <strong>Responsive Design:</strong> Fully responsive UI using <strong>ReactJS</strong> and modern CSS, optimized for both desktop and mobile devices.<br/><br/>
        <strong>Tech Stack:</strong><br/>
         <strong>Frontend:</strong> React.js<br/>
         <strong>Backend:</strong> Node.js<br/>
         <strong>Real-Time Communication:</strong> Socket.IO<br/>
         <strong>Database:</strong> MongoDB with Mongoose ODM<br/>
         <strong>Authentication:</strong> JWT + bcrypt<br/><br/>
        <strong>Learning Outcomes:</strong><br/>
         Built a full-stack real-time application with <strong>bidirectional event-based communication</strong>.<br/>
         Gained hands-on experience with <strong>Socket.IO integration</strong>, <strong>REST APIs</strong>, and <strong>WebSockets</strong>.<br/>
         Learned to handle <strong>state synchronization</strong>, <strong>database modeling</strong>, and <strong>user session management</strong> effectively.`,
      images: [
        "images/ChatApp-1.png",
        "images/ChatApp-2.png",
        "images/ChatApp-3.png",
        "images/ChatApp-4.png",
        "images/ChatApp-5.png",
        "images/ChatApp-6.png",
        "images/ChatApp-7.png",
      ],
    },
    {
      title: "Emojify – Create emoji with Deep Learning",
      description: `Emojify is a deep learning-based project that detects facial expressions and overlays an appropriate emoji on the user's face in real time. Using a <strong>Convolutional Neural Network (CNN)</strong>, this system classifies expressions into seven categories: Happy, Angry, Disgusted, Sad, Neutral, Fearful, and Surprised. The emoji matching the detected emotion is superimposed on the user's face using OpenCV. <br/><br/>
        <strong>Key Features:</strong><br/>
         <strong>Facial Emotion Recognition:</strong> Utilizes CNN for classifying facial expressions into seven categories.<br/>
         <strong>Real-Time Emoji Overlay:</strong> Emoji corresponding to the detected emotion is added to the live video stream.<br/>
         <strong>Dataset:</strong> FER-2013 dataset from Kaggle used for training the model.<br/>
         <strong>Real-Time Processing:</strong> Uses OpenCV for efficient real-time processing of the webcam feed.<br/>
         <strong>High Accuracy:</strong> Achieved an accuracy of 95% after training with optimized parameters.<br/><br/>
        <strong>Tech Stack:</strong><br/>
         <strong>Deep Learning:</strong> Convolutional Neural Network (CNN) with Keras<br/>
         <strong>Real-Time Processing:</strong> OpenCV<br/>
         <strong>Frontend:</strong> Python<br/>
         <strong>Dataset:</strong> FER-2013 dataset<br/><br/>
        <strong>Learning Outcomes:</strong><br/>
         Gained hands-on experience in implementing facial emotion recognition using deep learning.<br/>
         Learned how to train and optimize CNN models for image classification.<br/>
         Worked on integrating deep learning models with real-time systems (OpenCV).`,
      images: [
        "images/emoji-1.png",
        "images/emoji-2.png",
        "images/emoji-3.png",
        "images/emoji-3.png",
        "images/emoji-5.png",
        "images/emoji-6.png",
        "images/emoji-7.png",
      ],
    },
  ];

  const container = document.getElementById("projects-container");
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("modal-close-btn");
  projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
    <div class="project-header">
      <h3 class="project-title">${project.title}</h3>
    </div>
    <div class="project-description" id="desc-${index}">
      <div class="desc-text">${project.description}</div>
      <span class="read-more" onclick="toggleExpand(${index})">Read More</span>
    </div>
    <div class="image-slider" id="slider-${index}">
      ${[...project.images, project.images[0]]
        .map((img) => `<img src="${img}" alt="project image" />`)
        .join("")}
    </div>
    <div class="project-footer">
      <button class="btn" onclick="openModal(${index}, 'demo')"><i class="fa-solid fa-arrow-up-right-from-square"></i> Demo</button>
      <button class="btn" onclick="openModal(${index}, 'code')"><i class="fa-brands fa-github"></i> Code</button>
    </div>
  `;

    container.appendChild(card);
    startAutoScroll(index, project.images.length);
  });

  window.toggleExpand = function (index) {
    const desc = document.getElementById(`desc-${index}`);
    const readMoreBtn = desc.querySelector(".read-more");

    desc.classList.toggle("expanded");
    readMoreBtn.textContent = desc.classList.contains("expanded")
      ? "Read Less"
      : "Read More";
  };

  function startAutoScroll(index, totalImages) {
    const slider = document.getElementById(`slider-${index}`);
    if (!slider) return;

    let current = 0;

    // Clone the first slide once
    if (!slider.dataset.cloned) {
      slider.appendChild(slider.children[0].cloneNode(true));
      slider.dataset.cloned = "true";
    }

    const scrollInterval = 5000; // time between slides
    const transitionTime = 500; // must match your smooth scroll duration

    setInterval(() => {
      current++;

      // 1) Smooth scroll to the next slide
      slider.style.scrollBehavior = "smooth";
      slider.scrollTo({
        left: slider.clientWidth * current,
      });

      // 2) If we just scrolled to the cloned slide (end of loop)…
      if (current === totalImages) {
        setTimeout(() => {
          // 3) Disable smooth behavior, snap to the real first slide instantly
          slider.style.scrollBehavior = "auto";
          slider.scrollLeft = 0;

          // 4) Reset counter and re‑enable smooth behavior for the next interval
          current = 0;
          // (smooth behavior will be re‑enabled at the top of the next tick)
        }, transitionTime);
      }
    }, scrollInterval);
  }

  window.openModal = function (index, type) {
    const modal = document.getElementById("modal");
    const modalTitle = document.querySelector(".modal-title");
    const modalText = document.querySelector(".modal-text");

    // Customize title and message based on button clicked
    const project = projects[index];
    if (type === "demo") {
      modalTitle.textContent = "Coming Soon!";
      modalText.textContent = `This feature will be available soon.`;
    } else if (type === "code") {
      modalTitle.textContent = "Coming Soon!";
      modalText.textContent = `This feature will be available soon.`;
    }

    // Show the modal
    modal.classList.remove("hidden");
    modal.classList.add("show");
  };

  // Close modal when "OK" button is clicked
  document.getElementById("modal-close-btn").addEventListener("click", () => {
    const modal = document.getElementById("modal");
    modal.classList.add("hidden");
    modal.classList.remove("show");
  });

  // Optional: Reset scroll on resize
  window.addEventListener("resize", () => {
    document.querySelectorAll(".image-slider").forEach((slider) => {
      slider.scrollTo({ left: 0, behavior: "auto" });
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_n4xh2mc", "template_0r1wajc", this).then(
        function (response) {
          alert("Message sent successfully!");
          document.getElementById("contactForm").reset();
        },
        function (error) {
          console.error("Failed to send:", error);
          alert("Failed to send message. Please try again later.");
        }
      );
    });
});

document.getElementById("year").textContent = new Date().getFullYear();
