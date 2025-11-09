// Greenline Plant Business Suite - Configuration
// Centralized company information and branding

const GREENLINE_CONFIG = {
    // Company Information
    company: {
        name: "Greenline Landscaping",
        tagline: "Professional Plant Installation & Design",
        fullName: "Greenline Landscaping & Design",
        established: "2025"
    },
    
    // Contact Information
    contact: {
        email: "info@greenlinelandscaping.com",
        phone: "(919) 555-GROW",
        phoneFormatted: "(919) 555-4769",
        address: {
            street: "",
            city: "Raleigh",
            state: "NC",
            zip: "",
            region: "North Carolina Piedmont"
        },
        website: "www.greenlinelandscaping.com"
    },
    
    // Business Settings
    business: {
        defaultTaxRate: 7.25, // NC sales tax (adjust per county)
        defaultLaborRate: 75,
        defaultCrewSize: 2,
        quoteValidityDays: 30,
        depositPercentage: 50,
        warrantyYears: 1
    },
    
    // Pricing
    pricing: {
        soilTest: 150,
        siteClearing: 85,
        grading: 95,
        edging: 3.50,
        topsoil: 45,
        compost: 55,
        mulch: 40,
        defaultPlantMarkup: 30 // percentage
    },
    
    // Quote Terms & Conditions
    terms: [
        "50% deposit required to schedule work",
        "Balance due upon completion",
        "Plant warranty: 1 year with proper care",
        "Quote valid for 30 days from issue date",
        "Weather delays may affect timeline",
        "All plants sourced from local NC nurseries",
        "Satisfaction guaranteed"
    ],
    
    // Branding Colors (CSS variables)
    colors: {
        primary: "#2d5016", // Deep forest green
        primaryLight: "#4a7c28",
        secondary: "#7cb342", // Fresh leaf green
        accent: "#8d6e63", // Earthy brown
        accentLight: "#a1887f",
        background: "#f5f5f0",
        text: "#2c2c2c",
        textLight: "#666666",
        border: "#d0d0c8",
        success: "#66bb6a",
        warning: "#ffa726",
        error: "#ef5350"
    },
    
    // Version
    version: "2.0.0",
    lastUpdated: "2025-11-09"
};

// Make config available globally
if (typeof window !== 'undefined') {
    window.GREENLINE_CONFIG = GREENLINE_CONFIG;
}

// Export for modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GREENLINE_CONFIG;
}
