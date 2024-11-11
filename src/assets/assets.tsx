// Services Page START

interface Section {
  backgroundImage?: string;
  section: string;
  title?: string;
  heading?: string;
  content?: string;
  image?: string;
  buttonText?: string;
  learnMoreLink?: string;
  intro?: string;
  reads?: Array<{
    title: string;
    content: string;
    image: string;
    link: string;
  }>;
  sub?: Array<{
    Point1: string;
    Point2: string;
    Point3: string;
    Point4: string;
  }>;
}

type ServiceContent = Section[];

const servicesData: Record<string, ServiceContent> = {
  printertroubleshooting: [
    {
      section: "Section 1",
      heading: "Printer Troubleshooting", // Only the heading for h1
      backgroundImage: "/printer-service-banner.jpg", // Background image for Section 1
    },
    {
      section: "Section 2",
      heading: "Welcome to Expert Printer Support",
      content:
        "We’re here to help. Having trouble with your printer? Whether it’s a connectivity issue, paper jam, or print quality problem, our expert team is ready to assist. Explore the resources below to find the best way to resolve your printer issues.",
      image:
        "https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_698,h_465/v1555543261/assets/cb/bed1c3-cb3e-4a20-9790-df8c8a2951fc/original/globe_background-01.svg",
    },
    {
      section: "Section 3",
      title: "A letter from our CEO",
      content: "Read about our team’s commitment...",
      buttonText: "Read More!",
      backgroundImage: "/printer-bg-2.jpg",
    },
    {
      section: "Section 4",
      title: "Sustainability",
      content:
        "We are committed to minimizing the environmental impact of printer use. Through our troubleshooting support, we help extend the life of your printers, reducing electronic waste and promoting eco-friendly practices. Choose sustainable solutions with our expert help.",
      image: "/printer-1.jpg",
      learnMoreLink: "#",
    },
    {
      section: "Section 5",
      title: "Explore More Printer Services",
      content:
        "We provide solutions for a variety of printer-related problems. Whether it’s for home or office use, we’ll guide you every step of the way.",
      image: "/printer-2.jpg",
      learnMoreLink: "#",
      sub: [
        {
          Point1: "Wireless Printer Setup: Having trouble connecting your printer wirelessly? We’ll help you set it up smoothly.",
          Point2: "Driver Installation Issues: Missing drivers or installation failures? We’ll troubleshoot it for you.",
          Point3: "Ink & Toner Issues: Get help with replacing cartridges or dealing with low-ink errors.",
          Point4: "Point four",
        },
      ],
    },
    {
      section: "Section 6",
      title: "Explore More Services",
      intro:
        "We’re here to help. Find solutions for all your tech issues in one place. From printer troubleshooting to home appliances support, our team of experts is ready to assist you with quick, reliable solutions.",
      reads: [
        {
          title: "Windows Issues",
          content: "From blue screen errors to slow performance, our team can troubleshoot and resolve any Windows-related issue you’re facing. Let us help you get back to work with a fully functioning system.",
          image: "/window-1.jpg",
          link: "#",
        },
        {
          title: "Outlook PST File Support",
          content: "Don’t lose your valuable emails due to PST file corruption or access issues. Our experts can repair, recover, and restore your Outlook data quickly and efficiently.",
          image: "/1.jpg",
          link: "#",
        },
        {
          title: "Email Support",
          content: "Whether you’re facing problems with sending or receiving emails, managing multiple accounts, or dealing with spam, our experts can provide quick and effective solutions to keep your inbox in order.",
          image: "/email-1.jpg",
          link: "#",
        },
      ],
      buttonText: "Read All!",
    },
  ],

  windowsissues: [
    {
      section: "Section 1",
      heading: "Window Issues", // Only the heading for h1
      backgroundImage: "/window-issue-banner.jpg", // Background image for Section 1
    },
    {
      section: "Section 2",
      heading: "Welcome to Expert Windows Support",
      content:
        "We’re here to help. Facing issues with your Windows system? Whether it’s a blue screen of death, system crash, or a software glitch, our experts can provide the support you need. Explore the resources below to find the best solution for your Windows problems.",
      image:
        "https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_698,h_465/v1555543261/assets/cb/bed1c3-cb3e-4a20-9790-df8c8a2951fc/original/globe_background-01.svg",
    },
    {
      section: "Section 3",
      title: "A letter from our CEO",
      content: "Read about our team’s commitment...",
      buttonText: "Read More!",
      backgroundImage: "/window-bg-2.jpg",
    },
    {
      section: "Section 4",
      title: "Sustainability 2",
      content:
        "By helping you resolve Windows issues quickly and efficiently, we minimize the need for new hardware or unnecessary replacements. This aligns with our goal of promoting sustainable digital practices.",
      image: "/window-1.jpg",
      learnMoreLink: "#",
    },
    {
      section: "Section 5",
      title: "Explore More Windows Services",
      content:
        "We provide comprehensive Windows support to ensure your system runs smoothly, saving you time and frustration.",
      image: "/window-2.jpg",
      learnMoreLink: "#",
      sub: [
        {
          Point1: "Windows Installation: Need help with reinstalling or upgrading Windows? We’ve got you covered.",
          Point2: "Security & Virus Removal: Dealing with malware or security threats? We’ll secure your system.",
          Point3: "Slow Performance Fixes: Is your Windows system running slow? We’ll help optimize it.",
          Point4: "Point four",
        },
      ],
    },
    {
      section: "Section 6",
      title: "Explore More Services",
      intro:
        "We’re here to help. Find solutions for all your tech issues in one place. From printer troubleshooting to home appliances support, our team of experts is ready to assist you with quick, reliable solutions.",
      reads: [
        {
          title: "Printer Troubleshooting",
          content: "Whether it’s a paper jam, connectivity issue, or an error message that just won’t go away, our experts will help you fix it in no time. Get real-time support for all your printer problems.",
          image: "/printer-1.jpg",
          link: "#",
        },
        {
          title: "Outlook PST File Support",
          content: "Don’t lose your valuable emails due to PST file corruption or access issues. Our experts can repair, recover, and restore your Outlook data quickly and efficiently.",
          image: "/1.jpg",
          link: "#",
        },
        {
          title: "Email Support",
          content: "Whether you’re facing problems with sending or receiving emails, managing multiple accounts, or dealing with spam, our experts can provide quick and effective solutions to keep your inbox in order.",
          image: "/email-1.jpg",
          link: "#",
        },
      ],
      buttonText: "Read All!",
    },
  ],
  outlookpstfilesupport: [
    {
      section: "Section 1",
      heading: "Outlook PST File Support", // Only the heading for h1
      backgroundImage: "/outlook-pst-banner.jpg", // Background image for Section 1
    },
    {
      section: "Section 2",
      heading: "Welcome to Expert Outlook PST Support",
      content:
        "We’re here to help. If you’re having trouble accessing your Outlook PST files or experiencing corruption issues, our experts can assist you in recovering and managing your data. Explore the resources below for support.",
      image:
        "https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_698,h_465/v1555543261/assets/cb/bed1c3-cb3e-4a20-9790-df8c8a2951fc/original/globe_background-01.svg",
    },
    {
      section: "Section 3",
      title: "A letter from our CEO",
      content: "Read about our team’s commitment...",
      buttonText: "Read More!",
       backgroundImage: "/3.jpg",
    },
    {
      section: "Section 4",
      title: "Sustainability",
      content:
        "We believe in helping you restore access to vital information without the need for extensive hardware upgrades or third-party software, contributing to greener, more sustainable digital practices.",
      image: "/1.jpg",
      learnMoreLink: "#",
    },
    {
      section: "Section 5",
      title: "Explore More Outlook Services",
      content:
        "From file recovery to organizing large inboxes, we provide expert solutions to make sure you never lose important information.",
      image: "/4.jpg",
      learnMoreLink: "#",
      sub: [
        {
          Point1: "PST File Repair: Recover and repair corrupted PST files with ease.",
          Point2: "Inbox Organization: Get help managing large Outlook accounts.",
          Point3: "Backup & Restoration: Ensure your data is always safe with proper backups.",
          Point4: "Point four",
        },
      ],
    },
    {
      section: "Section 6",
      title: "Explore More Services",
      intro:
        "We’re here to help. Find solutions for all your tech issues in one place. From printer troubleshooting to home appliances support, our team of experts is ready to assist you with quick, reliable solutions.",
      reads: [
        {
          title: "Email Support",
          content: "Whether you’re facing problems with sending or receiving emails, managing multiple accounts, or dealing with spam, our experts can provide quick and effective solutions to keep your inbox in order.",
          image: "/email-2.jpg",
          link: "#",
        },
        {
          title: "Windows Issues",
          content: "From blue screen errors to slow performance, our team can troubleshoot and resolve any Windows-related issue you’re facing. Let us help you get back to work with a fully functioning system.",
          image: "/window-1.jpg",
          link: "#",
        },
        {
          title: "Printer Troubleshooting",
          content: "Whether it’s a paper jam, connectivity issue, or an error message that just won’t go away, our experts will help you fix it in no time. Get real-time support for all your printer problems.",
          image: "/printer-1.jpg",
          link: "#",
        },
      ],
      buttonText: "Read All!",
    },
  ],

  televisionsetup: [
    {
      section: "Section 1",
      heading: "Television Setup", // Only the heading for h1
      backgroundImage: "/television-setup-banner.jpg", // Background image for Section 1
    },
    {
      section: "Section 2",
      heading: "Welcome to Expert TV Setup Support",
      content:
        "We’re here to help. Setting up your new television? Our experts can assist with installation, configuration, and optimizing your viewing experience. Explore the resources below for more information.",
      image:
        "https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_698,h_465/v1555543261/assets/cb/bed1c3-cb3e-4a20-9790-df8c8a2951fc/original/globe_background-01.svg",
    },
    {
      section: "Section 3",
      title: "A letter from our CEO",
      content: "Read about our team’s commitment...",
      buttonText: "Read More!",
      backgroundImage: "/outlook-pst-banner.jpg",
    },
    {
      section: "Section 4",
      title: "Sustainability",
      content:
        "By helping you set up and maintain your television correctly, we ensure that your devices last longer, reducing the need for premature replacements and supporting a more sustainable future.",
      image: "/television-1.jpg",
      learnMoreLink: "#",
    },
    {
      section: "Section 5",
      title: "Explore More TV Services",
      content:
        "We offer comprehensive TV setup and troubleshooting services for all your entertainment needs.",
      image: "/television-2.jpg",
      learnMoreLink: "#",
      sub: [
        {
          Point1: "Wall Mounting Assistance: Need help with mounting your TV on the wall? We’ll guide you.",
          Point2: "Smart TV Setup: Let us help you connect your TV to the internet and configure apps.",
          Point3: "Picture & Sound Calibration: Get the best picture and sound quality with expert calibration.",
          Point4: "Point four",
        },
      ],
    },
    {
      section: "Section 6",
      title: "Explore More Services",
      intro:
        "We’re here to help. Find solutions for all your tech issues in one place. From printer troubleshooting to home appliances support, our team of experts is ready to assist you with quick, reliable solutions.",
      reads: [
        {
          title: "Printer Troubleshooting",
          content: "Whether it’s a paper jam, connectivity issue, or an error message that just won’t go away, our experts will help you fix it in no time. Get real-time support for all your printer problems.",
          image: "/printer-1.jpg",
          link: "#",
        },
        {
          title: "Windows Issues",
          content: "From blue screen errors to slow performance, our team can troubleshoot and resolve any Windows-related issue you’re facing. Let us help you get back to work with a fully functioning system.",
          image: "/window-1.jpg",
          link: "#",
        },
        {
          title: "Outlook PST File Support",
          content: "Don’t lose your valuable emails due to PST file corruption or access issues. Our experts can repair, recover, and restore your Outlook data quickly and efficiently.",
          image: "/1.jpg",
          link: "#",
        },
      ],
      buttonText: "Read All!",
    },
  ],

  emailsupport: [
    {
      section: "Section 1",
      heading: "Email Support", // Only the heading for h1
      backgroundImage: "/email-support-banner.jpg", // Background image for Section 1
    },
    {
      section: "Section 2",
      heading: "Welcome to Expert Email Support",
      content:
        "We’re here to help. Facing issues with your email account? Whether it’s sending errors, spam filtering problems, or difficulties managing multiple accounts, our experts can assist you in resolving email-related issues. Explore the resources below for more information.",
      image:
        "https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_698,h_465/v1555543261/assets/cb/bed1c3-cb3e-4a20-9790-df8c8a2951fc/original/globe_background-01.svg",
    },
    {
      section: "Section 3",
      title: "A letter from our CEO",
      content: "Read about our team’s commitment...",
      buttonText: "Read More!",
      backgroundImage: "/email-bg-2.jpg",
    },
    {
      section: "Section 4",
      title: "Sustainability",
      content:
        "By helping you troubleshoot and maintain your email accounts efficiently, we ensure seamless communication and reduce reliance on external service providers, contributing to a more sustainable, digital-first approach.",
      image: "/email-1.jpg",
      learnMoreLink: "#",
    },
    {
      section: "Section 5",
      title: "Explore More Email Services",
      content:
        "We offer comprehensive support for all types of email issues, making sure you stay connected without interruptions.",
      image: "/email-2.jpg",
      learnMoreLink: "#",
      sub: [
        {
          Point1: "Email Account Setup: Need help configuring your new email account? We’ll guide you through it.",
          Point2: "Spam Filter Assistance: Tired of dealing with spam? We’ll help you set up efficient spam filters.",
          Point3: "Multiple Account Management: Having trouble managing multiple email accounts? We’ll provide the best solutions for seamless access.",
          Point4: "Point four",
        },
      ],
    },
    {
      section: "Section 6",
      title: "Discover More Expert Solutions",
      intro:
        "Explore our range of services designed to resolve your tech challenges. From printers to email support, we’ve got you covered with expert assistance every step of the way.",
      reads: [
        {
          title: "Printer Troubleshooting",
          content: "Whether it’s a paper jam, connectivity issue, or an error message that just won’t go away, our experts will help you fix it in no time. Get real-time support for all your printer problems.",
          image: "/printer-1.jpg",
          link: "#",
        },
        {
          title: "Windows Issues",
          content: "From blue screen errors to slow performance, our team can troubleshoot and resolve any Windows-related issue you’re facing. Let us help you get back to work with a fully functioning system.",
          image: "/window-1.jpg",
          link: "#",
        },
        {
          title: "Outlook PST File Support",
          content: "Don’t lose your valuable emails due to PST file corruption or access issues. Our experts can repair, recover, and restore your Outlook data quickly and efficiently.",
          image: "/1.jpg",
          link: "#",
        },
      ],
      buttonText: "Read All!",
    },
  ],
};

export default servicesData;

// Services Page END
