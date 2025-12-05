
const modules = [
    // ===== YEAR 2 - REGULAR PROGRAMME =====
    // Semester 1
    [
        {"id": 0, "name": "Advanced Calculus", "code": "SMTA021", "year": 2, "semester": 1, "credits": 20, "programme": "Regular", "slot": [3, 12, 25]},
        {"id": 1, "name": "Ordinary and Partial Differential Equations", "code": "SAPA021", "year": 2, "semester": 1, "credits": 20, "programme": "Regular", "slot": [7, 18, 29, 31]},
        {"id": 2, "name": "Data Structures", "code": "SCOA021", "year": 2, "semester": 1, "credits": 20, "programme": "Regular", "slot": [5, 14, 22]},
        {"id": 3, "name": "Theory of Distributions", "code": "SSTA021", "year": 2, "semester": 1, "credits": 20, "programme": "Regular", "slot": [9, 17, 26, 33]},
        {"id": 4, "name": "Classical Mechanics", "code": "SPHA021", "year": 2, "semester": 1, "credits": 10, "programme": "Regular", "slot": [2, 11, 20]},
        {"id": 5, "name": "Modern Physics", "code": "SPHB021", "year": 2, "semester": 1, "credits": 10, "programme": "Regular", "slot": [4, 15, 24, 32]},
    ],
    
    // Semester 2
    [
        {"id": 0, "name": "Advanced Calculus", "code": "SMTA022", "year": 2, "semester": 2, "credits": 20, "programme": "Regular", "slot": [6, 19, 28]},
        {"id": 1, "name": "Numerical Analysis", "code": "SAPA022", "year": 2, "semester": 2, "credits": 20, "programme": "Regular", "slot": [1, 13, 21, 30]},
        {"id": 2, "name": "Computer Architecture", "code": "SCOA022", "year": 2, "semester": 2, "credits": 20, "programme": "Regular", "slot": [8, 16, 27]},
        {"id": 3, "name": "Statistical Inference", "code": "SSTA022", "year": 2, "semester": 2, "credits": 20, "programme": "Regular", "slot": [10, 23, 34]},
        {"id": 4, "name": "Electrodynamics and Electronics", "code": "SPHA022", "year": 2, "semester": 2, "credits": 10, "programme": "Regular", "slot": [3, 12, 25, 35]},
        {"id": 5, "name": "Waves and Physical Optics", "code": "SPHB022", "year": 2, "semester": 2, "credits": 10, "programme": "Regular", "slot": [5, 18, 29]},
    ],
    
    // ===== YEAR 2 - EXTENDED PROGRAMME (BSCE01) =====
    // From pages 6-7 of the document - Extended Programme Year 2 modules
    // These are the foundation modules for the Extended Programme
    // Year 1 of Extended Programme (equivalent to Year 0 foundation)
    [
        {"id": 0, "name": "Computing Concepts And Algorithms", "code": "SCSC000", "year": 2, "semester": 1, "credits": 24, "programme": "Extended", "slot": [2, 13, 24]},
        {"id": 1, "name": "Health Education And Life Competencies I", "code": "SHEL000", "year": 2, "semester": 1, "credits": 24, "programme": "Extended", "slot": [5, 16, 27]},
        {"id": 2, "name": "Pre-Calculus And Differential Calculus", "code": "SMTH000", "year": 2, "semester": 1, "credits": 24, "programme": "Extended", "slot": [3, 14, 25]},
        {"id": 3, "name": "Introduction To General Physics 1A", "code": "SPHS000", "year": 2, "semester": 1, "credits": 24, "programme": "Extended", "slot": [7, 18, 29, 31]},
        {"id": 4, "name": "Descriptive Statistics", "code": "SSTS000", "year": 2, "semester": 1, "credits": 24, "programme": "Extended", "slot": [4, 15, 26]},
    ],
    
    // Year 2 of Extended Programme (equivalent to Year 1 foundation continuation)
    [
        {"id": 0, "name": "Data Organization, AI", "code": "SCOB000", "year": 2, "semester": 2, "credits": 24, "programme": "Extended", "slot": [1, 12, 23]},
        {"id": 1, "name": "Health Education And Life Competencies II", "code": "SHEB000", "year": 2, "semester": 2, "credits": 24, "programme": "Extended", "slot": [6, 17, 28]},
        {"id": 2, "name": "Introductory Algebra And Integral Calculus", "code": "SMTB000", "year": 2, "semester": 2, "credits": 24, "programme": "Extended", "slot": [2, 13, 24, 32]},
        {"id": 3, "name": "Introduction To General Physics 1B", "code": "SPHB000", "year": 2, "semester": 2, "credits": 24, "programme": "Extended", "slot": [8, 19, 30]},
        {"id": 4, "name": "Introduction To Statistical Inference", "code": "SSTB000", "year": 2, "semester": 2, "credits": 24, "programme": "Extended", "slot": [5, 16, 27, 35]},
    ],
    
    
    // ===== YEAR 3 - REGULAR PROGRAMME =====
    // Semester 1
    [
        {"id": 0, "name": "Fluid Mechanics", "code": "SPA031", "year": 3, "semester": 1, "credits": 32, "programme": "Regular", "slot": [2, 11, 20, 31]},
        {"id": 1, "name": "Introduction to Database Systems", "code": "SCOA031", "year": 3, "semester": 1, "credits": 16, "programme": "Regular", "slot": [7, 18, 29]},
        {"id": 2, "name": "Operating Systems", "code": "SCOB031", "year": 3, "semester": 1, "credits": 16, "programme": "Regular", "slot": [4, 15, 24, 33]},
        {"id": 3, "name": "Mathematical Analysis I", "code": "SMTA031", "year": 3, "semester": 1, "credits": 16, "programme": "Regular", "slot": [9, 17, 26]},
        {"id": 4, "name": "Abstract Algebra", "code": "SMTB031", "year": 3, "semester": 1, "credits": 16, "programme": "Regular", "slot": [1, 13, 22, 30]},
        {"id": 5, "name": "Quantum Mechanics", "code": "SPHA031", "year": 3, "semester": 1, "credits": 16, "programme": "Regular", "slot": [6, 19, 28]},
        {"id": 6, "name": "Thermodynamics and Statistical Mechanics", "code": "SPHB031", "year": 3, "semester": 1, "credits": 16, "programme": "Regular", "slot": [3, 12, 21, 34]},
        {"id": 8, "name": "Time Series Analysis", "code": "SSTA031", "year": 3, "semester": 1, "credits": 16, "programme": "Regular", "slot": [5, 14, 25, 35]},
        {"id": 9, "name": "Applied Linear Regression", "code": "SSTB031", "year": 3, "semester": 1, "credits": 16, "programme": "Regular", "slot": [10, 23, 32]},
    ],
    
    // Semester 2
    [
        {"id": 0, "name": "Mathematical Theory of Electromagnetism and Special Theory of Relativity", "code": "SAPA032", "year": 3, "semester": 2, "credits": 32, "programme": "Regular", "slot": [2, 11, 20]},
        {"id": 1, "name": "Artificial Intelligence", "code": "SCOA032", "year": 3, "semester": 2, "credits": 16, "programme": "Regular", "slot": [7, 18, 29, 31]},
        {"id": 2, "name": "Computer Networks", "code": "SCOB032", "year": 3, "semester": 2, "credits": 16, "programme": "Regular", "slot": [4, 15, 24]},
        {"id": 3, "name": "Complex Analysis", "code": "SMTA032", "year": 3, "semester": 2, "credits": 16, "programme": "Regular", "slot": [9, 17, 26, 33]},
        {"id": 4, "name": "Mathematical Analysis II", "code": "SMTB032", "year": 3, "semester": 2, "credits": 16, "programme": "Regular", "slot": [1, 13, 22]},
        {"id": 5, "name": "Solid State Physics", "code": "SPHA032", "year": 3, "semester": 2, "credits": 16, "programme": "Regular", "slot": [6, 19, 28, 30]},
        {"id": 6, "name": "Electrodynamics and Electronics", "code": "SPHB032", "year": 3, "semester": 2, "credits": 16, "programme": "Regular", "slot": [3, 12, 21]},
        {"id": 7, "name": "Design and Analysis of Experiments", "code": "SSTA032", "year": 3, "semester": 2, "credits": 16, "programme": "Regular", "slot": [8, 16, 27, 34]},
        {"id": 8, "name": "Multivariate Statistical Methods", "code": "SSTB032", "year": 3, "semester": 2, "credits": 16, "programme": "Regular", "slot": [5, 14, 25]},
        {"id": 9, "name": "Sampling Theory", "code": "SSTC032", "year": 3, "semester": 2, "credits": 16, "programme": "Regular", "slot": [10, 23, 32, 35]},
    ],
    
];


export default modules