// public/js/dataService.js

// This file now directly provides the data, eliminating the need for a backend API.
// All image paths have been adjusted to be relative to the 'public' directory.

const ALL_APP_DATA = {
  "programs": [
    {
      "id": 1,
      "title": "MBA Entrance Test Preparation",
      "description": "Comprehensive coaching for all major MBA entrance exams, focusing on fundamental concepts and advanced strategies."
    },
    {
      "id": 2,
      "title": "Exclusive Mentoring for CAT, XAT, NMAT, SNAP etc.",
      "description": "Personalized one-on-one and small-group mentoring sessions tailored to individual student needs and target exams."
    }
  ],
  "faculties": [
    {
      "id": 1,
      "name": "Sabyasachi Sarkar",
      "designation": "Highly Experienced Faculty in Test Prep Industry",
      "subjects": [
        "Quantitative Ability",
        "Data Interpretation and Logical Reasoning",
        "Verbal Ability and Reading Comprehension"
      ],
      "image": "assets/images/faculty_soumyadip.jpg"
    }
  ],
  "institutions": [
    {
      "id": 1,
      "name": "Indian Institute of Management Ahmedabad (IIMA)",
      "city": "Ahmedabad",
      "description": "One of India's premier management institutes, renowned for its academic rigor and research.",
      "image": "assets/images/iima.jpg",
      "link": "https://www.iima.ac.in/"
    },
    {
      "id": 2,
      "name": "Indian Institute of Management Bangalore (IIMB)",
      "city": "Bengaluru",
      "description": "Known for its vibrant campus and strong emphasis on entrepreneurship and innovation.",
      "image": "assets/images/iimb.jpg",
      "link": "https://www.iimb.ac.in/"
    },
    {
      "id": 3,
      "name": "Indian Institute of Management Calcutta (IIMC)",
      "city": "Kolkata",
      "description": "The first IIM to be established, famous for its finance and consulting programs.",
      "image": "assets/images/iimc.jpg",
      "link": "https://www.iimcal.ac.in/"
    },
    {
      "id": 4,
      "name": "Indian Institute of Management Lucknow (IIML)",
      "city": "Lucknow",
      "description": "A top-ranked IIM known for its strong academic foundation and diverse programs.",
      "image": "assets/images/iiml.png",
      "link": "https://www.iiml.ac.in/"
    },
    {
      "id": 5,
      "name": "Indian Institute of Management Kozhikode (IIMK)",
      "city": "Kozhikode",
      "description": "Known for its beautiful campus and innovative management programs.",
      "image": "assets/images/iimk.png",
      "link": "https://iimk.ac.in/"
    },
    {
      "id": 6,
      "name": "Indian Institute of Management Indore (IIMI)",
      "city": "Indore",
      "description": "Offers diverse management education with a focus on leadership development.",
      "image": "assets/images/iimi.png",
      "link": "https://www.iimidr.ac.in/"
    },
    {
      "id": 7,
      "name": "Indian Institute of Management Shillong (IIMS)",
      "city": "Shillong",
      "description": "Focuses on sustainable development and business practices in the North-East.",
      "image": "assets/images/iims.png",
      "link": "https://www.iimshillong.ac.in/"
    },
    {
      "id": 8,
      "name": "Indian Institute of Management Udaipur (IIMU)",
      "city": "Udaipur",
      "description": "A new generation IIM known for its research and global outlook.",
      "image": "assets/images/iimu.png",
      "link": "https://www.iimu.ac.in/"
    },
    {
      "id": 9,
      "name": "Indian Institute of Management Tiruchirappalli (IIMT)",
      "city": "Tiruchirappalli",
      "description": "Offers high-quality management education with strong industry ties.",
      "image": "assets/images/iimt.jpeg",
      "link": "https://www.iimtrichy.ac.in/"
    },
    {
      "id": 10,
      "name": "Indian Institute of Management Rohtak (IIM Rohtak)",
      "city": "Rohtak",
      "description": "Known for its academic excellence and programs in management and law.",
      "image": "assets/images/iimr.png",
      "link": "https://www.iimrohtak.ac.in/"
    },
    {
      "id": 11,
      "name": "Indian Institute of Management Ranchi (IIM Ranchi)",
      "city": "Ranchi",
      "description": "Offers PGP and doctoral programs with a focus on management research.",
      "image": "assets/images/iimra.png",
      "link": "https://www.iimranchi.ac.in/"
    },
    {
      "id": 12,
      "name": "Indian Institute of Management Raipur (IIM Raipur)",
      "city": "Raipur",
      "description": "Committed to developing ethical leaders and entrepreneurs.",
      "image": "assets/images/iimrai.jpeg",
      "link": "https://www.iimraipur.ac.in/"
    },
    {
      "id": 13,
      "name": "Indian Institute of Management Kashipur (IIM Kashipur)",
      "city": "Kashipur",
      "description": "Promotes research, innovation, and entrepreneurship in its management programs.",
      "image": "assets/images/iimka.png",
      "link": "https://www.iimkashipur.ac.in/"
    },
    {
      "id": 14,
      "name": "Indian Institute of Management Visakhapatnam (IIMV)",
      "city": "Visakhapatnam",
      "description": "Strives for academic rigor and social relevance in management education.",
      "image": "assets/images/iimv.png",
      "link": "https://www.iimv.ac.in/"
    },
    {
      "id": 15,
      "name": "Indian Institute of Management Amritsar (IIM Amritsar)",
      "city": "Amritsar",
      "description": "Focuses on providing quality management education with a strong regional connect.",
      "image": "assets/images/iima.png",
      "link": "https://iimamritsar.ac.in/"
    },
    {
      "id": 16,
      "name": "Indian Institute of Management Bodh Gaya (IIM Bodh Gaya)",
      "city": "Bodh Gaya",
      "description": "Aims to create socially responsible leaders and managers.",
      "image": "assets/images/iimb.png",
      "link": "https://iimbg.ac.in/"
    },
    {
      "id": 17,
      "name": "Indian Institute of Management Sambalpur (IIM Sambalpur)",
      "city": "Sambalpur",
      "description": "Promotes a holistic learning experience in a serene environment.",
      "image": "assets/images/iimsmb.png",
      "link": "https://iimsambalpur.ac.in/"
    },
    {
      "id": 18,
      "name": "Indian Institute of Management Sirmaur (IIM Sirmaur)",
      "city": "Sirmaur",
      "description": "Aims to foster innovation, leadership, and entrepreneurship in the Himalayas.",
      "image": "assets/images/iimsir.png",
      "link": "https://iimsirmaur.ac.in/"
    },
    {
      "id": 19,
      "name": "Indian Institute of Management Nagpur (IIMN)",
      "city": "Nagpur",
      "description": "Dedicated to creating responsive and responsible business leaders.",
      "image": "assets/images/iimn.png",
      "link": "https://www.iimnagpur.ac.in/"
    },
    {
      "id": 20,
      "name": "Indian Institute of Management Jammu (IIM Jammu)",
      "city": "Jammu",
      "description": "Strives for excellence in management education in the northernmost region.",
      "image": "assets/images/iimj.png",
      "link": "https://www.iimj.ac.in/"
    },
    {
      "id": 21,
      "name": "XLRI - Xavier School of Management",
      "city": "Jamshedpur",
      "description": "A top-ranked private business school with a strong focus on ethics and human resource management.",
      "image": "assets/images/xlri.jpg",
      "link": "https://www.xlri.ac.in/"
    },
    {
      "id": 22,
      "name": "Faculty of Management Studies (FMS Delhi)",
      "city": "New Delhi",
      "description": "One of India's oldest and most prestigious business schools, known for its high ROI.",
      "image": "assets/images/fms.png",
      "link": "https://fms.edu/"
    },
    {
      "id": 23,
      "name": "Management Development Institute (MDI Gurgaon)",
      "city": "Gurgaon",
      "description": "A leading business school offering various postgraduate management programs.",
      "image": "assets/images/mdi.png",
      "link": "https://www.mdi.ac.in/"
    },
    {
      "id": 24,
      "name": "S.P. Jain Institute of Management and Research (SPJIMR Mumbai)",
      "city": "Mumbai",
      "description": "Known for its unique pedagogy and strong industry connections.",
      "image": "assets/images/bvbsp.png",
      "link": "https://www.spjimr.org/"
    },
    {
      "id": 25,
      "name": "Indian Institute of Foreign Trade (IIFT Delhi)",
      "city": "New Delhi",
      "description": "Specializes in International Business management and trade.",
      "image": "assets/images/iift.png",
      "link": "https://iift.ac.in/"
    },
    {
      "id": 26,
      "name": "Jamnalal Bajaj Institute of Management Studies (JBIMS Mumbai)",
      "city": "Mumbai",
      "description": "One of the oldest and most respected B-schools in India, known for its legacy and placements.",
      "image": "assets/images/jbims.png",
      "link": "https://www.jbims.edu/"
    },
    {
      "id": 27,
      "name": "Symbiosis Institute of Business Management (SIBM Pune)",
      "city": "Pune",
      "description": "Part of Symbiosis International University, offering diverse MBA programs and known for its vibrant student life.",
      "image": "assets/images/sibm.jpg",
      "link": "https://www.sibm.edu/"
    },
    {
      "id": 28,
      "name": "Narsee Monjee Institute of Management Studies (NMIMS)",
      "city": "Mumbai",
      "description": "A leading private university offering a wide range of management and other professional programs.",
      "image": "assets/images/nmims.jpg",
      "link": "https://www.nmims.edu/"
    },
    {
      "id": 29,
      "name": "Xavier Institute of Management, Bhubaneswar (XIMB)",
      "city": "Bhubaneswar",
      "description": "Renowned for its management programs and emphasis on responsible leadership.",
      "image": "assets/images/xim.jpeg",
      "link": "https://www.ximb.edu.in/"
    }
  ],
  "tests": [
    {
      "id": 1,
      "name": "CAT (Common Admission Test)",
      "time": "Annually (typically November/December)",
      "qualification": "Bachelor's degree with minimum 50% aggregate marks (45% for SC/ST/PwD candidates)."
    },
    {
      "id": 2,
      "name": "XAT (Xavier Aptitude Test)",
      "time": "Annually (typically early January)",
      "qualification": "Bachelor's degree of minimum three years duration or equivalent."
    },
    {
      "id": 3,
      "name": "NMAT by GMAC",
      "time": "Testing window from October to December",
      "qualification": "Bachelor's degree (10+2+3 or 10+2+4) with 50% aggregate marks."
    },
    {
      "id": 4,
      "name": "SNAP (Symbiosis National Aptitude Test)",
      "time": "Annually (typically December)",
      "qualification": "Graduate with minimum 50% marks (45% for SC/ST categories)."
    }
  ]
};

/**
 * Directly provides data for the specified endpoint without fetching from a server.
 * @param {string} endpoint - The data type (e.g., 'programs', 'faculties').
 * @returns {Promise<Array>} A promise that resolves to an array of data.
 */
export async function fetchData(endpoint) {
    // Return a promise that resolves immediately with the local data.
    return Promise.resolve(ALL_APP_DATA[endpoint] || []);
}