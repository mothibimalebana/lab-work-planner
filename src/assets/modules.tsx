const modules = [
    // ===== YEAR 2 - REGULAR PROGRAMME =====
    //  Semester 1
    [
        {"name": "Advanced Calculus", "code": "SMTA021", "year": 2, "semester": 1, "credits": 20, "programme": "Regular"},
        {"name": "Ordinary and Partial Differential Equations", "code": "SAPA021", "year": 2, "semester": 1, "credits": 20, "programme": "Regular"},
        {"name": "Data Structures", "code": "SCOA021", "year": 2, "semester": 1, "credits": 20, "programme": "Regular"},
        {"name": "Theory of Distributions", "code": "SSTA021", "year": 2, "semester": 1, "credits": 20, "programme": "Regular"},
        {"name": "Classical Mechanics", "code": "SPHA021", "year": 2, "semester": 1, "credits": 10, "programme": "Regular"},
        {"name": "Modern Physics", "code": "SPHB021", "year": 2, "semester": 1, "credits": 10, "programme": "Regular"},
    ],
    
    //  Semester 2
    [
        {"name": "Advanced Calculus", "code": "SMTA022", "year": 2, "semester": 2, "credits": 20, "programme": "Regular"},
        {"name": "Numerical Analysis", "code": "SAPA022", "year": 2, "semester": 2, "credits": 20, "programme": "Regular"},
        {"name": "Computer Architecture", "code": "SCOA022", "year": 2, "semester": 2, "credits": 20, "programme": "Regular"},
        {"name": "Statistical Inference", "code": "SSTA022", "year": 2, "semester": 2, "credits": 20, "programme": "Regular"},
        {"name": "Electrodynamics and Electronics", "code": "SPHA022", "year": 2, "semester": 2, "credits": 10, "programme": "Regular"},
        {"name": "Waves and Physical Optics", "code": "SPHB022", "year": 2, "semester": 2, "credits": 10, "programme": "Regular"},
    ],
    
    // ===== YEAR 2 - EXTENDED PROGRAMME (BSCE01) =====
    //  These are from YEAR LEVEL 3 in Extended Programme (equivalent to Year 2 Regular)
    //  Semester 1
    [
        {"name": "Advanced Calculus", "code": "SMTA021", "year": 2, "semester": 1, "credits": 20, "programme": "Extended"},
        {"name": "Data Structures", "code": "SCOA021", "year": 2, "semester": 1, "credits": 20, "programme": "Extended"},
        {"name": "Classical Mechanics", "code": "SPHA021", "year": 2, "semester": 1, "credits": 10, "programme": "Extended"},
        {"name": "Modern Physics", "code": "SPHB021", "year": 2, "semester": 1, "credits": 10, "programme": "Extended"},
        {"name": "Theory of Distributions", "code": "SSTA021", "year": 2, "semester": 1, "credits": 20, "programme": "Extended"},
    ],
    
    //  Semester 2
    [
        {"name": "Linear Algebra", "code": "SMTA022", "year": 2, "semester": 2, "credits": 20, "programme": "Extended"},
        {"name": "Computer Architecture", "code": "SCOA022", "year": 2, "semester": 2, "credits": 20, "programme": "Extended"},
        {"name": "Electrodynamics and Electronics", "code": "SPHA022", "year": 2, "semester": 2, "credits": 10, "programme": "Extended"},
        {"name": "Waves and Physical Optics", "code": "SPHB022", "year": 2, "semester": 2, "credits": 10, "programme": "Extended"},
        {"name": "Statistical Inference", "code": "SSTA022", "year": 2, "semester": 2, "credits": 20, "programme": "Extended"},
    ],
    
    //  ===== YEAR 3 - REGULAR PROGRAMME =====
    //  Semester 1
    [
        {"name": "Fluid Mechanics", "code": "SPA031", "year": 3, "semester": 1, "credits": 32, "programme": "Regular"},
        {"name": "Introduction to Database Systems", "code": "SCOA031", "year": 3, "semester": 1, "credits": 16, "programme": "Regular"},
        {"name": "Operating Systems", "code": "SCOB031", "year": 3, "semester": 1, "credits": 16, "programme": "Regular"},
        {"name": "Mathematical Analysis I", "code": "SMTA031", "year": 3, "semester": 1, "credits": 16, "programme": "Regular"},
        {"name": "Abstract Algebra", "code": "SMTB031", "year": 3, "semester": 1, "credits": 16, "programme": "Regular"},
        {"name": "Quantum Mechanics", "code": "SPHA031", "year": 3, "semester": 1, "credits": 16, "programme": "Regular"},
        {"name": "Thermodynamics and Statistical Mechanics", "code": "SPHB031", "year": 3, "semester": 1, "credits": 16, "programme": "Regular"},
        {"name": "Statistical Quality Control", "code": "SSTA031", "year": 3, "semester": 1, "credits": 16, "programme": "Regular"},
        {"name": "Time Series Analysis", "code": "SSTA031", "year": 3, "semester": 1, "credits": 16, "programme": "Regular"},
        {"name": "Applied Linear Regression", "code": "SSTB031", "year": 3, "semester": 1, "credits": 16, "programme": "Regular"},
    ],
    
    //  Semester 2
    [
        {"name": "Mathematical Theory of Electromagnetism and Special Theory of Relativity", "code": "SAPA032", "year": 3, "semester": 2, "credits": 32, "programme": "Regular"},
        {"name": "Artificial Intelligence", "code": "SCOA032", "year": 3, "semester": 2, "credits": 16, "programme": "Regular"},
        {"name": "Computer Networks", "code": "SCOB032", "year": 3, "semester": 2, "credits": 16, "programme": "Regular"},
        {"name": "Complex Analysis", "code": "SMTA032", "year": 3, "semester": 2, "credits": 16, "programme": "Regular"},
        {"name": "Mathematical Analysis II", "code": "SMTB032", "year": 3, "semester": 2, "credits": 16, "programme": "Regular"},
        {"name": "Solid State Physics", "code": "SPHA032", "year": 3, "semester": 2, "credits": 16, "programme": "Regular"},
        {"name": "Electrodynamics and Electronics", "code": "SPHB032", "year": 3, "semester": 2, "credits": 16, "programme": "Regular"},
        {"name": "Design and Analysis of Experiments", "code": "SSTA032", "year": 3, "semester": 2, "credits": 16, "programme": "Regular"},
        {"name": "Multivariate Statistical Methods", "code": "SSTB032", "year": 3, "semester": 2, "credits": 16, "programme": "Regular"},
        {"name": "Sampling Theory", "code": "SSTC032", "year": 3, "semester": 2, "credits": 16, "programme": "Regular"},
    ]
    

]

// To display the modules by time slot:
console.log("Modules Grouped by Time Slot:");
console.log("=============================");

const timeSlots = ["07h30-09h10", "09h20-11h00", "11h10-12h50", "13h00-14h40", "14h50-16h30", "16h40-18h00"];




export default modules