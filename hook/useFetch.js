import { useEffect, useState } from "react"
import axios from "axios";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            // 'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnk4bKzuUzVLZA',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
    //         setData([
    //             {
    // "employer_name": "HonorVet Technologies",
    // "employer_logo": null,
    // "employer_website": null,
    // "employer_company_type": null,
    // "job_publisher": "ZipRecruiter",
    // "job_id": "A1HiRcRx6b0AAAAAAAAAAA==",
    // "job_employment_type": "FULLTIME",
    // "job_title": "React Developer",
    // "job_apply_link": "https://www.ziprecruiter.com/c/HonorVet-Technologies/Job/React-Developer/-in-Bentonville,AR?jid=3534f77424990800",
    // "job_apply_is_direct": true,
    // "job_apply_quality_score": 0.5665,
    // "job_description": "Required Skills\nsenior level developer, front end react experience, relocation to Bentonville required, cloud experience (Azure or GCP preferred), enterprise experience, ability to work independently\n\nJob Description\n\nReact Developer\n\nCTH - must be in Bentonville, AR upon start\n\nRequirements: React, Javascript, Cloud experience (Azure or GCP preferred)\n\nSenior level candidates, must be able to work as an independent contributor",
    // "job_is_remote": false,
    // "job_posted_at_timestamp": 1683338501,
    // "job_posted_at_datetime_utc": "2023-05-06T02:01:41.000Z",
    // "job_city": "Bentonville",
    // "job_state": "AR",
    // "job_country": "US",
    // "job_latitude": 36.372356,
    // "job_longitude": -94.21021,
    // "job_benefits": null,
    // "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=A1HiRcRx6b0AAAAAAAAAAA%3D%3D",
    // "job_offer_expiration_datetime_utc": "2023-06-06T00:00:00.000Z",
    // "job_offer_expiration_timestamp": 1686009600,
    // "job_required_experience": {
    //     "no_experience_required": false,
    //     "required_experience_in_months": null,
    //     "experience_mentioned": true,
    //     "experience_preferred": true
    // },
    // "job_required_skills": null,
    // "job_required_education": {
    //     "postgraduate_degree": false,
    //     "professional_certification": false,
    //     "high_school": false,
    //     "associates_degree": false,
    //     "bachelors_degree": false,
    //     "degree_mentioned": false,
    //     "degree_preferred": false,
    //     "professional_certification_mentioned": false
    // },
    // "job_experience_in_place_of_education": false,
    // "job_min_salary": null,
    // "job_max_salary": null,
    // "job_salary_currency": null,
    // "job_salary_period": null,
    // "job_highlights": {
    //     "Qualifications": [
    //         "CTH - must be in Bentonville, AR upon start",
    //         "Senior level candidates, must be able to work as an independent contributor"
    //     ]
    // },
    // "job_job_title": null,
    // "job_posting_language": "en",
    // "job_onet_soc": "15113400",
    // "job_onet_job_zone": "3"
    //             },
    //             {
    //                 "employer_name": "Saxon Global Inc",
    //                 "employer_logo": "https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2015/04/07/470155.jpg?itok=lfCkzo6j",
    //                 "employer_website": "http://www.saxonglobal.com",
    //                 "employer_company_type": null,
    //                 "job_publisher": "ZipRecruiter",
    //                 "job_id": "rihN2gdcpQIAAAAAAAAAAA==",
    //                 "job_employment_type": "FULLTIME",
    //                 "job_title": "React Developer",
    //                 "job_apply_link": "https://www.ziprecruiter.com/c/Saxon-Global-Inc/Job/React-Developer/-in-Bentonville,AR?jid=02df044c25f8389a",
    //                 "job_apply_is_direct": true,
    //                 "job_apply_quality_score": 0.5533,
    //                 "job_description": "React Developer - end client Walmart\n\nCTH - must be in Bentonville, AR upon start\n\nRequirements: React, Javascript, Cloud experience (Azure or GCP preferred)\n\nSenior level candidates, must be able to work as an independent contributor\n\nRequired Skills : senior level developer, front end react experience, relocation to Bentonville required, cloud experience (Azure or GCP preferred), enterprise experience, ability to work independently\nBasic Qualification :\nAdditional Skills :\nBackground Check :Yes\nDrug Screen :Yes\nNotes :\nSelling points for candidate :\nProject Verification Info :\nCandidate must be your W2 Employee :Yes\nExclusive to Apex :No\nFace to face interview required :No\nCandidate must be local :No\nCandidate must be authorized to work without sponsorship ::No\nInterview times set : :No\nType of project :Development/Engineering\nMaster Job Title :Dev: Other\nBranch Code :Bentonville",
    //                 "job_is_remote": false,
    //                 "job_posted_at_timestamp": 1683238905,
    //                 "job_posted_at_datetime_utc": "2023-05-04T22:21:45.000Z",
    //                 "job_city": "Bentonville",
    //                 "job_state": "AR",
    //                 "job_country": "US",
    //                 "job_latitude": 36.372356,
    //                 "job_longitude": -94.21021,
    //                 "job_benefits": null,
    //                 "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=rihN2gdcpQIAAAAAAAAAAA%3D%3D",
    //                 "job_offer_expiration_datetime_utc": "2023-06-03T00:00:00.000Z",
    //                 "job_offer_expiration_timestamp": 1685750400,
    //                 "job_required_experience": {
    //                     "no_experience_required": false,
    //                     "required_experience_in_months": null,
    //                     "experience_mentioned": true,
    //                     "experience_preferred": true
    //                 },
    //                 "job_required_skills": null,
    //                 "job_required_education": {
    //                     "postgraduate_degree": false,
    //                     "professional_certification": false,
    //                     "high_school": false,
    //                     "associates_degree": false,
    //                     "bachelors_degree": false,
    //                     "degree_mentioned": true,
    //                     "degree_preferred": false,
    //                     "professional_certification_mentioned": false
    //                 },
    //                 "job_experience_in_place_of_education": false,
    //                 "job_min_salary": null,
    //                 "job_max_salary": null,
    //                 "job_salary_currency": null,
    //                 "job_salary_period": null,
    //                 "job_highlights": {
    //                     "Qualifications": [
    //                         "Senior level candidates, must be able to work as an independent contributor",
    //                         "Background Check :Yes",
    //                         "Drug Screen :Yes",
    //                         "Candidate must be local :No",
    //                         "Candidate must be authorized to work without sponsorship ::No"
    //                     ]
    //                 },
    //                 "job_job_title": null,
    //                 "job_posting_language": "en",
    //                 "job_onet_soc": "15113400",
    //                 "job_onet_job_zone": "3"
    //             },
    //             {
    //                 "employer_name": "Naztec International Group LLC",
    //                 "employer_logo": "https://media.licdn.com/dms/image/C4E0BAQGRVdKtnFp3jQ/company-logo_200_200/0/1548282553972?e=2147483647&v=beta&t=idip031iTIRnOqFhACmmvVD73FWeQ5iGqQuWnGQ8Gwo",
    //                 "employer_website": "http://www.naztecgroup.com",
    //                 "employer_company_type": null,
    //                 "job_publisher": "Dice",
    //                 "job_id": "LnW0VDAWrsQAAAAAAAAAAA==",
    //                 "job_employment_type": "CONTRACTOR",
    //                 "job_title": "React Developer",
    //                 "job_apply_link": "https://www.dice.com/job-detail/98dce30e-84f1-4f8a-9eb0-df8187e6d4e2",
    //                 "job_apply_is_direct": true,
    //                 "job_apply_quality_score": 0.5715,
    //                 "job_description": "Hello All,\n\nHope you are doing great!!\n\nReact Developer -\n\nCTH - must be in Bentonville, AR upon start\n\nRequirements: React, Javascript, Cloud experience (Azure or Google Cloud Platform preferred)\n\nSenior level candidates, must be able to work as an independent contributor",
    //                 "job_is_remote": false,
    //                 "job_posted_at_timestamp": 1683304558,
    //                 "job_posted_at_datetime_utc": "2023-05-05T16:35:58.000Z",
    //                 "job_city": "Bentonville",
    //                 "job_state": "AR",
    //                 "job_country": "US",
    //                 "job_latitude": 36.372356,
    //                 "job_longitude": -94.21021,
    //                 "job_benefits": null,
    //                 "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=LnW0VDAWrsQAAAAAAAAAAA%3D%3D",
    //                 "job_offer_expiration_datetime_utc": "2023-06-05T17:32:23.000Z",
    //                 "job_offer_expiration_timestamp": 1685986343,
    //                 "job_required_experience": {
    //                     "no_experience_required": false,
    //                     "required_experience_in_months": null,
    //                     "experience_mentioned": true,
    //                     "experience_preferred": true
    //                 },
    //                 "job_required_skills": [
    //                     "Java",
    //                     "Mulesoft"
    //                 ],
    //                 "job_required_education": {
    //                     "postgraduate_degree": false,
    //                     "professional_certification": false,
    //                     "high_school": false,
    //                     "associates_degree": false,
    //                     "bachelors_degree": false,
    //                     "degree_mentioned": false,
    //                     "degree_preferred": false,
    //                     "professional_certification_mentioned": false
    //                 },
    //                 "job_experience_in_place_of_education": false,
    //                 "job_min_salary": 40,
    //                 "job_max_salary": 50,
    //                 "job_salary_currency": "USD",
    //                 "job_salary_period": "HOUR",
    //                 "job_highlights": {
    //                     "Qualifications": [
    //                         "Senior level candidates, must be able to work as an independent contributor"
    //                     ]
    //                 },
    //                 "job_job_title": null,
    //                 "job_posting_language": "en",
    //                 "job_onet_soc": "15113400",
    //                 "job_onet_job_zone": "3"
    //             },
    //             {
    //                 "employer_name": "Talent HR Networks Private Limited",
    //                 "employer_logo": null,
    //                 "employer_website": null,
    //                 "employer_company_type": null,
    //                 "job_publisher": "Indeed",
    //                 "job_id": "qhW0zshLIT0AAAAAAAAAAA==",
    //                 "job_employment_type": "FULLTIME",
    //                 "job_title": "React Developer",
    //                 "job_apply_link": "https://www.indeed.com/viewjob?jk=db4082a2d6ec216f",
    //                 "job_apply_is_direct": false,
    //                 "job_apply_quality_score": 0.5655,
    //                 "job_description": "Job Description :\n\nExperience : 7 -10 Years\n\nWORK EXPERIENCE AND EDUCATION REQUIREMENTS:\n\n. Bachelor's degree from four-year College or university in Computer Science, IT\n\n. 7+ years of frontend development.\n\n. Experience working withReact.\n\n. Working knowledge with Grid Controls, Golden/Flex Layout,Redux/RxJS, D3,Bootstrap, orCSS\n\n. Familiarity with JavaScript build frameworks\n\n. Familiarity with node.js package manager npm/yarn\n\n. Proficiency inTypescript, JavaScript, ECMA Script, HTML5,andCSS\n\n. Experience developing dynamic front-end web-based applications.\n\n. Experience with JavaScript testing tools and methods (Jest/Enzyme/Cypress)\n\n. Experience of information security principles and best practices (OWASP)\n\n. Familiarity in Python (good to have), MongoDB or Redis\n\n. Proficiency in Linux, Bash, JSON\n\n. Strong Computer Science fundamentals in Data Structures, Algorithms, Complexity Analysis, Object-Oriented Design and Designing Large Scale Data-Intensive Applications.\n\n. Excellent Analytical and Communication skills including experience speaking to technical and business audiences and working globally.\n\n. Solid understanding of the web development process from the layout/user interface to services layer\n\n. Capable ofsystem tuning, code optimizationandbug solving.\n\n. Knowledge on containerization preferred docker\n\n. Familiar with source control principles and systems.\n\n. Working experience in agile team is preferred.\n\n7.00-10.00 Years",
    //                 "job_is_remote": true,
    //                 "job_posted_at_timestamp": 1683394389,
    //                 "job_posted_at_datetime_utc": "2023-05-06T17:33:09.000Z",
    //                 "job_city": null,
    //                 "job_state": null,
    //                 "job_country": "US",
    //                 "job_latitude": 37.09024,
    //                 "job_longitude": -95.71289,
    //                 "job_benefits": null,
    //                 "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=qhW0zshLIT0AAAAAAAAAAA%3D%3D",
    //                 "job_offer_expiration_datetime_utc": null,
    //                 "job_offer_expiration_timestamp": null,
    //                 "job_required_experience": {
    //                     "no_experience_required": false,
    //                     "required_experience_in_months": 84,
    //                     "experience_mentioned": true,
    //                     "experience_preferred": true
    //                 },
    //                 "job_required_skills": null,
    //                 "job_required_education": {
    //                     "postgraduate_degree": false,
    //                     "professional_certification": false,
    //                     "high_school": false,
    //                     "associates_degree": false,
    //                     "bachelors_degree": false,
    //                     "degree_mentioned": true,
    //                     "degree_preferred": false,
    //                     "professional_certification_mentioned": false
    //                 },
    //                 "job_experience_in_place_of_education": false,
    //                 "job_min_salary": null,
    //                 "job_max_salary": null,
    //                 "job_salary_currency": null,
    //                 "job_salary_period": null,
    //                 "job_highlights": {
    //                     "Qualifications": [
    //                         "Bachelor's degree from four-year College or university in Computer Science, IT",
    //                         ". 7+ years of frontend development",
    //                         "Working knowledge with Grid Controls, Golden/Flex Layout,Redux/RxJS, D3,Bootstrap, orCSS",
    //                         "Familiarity with JavaScript build frameworks",
    //                         "Typescript, JavaScript, ECMA Script, HTML5,andCSS",
    //                         "Experience developing dynamic front-end web-based applications",
    //                         "Experience with JavaScript testing tools and methods (Jest/Enzyme/Cypress)",
    //                         "Experience of information security principles and best practices (OWASP)",
    //                         "Familiarity in Python (good to have), MongoDB or Redis",
    //                         "Proficiency in Linux, Bash, JSON",
    //                         "Strong Computer Science fundamentals in Data Structures, Algorithms, Complexity Analysis, Object-Oriented Design and Designing Large Scale Data-Intensive Applications",
    //                         "Excellent Analytical and Communication skills including experience speaking to technical and business audiences and working globally",
    //                         "Solid understanding of the web development process from the layout/user interface to services layer",
    //                         "Capable ofsystem tuning, code optimizationandbug solving",
    //                         "Familiar with source control principles and systems",
    //                         "7.00-10.00 Years"
    //                     ]
    //                 },
    //                 "job_job_title": null,
    //                 "job_posting_language": "en",
    //                 "job_onet_soc": "15113400",
    //                 "job_onet_job_zone": "3"
    //             },
    //             {
    //                 "employer_name": "Upwork",
    //                 "employer_logo": "https://image.status.io/z6aeO6kAGsAG.png",
    //                 "employer_website": "http://www.elance.com",
    //                 "employer_company_type": "Computer Services",
    //                 "job_publisher": "Upwork",
    //                 "job_id": "kkxQ3C4IDZ4AAAAAAAAAAA==",
    //                 "job_employment_type": "CONTRACTOR",
    //                 "job_title": "React Developer",
    //                 "job_apply_link": "https://www.upwork.com/freelance-jobs/apply/React-Developer_~010fe4063da940665d/",
    //                 "job_apply_is_direct": true,
    //                 "job_apply_quality_score": 0.6838,
    //                 "job_description": "I am trying to building out a navigation bar style in react and need help with it. I need someone that has React experience to help me develop it.",
    //                 "job_is_remote": true,
    //                 "job_posted_at_timestamp": 1683474906,
    //                 "job_posted_at_datetime_utc": "2023-05-07T15:55:06.000Z",
    //                 "job_city": null,
    //                 "job_state": null,
    //                 "job_country": "US",
    //                 "job_latitude": 37.09024,
    //                 "job_longitude": -95.71289,
    //                 "job_benefits": null,
    //                 "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=kkxQ3C4IDZ4AAAAAAAAAAA%3D%3D",
    //                 "job_offer_expiration_datetime_utc": null,
    //                 "job_offer_expiration_timestamp": null,
    //                 "job_required_experience": {
    //                     "no_experience_required": false,
    //                     "required_experience_in_months": null,
    //                     "experience_mentioned": true,
    //                     "experience_preferred": false
    //                 },
    //                 "job_required_skills": [
    //                     "TypeScript",
    //                     "React",
    //                     "JavaScript"
    //                 ],
    //                 "job_required_education": {
    //                     "postgraduate_degree": false,
    //                     "professional_certification": false,
    //                     "high_school": false,
    //                     "associates_degree": false,
    //                     "bachelors_degree": false,
    //                     "degree_mentioned": false,
    //                     "degree_preferred": false,
    //                     "professional_certification_mentioned": false
    //                 },
    //                 "job_experience_in_place_of_education": false,
    //                 "job_min_salary": 15,
    //                 "job_max_salary": 30,
    //                 "job_salary_currency": "USD",
    //                 "job_salary_period": "HOUR",
    //                 "job_highlights": {},
    //                 "job_job_title": null,
    //                 "job_posting_language": "en",
    //                 "job_onet_soc": "15113400",
    //                 "job_onet_job_zone": "3"
    //             },
    //             {
    //                 "employer_name": "Dhanutek",
    //                 "employer_logo": null,
    //                 "employer_website": null,
    //                 "employer_company_type": null,
    //                 "job_publisher": "Indeed",
    //                 "job_id": "z_nTBldDHT4AAAAAAAAAAA==",
    //                 "job_employment_type": "FULLTIME",
    //                 "job_title": "React Developer",
    //                 "job_apply_link": "https://www.indeed.com/viewjob?jk=66c6cfb073505473",
    //                 "job_apply_is_direct": false,
    //                 "job_apply_quality_score": 0.5665,
    //                 "job_description": "Client -Bestbuy\n\nReact developer - onsite from day one.\n\nLocations- Richfield MN & Seattle WA\n\n6+ years exp\n\n65 PR\n• Mobile application Development\n• Android and IOS\n\nREACT Native - high importance",
    //                 "job_is_remote": false,
    //                 "job_posted_at_timestamp": 1683304708,
    //                 "job_posted_at_datetime_utc": "2023-05-05T16:38:28.000Z",
    //                 "job_city": null,
    //                 "job_state": null,
    //                 "job_country": "US",
    //                 "job_latitude": 37.09024,
    //                 "job_longitude": -95.71289,
    //                 "job_benefits": null,
    //                 "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=z_nTBldDHT4AAAAAAAAAAA%3D%3D",
    //                 "job_offer_expiration_datetime_utc": null,
    //                 "job_offer_expiration_timestamp": null,
    //                 "job_required_experience": {
    //                     "no_experience_required": false,
    //                     "required_experience_in_months": null,
    //                     "experience_mentioned": false,
    //                     "experience_preferred": false
    //                 },
    //                 "job_required_skills": null,
    //                 "job_required_education": {
    //                     "postgraduate_degree": false,
    //                     "professional_certification": false,
    //                     "high_school": false,
    //                     "associates_degree": false,
    //                     "bachelors_degree": false,
    //                     "degree_mentioned": false,
    //                     "degree_preferred": false,
    //                     "professional_certification_mentioned": false
    //                 },
    //                 "job_experience_in_place_of_education": false,
    //                 "job_min_salary": null,
    //                 "job_max_salary": null,
    //                 "job_salary_currency": null,
    //                 "job_salary_period": null,
    //                 "job_highlights": {
    //                     "Qualifications": [
    //                         "6+ years exp",
    //                         "Mobile application Development",
    //                         "Android and IOS",
    //                         "REACT Native - high importance"
    //                     ]
    //                 },
    //                 "job_job_title": null,
    //                 "job_posting_language": "en",
    //                 "job_onet_soc": "15113400",
    //                 "job_onet_job_zone": "3"
    //             },
    //             {
    //                 "employer_name": "Upwork",
    //                 "employer_logo": "https://image.status.io/z6aeO6kAGsAG.png",
    //                 "employer_website": "http://www.elance.com",
    //                 "employer_company_type": "Computer Services",
    //                 "job_publisher": "Upwork",
    //                 "job_id": "_1M7t3Lssl8AAAAAAAAAAA==",
    //                 "job_employment_type": "CONTRACTOR",
    //                 "job_title": "React Developer /// Create a Certificate /// - Contract to Hire",
    //                 "job_apply_link": "https://www.upwork.com/freelance-jobs/apply/React-Developer-Create-Certificate_~01249ef470f671ba1f/",
    //                 "job_apply_is_direct": true,
    //                 "job_apply_quality_score": 0.7844,
    //                 "job_description": "We are looking for a skilled React Developer to help us with a project that will last approximately 1 to 3 months. The ideal candidate should have extensive experience in CSS, JavaScript, Node.js, React, and Redux.\n\nAs a React Developer, you will be responsible for designing and implementing user interfaces and ensuring that the application is responsive and scalable. You will also work closely with the development team to ensure that the project is delivered on time and within budget.\n\nIf you are interested in this job, please submit a proposal that describes how you can help with the project. Please include links to some of your past completed projects that showcase your relevant skills and experience. We are looking forward to hearing from you.\n\nNeed someone whom can make this page: https://www.canva.com/design/DAFiEo_6TXA/jQg-eeIdTbfMZFSUm0jOZw/edit specifically the certificate.\n\nJob: Make it so every word is editable, and its possible to edit the logo... I beleive for an experienced developer this is a basic job (Sorry)--once complete, send me the code and I will add to my website... Oh... pls create an account in Canva (above url) to see font size and color. I REALLY want to keep the same look as the attached pic... Once complete a (print or save button)--lets discuss which is best....\n\nSo I know you read this write Water Bottle in the subject line... without it, I will not respond",
    //                 "job_is_remote": true,
    //                 "job_posted_at_timestamp": 1683386476,
    //                 "job_posted_at_datetime_utc": "2023-05-06T15:21:16.000Z",
    //                 "job_city": null,
    //                 "job_state": null,
    //                 "job_country": "US",
    //                 "job_latitude": 37.09024,
    //                 "job_longitude": -95.71289,
    //                 "job_benefits": null,
    //                 "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=_1M7t3Lssl8AAAAAAAAAAA%3D%3D",
    //                 "job_offer_expiration_datetime_utc": null,
    //                 "job_offer_expiration_timestamp": null,
    //                 "job_required_experience": {
    //                     "no_experience_required": false,
    //                     "required_experience_in_months": null,
    //                     "experience_mentioned": true,
    //                     "experience_preferred": false
    //                 },
    //                 "job_required_skills": [
    //                     "React",
    //                     "JavaScript",
    //                     "CSS",
    //                     "Node.js",
    //                     "Redux"
    //                 ],
    //                 "job_required_education": {
    //                     "postgraduate_degree": false,
    //                     "professional_certification": false,
    //                     "high_school": false,
    //                     "associates_degree": false,
    //                     "bachelors_degree": false,
    //                     "degree_mentioned": false,
    //                     "degree_preferred": false,
    //                     "professional_certification_mentioned": false
    //                 },
    //                 "job_experience_in_place_of_education": false,
    //                 "job_min_salary": null,
    //                 "job_max_salary": null,
    //                 "job_salary_currency": null,
    //                 "job_salary_period": null,
    //                 "job_highlights": {
    //                     "Qualifications": [
    //                         "We are looking for a skilled React Developer to help us with a project that will last approximately 1 to 3 months",
    //                         "The ideal candidate should have extensive experience in CSS, JavaScript, Node.js, React, and Redux"
    //                     ],
    //                     "Responsibilities": [
    //                         "As a React Developer, you will be responsible for designing and implementing user interfaces and ensuring that the application is responsive and scalable",
    //                         "You will also work closely with the development team to ensure that the project is delivered on time and within budget"
    //                     ]
    //                 },
    //                 "job_job_title": null,
    //                 "job_posting_language": "en",
    //                 "job_onet_soc": "15113400",
    //                 "job_onet_job_zone": "3"
    //             },
    //             {
    //                 "employer_name": "Walmart",
    //                 "employer_logo": "https://cdn.corporate.walmart.com/dims4/WMT/71169a3/2147483647/strip/true/crop/2389x930+0+0/resize/980x381!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2Fd6%2Fe7%2F48e91bac4a8ca8f22985b3682370%2Fwalmart-logos-lockupwtag-horiz-blu-rgb.png",
    //                 "employer_website": "https://www.walmart.com",
    //                 "employer_company_type": "Retail",
    //                 "job_publisher": "ZipRecruiter",
    //                 "job_id": "l6HWThfuexAAAAAAAAAAAA==",
    //                 "job_employment_type": "FULLTIME",
    //                 "job_title": "Software Engineer III React Front End Full Stack",
    //                 "job_apply_link": "https://www.ziprecruiter.com/c/Walmart/Job/Software-Engineer-III-React-Front-End-Full-Stack/-in-Elm-Springs,AR?jid=182303767a31f963",
    //                 "job_apply_is_direct": false,
    //                 "job_apply_quality_score": 0.5469,
    //                 "job_description": "Position Summary...\n\nWhat you'll do...\n\nAt Walmart International, we are looking for a React Native developer with experience building services using Java and Spring Boot to help maintain the existing mobile applications and to guide development of the next generation tools. The right individual for this role must be capable of building applications in using modern architectures with hands on knowledge in Front End and backend Frameworks (React Native, React JS, Spring Boot, Spring React), and Cloud Based Technologies (Azure and DevOps).\n\nAbout Team:\nOur team collaborates with Walmart International, which has over 5,900 retail units operating outside of the United States under 55 banners in 26 countries including Africa, Argentina, Canada, Central America, Chile, China, India, Japan, and Mexico, to name a few.\n\nWhat you'll do:\n• Participates in medium to large-scale projects by reviewing project requirements, translating requirements into technical solutions, gathering requested information, writing, and developing code, conducting unit testing. Communicating status and issues to team members and stakeholders.\n• Use React Native APIs for tight integrations with both platforms - Android and iOS\n• Build app and UI components from prototypes and wireframes\n• Design and implement user interface components for JavaScript-based web and mobile applications using React ecosystem.\n• Write automated tests to ensure error-free code and performance\n• Improve performance by eliminating bottlenecks\n• Create front-end modules with maximum code reusability and efficiency\n• Either individually or with team, determines hardware/software systems requirements and leads systems hardware/software design. Analyzes, designs, programs, debugs, supports, and modifies software enhancements and/or new products used in local, networked, or Internet-related computer programs.\n• Completes documentation and procedures for installation and maintenance. May interact with users to define system requirements and/or necessary modifications.\n\nWhat you'll bring:\n• Minimum Qualifications: Bachelor of Science and 6 years' experience in software engineering OR Master of Science and 4years' experience in software engineering\n• 4+ years of development experience in Front End Mobile Development using React Native\n• Significant experience working with React Native and mobile along with tools like Flux, Flow, Redux, etc.\n• In-depth knowledge of JavaScript, CSS, HTML, functional programming, and front-end languages\n• Strong knowledge of React fundamentals such as Virtual DOM, component lifecycle, and component state\n• Well-versed in a variety of React Native software and technologies such as Jest, Enzyme, ESLint\n• Moderate level skills in Java, using the latest SDKs and tools and frameworks such as Spring boot, Spring test, spring security\n• Ability to develop functional, technical and user interface designs for an application that meets the defined requirements (business, system performance and standards)\n• Demonstrates deep expertise in specific coding concepts and/or languages, especially around modern application architectures.\n• Experience partnering with others to solve problems quickly and efficiently\n• Ability to lead in a fast-paced and agile development environment\n• Excellent analytical, design, decision making and communication skills\n\nAbout Walmart Global Tech\nImagine working in an environment where one line of code can make life easier for hundreds of millions of people. That's what we do at Walmart Global Tech. We're a team of software engineers, data scientists, cybersecurity expert's and service professionals within the world's leading retailer who make an epic impact and are at the forefront of the next retail disruption. People are why we innovate, and people power our innovations. We are people-led and tech-empowered. We train our team in the skillsets of the future and bring in experts like you to help us grow. We have roles for those chasing their first opportunity as well as those looking for the opportunity that will define their career. Here, you can kickstart a great career in tech, gain new skills and experience for virtually every industry, or leverage your expertise to innovate at scale, impact millions and reimagine the future of retail.\n\nFlexible, hybrid work:\nWe use a hybrid way of working that is primarily in office coupled with virtual when not onsite. Our campuses serve as a hub to enhance collaboration, bring us together for purpose and deliver on business needs. This approach helps us make quicker decisions, remove location barriers across our global team and be more flexible in our personal lives.\n\nBenefits:\nBenefits: Beyond our great compensation package, you can receive incentive awards for your performance. Other great perks include 401(k) match, stock purchase plan, paid maternity and parental leave, PTO, multiple health plans, and much more.\n\nEqual Opportunity Employer:\nWalmart, Inc. is an Equal Opportunity Employer - By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity- unique styles, experiences, identities, ideas and opinions - while being inclusive of all people.\n\nThe above information has been designed to indicate the general nature and level of work performed in the role. It is not designed to contain or be interpreted as a comprehensive inventory of all responsibilities and qualifications required of employees assigned to this job. The full Job Description can be made available as part of the hiring process.\n\nMinimum Qualifications...\n\nOutlined below are the required minimum qualifications for this position. If none are listed, there are no minimum qualifications.\n\nOption 1: Bachelor's degree in computer science, computer engineering, computer information systems, software engineering, or related area and 2 years' experience in software engineering or related area.Option 2: 4 years' experience in software engineering or related area.\n\nPreferred Qualifications...\n\nOutlined below are the optional preferred qualifications for this position. If none are listed, there are no preferred qualifications.\n\nCustomer Service\n\nMasters: Computer Science\n\nPrimary Location...\n805 SE MOBERLY LN, BENTONVILLE, AR 72712, United States of America",
    //                 "job_is_remote": false,
    //                 "job_posted_at_timestamp": 1683280800,
    //                 "job_posted_at_datetime_utc": "2023-05-05T10:00:00.000Z",
    //                 "job_city": "Elm Springs",
    //                 "job_state": "AR",
    //                 "job_country": "US",
    //                 "job_latitude": 36.20631,
    //                 "job_longitude": -94.23476,
    //                 "job_benefits": [
    //                     "health_insurance",
    //                     "paid_time_off",
    //                     "retirement_savings"
    //                 ],
    //                 "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=l6HWThfuexAAAAAAAAAAAA%3D%3D",
    //                 "job_offer_expiration_datetime_utc": "2023-06-06T00:00:00.000Z",
    //                 "job_offer_expiration_timestamp": 1686009600,
    //                 "job_required_experience": {
    //                     "no_experience_required": false,
    //                     "required_experience_in_months": 72,
    //                     "experience_mentioned": true,
    //                     "experience_preferred": false
    //                 },
    //                 "job_required_skills": null,
    //                 "job_required_education": {
    //                     "postgraduate_degree": false,
    //                     "professional_certification": false,
    //                     "high_school": false,
    //                     "associates_degree": false,
    //                     "bachelors_degree": false,
    //                     "degree_mentioned": true,
    //                     "degree_preferred": true,
    //                     "professional_certification_mentioned": false
    //                 },
    //                 "job_experience_in_place_of_education": false,
    //                 "job_min_salary": null,
    //                 "job_max_salary": null,
    //                 "job_salary_currency": null,
    //                 "job_salary_period": null,
    //                 "job_highlights": {
    //                     "Qualifications": [
    //                         "The right individual for this role must be capable of building applications in using modern architectures with hands on knowledge in Front End and backend Frameworks (React Native, React JS, Spring Boot, Spring React), and Cloud Based Technologies (Azure and DevOps)",
    //                         "Minimum Qualifications: Bachelor of Science and 6 years' experience in software engineering OR Master of Science and 4years' experience in software engineering",
    //                         "4+ years of development experience in Front End Mobile Development using React Native",
    //                         "Significant experience working with React Native and mobile along with tools like Flux, Flow, Redux, etc",
    //                         "In-depth knowledge of JavaScript, CSS, HTML, functional programming, and front-end languages",
    //                         "Strong knowledge of React fundamentals such as Virtual DOM, component lifecycle, and component state",
    //                         "Well-versed in a variety of React Native software and technologies such as Jest, Enzyme, ESLint",
    //                         "Moderate level skills in Java, using the latest SDKs and tools and frameworks such as Spring boot, Spring test, spring security",
    //                         "Ability to develop functional, technical and user interface designs for an application that meets the defined requirements (business, system performance and standards)",
    //                         "Demonstrates deep expertise in specific coding concepts and/or languages, especially around modern application architectures",
    //                         "Experience partnering with others to solve problems quickly and efficiently",
    //                         "Ability to lead in a fast-paced and agile development environment",
    //                         "Excellent analytical, design, decision making and communication skills",
    //                         "Option 1: Bachelor's degree in computer science, computer engineering, computer information systems, software engineering, or related area and 2 years' experience in software engineering or related area"
    //                     ],
    //                     "Responsibilities": [
    //                         "Participates in medium to large-scale projects by reviewing project requirements, translating requirements into technical solutions, gathering requested information, writing, and developing code, conducting unit testing",
    //                         "Communicating status and issues to team members and stakeholders",
    //                         "Use React Native APIs for tight integrations with both platforms - Android and iOS",
    //                         "Build app and UI components from prototypes and wireframes",
    //                         "Design and implement user interface components for JavaScript-based web and mobile applications using React ecosystem",
    //                         "Write automated tests to ensure error-free code and performance",
    //                         "Improve performance by eliminating bottlenecks",
    //                         "Create front-end modules with maximum code reusability and efficiency",
    //                         "Either individually or with team, determines hardware/software systems requirements and leads systems hardware/software design",
    //                         "Analyzes, designs, programs, debugs, supports, and modifies software enhancements and/or new products used in local, networked, or Internet-related computer programs",
    //                         "Completes documentation and procedures for installation and maintenance",
    //                         "May interact with users to define system requirements and/or necessary modifications"
    //                     ],
    //                     "Benefits": [
    //                         "Benefits: Beyond our great compensation package, you can receive incentive awards for your performance",
    //                         "Other great perks include 401(k) match, stock purchase plan, paid maternity and parental leave, PTO, multiple health plans, and much more"
    //                     ]
    //                 },
    //                 "job_job_title": "Software engineer",
    //                 "job_posting_language": "en",
    //                 "job_onet_soc": "15113300",
    //                 "job_onet_job_zone": "4"
    //             },
    //             {
    //                 "employer_name": "Recruitark Solutions Private Limited",
    //                 "employer_logo": null,
    //                 "employer_website": null,
    //                 "employer_company_type": null,
    //                 "job_publisher": "My ArkLaMiss Jobs",
    //                 "job_id": "lyjx4OLm4WQAAAAAAAAAAA==",
    //                 "job_employment_type": "FULLTIME",
    //                 "job_title": "Frontend/React Developer",
    //                 "job_apply_link": "https://jobs.myarklamiss.com/jobs/frontend-react-developer-united-states/997810217-2/",
    //                 "job_apply_is_direct": false,
    //                 "job_apply_quality_score": 0.5304,
    //                 "job_description": "Job Title : Frontend/React Developer\nWork Location : Remote\nPosition: Full Time\nLocation: Remote\nBudget: 35 LPA\n\nRoles and Responsibilities:\n\n8+ years of experience in a Frontend Engineer role\nAn eye for product design and interactivity\nAdvanced programming experience building large front end applications with Javascript and VueJS front end frameworks. Experience consuming and working with RESTful API's\nExpertise in HTML & CSS, with a knack for layout, specificity, cross-browser compatibility, and accessibility\nProduction experience with e-commerce / 2-sided marketplace experience would be ideal\nExperience using GraphQL (ideal but not mandatory)\nExperience using AWS (ideal but not mandatory)\n\n8.00-12.00 Years",
    //                 "job_is_remote": false,
    //                 "job_posted_at_timestamp": 1683266839,
    //                 "job_posted_at_datetime_utc": "2023-05-05T06:07:19.000Z",
    //                 "job_city": null,
    //                 "job_state": null,
    //                 "job_country": "US",
    //                 "job_latitude": 37.09024,
    //                 "job_longitude": -95.71289,
    //                 "job_benefits": null,
    //                 "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=lyjx4OLm4WQAAAAAAAAAAA%3D%3D",
    //                 "job_offer_expiration_datetime_utc": null,
    //                 "job_offer_expiration_timestamp": null,
    //                 "job_required_experience": {
    //                     "no_experience_required": false,
    //                     "required_experience_in_months": 96,
    //                     "experience_mentioned": true,
    //                     "experience_preferred": false
    //                 },
    //                 "job_required_skills": null,
    //                 "job_required_education": {
    //                     "postgraduate_degree": false,
    //                     "professional_certification": false,
    //                     "high_school": false,
    //                     "associates_degree": false,
    //                     "bachelors_degree": false,
    //                     "degree_mentioned": false,
    //                     "degree_preferred": false,
    //                     "professional_certification_mentioned": false
    //                 },
    //                 "job_experience_in_place_of_education": false,
    //                 "job_min_salary": null,
    //                 "job_max_salary": null,
    //                 "job_salary_currency": null,
    //                 "job_salary_period": null,
    //                 "job_highlights": {
    //                     "Qualifications": [
    //                         "8+ years of experience in a Frontend Engineer role",
    //                         "An eye for product design and interactivity",
    //                         "Advanced programming experience building large front end applications with Javascript and VueJS front end frameworks",
    //                         "Experience consuming and working with RESTful API's",
    //                         "Expertise in HTML & CSS, with a knack for layout, specificity, cross-browser compatibility, and accessibility",
    //                         "Production experience with e-commerce / 2-sided marketplace experience would be ideal",
    //                         "Experience using GraphQL (ideal but not mandatory)"
    //                     ],
    //                     "Benefits": [
    //                         "Budget: 35 LPA"
    //                     ]
    //                 },
    //                 "job_job_title": null,
    //                 "job_posting_language": "en",
    //                 "job_onet_soc": "15113400",
    //                 "job_onet_job_zone": "3"
    //             },
    //             {
    //                 "employer_name": "Piper Companies",
    //                 "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_kF8wsIeUotaNc7V4JzTVW3lHON902YCZemT&s=0",
    //                 "employer_website": null,
    //                 "employer_company_type": null,
    //                 "job_publisher": "LinkedIn",
    //                 "job_id": "2G_vT12ykasAAAAAAAAAAA==",
    //                 "job_employment_type": "CONTRACTOR",
    //                 "job_title": "React Native Developer (Remote)",
    //                 "job_apply_link": "https://www.linkedin.com/jobs/view/react-native-developer-remote-at-piper-companies-3594802910",
    //                 "job_apply_is_direct": false,
    //                 "job_apply_quality_score": 0.569,
    //                 "job_description": "Piper Enterprise Solutions is searching for a React Native Developer for a software consulting company. This is a 100% remote position.\n\nResponsibilities for the React Native Developer:\n• Responsible for helping with the development of Web, iOS, and Android products\n• Work closely with integration team and other developers to deliver high-quality products and monitor the SDLC\n\nQualifications for the React Native Developer:\n• Minimum 3-5 years as a frontend or fullstack software developer\n• Frontend development using recent versions of React and React Native, working on mobile and web applications\n• Experience with API design and integration\n• Knowledge of in app purchases features and their development\n• Some background in cloud application deployment is desired\n• Strong communication, and ability to work cross-functionally\n• Experience working in a consultancy is a bonus, but not required\n\nCompensation/Benefits for the React Native Developer:\n• 100% Remote\n• $60-$65/hr Contract position (indefinite timeline)\n• Comprehensive benefit package; Medical, Dental, Vision, 401k\n\nKeywords: react native developer, react.js developer, frontend dev, frontend engineer, lead engineer, lead developer, fullstack, software developer, software engineer, react, react.js, reactjs, next.js, node.js, javascript, js, es6, aws, front end, front-end, software as service, saas, proprietary, typescript, graphql, api, rest, rest api, user interface, user experience, ui, ux, devops, docker, containerization, consumer facing, SQL, Microsoft, Microsoft Azure, amazon web services, aws, s3, lambda, cloud hosting, serverless, git, github, application, software, web application, interface, ci/cd, continuous, mortgage, remote, work from home, contract, benefits, medical, dental, vision, 401k",
    //                 "job_is_remote": true,
    //                 "job_posted_at_timestamp": 1683341739,
    //                 "job_posted_at_datetime_utc": "2023-05-06T02:55:39.000Z",
    //                 "job_city": null,
    //                 "job_state": null,
    //                 "job_country": "US",
    //                 "job_latitude": 37.09024,
    //                 "job_longitude": -95.71289,
    //                 "job_benefits": [
    //                     "health_insurance",
    //                     "dental_coverage",
    //                     "retirement_savings"
    //                 ],
    //                 "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=2G_vT12ykasAAAAAAAAAAA%3D%3D",
    //                 "job_offer_expiration_datetime_utc": "2023-06-05T02:55:39.000Z",
    //                 "job_offer_expiration_timestamp": 1685933739,
    //                 "job_required_experience": {
    //                     "no_experience_required": false,
    //                     "required_experience_in_months": null,
    //                     "experience_mentioned": true,
    //                     "experience_preferred": false
    //                 },
    //                 "job_required_skills": null,
    //                 "job_required_education": {
    //                     "postgraduate_degree": false,
    //                     "professional_certification": false,
    //                     "high_school": false,
    //                     "associates_degree": false,
    //                     "bachelors_degree": true,
    //                     "degree_mentioned": false,
    //                     "degree_preferred": false,
    //                     "professional_certification_mentioned": false
    //                 },
    //                 "job_experience_in_place_of_education": false,
    //                 "job_min_salary": null,
    //                 "job_max_salary": null,
    //                 "job_salary_currency": null,
    //                 "job_salary_period": null,
    //                 "job_highlights": {
    //                     "Qualifications": [
    //                         "Minimum 3-5 years as a frontend or fullstack software developer",
    //                         "Frontend development using recent versions of React and React Native, working on mobile and web applications",
    //                         "Experience with API design and integration",
    //                         "Knowledge of in app purchases features and their development",
    //                         "Strong communication, and ability to work cross-functionally",
    //                         "Experience working in a consultancy is a bonus, but not required"
    //                     ],
    //                     "Responsibilities": [
    //                         "Responsible for helping with the development of Web, iOS, and Android products",
    //                         "Work closely with integration team and other developers to deliver high-quality products and monitor the SDLC"
    //                     ],
    //                     "Benefits": [
    //                         "100% Remote",
    //                         "$60-$65/hr Contract position (indefinite timeline)",
    //                         "Comprehensive benefit package; Medical, Dental, Vision, 401k"
    //                     ]
    //                 },
    //                 "job_job_title": null,
    //                 "job_posting_language": "en",
    //                 "job_onet_soc": "15113200",
    //                 "job_onet_job_zone": "4"
    //             }
    //         ]);
            
            setIsLoading(false);
        } catch (error) {
            setError(error);
            console.log(error)
            // alert('theres an error');
        } finally {
            setIsLoading(false); 
        }
    };
    
    useEffect(() => {
        fetchData();
    }, []);
    
    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };
    
    return {data, isLoading, error, refetch};
}

export default useFetch;

