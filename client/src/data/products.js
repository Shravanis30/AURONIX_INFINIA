export const products = [
  // --- ICU Equipment ---
  { 
    id: 1, 
    slug: "advanced-icu-ventilator",
    name: "Advanced ICU Ventilator", 
    category: "ICU Equipment", 
    desc: "State-of-the-art ventilator designed for high-acuity patients requiring critical respiratory support. Featuring advanced FiO2 control and waveform analysis.", 
    image: "/images/products/icu-ventilator.png",
    specs: {
      "Tidal Volume": "20 - 2000 ml",
      "FiO2": "21% - 100%",
      "PEEP": "0 - 45 cmH2O",
      "Modes": "CPAP, BiPAP, IPAP, SIMV, PCV"
    },
    features: ["Real-time waveform analysis", "4-hour battery backup", "Touchscreen interface"]
  },
  { 
    id: 2, 
    slug: "multipara-patient-monitor",
    name: "Multipara Patient Monitor", 
    category: "ICU Equipment", 
    desc: "High-precision multi-parameter monitor for continuous tracking of vital signs in critical care.", 
    image: "/images/products/patient-monitor.png",
    specs: {
      "Display": "12.1 inch Color TFT",
      "Parameters": "ECG, SpO2, NIBP, Respiration, Temp",
      "Storage": "720 hours trend data"
    },
    features: ["ST segment analysis", "Arrhythmia detection", "Wireless connectivity"]
  },
  { 
    id: 5, 
    slug: "electric-icu-bed",
    name: "Electric ICU Bed", 
    category: "Hospital Furniture", 
    desc: "Fully motorized ICU bed with 5-function controls for patient comfort and clinical efficiency.", 
    image: "/images/products/icu-bed.png",
    specs: {
      "Functions": "Hi-Lo, Backrest, Trendelenburg, Rev-Trend, Kneerest",
      "Capacity": "250 kg"
    },
    features: ["X-ray permeable backrest", "CPR function", "ABS headboards"]
  },

  // --- Operation Theatre ---
  { 
    id: 3, 
    slug: "surgical-led-light",
    name: "Surgical LED Light", 
    category: "Operation Theatre", 
    desc: "Shadowless operation light with adjustable intensity and superior color rendering for OT precision.", 
    image: "/images/products/surgical-light.png",
    specs: {
      "Intensity": "160,000 Lux",
      "LED Life": "> 50,000 hours"
    },
    features: ["Low heat generation", "Aerodynamic design", "Adjustable spot size"]
  },
  { 
    id: 4, 
    slug: "anesthesia-workstation",
    name: "Anesthesia Workstation", 
    category: "Operation Theatre", 
    desc: "Integrated anesthesia delivery system with advanced ventilation and safety monitoring.", 
    image: "/images/products/anesthesia-workstation.png",
    specs: {
      "Vaporizers": "Selectatec compatible",
      "Gas Supply": "O2, N2O, Air"
    },
    features: ["Compact ergonomic design", "Multiple ventilation modes", "Safety failure alarms"]
  },
  { 
    id: 7, 
    slug: "motorized-ot-table",
    name: "Motorized OT Table", 
    category: "Operation Theatre", 
    desc: "Versatile motorized operating table designed to support various surgical positions with stability.", 
    image: "/images/products/ot-table.png",
    specs: {
      "Positions": "Trendelenburg, Lateral tilt, Flex/Reflex",
      "Drive": "Electro-hydraulic"
    },
    features: ["C-arm compatible", "Remote operation", "Anti-static mattress"]
  },

  // --- Medical Cold Chain (NEW - Marken Reference) ---
  { 
    id: 101, 
    slug: "walk-in-freezer-marken",
    name: "Walk In Freezer", 
    category: "Medical Cold Chain", 
    desc: "Large-scale cold storage solution for vaccines, blood plasma, and temperature-sensitive pharmaceuticals.", 
    image: "/images/products/walk-in-freezer.png",
    specs: {
      "Temp Range": "-15\u00b0C to -25\u00b0C",
      "Insulation": "PUF Panels 100mm",
      "Control": "Digital PLC Controller"
    },
    features: ["External temp monitoring", "Safety alarm system", "Heavy-duty racks", "Restricted access lock"]
  },
  { 
    id: 102, 
    slug: "ult-deep-freezer-86",
    name: "ULT Deep Freezer -86\u00b0C", 
    category: "Medical Cold Chain", 
    desc: "Ultra-low temperature freezer for long-term storage of biological samples and mRNA vaccines.", 
    image: "/images/products/ult-freezer.png",
    specs: {
      "Temp Range": "-40\u00b0C to -86\u00b0C",
      "Capacity": "400 - 800 Liters",
      "Compressor": "Dual-stage cascade system"
    },
    features: ["Vacuum insulation panels", "Backup CO2 system compatibility", "Touchscreen log display"]
  },
  { 
    id: 103, 
    slug: "ice-lined-refrigerator",
    name: "Ice Lined Refrigerator (ILR)", 
    category: "Medical Cold Chain", 
    desc: "Specialized refrigerator for vaccine storage with ice lining to maintain temperature during power outages.", 
    image: "/images/products/ilr.png",
    specs: {
      "Holdover Time": "> 24 Hours",
      "Temp Range": "+2\u00b0C to +8\u00b0C"
    },
    features: ["CFC free refrigerant", "External temp display", "Top opening for minimal cold loss"]
  },
  { 
    id: 104, 
    slug: "refrigerated-truck-van",
    name: "Refrigerated Truck & Van", 
    category: "Medical Cold Chain", 
    desc: "Specially designed refrigerated vehicles for safe transport of temperature-sensitive medical supplies and vaccines.", 
    image: "/images/products/refrigerated-truck.png",
    specs: {
      "Temp Range": "-20\u00b0C to +10\u00b0C",
      "Power Source": "Vehicle engine driven / Independent unit"
    },
    features: ["GPS tracking integration", "Real-time temp logging", "High-density insulation"]
  },

  // --- Blood Bank Equipment (NEW - Marken Reference) ---
  { 
    id: 201, 
    slug: "blood-bank-refrigerator",
    name: "Blood Bank Refrigerator", 
    category: "Blood Bank Equipment", 
    desc: "Precision refrigerator designed to keep blood bags at a constant +4\u00b0C with sophisticated monitoring.", 
    image: "/images/products/blood-bank-refrigerator.png",
    specs: {
      "Operating Temp": "+4\u00b0C (\u00b11\u00b0C)",
      "Charts": "7-day circular chart recorder",
      "Capacity": "60 - 500 Bags"
    },
    features: ["Glass door for visibility", "Audio-visual alarms", "Battery backup for recorder"]
  },
  { 
    id: 202, 
    slug: "blood-collection-monitor",
    name: "Blood Collection Monitor", 
    category: "Blood Bank Equipment", 
    desc: "Electronic device for precise blood collection, ensuring standardized bag volume and gentle mixing.", 
    image: "/images/products/blood-monitor.png",
    specs: {
      "Volume Setting": "0 - 999 ml",
      "Accuracy": "< 1%"
    },
    features: ["Auto-clamping system", "LCD display", "Battery backup"]
  },
  { 
    id: 203, 
    slug: "refrigerated-centrifuge",
    name: "Refrigerated Centrifuge", 
    category: "Blood Bank Equipment", 
    desc: "High-speed centrifuge for separating blood components under controlled temperature conditions.", 
    image: "/images/products/centrifuge.png",
    specs: {
      "Max Speed": "6000 RPM",
      "Temp Control": "-20\u00b0C to +40\u00b0C"
    },
    features: ["Imbalance detection", "Brushless motor", "Digital programming"]
  },
  { 
    id: 204, 
    slug: "blood-bag-tube-sealer",
    name: "Blood Bag Tube Sealer", 
    category: "Blood Bank Equipment", 
    desc: "Heavy-duty radio frequency sealer for medical-grade PVC tubing of blood bags.", 
    image: "/images/products/tube-sealer.png",
    specs: {
      "Sealing Time": "0.5 - 2 seconds",
      "Frequency": "40.68 MHz"
    },
    features: ["Splash guard", "Automatic sealing", "Portable hand gun option"]
  },

  // --- Hospital Infra & Solutions (NEW - Marken Reference) ---
  { 
    id: 301, 
    slug: "modular-ot-system",
    name: "Modular OT Solutions", 
    category: "Hospital Infra & Solutions", 
    desc: "Complete turnkey modular operating theatre setup including antibacterial panels and laminar flow systems.", 
    image: "/images/products/modular-ot.png",
    specs: {
      "Wall Panels": "HPL / Stainless Steel",
      "Air Flow": "HEPA filtered laminar flow"
    },
    features: ["Anti-bacterial coating", "LED X-ray viewing screens", "Integrated surgeons control panel"]
  },
  { 
    id: 302, 
    slug: "medical-gas-pipeline",
    name: "Medical Gas Pipeline System", 
    category: "Hospital Infra & Solutions", 
    desc: "Centralized gas supply system for O2, N2O, Air, and Vacuum with master alarms and terminal outlets.", 
    image: "/images/products/mgps.png",
    specs: {
      "Components": "Manifolds, Alarms, Outlets, AVSU",
      "Standard": "HTM 02-01 / NFPA 99"
    },
    features: ["Dual-stage regulators", "Digital alarm monitoring", "Leak-proof connections"]
  },
  { 
    id: 303, 
    slug: "hospital-furniture-range",
    name: "Hospital Furniture", 
    category: "Hospital Furniture", 
    desc: "A wide range of ergonomic and durable hospital furniture including patient beds, trolleys, and bedside lockers.", 
    image: "/images/products/hospital-furniture.png",
    specs: {
      "Items": "Beds, Stretchers, Examination Tables",
      "Material": "Medical-grade stainless steel / ABS"
    },
    features: ["Antimicrobial coating", "Ergonomic design", "Easy to clean"]
  },
  { 
    id: 304, 
    slug: "medical-equipment-general",
    name: "Medical Equipment", 
    category: "ICU Equipment", 
    desc: "Comprehensive selection of high-quality medical equipment for general wards and specialized clinics.", 
    image: "/images/products/medical-equipment.png",
    specs: {
      "Range": "Diagnostic, Surgical, Therapeutic"
    },
    features: ["Clinical precision", "Reliable performance"]
  },

  // --- Diagnostic & Laboratory ---
  { 
    id: 401, 
    slug: "biochemistry-analyzer-auto",
    name: "Automatic Biochemistry Analyzer", 
    category: "Diagnostic & Laboratory", 
    desc: "High-throughput fully automatic analyzer for comprehensive biochemical profiling in clinical labs.", 
    image: "/images/products/biochemistry-analyzer.png",
    specs: {
      "Throughput": "200 tests/hour",
      "Methods": "End point, Kinetic, Fixed time"
    },
    features: ["Automated probe cleaning", "Cuvette washing system", "Real-time curve display"]
  },
  { 
    id: 402, 
    slug: "binocular-microscope-lab",
    name: "Bright Field Binocular Microscope", 
    category: "Diagnostic & Laboratory", 
    desc: "Professional laboratory microscope for pathological research and clinical diagnostics.", 
    image: "/images/products/microscope.png",
    specs: {
      "Objectives": "4X, 10X, 40X, 100X (Oil)",
      "Illumination": "LED with intensity control"
    },
    features: ["Coaxial focusing", "Mechanical stage", "High-resolution optics"]
  },

  // --- Respiratory Care (Existing) ---
  { 
    id: 8, 
    slug: "hfnc-system-high-flow",
    name: "HFNC System", 
    category: "Respiratory Care", 
    desc: "High Flow Nasal Cannula system for effective oxygen therapy in acute respiratory failure.", 
    image: "/images/products/hfnc-system.png",
    specs: {
      "Flow Range": "2 - 80 L/min",
      "FiO2 Control": "21% - 100%"
    },
    features: ["Heated breathing circuit", "Integrated humidification", "Touchscreen control"]
  },
  { 
    id: 6, 
    slug: "pulse-oximeter-clinical",
    name: "Pulse Oximeter", 
    category: "Consumables & Accessories", 
    desc: "Clinical-grade fingertip oximeter for accurate SpO2 and pulse rate measurement.", 
    image: "/images/products/pulse-oximeter.png",
    specs: {
      "Display": "Dual-color OLED",
      "Accuracy": "\u00b1 2%"
    },
    features: ["One-button operation", "Rapid response", "Auto power off"]
  }
];
