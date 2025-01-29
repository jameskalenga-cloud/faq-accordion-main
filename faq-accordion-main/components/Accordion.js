import Image from "next/image";
import React, { useState } from "react";

const Accordion = () => {
    const items = [
        {
            title: "What is Frontend Mentor, and how will it help me?",
            description: `Frontend Mentor offers realistic coding challenges to help developers improve their 
                        frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
                        all levels and ideal for portfolio building.`
        },
        {
            title: "Is Frontend Mentor free?",
            description: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
                        option providing access to a range of projects suitable for all skill levels.`
        },
        {
            title: "Can I use Frontend Mentor projects in my portfolio?",
            description: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
                        way to showcase your skills to potential employers!`
        },
        {
            title: "How can I get help if I'm stuck on a challenge?",
            description: `The best place to get help is inside Frontend Mentor's Discord community. There's a help 
                        channel where you can ask questions and seek support from other community members.`
        }
    ];

    // Store the index of the currently open accordion
    const [openIndex, setOpenIndex] = useState(null);

    // Function to toggle a specific accordion
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="accordion">

            <div className="header_part">
                <Image className="img" alt="star" width={30} height={30} src="/icon-star.svg"></Image>
                <p className="title">FAQs</p>
            </div>
            {items.map((item, index) => (
                <div key={index} className="accordion_">
                    <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                        <p> {item.title} </p>
                        <Image src= {openIndex === index ? "/icon-minus.svg" : "/icon-plus.svg"} alt="star or minus" width={20} height={20}></Image>
                    </div>
                    {openIndex === index && (
                        <div className="accordion-content">
                            {item.description}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
