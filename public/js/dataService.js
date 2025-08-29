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
      "name": "FMS Delhi - MBA",
      "city": "New Delhi",
      "description": "One of India's oldest and most prestigious business schools, known for its high ROI.",
      "image": "assets/images/fms.png",
      "link": "https://fms.edu/",
      "category": "A1",
      "examsAccepted": [
        "CAT"
      ],
      "avgSalary": "34.10",
      "totalFees": "4.92"
    },
    {
      "id": 2,
      "name": "IIM Ahmedabad - MBA",
      "city": "Ahmedabad",
      "description": "One of India's premier management institutes, renowned for its academic rigor and research.",
      "image": "assets/images/iima.jpg",
      "link": "https://www.iima.ac.in/",
      "category": "A1",
      "examsAccepted": [
        "CAT"
      ],
      "avgSalary": "34.45",
      "totalFees": "26.50"
    },
    {
      "id": 3,
      "name": "IIM Bangalore - MBA + MBA BA",
      "city": "Bengaluru",
      "description": "Known for its vibrant campus and strong emphasis on entrepreneurship and innovation.",
      "image": "assets/images/iimb.jpg",
      "link": "https://www.iimb.ac.in/",
      "category": "A1",
      "examsAccepted": [
        "CAT"
      ],
      "avgSalary": "35.92",
      "totalFees": "27.40"
    },
    {
      "id": 4,
      "name": "IIM Calcutta - MBA",
      "city": "Kolkata",
      "description": "The first IIM to be established, famous for its finance and consulting programs.",
      "image": "assets/images/iimc.jpg",
      "link": "https://www.iimcal.ac.in/",
      "category": "A1",
      "examsAccepted": [
        "CAT"
      ],
      "avgSalary": "35.07",
      "totalFees": "31.00"
    },
    {
      "id": 5,
      "name": "IIM Indore - PGP",
      "city": "Indore",
      "description": "Offers diverse management education with a focus on leadership development.",
      "image": "assets/images/iimi.png",
      "link": "https://www.iimidr.ac.in/",
      "category": "A1",
      "examsAccepted": [
        "CAT"
      ],
      "avgSalary": "25.68",
      "totalFees": "21.17"
    },
    {
      "id": 6,
      "name": "IIM Kozhikode - PGP",
      "city": "Kozhikode",
      "description": "Known for its beautiful campus and innovative management programs.",
      "image": "assets/images/iimk.png",
      "link": "https://iimk.ac.in/",
      "category": "A1",
      "examsAccepted": [
        "CAT"
      ],
      "avgSalary": "28.05",
      "totalFees": "20.50"
    },
    {
      "id": 7,
      "name": "IIM Kozhikode - PGP Finance",
      "city": "Kozhikode",
      "description": "Known for its beautiful campus and innovative management programs.",
      "image": "assets/images/iimk.png",
      "link": "https://iimk.ac.in/",
      "category": "A1",
      "examsAccepted": [
        "CAT",
        "GMAT",
        "GRE"
      ],
      "avgSalary": "28.05",
      "totalFees": "20.50"
    },
    {
      "id": 8,
      "name": "IIM Kozhikode - PGP LSM",
      "city": "Kozhikode",
      "description": "Known for its beautiful campus and innovative management programs.",
      "image": "assets/images/iimk.png",
      "link": "https://iimk.ac.in/",
      "category": "A1",
      "examsAccepted": [
        "CAT",
        "GMAT",
        "GRE"
      ],
      "avgSalary": "28.05",
      "totalFees": "20.75"
    },
    {
      "id": 9,
      "name": "IIM Lucknow - MBA + MBA ABM",
      "city": "Lucknow",
      "description": "A top-ranked IIM known for its strong academic foundation and diverse programs.",
      "image": "assets/images/iiml.png",
      "link": "https://www.iiml.ac.in/",
      "category": "A1",
      "examsAccepted": [
        "CAT"
      ],
      "avgSalary": "30.00",
      "totalFees": "20.75"
    },
    {
      "id": 10,
      "name": "ISB - PGP YLP",
      "city": "Hyderabad/Mohali",
      "description": "A leading management institution.",
      "image": "assets/images/isb.jpg",
      "link": "https://www.isb.edu/",
      "category": "A1",
      "examsAccepted": [
        "CAT",
        "GMAT",
        "GRE"
      ],
      "avgSalary": "32.50",
      "totalFees": "39.10"
    },
    {
      "id": 11,
      "name": "S.P. Jain Institute of Management and Research (SPJIMR Mumbai) - PGDM + PGDM (BM)",
      "city": "Mumbai",
      "description": "Known for its unique pedagogy and strong industry connections.",
      "image": "assets/images/bvbsp.png",
      "link": "https://www.spjimr.org/",
      "category": "A1",
      "examsAccepted": [
        "CAT",
        "GMAT"
      ],
      "avgSalary": "NA",
      "totalFees": "29.99"
    },
    {
      "id": 12,
      "name": "XLRI - PGDM + PGDMHRM",
      "city": "Jamshedpur",
      "description": "A top-ranked private business school with a strong focus on ethics and human resource management.",
      "image": "assets/images/xlri.jpg",
      "link": "https://www.xlri.ac.in/",
      "category": "A1",
      "examsAccepted": [
        "XAT"
      ],
      "avgSalary": "31.08",
      "totalFees": "33.40"
    },
    {
      "id": 13,
      "name": "Indian Institute of Foreign Trade (IIFT Delhi) - MBA (IB)",
      "city": "New Delhi",
      "description": "Specializes in International Business management and trade.",
      "image": "assets/images/iift.png",
      "link": "https://iift.ac.in/",
      "category": "A2",
      "examsAccepted": [
        "CAT"
      ],
      "avgSalary": "27.30",
      "totalFees": "27.00"
    },
    {
      "id": 14,
      "name": "IIM Mumbai - MBA",
      "city": "Mumbai",
      "description": "A leading management institution.",
      "image": "assets/images/iimm.png",
      "link": "https://iimmumbai.ac.in/",
      "category": "A2",
      "examsAccepted": [
        "CAT"
      ],
      "avgSalary": "33.84",
      "totalFees": "21.00"
    },
    {
      "id": 15,
      "name": "IIM Calcutta - PGDBA",
      "city": "Kolkata",
      "description": "A leading management institution.",
      "image": "assets/images/iimcpgba.jpg",
      "link": "https://www.iimcal.ac.in/programs/PGDBA",
      "category": "A2",
      "examsAccepted": [
        "PGDBA"
      ],
      "avgSalary": "29.71",
      "totalFees": "25.00"
    },
    {
      "id": 16,
      "name": "Indian Institute of Management Shillong (IIMS) - PGP",
      "city": "Shillong",
      "description": "Focuses on sustainable development and business practices in the North-East.",
      "image": "assets/images/iims.png",
      "link": "https://www.iimshillong.ac.in/",
      "category": "A2",
      "examsAccepted": [
        "CAT"
      ],
      "avgSalary": "26.10",
      "totalFees": "26.18"
    },
    {
      "id": 17,
      "name": "Jamnalal Bajaj Institute of Management Studies (JBIMS Mumbai) - MMS",
      "city": "Mumbai",
      "description": "One of the oldest and most respected B-schools in India, known for its legacy and placements.",
      "image": "assets/images/jbims.png",
      "link": "https://www.jbims.edu/",
      "category": "A2",
      "examsAccepted": [
        "CET",
        "CAT",
        "CMAT",
        "MAT",
        "ATMA"
      ],
      "avgSalary": "26.20",
      "totalFees": "6.00"
    },
    {
      "id": 18,
      "name": "Management Development Institute (MDI Gurgaon) - PGDM + PGDM-IB + PGDM-HRM",
      "city": "Gurgaon",
      "description": "A leading business school offering various postgraduate management programs.",
      "image": "assets/images/mdi.png",
      "link": "https://www.mdi.ac.in/",
      "category": "A2",
      "examsAccepted": [
        "CAT",
        "GMAT"
      ],
      "avgSalary": "28.16",
      "totalFees": "28.16"
    },
    {
      "id": 19,
      "name": "TISS - HRM",
      "city": "Mumbai",
      "description": "A leading management institution.",
      "image": "assets/images/tiss.jpg",
      "link": "https://admissions.tiss.ac.in/",
      "category": "A2",
      "examsAccepted": [
        "CAT"
      ],
      "avgSalary": "26.31",
      "totalFees": "2.07"
    },
    {
      "id": 20,
      "name": "IIM Indore - PGP-HRM",
      "city": "Indore",
      "description": "Offers diverse management education with a focus on leadership development.",
      "image": "assets/images/iimi.png",
      "link": "https://www.iimidr.ac.in/",
      "category": "A3",
      "examsAccepted": [
        "CAT"
      ],
      "avgSalary": "25.01",
      "totalFees": "18.42"
    },
    {
      "id": 21,
      "name": "Narsee Monjee Institute of Management Studies (NMIMS) - MBA Core",
      "city": "Mumbai",
      "description": "A leading private university offering a wide range of management and other professional programs.",
      "image": "assets/images/nmims.jpg",
      "link": "https://www.nmims.edu/",
      "category": "A3",
      "examsAccepted": [
        "NMAT"
      ],
      "avgSalary": "25.13",
      "totalFees": "25.00"
    },
    {
      "id": 22,
      "name": "IIM Raipur - PGP",
      "city": "Raipur",
      "description": "Committed to developing ethical leaders and entrepreneurs.",
      "image": "assets/images/iimrai.jpeg",
      "link": "https://www.iimraipur.ac.in/",
      "category": "A4",
      "examsAccepted": [
        "CAT"
      ],
      "avgSalary": "18.15",
      "totalFees": "18.00"
    },
    {
      "id": 23,
      "name": "IIM Ranchi - PGP",
      "city": "Ranchi",
      "description": "Offers PGP and doctoral programs with a focus on management research.",
      "image": "assets/images/iimra.png",
      "link": "https://www.iimranchi.ac.in/",
      "category": "A4",
      "examsAccepted": [
        "CAT"
      ],
      "avgSalary": "19.24",
      "totalFees": "19.23"
    },
    {
      "id": 24,
      "name": "IIM Rohtak - PGP",
      "city": "Rohtak",
      "description": "Known for its academic excellence and programs in management and law.",
      "image": "assets/images/iimr.png",
      "link": "https://www.iimrohtak.ac.in/",
      "category": "A4",
      "examsAccepted": [
        "CAT"
      ],
      "avgSalary": "18.73",
      "totalFees": "17.90"
    },
    {
      "id": 25,
      "name": "IIM Tiruchirappalli (IIMT) - PGPM + PGPM-HR",
      "city": "Tiruchirappalli",
      "description": "Offers high-quality management education with strong industry ties.",
      "image": "assets/images/iimt.jpeg",
      "link": "https://www.iimtrichy.ac.in/",
      "category": "A4",
      "examsAccepted": [
        "CAT"
      ],
      "avgSalary": "19.43",
      "totalFees": "19.50"
    },
    {
      "id": 26,
      "name": "IIM Udaipur - MBA",
      "city": "Udaipur",
      "description": "A new generation IIM known for its research and global outlook.",
      "image": "assets/images/iimu.png",
      "link": "https://www.iimu.ac.in/",
      "category": "A4",
      "examsAccepted": [
        "CAT"
      ],
      "avgSalary": "18.80",
      "totalFees": "20.43"
    },
    {
      "id": 27,
      "name": "MICA - PGDM-C + PGDM",
      "city": "Ahmedabad",
      "description": "A leading management institution.",
      "image": "assets/images/mica.png",
      "link": "https://www.mica.ac.in/",
      "category": "A4",
      "examsAccepted": [
        "CAT",
        "XAT",
        "GMAT",
        "MICAT"
      ],
      "avgSalary": "19.22",
      "totalFees": "26.00"
    },
    {
      "id": 28,
      "name": "Symbiosis Institute of Business Management (SIBM Pune) - MBA",
      "city": "Pune",
      "description": "Part of Symbiosis International University, offering diverse MBA programs and known for its vibrant student life.",
      "image": "assets/images/sibm.jpg",
      "link": "https://www.sibm.edu/",
      "category": "A4",
      "examsAccepted": [
        "SNAP"
      ],
      "avgSalary": "28.80",
      "totalFees": "24.90"
    },
    {
      "id": 29,
      "name": "IIM Amritsar - MBA + MBA BA + MBA HRM",
      "city": "Amritsar",
      "description": "Focuses on providing quality management education with a strong regional connect.",
      "image": "assets/images/iima.png",
      "link": "https://iimamritsar.ac.in/",
      "category": "A5",
      "examsAccepted": [
        "CAT"
      ],
      "avgSalary": "15.51",
      "totalFees": "17.30"
    },
    {
      "id": 30,
      "name": "IIM Jammu - MBA",
      "city": "Jammu",
      "description": "Strives for excellence in management education in the northernmost region.",
      "image": "assets/images/iimj.png",
      "link": "https://www.iimj.ac.in/",
      "category": "A5",
      "examsAccepted": [
        "CAT"
      ],
      "avgSalary": "16.54",
      "totalFees": "17.15"
    },
    {
      "id": 31,
      "name": "IIM Kashipur - MBA + MBA Analytics",
      "city": "Kashipur",
      "description": "Promotes research, innovation, and entrepreneurship in its management programs.",
      "image": "assets/images/iimka.png",
      "link": "https://www.iimkashipur.ac.in/",
      "category": "A5",
      "examsAccepted": [
        "CAT"
      ],
      "avgSalary": "18.10",
      "totalFees": "17.30"
    },
    {
      "id": 32,
      "name": "IIM Ranchi - MBA BA",
      "city": "Ranchi",
      "description": "Offers PGP and doctoral programs with a focus on management research.",
      "image": "assets/images/iimra.png",
      "link": "https://www.iimranchi.ac.in/",
      "category": "A5",
      "examsAccepted": [
        "CAT"
      ],
      "avgSalary": "19.87",
      "totalFees": "17.50"
    },
    {
      "id": 33,
      "name": "IIM Visakhapatnam (IIMV) - PGP",
      "city": "Visakhapatnam",
      "description": "Strives for academic rigor and social relevance in management education.",
      "image": "assets/images/iimv.png",
      "link": "https://www.iimv.ac.in/",
      "category": "A5",
      "examsAccepted": [
        "CAT"
      ],
      "avgSalary": "15.61",
      "totalFees": "19.00"
    },
    {
      "id": 34,
      "name": "SCMHRD - MBA",
      "city": "Pune",
      "description": "A leading management institution.",
      "image": "assets/images/scmhrd.jpg",
      "link": "https://scmhrd.edu/",
      "category": "A5",
      "examsAccepted": [
        "SNAP"
      ],
      "avgSalary": "24.28",
      "totalFees": "24.12"
    },
    {
      "id": 35,
      "name": "IIM Bodh Gaya - MBA",
      "city": "Bodh Gaya",
      "description": "Aims to create socially responsible leaders and managers.",
      "image": "assets/images/iimb.png",
      "link": "https://iimbg.ac.in/",
      "category": "B1",
      "examsAccepted": [
        "CAT"
      ],
      "avgSalary": "13.70",
      "totalFees": "17.96"
    },
    {
      "id": 36,
      "name": "IIM Sambalpur - MBA",
      "city": "Sambalpur",
      "description": "Promotes a holistic learning experience in a serene environment.",
      "image": "assets/images/iimsmb.png",
      "link": "https://iimsambalpur.ac.in/",
      "category": "B1",
      "examsAccepted": [
        "CAT"
      ],
      "avgSalary": "14.21",
      "totalFees": "13.08"
    },
    {
      "id": 37,
      "name": "IIM Sirmaur - MBA",
      "city": "Sirmaur",
      "description": "Aims to foster innovation, leadership, and entrepreneurship in the Himalayas.",
      "image": "assets/images/iimsir.png",
      "link": "https://iimsirmaur.ac.in/",
      "category": "B1",
      "examsAccepted": [
        "CAT"
      ],
      "avgSalary": "13.93",
      "totalFees": "16.00"
    },
    {
      "id": 38,
      "name": "Indian Institute of Management Nagpur (IIMN)",
      "city": "Nagpur",
      "description": "Dedicated to creating responsive and responsible business leaders.",
      "image": "assets/images/iimn.png",
      "link": "https://www.iimnagpur.ac.in/"
    },
    {
      "id": 39,
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
      "name": "CAT",
      "time": "Nov",
      "duration": "120 mins",
      "sections": "3",
      "totalQs": "68",
      "negativeMarking": "MCQ- (Y) TITA*- (N)",
      "sectionalTimeLimit": "Yes"
    },
    {
      "id": 2,
      "name": "MH-CET",
      "time": "March",
      "duration": "150 mins",
      "sections": "4",
      "totalQs": "200",
      "negativeMarking": "No",
      "sectionalTimeLimit": "No"
    },
    {
      "id": 3,
      "name": "CMAT",
      "time": "Jan",
      "duration": "180 mins",
      "sections": "5",
      "totalQs": "100",
      "negativeMarking": "Yes",
      "sectionalTimeLimit": "Yes"
    },
    {
      "id": 4,
      "name": "XAT",
      "time": "Jan",
      "duration": "180 mins",
      "sections": "3 Sections + GK",
      "totalQs": "75 + 20 (GK)",
      "negativeMarking": "(No negative marking for GK)",
      "sectionalTimeLimit": "Yes"
    },
    {
      "id": 5,
      "name": "SNAP",
      "time": "Dec",
      "duration": "60 mins",
      "sections": "3",
      "totalQs": "60",
      "negativeMarking": "Yes",
      "sectionalTimeLimit": "No"
    },
    {
      "id": 6,
      "name": "NMAT",
      "time": "Nov-Dec",
      "duration": "120 mins",
      "sections": "3",
      "totalQs": "108",
      "negativeMarking": "Score range: 12-360 (Adaptive)",
      "sectionalTimeLimit": "Yes"
    },
    {
      "id": 7,
      "name": "MICAT",
      "time": "Dec/Jan",
      "duration": "135 mins",
      "sections": "3",
      "totalQs": "234",
      "negativeMarking": "Yes",
      "sectionalTimeLimit": "Yes"
    },
    {
      "id": 8,
      "name": "CUET PG",
      "time": "March",
      "duration": "90 mins",
      "sections": "4",
      "totalQs": "75",
      "negativeMarking": "Yes",
      "sectionalTimeLimit": "Yes"
    },
    {
      "id": 9,
      "name": "MAT",
      "time": "Feb/May/Aug/Dec",
      "duration": "120 mins",
      "sections": "5",
      "totalQs": "150",
      "negativeMarking": "Yes",
      "sectionalTimeLimit": "No"
    },
    {
      "id": 10,
      "name": "PGDBA",
      "time": "Feb",
      "duration": "180 mins",
      "sections": "4",
      "totalQs": "50",
      "negativeMarking": "No",
      "sectionalTimeLimit": "No"
    },
    {
      "id": 11,
      "name": "IBSAT",
      "time": "Dec",
      "duration": "120 mins",
      "sections": "4",
      "totalQs": "140",
      "negativeMarking": "No",
      "sectionalTimeLimit": "No"
    },
    {
      "id": 12,
      "name": "ATMA",
      "time": "Feb/ May/ July/ Dec",
      "duration": "180 mins",
      "sections": "6",
      "totalQs": "180",
      "negativeMarking": "Yes",
      "sectionalTimeLimit": "Yes"
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
