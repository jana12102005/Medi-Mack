const courses = [
{
  title: 'Pharmacovigilance & Drug Safety',
  objective: 'To train students in drug safety, adverse event case processing, signal detection and regulatory reporting as per global PV standards.',
  roles: 'PV Associate · Drug Safety Associate · Case Processing Executive · Safety Scientist',
  outcomes: [
    'Understand PV regulations and ICH-GVP guidelines',
    'Process ICSRs from intake to submission',
    'Code events using MedDRA and WHO-Drug',
    'Perform signal detection and aggregate reporting',
    'Crack drug safety and PV interviews'
  ],
  companies: {
    'CRO / Clinical': ['IQVIA', 'Parexel', 'Syneos Health', 'ICON plc', 'Labcorp'],
    'Pharma Companies': ['Cipla', 'Sun Pharma', "Dr. Reddy's", 'Lupin'],
    'Healthcare / IT': ['Accenture', 'Cognizant', 'TCS']
  },
  days: [
    ['1','PV Foundations','History, drug safety, ADR vs AE, need for PV','WHO-UMC, CIOMS','Case study reading'],
    ['2','Regulatory Framework','ICH E2 series, GVP, FDA, EMA, CDSCO, PvPI','ICH guidelines','Guideline mapping'],
    ['3','Adverse Events & ADRs','Types, seriousness, causality, expectedness','WHO-UMC scale','AE classification'],
    ['4','Sources of Safety Data','Spontaneous, clinical trial, literature, social media','Case sources','Source mapping'],
    ['5','ICSR Basics','Valid case criteria, ICSR elements, timelines','E2B(R3) format','ICSR form review'],
    ['6','Case Intake & Triage','Receipt, duplicate check, seriousness assessment','Safety database','Case triage lab'],
    ['7','Data Entry & Coding','Narrative fields, MedDRA, WHO-Drug coding','MedDRA browser','Coding practice'],
    ['8','Causality & Narratives','Causality assessment, narrative writing','Case templates','Narrative writing'],
    ['9','Argus Safety Practice','Case booking, QC, submission workflow','Argus (demo)','End-to-end case entry'],
    ['10','Mid-Course Project','Process 5 ICSRs end to end','Mock safety database','Mid-course review'],
    ['11','Aggregate Reports','PSUR, PBRER, DSUR, RMP overview','Sample reports','Report reading'],
    ['12','Signal Detection','Disproportionality, signal validation, prioritisation','EudraVigilance, FAERS','Signal analysis'],
    ['13','Risk Management','RMP, risk minimisation, REMS','EMA RMP template','RMP review'],
    ['14','Clinical Trial Safety','SAE, SUSAR, DSMB, expedited reporting','Protocol samples','SUSAR assessment'],
    ['15','Literature Surveillance','Literature screening, medical review basics','PubMed, Embase','Literature screening'],
    ['16','Quality & Compliance','SOPs, audits, inspections, CAPA','Audit checklists','Audit simulation'],
    ['17','PV Agreements & Vendors','SDEA, outsourcing, MAH duties, QPPV','Sample SDEA','Case discussion'],
    ['18','AI in Pharmacovigilance','Automation, NLP case intake, AI signal detection','ChatGPT + Excel','AI-assisted triage'],
    ['19','Capstone Build','End-to-end case processing and signal report','Safety DB + Excel','Capstone development'],
    ['20','Capstone + Placement','Project demo, resume, interview prep','All tools','Final assessment + mock interview']
  ]
},
{
  title: 'Clinical Research & Clinical Trials',
  objective: 'To train students in clinical trial design, GCP, regulatory approvals and site-level trial conduct for careers in clinical research.',
  roles: 'Clinical Research Associate · Clinical Trial Assistant · Study Coordinator · Regulatory Executive',
  outcomes: [
    'Understand clinical trial phases and design',
    'Apply ICH-GCP and ethical principles',
    'Prepare protocol, ICF and essential documents',
    'Handle site monitoring and trial documentation',
    'Crack clinical research interviews'
  ],
  companies: {
    'CRO / Clinical': ['IQVIA', 'Parexel', 'Syneos Health', 'ICON plc', 'Labcorp'],
    'Pharma Companies': ['Cipla', 'Sun Pharma', "Dr. Reddy's", 'Lupin'],
    'Healthcare / IT': ['Accenture', 'Cognizant', 'TCS']
  },
  days: [
    ['1','Clinical Research Basics','Drug development, trial phases, stakeholders','Case studies','Phase mapping'],
    ['2','Ethics in Research','Nuremberg, Helsinki, Belmont, ethics committees','Ethics guidelines','Ethics case review'],
    ['3','ICH-GCP Principles','GCP E6(R3), roles of sponsor, CRO, investigator','ICH-GCP text','GCP quiz'],
    ['4','Regulatory Framework','CDSCO, NDCT Rules 2019, FDA, EMA','CTRI portal','Approval process mapping'],
    ['5','Trial Design','Randomisation, blinding, endpoints, control groups','Sample protocols','Design exercise'],
    ['6','Protocol Writing','Protocol structure, objectives, eligibility criteria','Protocol template','Protocol drafting'],
    ['7','Informed Consent','ICF elements, consent process, vulnerable groups','ICF template','ICF review'],
    ['8','Investigator Brochure & CRF','IB content, CRF design, source documents','Sample CRF','CRF design lab'],
    ['9','Site Selection & Initiation','Feasibility, SIV, essential documents','TMF checklist','Site initiation mock'],
    ['10','Mid-Course Project','Design a Phase II trial outline','Protocol + ICF','Mid-course review'],
    ['11','Subject Recruitment','Screening, enrolment, retention, compliance','Screening logs','Recruitment plan'],
    ['12','Investigational Product','IP accountability, storage, dispensing','IP logs','Accountability lab'],
    ['13','Safety in Trials','AE, SAE reporting, DSMB, SUSAR basics','SAE form','SAE reporting practice'],
    ['14','Monitoring & Audits','Monitoring visits, SDV, audits, inspections','Monitoring report','Mock monitoring visit'],
    ['15','Trial Documentation','TMF, ISF, ALCOA+, data integrity','TMF index','Document filing'],
    ['16','Biostatistics Basics','Sample size, p-value, analysis populations','Excel','Statistics lab'],
    ['17','Study Close-Out','Database lock, CSR, archiving','CSR outline','Close-out checklist'],
    ['18','Clinical Trials & AI','AI in patient matching, monitoring, documentation','ChatGPT','AI trial-assist lab'],
    ['19','Capstone Build','Complete trial package preparation','Templates + Excel','Capstone development'],
    ['20','Capstone + Placement','Project demo, resume, interview prep','All tools','Final assessment + mock interview']
  ]
},
{
  title: 'Clinical Data Management',
  objective: 'To train students in CRF design, EDC systems, data validation and database lock as followed in clinical data management teams.',
  roles: 'Clinical Data Coordinator · Data Manager · EDC Programmer Trainee · Data Quality Analyst',
  outcomes: [
    'Understand the clinical data management lifecycle',
    'Design CRFs and build EDC databases',
    'Write data validation checks and manage queries',
    'Perform medical coding and database lock',
    'Crack CDM interviews'
  ],
  companies: {
    'CRO / Clinical': ['IQVIA', 'Parexel', 'Syneos Health', 'ICON plc', 'Labcorp'],
    'Pharma Companies': ['Cipla', 'Sun Pharma', "Dr. Reddy's", 'Lupin'],
    'Healthcare / IT': ['Accenture', 'Cognizant', 'TCS']
  },
  days: [
    ['1','CDM Foundations','CDM role, data lifecycle, stakeholders','Case studies','Lifecycle mapping'],
    ['2','Regulations & Standards','GCP, 21 CFR Part 11, CDISC overview','CDISC website','Standards mapping'],
    ['3','CRF Design','Paper and eCRF, annotated CRF, design principles','Sample CRF','CRF design lab'],
    ['4','Data Management Plan','DMP sections, timelines, data flow','DMP template','DMP drafting'],
    ['5','EDC Systems Overview','EDC features, roles, audit trail, eCRF build','Medidata / OpenClinica','EDC walkthrough'],
    ['6','Database Design','Forms, fields, edit checks, UAT','OpenClinica','Mini database build'],
    ['7','Data Entry & Validation','Double entry, data validation plan, edit checks','Excel','Validation lab'],
    ['8','Query Management','Query types, resolution workflow, discrepancies','EDC demo','Query resolution'],
    ['9','Data Cleaning','Listings, reconciliation, missing data','Excel','Cleaning exercise'],
    ['10','Mid-Course Project','Build and test a mini study database','OpenClinica','Mid-course review'],
    ['11','Medical Coding','MedDRA, WHO-Drug, coding conventions','MedDRA browser','Coding practice'],
    ['12','SAE Reconciliation','PV-CDM reconciliation, discrepancy handling','Sample listings','Reconciliation task'],
    ['13','External Data','Lab data, ePRO, central lab, vendor data','Sample data files','Data transfer check'],
    ['14','CDISC Basics','SDTM, CDASH, ADaM overview','CDISC samples','Domain mapping'],
    ['15','SQL & Data Review','SELECT, filters, joins for data review','SQL / SQLite','Data review queries'],
    ['16','Quality Control','QC checks, audit readiness, metrics','QC checklist','QC audit'],
    ['17','Database Lock','Pre-lock checks, freeze, lock, archive','Lock checklist','Lock simulation'],
    ['18','AI in Data Management','AI for query generation and data cleaning','ChatGPT + Excel','AI cleaning lab'],
    ['19','Capstone Build','End-to-end study data management project','EDC + Excel','Capstone development'],
    ['20','Capstone + Placement','Project demo, resume, interview prep','All tools','Final assessment + mock interview']
  ]
},
{
  title: 'Drug Discovery & Development',
  objective: 'To train students in the drug discovery pipeline from target identification to preclinical and regulatory submission.',
  roles: 'Research Associate · Drug Discovery Trainee · Medicinal Chemistry Assistant · Preclinical Associate',
  outcomes: [
    'Understand the end-to-end drug discovery pipeline',
    'Identify targets and design lead molecules',
    'Apply ADME, toxicity and preclinical concepts',
    'Use databases and in-silico tools for lead work',
    'Crack pharma R&D interviews'
  ],
  companies: {
    'Pharma / Biotech': ['Sun Pharma', "Dr. Reddy's", 'Cipla', 'Lupin', 'Biocon'],
    'Research / CRO': ['Syngene', 'Aragen', 'Jubilant Biosys', 'Sai Life Sciences'],
    'Software / AI': ['Schrödinger', 'Elucidata', 'Cognizant']
  },
  days: [
    ['1','Drug Discovery Overview','Pipeline, timelines, cost, success rates','Case studies','Pipeline mapping'],
    ['2','Target Identification','Disease biology, genomics, target validation','UniProt, OMIM','Target search lab'],
    ['3','Biological Databases','Protein, gene and chemical databases','PDB, PubChem','Database exploration'],
    ['4','Hit Identification','HTS, fragment screening, virtual screening','PubChem','Hit list analysis'],
    ['5','Lead Generation','SAR, lead-likeness, Lipinski rule','ChEMBL','SAR analysis'],
    ['6','Lead Optimisation','Potency, selectivity, medicinal chemistry','ChemDraw / MarvinSketch','Molecule design'],
    ['7','ADME Basics','Absorption, distribution, metabolism, excretion','SwissADME','ADME prediction'],
    ['8','Toxicity Assessment','Toxicity endpoints, in-silico toxicity','ProTox','Toxicity prediction'],
    ['9','Pharmacology Studies','In vitro, in vivo, PK/PD basics','Study reports','Study review'],
    ['10','Mid-Course Project','Shortlist a lead molecule for a target','PubChem + SwissADME','Mid-course review'],
    ['11','Preclinical Development','GLP, safety pharmacology, IND-enabling studies','GLP guidelines','Preclinical plan'],
    ['12','Formulation Basics','Dosage forms, excipients, stability','Formulation samples','Formulation exercise'],
    ['13','Clinical Development','Phase I–IV, trial design overview','ClinicalTrials.gov','Trial search'],
    ['14','Regulatory Pathways','IND, NDA, ANDA, CDSCO approvals','FDA / CDSCO sites','Pathway mapping'],
    ['15','Intellectual Property','Patents, exclusivity, generics','Patent database','Patent search'],
    ['16','Biologics & Repurposing','Biosimilars, drug repurposing, case studies','Case studies','Repurposing case study'],
    ['17','Computational Tools','Docking and QSAR overview','AutoDock, PyRx','Demo docking run'],
    ['18','Drug Discovery & AI','AI for target and molecule prediction','ChatGPT + AI tools','AI tool lab'],
    ['19','Capstone Build','Complete lead discovery report','All databases','Capstone development'],
    ['20','Capstone + Placement','Project demo, resume, interview prep','All tools','Final assessment + mock interview']
  ]
},
{
  title: 'Molecular Docking & Virtual Screening',
  objective: 'To train students in structure-based drug design, molecular docking and virtual screening workflows using open-source tools.',
  roles: 'Computational Chemist Trainee · Bioinformatics Analyst · CADD Research Associate · Docking Specialist',
  outcomes: [
    'Understand structure-based drug design concepts',
    'Prepare proteins and ligands for docking',
    'Run docking and analyse binding interactions',
    'Perform virtual screening of compound libraries',
    'Crack CADD and bioinformatics interviews'
  ],
  companies: {
    'Pharma / Biotech': ['Sun Pharma', "Dr. Reddy's", 'Cipla', 'Lupin', 'Biocon'],
    'Research / CRO': ['Syngene', 'Aragen', 'Jubilant Biosys', 'Sai Life Sciences'],
    'Software / AI': ['Schrödinger', 'Elucidata', 'Cognizant']
  },
  days: [
    ['1','CADD Foundations','SBDD vs LBDD, docking concepts, applications','Case studies','Concept mapping'],
    ['2','Protein Structure Basics','Protein levels, active sites, PDB file format','RCSB PDB','Structure exploration'],
    ['3','Ligand Databases','Small molecules, SMILES, SDF, file formats','PubChem, ZINC','Ligand download'],
    ['4','Software Setup','Installation, workflow, file conversion','PyRx, Open Babel','Software setup lab'],
    ['5','Protein Preparation','Cleaning, adding hydrogens, charges, water removal','PyMOL, AutoDockTools','Protein prep lab'],
    ['6','Ligand Preparation','Energy minimisation, tautomers, format conversion','Open Babel','Ligand prep lab'],
    ['7','Binding Site & Grid','Active site detection, grid box, parameters','CASTp, AutoDock','Grid box setup'],
    ['8','Docking with AutoDock','Search algorithms, scoring, running docking','AutoDock Vina','First docking run'],
    ['9','Docking Analysis','Binding energy, poses, RMSD, validation','PyMOL','Pose analysis'],
    ['10','Mid-Course Project','Dock a ligand against a disease target','PyRx + PyMOL','Mid-course review'],
    ['11','Interaction Analysis','H-bonds, hydrophobic contacts, 2D interaction maps','Discovery Studio','Interaction mapping'],
    ['12','Docking Validation','Redocking, decoys, enrichment, ROC curves','AutoDock Vina','Validation exercise'],
    ['13','Virtual Screening I','Library preparation, filters, screening workflow','PyRx','Library screening'],
    ['14','Virtual Screening II','Hit ranking, drug-likeness, ADMET filters','SwissADME','Hit filtering'],
    ['15','Pharmacophore Modelling','Features, model building, screening','PharmaGist','Pharmacophore lab'],
    ['16','Molecular Dynamics Intro','MD concepts, stability, RMSD/RMSF basics','GROMACS (demo)','MD demo'],
    ['17','Scripting Basics','Python for batch docking and file handling','Python + Colab','Batch docking script'],
    ['18','AI in Docking','ML scoring, AI-based hit prediction','ChatGPT + AI tools','AI-assisted screening'],
    ['19','Capstone Build','Virtual screening study on a chosen target','Full CADD toolset','Capstone development'],
    ['20','Capstone + Placement','Project demo, resume, interview prep','All tools','Final assessment + mock interview']
  ]
},
{
  title: 'Bioavailability & Bioequivalence',
  objective: 'To train students in BA/BE study design, pharmacokinetic analysis and regulatory requirements for generic drug approvals.',
  roles: 'BA/BE Associate · Pharmacokinetics Trainee · Clinical Pharmacology Assistant · Regulatory Executive',
  outcomes: [
    'Understand BA/BE concepts and study designs',
    'Perform pharmacokinetic parameter calculations',
    'Apply bioequivalence statistical analysis',
    'Follow regulatory guidelines for BE studies',
    'Crack BA/BE and CRO interviews'
  ],
  companies: {
    'CRO / Clinical': ['IQVIA', 'Parexel', 'Syneos Health', 'ICON plc', 'Labcorp'],
    'Pharma Companies': ['Cipla', 'Sun Pharma', "Dr. Reddy's", 'Lupin'],
    'Healthcare / IT': ['Accenture', 'Cognizant', 'TCS']
  },
  days: [
    ['1','BA/BE Foundations','Bioavailability, bioequivalence, generics, importance','Case studies','Concept mapping'],
    ['2','Pharmacokinetics I','ADME, compartment models, rate constants','Excel','PK curve plotting'],
    ['3','Pharmacokinetics II','Cmax, Tmax, AUC, half-life, clearance','Excel','PK parameter calculation'],
    ['4','BE Study Designs','Crossover, parallel, replicate, washout','Sample protocols','Design selection'],
    ['5','Regulatory Guidelines','CDSCO, USFDA, EMA BE guidance','Guideline documents','Guideline comparison'],
    ['6','Subject Selection','Volunteers, inclusion criteria, ethics, consent','ICF template','Subject screening mock'],
    ['7','Study Conduct & Dosing','Fasting/fed studies, sampling, IP handling','Clinical logs','Dosing schedule lab'],
    ['8','Bioanalysis Basics','LC-MS/MS, sample handling, method validation','Bioanalytical reports','Method review'],
    ['9','Mid-Course Project','Analyse a sample PK dataset','Excel','Mid-course review'],
    ['10','BE Statistics I','Log-transformation, ANOVA, 90% confidence interval','Excel / R','CI calculation'],
    ['11','BE Statistics II','80–125% criteria, power, sample size','Excel / R','BE decision exercise'],
    ['12','Dissolution & IVIVC','Dissolution testing, biowaivers, BCS','BCS references','Biowaiver case study'],
    ['13','Special BE Cases','Highly variable drugs, NTI drugs, modified release','FDA guidance','Case discussion'],
    ['14','Data Management & QC','Data capture, audit trail, ALCOA+','Sample datasets','Data QC exercise'],
    ['15','Safety in BA/BE','AE reporting, subject safety, DSMB role','SAE forms','AE reporting lab'],
    ['16','Audits & Inspections','GCP audits, deviations, CAPA','Audit checklist','Mock audit'],
    ['17','BE Study Report','CSR structure, tables, conclusions','CSR template','Report drafting'],
    ['18','AI in BA/BE','AI for PK modelling and report drafting','ChatGPT + Excel','AI-assisted analysis'],
    ['19','Capstone Build','Complete BE study design and analysis','Excel + templates','Capstone development'],
    ['20','Capstone + Placement','Project demo, resume, interview prep','All tools','Final assessment + mock interview']
  ]
},
{
  title: 'Pharmaceutical Quality Assurance',
  objective: 'To train students in GMP, quality systems, validation and regulatory compliance required in pharmaceutical manufacturing.',
  roles: 'QA Executive · QA Documentation Officer · Validation Associate · Compliance Trainee',
  outcomes: [
    'Understand GMP and pharmaceutical quality systems',
    'Prepare SOPs, batch records and documentation',
    'Handle deviations, CAPA and change control',
    'Support validation and qualification activities',
    'Crack pharma QA interviews'
  ],
  companies: {
    'Pharma Manufacturing': ['Sun Pharma', 'Cipla', "Dr. Reddy's", 'Lupin', 'Zydus'],
    'Testing / CRO': ['Intertek', 'SGS', 'Eurofins', 'Syngene'],
    'Biotech / Vaccines': ['Biocon', 'Serum Institute', 'Bharat Biotech']
  },
  days: [
    ['1','QA Foundations','QA vs QC, quality concepts, industry role','Case studies','Role mapping'],
    ['2','GMP Principles','cGMP, Schedule M, WHO-GMP, USFDA basics','GMP guidelines','GMP gap review'],
    ['3','Quality Management','QMS, quality policy, quality manual','QMS samples','QMS mapping'],
    ['4','Documentation Practices','SOPs, ALCOA+, good documentation','SOP templates','SOP writing'],
    ['5','Batch Records','BMR, BPR, line clearance, review','Sample BMR','Batch record review'],
    ['6','Deviation Management','Deviation types, investigation, root cause','Deviation forms','Deviation handling'],
    ['7','CAPA & Change Control','CAPA process, change control workflow','CAPA templates','CAPA writing'],
    ['8','Validation Basics','Validation master plan, IQ, OQ, PQ','VMP sample','Validation planning'],
    ['9','Equipment Qualification','URS, DQ, IQ/OQ/PQ protocols','Qualification protocols','Protocol review'],
    ['10','Mid-Course Project','Prepare an SOP and deviation report','SOP + forms','Mid-course review'],
    ['11','Process Validation','Stages, PPQ, CPV, sampling plans','PV protocols','PV protocol review'],
    ['12','Cleaning Validation','MACO, swab and rinse methods, limits','Excel','MACO calculation'],
    ['13','Vendor & Material Control','Vendor qualification, incoming material QA','Audit checklist','Vendor audit mock'],
    ['14','Stability Studies','ICH Q1, protocols, shelf life','ICH Q1 guidelines','Stability protocol'],
    ['15','Audits & Inspections','Internal audits, regulatory inspections, 483','Audit checklist','Mock audit'],
    ['16','Regulatory Compliance','Data integrity, ICH Q8–Q10, dossiers','ICH guidelines','Compliance discussion'],
    ['17','Risk Management','ICH Q9, FMEA, risk assessment','FMEA template','FMEA exercise'],
    ['18','AI in Quality Assurance','AI for document review and trend analysis','ChatGPT + Excel','AI-assisted QA lab'],
    ['19','Capstone Build','QA package: SOP, BMR, CAPA, audit report','All templates','Capstone development'],
    ['20','Capstone + Placement','Project demo, resume, interview prep','All tools','Final assessment + mock interview']
  ]
},
{
  title: 'Pharmaceutical Quality Control & Analytical Techniques',
  objective: 'To train students in analytical instrumentation, method development and quality control testing of pharmaceutical products.',
  roles: 'QC Analyst · Analytical Chemist · HPLC Analyst · Lab Executive',
  outcomes: [
    'Understand QC lab practices and pharmacopoeial testing',
    'Operate and interpret HPLC, UV and GC data',
    'Develop and validate analytical methods',
    'Maintain data integrity and lab documentation',
    'Crack pharma QC interviews'
  ],
  companies: {
    'Pharma Manufacturing': ['Sun Pharma', 'Cipla', "Dr. Reddy's", 'Lupin', 'Zydus'],
    'Testing / CRO': ['Intertek', 'SGS', 'Eurofins', 'Syngene'],
    'Biotech / Vaccines': ['Biocon', 'Serum Institute', 'Bharat Biotech']
  },
  days: [
    ['1','QC Foundations','QC lab role, GLP, pharmacopoeias','IP, USP, BP','Pharmacopoeia review'],
    ['2','Lab Basics & Safety','Glassware, balances, solutions, lab safety','Lab SOPs','Solution preparation'],
    ['3','Sampling & Documentation','Sampling plans, raw data, ALCOA+, COA','Sample COA','Sampling exercise'],
    ['4','Raw Material Testing','Identification, assay, limit tests','Monograph samples','Monograph review'],
    ['5','UV-Visible Spectroscopy','Beer-Lambert law, calibration, assay','UV-Vis (demo)','Calibration curve'],
    ['6','FTIR & Spectroscopy','IR principle, identification, interpretation','IR spectra','Spectra interpretation'],
    ['7','Chromatography Basics','TLC, column, principles, retention parameters','Chromatograms','Chromatogram reading'],
    ['8','HPLC I','Components, columns, mobile phase, detectors','HPLC (demo)','HPLC system tour'],
    ['9','HPLC II','System suitability, assay, related substances','Empower (demo)','Chromatogram analysis'],
    ['10','Mid-Course Project','Analyse HPLC data and report results','Sample datasets','Mid-course review'],
    ['11','Gas Chromatography','GC principle, residual solvents, headspace','GC data','GC data analysis'],
    ['12','Dissolution Testing','Apparatus types, media, profile comparison','Dissolution data','Dissolution profile'],
    ['13','Finished Product Testing','Tablets and injectables: hardness, disintegration, assay','IP tests','Test report writing'],
    ['14','Method Development','Selection, optimisation, robustness','Excel','Method plan'],['15','Method Validation','ICH Q2: specificity, linearity, accuracy, precision','ICH Q2','Validation calculations'],
    ['16','Instrument Calibration','Calibration, qualification, PM schedules','Calibration logs','Calibration record'],
    ['17','OOS / OOT Investigation','Phase I and II investigation, root cause','OOS forms','OOS case study'],
    ['18','Data Integrity & AI','Audit trails, ALCOA+, AI for data review','ChatGPT + Excel','Data review lab'],
    ['19','Capstone Build','Method validation report with data analysis','Excel + templates','Capstone development'],
    ['20','Capstone + Placement','Project demo, resume, interview prep','All tools','Final assessment + mock interview']
  ]
},
{
  title: 'AI-Powered Drug Discovery',
  objective: 'To train students in applying machine learning and AI tools for target prediction, molecule design and property prediction in drug discovery.',
  roles: 'AI Drug Discovery Trainee · Cheminformatics Analyst · Bioinformatics Data Analyst · Computational Biology Associate',
  outcomes: [
    'Apply Python and ML basics to drug discovery data',
    'Use RDKit for molecular descriptors and fingerprints',
    'Build models for activity and ADMET prediction',
    'Use AI tools for docking and molecule generation',
    'Crack AI drug discovery interviews'
  ],
  companies: {
    'Pharma / Biotech': ['Sun Pharma', "Dr. Reddy's", 'Cipla', 'Lupin', 'Biocon'],
    'Research / CRO': ['Syngene', 'Aragen', 'Jubilant Biosys', 'Sai Life Sciences'],
    'Software / AI': ['Schrödinger', 'Elucidata', 'Cognizant']
  },
  days: [
    ['1','AI in Drug Discovery','Pipeline, AI use cases, industry trends','Case studies','Use case mapping'],
    ['2','Python Basics','Variables, loops, functions, pandas','Python + Colab','Coding lab'],
    ['3','Data Handling','CSV, NumPy, pandas, plotting','pandas, Matplotlib','Dataset analysis'],
    ['4','Chemical Data Sources','ChEMBL, PubChem, SMILES, SDF','ChEMBL, PubChem','Dataset download'],
    ['5','RDKit Basics','Molecules, SMILES parsing, descriptors','RDKit','Descriptor calculation'],
    ['6','Molecular Fingerprints','Morgan fingerprints, similarity search','RDKit','Similarity search lab'],
    ['7','ML Fundamentals','Supervised learning, train-test split, metrics','scikit-learn','First ML model'],
    ['8','QSAR Modelling I','Feature selection, regression, classification','scikit-learn','Activity model build'],
    ['9','QSAR Modelling II','Model validation, cross-validation, overfitting','scikit-learn','Model validation'],
    ['10','Mid-Course Project','Build a QSAR model on ChEMBL data','Python + RDKit','Mid-course review'],
    ['11','ADMET Prediction','Solubility, toxicity, drug-likeness prediction','SwissADME, ADMETlab','ADMET screening'],
    ['12','Protein Structure with AI','AlphaFold, structure prediction, PDB comparison','AlphaFold DB','Structure retrieval'],
    ['13','AI-Assisted Docking','Docking workflow, ML scoring functions','AutoDock Vina, PyRx','Docking with ML rescoring'],
    ['14','Deep Learning Intro','Neural networks, graph networks for molecules','PyTorch (demo)','Network demo'],
    ['15','Generative Molecule Design','Generative models, SMILES generation, filtering','Generative AI tools','Molecule generation lab'],
    ['16','Drug Repurposing with AI','Knowledge graphs, network approaches','Open databases','Repurposing case study'],
    ['17','LLMs in Drug Discovery','Literature mining, target summaries, prompt use','ChatGPT / Gemini','Literature mining lab'],
    ['18','Responsible AI in Pharma','Bias, data quality, reproducibility, regulation','Case reading','AI risk review'],
    ['19','Capstone Build','End-to-end AI-driven hit identification','Python + RDKit + ML','Capstone development'],
    ['20','Capstone + Placement','Project demo, resume, interview prep','All tools','Final assessment + mock interview']
  ]
}
];
