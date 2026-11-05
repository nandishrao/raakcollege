// Comprehensive Curriculum Frameworks for Bangalore University & VTU Affiliated Colleges

export const vtuBTechCurriculum = {
  university: "VTU (Visvesvaraya Technological University)",
  scheme: "Aligned with VTU NEP/CBCS Credit Framework (160 Credits)",
  eligibility: "10+2 with Physics & Mathematics along with Chemistry / Biotechnology / Computer Science / Electronics",
  programmes: [
    {
      title: "B.Tech in Artificial Intelligence, Robotics & Autonomous Systems",
      code: "VTU-AIRAS-2024",
      semesters: [
        {
          sem: "Semester III",
          credits: "22 Credits",
          courses: [
            { code: "21MAT31", title: "Transform Calculus, Fourier Series & Numerical Techniques", type: "Core Math" },
            { code: "21AI32", title: "Data Structures & Algorithmic Analysis (C++/Python)", type: "Professional Core" },
            { code: "21AI33", title: "Analog & Digital Electronics for Robotics", type: "Integrated Core" },
            { code: "21RO34", title: "Kinematics & Dynamics of Mechanical Mechanisms", type: "Professional Core" },
            { code: "21AIL35", title: "Data Structures & Object-Oriented Lab", type: "Practical Lab" },
            { code: "21ROL36", title: "Robotics Hardware Assembly & Actuator Testing Lab", type: "Practical Lab" },
          ],
        },
        {
          sem: "Semester IV",
          credits: "22 Credits",
          courses: [
            { code: "21MAT41", title: "Mathematical Foundations for Machine Learning", type: "Core Math" },
            { code: "21AI42", title: "Design & Analysis of Algorithms", type: "Professional Core" },
            { code: "21RO43", title: "Microcontrollers & Embedded Systems (ARM/STM32)", type: "Professional Core" },
            { code: "21AI44", title: "Artificial Intelligence & Heuristic Search", type: "Professional Core" },
            { code: "21AIL45", title: "AI Algorithms & Python Optimization Lab", type: "Practical Lab" },
            { code: "21EMBL46", title: "Embedded C & RTOS Interfacing Lab", type: "Practical Lab" },
          ],
        },
        {
          sem: "Semester V",
          credits: "22 Credits",
          courses: [
            { code: "21AI51", title: "Machine Learning & Statistical Pattern Recognition", type: "Professional Core" },
            { code: "21RO52", title: "Robot Operating System (ROS 2) Architecture", type: "Professional Core" },
            { code: "21AI53", title: "Computer Vision & Convolutional Neural Networks", type: "Professional Core" },
            { code: "21PE54X", title: "Professional Elective I: Edge Computing / Drone Avionics", type: "Elective" },
            { code: "21ROSL55", title: "ROS 2 Simulation (Gazebo/RViz) Lab", type: "Practical Lab" },
            { code: "21MLL56", title: "Deep Learning (PyTorch/TensorFlow) Workbench Lab", type: "Practical Lab" },
          ],
        },
        {
          sem: "Semester VI",
          credits: "22 Credits",
          courses: [
            { code: "21AI61", title: "Generative AI, Large Language Models & Agentic AI", type: "Professional Core" },
            { code: "21RO62", title: "Autonomous Navigation, SLAM & Sensor Fusion", type: "Professional Core" },
            { code: "21AI63", title: "Cloud Computing, DevOps & MLOps Pipelines", type: "Professional Core" },
            { code: "21OE64X", title: "Open Elective: Industrial Automation / Smart Grids", type: "Open Elective" },
            { code: "21MLOPL65", title: "Production MLOps & Model Deployment Lab", type: "Practical Lab" },
            { code: "21SLAML66", title: "3D LiDAR Mapping & Mobile Robot Testing Lab", type: "Practical Lab" },
          ],
        },
        {
          sem: "Semester VII",
          credits: "20 Credits",
          courses: [
            { code: "21RO71", title: "Industrial Robotics & 6-DOF Manipulator Automation", type: "Professional Core" },
            { code: "21AI72", title: "Reinforcement Learning & Multi-Agent Robotics", type: "Professional Core" },
            { code: "21PE73X", title: "Professional Elective II: Cyber-Physical Security / Swarm UAVs", type: "Elective" },
            { code: "21PROJ74", title: "Phase-1 Major Capstone Project (Industry Sponsored)", type: "Project" },
            { code: "21INT75", title: "Mandatory Corporate Summer Internship", type: "Internship" },
          ],
        },
        {
          sem: "Semester VIII",
          credits: "18 Credits",
          courses: [
            { code: "21PROJ81", title: "Phase-2 Major Capstone Project Implementation & Defense", type: "Project" },
            { code: "21SEM82", title: "Technical Seminar on Emerging Autonomous Tech", type: "Seminar" },
            { code: "21CERT83", title: "Global Industry Certification Assessment & Audit", type: "Certification" },
          ],
        },
      ],
    },
    {
      title: "B.Tech in Robotics & Drone Systems",
      code: "VTU-RDS-2024",
      semesters: [
        {
          sem: "Semester III to IV (Core Engineering)",
          credits: "44 Credits",
          courses: [
            { code: "21RD31", title: "Aerodynamics & Propulsion Fundamentals", type: "Core" },
            { code: "21RD32", title: "Sensors, Actuators & Motor Speed Controllers (ESC)", type: "Core" },
            { code: "21RD41", title: "Embedded Flight Systems & Telemetry Protocols", type: "Core" },
            { code: "21RD42", title: "CAD Airframe Modelling & Rapid 3D Prototyping", type: "Lab" },
          ],
        },
        {
          sem: "Semester V to VI (UAV Systems & ROS)",
          credits: "44 Credits",
          courses: [
            { code: "21RD51", title: "Drone Design, Flight Dynamics & DGCA Regulations", type: "Core" },
            { code: "21RD52", title: "Autopilot Firmware Programming (PX4 / ArduPilot)", type: "Core" },
            { code: "21RD61", title: "Autonomous UAV Systems, GPS Waypoints & Geofencing", type: "Core" },
            { code: "21RD62", title: "Indoor Netted Flight Testing & Avionics Lab", type: "Practical Lab" },
          ],
        },
        {
          sem: "Semester VII to VIII (Industrial Applications)",
          credits: "38 Credits",
          courses: [
            { code: "21RD71", title: "Aerial Computer Vision & Multi-Spectral Mapping", type: "Core" },
            { code: "21RD72", title: "Swarm Drone Coordination & Wireless Mesh Nets", type: "Core" },
            { code: "21RD81", title: "Industry UAV Capstone Project & DGCA Pilot Logbook", type: "Project" },
          ],
        },
      ],
    },
  ],
};

export const bangaloreUniversityBCACurriculum = {
  university: "Bangalore University (BU)",
  scheme: "Aligned with NEP 2020 BCA Curriculum Structure (Karnataka State Higher Education Council)",
  eligibility: "10+2 / Pre-University Course (PUC) with Mathematics / Computer Science / Statistics / Accountancy",
  programmes: [
    {
      title: "BCA in Artificial Intelligence & Robotics",
      code: "BU-BCA-AIR-2024",
      semesters: [
        {
          sem: "Semester I",
          courses: [
            { code: "BCA101", title: "Computational Thinking & Problem Solving with Python", type: "DSC" },
            { code: "BCA102", title: "Mathematical Foundations for Computer Applications", type: "DSC" },
            { code: "BCA103", title: "Digital Fluency & AI Primer", type: "SEC" },
            { code: "BCA104P", title: "Python Programming & Scripting Lab", type: "Practical" },
          ],
        },
        {
          sem: "Semester II",
          courses: [
            { code: "BCA201", title: "Object Oriented Programming & Data Structures with C++", type: "DSC" },
            { code: "BCA202", title: "Database Management Systems & SQL Analytics", type: "DSC" },
            { code: "BCA203", title: "Introduction to Microcontrollers & Robotics Hardware", type: "OEC" },
            { code: "BCA204P", title: "Data Structures & Robotics Hardware Interfacing Lab", type: "Practical" },
          ],
        },
        {
          sem: "Semester III",
          courses: [
            { code: "BCA301", title: "Machine Learning Foundations & Scikit-Learn", type: "DSC" },
            { code: "BCA302", title: "Full Stack Web Engineering (React / Fastify)", type: "DSC" },
            { code: "BCA303", title: "IoT Protocols & Sensor Networks (MQTT/HTTP)", type: "DSE" },
            { code: "BCA304P", title: "Machine Learning Model Building Lab", type: "Practical" },
          ],
        },
        {
          sem: "Semester IV",
          courses: [
            { code: "BCA401", title: "Deep Learning & Neural Networks (PyTorch)", type: "DSC" },
            { code: "BCA402", title: "Robotics Programming with Python & OpenCV", type: "DSC" },
            { code: "BCA403", title: "Cloud Platforms & Microservices (AWS/Azure)", type: "DSE" },
            { code: "BCA404P", title: "Computer Vision & Robot Arm Automation Lab", type: "Practical" },
          ],
        },
        {
          sem: "Semester V",
          courses: [
            { code: "BCA501", title: "Generative AI, Agentic Workflows & LangChain", type: "DSC" },
            { code: "BCA502", title: "MLOps: CI/CD, Containerization (Docker) & Deployments", type: "DSC" },
            { code: "BCA503", title: "Cyber Security & Data Privacy in AI Systems", type: "DSE" },
            { code: "BCA504P", title: "Generative AI Application Sprints Lab", type: "Practical" },
          ],
        },
        {
          sem: "Semester VI",
          courses: [
            { code: "BCA601", title: "Autonomous Mobile Robots & ROS Programming", type: "DSC" },
            { code: "BCA602", title: "Capstone Major Software & Hardware Project", type: "Project" },
            { code: "BCA603", title: "Institutional Placement & Internship Viva", type: "Internship" },
          ],
        },
      ],
    },
    {
      title: "BCA in Robotics & Drone Technology",
      code: "BU-BCA-RDT-2024",
      semesters: [
        {
          sem: "Semester I & II (Software & Electronic Base)",
          courses: [
            { code: "BCA-RD101", title: "Python & C Programming for Microcontrollers", type: "DSC" },
            { code: "BCA-RD102", title: "Electrical Circuits, PWM Motors & Battery Systems", type: "DSC" },
            { code: "BCA-RD201", title: "Embedded Firmware & RTOS Programming", type: "DSC" },
          ],
        },
        {
          sem: "Semester III & IV (Drone Mechanics & IoT)",
          courses: [
            { code: "BCA-RD301", title: "Drone Programming with MAVLink & DroneKit", type: "DSC" },
            { code: "BCA-RD302", title: "Wireless Sensor IoT & Telemetry Dashboards", type: "DSC" },
            { code: "BCA-RD401", title: "Computer Vision for Aerial Tracking (OpenCV)", type: "DSC" },
            { code: "BCA-RD402P", title: "Drone Simulator & Flight Control Station Lab", type: "Practical" },
          ],
        },
        {
          sem: "Semester V & VI (Autonomous Flight & Capstone)",
          courses: [
            { code: "BCA-RD501", title: "Robot Operating System (ROS 2) for UAVs", type: "DSC" },
            { code: "BCA-RD502", title: "AI-Powered Surveying & Precision Agriculture Flights", type: "DSE" },
            { code: "BCA-RD601", title: "Commercial UAV Capstone Project & Portfolio", type: "Project" },
          ],
        },
      ],
    },
  ],
};

export const schoolStemCurriculum = {
  title: "School & K-12 Experiential STEAM Ecosystem",
  framework: "Aligned with NEP 2020 Experiential STEAM & Atal Tinkering Labs (ATL) Mandates",
  tiers: [
    {
      grade: "Primary (Grades 1 to 5)",
      focus: "Foundational Curiosity & Computational Thinking",
      modules: ["Block Coding (Scratch)", "Basic Electronics & Snap Circuits", "Simple Mechanisms & Gears", "STEAM Paper Prototyping"],
      hardware: "ROSBOTZ Junior Tinker Kits, Scratch Interfacing Hubs",
    },
    {
      grade: "Middle School (Grades 6 to 8)",
      focus: "Embedded Systems, Sensors & Basic Robotics",
      modules: ["Micro:bit & Arduino Essentials", "Sensor Interfacing (Ultrasonic, IR, LDR)", "Line Follower & Obstacle Avoidance Robots", "3D Printing & CAD Basics"],
      hardware: "ROSBOTZ Explorer Rover Kits, 3D Prototyping Stations",
    },
    {
      grade: "High School (Grades 9 to 12 & PU Colleges)",
      focus: "AI, Drone Aerodynamics & IoT Innovation",
      modules: ["Python Programming & Logic", "Mini-Drone Assembly & Flight Physics", "IoT Cloud Telemetry (ESP32)", "Computer Vision Basics & Hackathon Prep"],
      hardware: "ROSBOTZ Quadrotor Drone Kits, AI Edge Cameras, IoT Smart Labs",
    },
  ],
};

