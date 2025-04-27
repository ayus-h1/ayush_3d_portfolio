import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    ros,
    python,
    C,
    chatgpt,
    R, 
    react,
    ecocar,
    roshumble,
    sld,
    recycling,
    westinghouse,
    NET,
    CCPPCS,
  } from "../assets";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Control Systems",
      icon: web,
    },
    {
      title: "Embedded systems",
      icon: mobile,
    },
    {
      title: "Battery cells and Autonomous Vehicles(Computer Vision)",
      icon: backend,
    },
    {
      title: "Electrical Design",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "React",
      icon: react,
    },
    {
      name: ".NET",
      icon: NET,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "ROS2",
      icon: ros,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "C/C++/C#",
      icon: CCPPCS,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Controls Software Development Co-op",
      company_name: "Westinghouse Electric Company (Nuclear)",
      icon: westinghouse,
      iconBg: "#383E56",
      date: "May 2024 - August 2025",
      points: [
        "Built Electrical test bench for motor control, load testing and control software development.",
        "Designing and programming the full front, back end and controls intrastrucure using .NET MVVM Syncfusion and firmware libraries.",
      ],
    },
    {
      title: "Connected and Automated vehicles team member ",
      company_name: "Ecocar - EV Challange",
      icon: ecocar,
      iconBg: "#383E56",
      date: "September 2022 - September 2024",
      points: [
        "Achieved 1st place in the competition for feature study and software stack development of ADAS features.",
        "Configured and optimized software for point painting through caliberation and noise filtering enhancing accuracy.",
        "Performed mathematical modelling of environment using automotive LIDAR’s, cameras and other sensors on test tracks contributing to autonomous research.",
      ],
    },
    {
      title: "VP Internal",
      company_name: "Mcmaster Comeptitive Programming",
      icon: mobile,
      iconBg: "#383E56",
      date: "July 2023 - May 2024",
      points: [
        "Conducted 3+ training workshops, covering 15+ programming concepts, to elevate engagement and participation in competitive programming contests",
        "Learning competitve programming to improve my logical thinking ",
      ],
    },
    {
      title: "Cell Characterization Simulation Lead",
      company_name: "Battery Work Force Challenge",
      icon: mobile,
      iconBg: "#E6DEDD",
      date: "May 2024 - December 2024",
      points: [
        "Achieved 1st place for year 1 cell characterization report for research and test plan.",
        "Built battery tests to generate useful and critical data and profiles for SOC and SOH estimation.",
        "Transitioning to BMS software role, to work on cell balancing. (Cell Characterization work completed for the competition.)"
      ],
    },  
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ROS2 TurtleSim",
      description:
        "Made a simulation game which uses functionalies used on existing real robots like PID controller for line following and leveraging use of multiple nodes.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "bash scripting",
          color: "pink-text-gradient",
        },
      ],
      image: roshumble,
      source_code_link: "https://github.com/ayus-h1/ROS2-Turtlesim-Project-",
    },
    {
      name: "Recycling System Automation Project",
      description:
        "Interfaced Raspberry Pi with Quanser virtual environment to develop waste sorting algorithm in Python, optimizing waste segregation. Later deployed it on robotic arms and movers.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "sensors",
          color: "green-text-gradient",
        },
        {
          name: "robots",
          color: "pink-text-gradient",
        },
      ],
      image: recycling,
      source_code_link: "https://github.com/ayus-h1/Recycling-automation-project",
    },
    {
      name: "Sequential 7 Segment Display",
      description:
        "Used sequential logic design to convert student number to decimal output on 7-seg display.Made a physical circuit using gates and flip-flops."
        ,
      tags: [
        {
          name: "Sequential logic design",
          color: "blue-text-gradient",
        },
        {
          name: "digital circuits",
          color: "green-text-gradient",
        },
      ],
      image: sld,
      source_code_link: "https://github.com/ayus-h1/Sequential-7-segment-display",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };