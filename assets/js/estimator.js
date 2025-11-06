// Landscaping Project Estimator - Vue 3 Application
const { createApp } = Vue;

createApp({
    data() {
        return {
            project: {
                clientName: '',
                projectName: '',
                address: '',
                date: new Date().toISOString().split('T')[0]
            },
            prep: {
                areaSquareFeet: 0,
                bedDepth: 12,
                services: {
                    soilTest: false,
                    siteClearing: false,
                    grading: false,
                    edging: false
                },
                clearingHours: 0,
                gradingHours: 0,
                edgingFeet: 0
            },
            materials: {
                topsoil: 0,
                compost: 0,
                mulch: 0,
                amendments: 0,
                irrigation: {
                    drip: false,
                    sprinkler: false
                },
                irrigationCost: 0
            },
            plants: [
                { name: '', size: '', quantity: 0, unitPrice: 0, markup: 30 }
            ],
            labor: {
                installationHours: 0,
                hourlyRate: 75,
                crewSize: 2
            },
            additionalServices: [
                { description: '', cost: 0 }
            ],
            settings: {
                taxRate: 7.25,
                discount: 0,
                validUntil: this.getDatePlusDays(30)
            },
            pricing: {
                soilTest: 150,
                siteClearing: 85,
                grading: 95,
                edging: 3.50,
                topsoil: 45,
                compost: 55,
                mulch: 40
            },
            showQuotePreview: false
        };
    },
    computed: {
        prepTotal() {
            let total = 0;
            if (this.prep.services.soilTest) total += this.pricing.soilTest;
            if (this.prep.services.siteClearing) total += this.prep.clearingHours * this.pricing.siteClearing;
            if (this.prep.services.grading) total += this.prep.gradingHours * this.pricing.grading;
            if (this.prep.services.edging) total += this.prep.edgingFeet * this.pricing.edging;
            return total;
        },
        materialsTotal() {
            let total = 0;
            total += this.materials.topsoil * this.pricing.topsoil;
            total += this.materials.compost * this.pricing.compost;
            total += this.materials.mulch * this.pricing.mulch;
            total += this.materials.amendments;
            if (this.materials.irrigation.drip || this.materials.irrigation.sprinkler) {
                total += this.materials.irrigationCost;
            }
            return total;
        },
        plantsTotal() {
            return this.plants.reduce((sum, plant) => {
                return sum + this.calculatePlantTotal(plant);
            }, 0);
        },
        laborTotal() {
            return this.labor.installationHours * this.labor.crewSize * this.labor.hourlyRate;
        },
        servicesTotal() {
            return this.additionalServices.reduce((sum, service) => {
                return sum + (service.cost || 0);
            }, 0);
        },
        grandSubtotal() {
            return this.prepTotal + this.materialsTotal + this.plantsTotal + this.laborTotal + this.servicesTotal;
        },
        taxAmount() {
            const afterDiscount = this.grandSubtotal - this.settings.discount;
            return afterDiscount * (this.settings.taxRate / 100);
        },
        grandTotal() {
            return this.grandSubtotal - this.settings.discount + this.taxAmount;
        }
    },
    methods: {
        calculateCubicYards(sqFeet, depthInches) {
            // Convert square feet and inches to cubic yards
            // Formula: (sqft × depth in inches) / 324
            return (sqFeet * depthInches) / 324;
        },
        calculatePlantTotal(plant) {
            if (!plant.quantity || !plant.unitPrice) return 0;
            const cost = plant.quantity * plant.unitPrice;
            const markup = plant.markup || 0;
            return cost * (1 + markup / 100);
        },
        addPlant() {
            this.plants.push({ name: '', size: '', quantity: 0, unitPrice: 0, markup: 30 });
        },
        removePlant(index) {
            if (this.plants.length > 1) {
                this.plants.splice(index, 1);
            }
        },
        addService() {
            this.additionalServices.push({ description: '', cost: 0 });
        },
        removeService(index) {
            if (this.additionalServices.length > 1) {
                this.additionalServices.splice(index, 1);
            }
        },
        saveQuote() {
            const quoteData = {
                project: this.project,
                prep: this.prep,
                materials: this.materials,
                plants: this.plants,
                labor: this.labor,
                additionalServices: this.additionalServices,
                settings: this.settings,
                totals: {
                    prep: this.prepTotal,
                    materials: this.materialsTotal,
                    plants: this.plantsTotal,
                    labor: this.laborTotal,
                    services: this.servicesTotal,
                    subtotal: this.grandSubtotal,
                    tax: this.taxAmount,
                    total: this.grandTotal
                },
                savedAt: new Date().toISOString()
            };

            // Save to localStorage
            const quotes = JSON.parse(localStorage.getItem('landscapingQuotes') || '[]');
            quotes.push(quoteData);
            localStorage.setItem('landscapingQuotes', JSON.stringify(quotes));

            alert(`Quote saved successfully!\n\nClient: ${this.project.clientName}\nTotal: $${this.grandTotal.toFixed(2)}\n\nYou can access saved quotes from browser storage.`);
        },
        viewQuote() {
            if (!this.project.clientName || !this.project.projectName) {
                alert('Please enter client name and project name before previewing the quote.');
                return;
            }
            this.showQuotePreview = true;
        },
        printQuote() {
            window.print();
        },
        resetQuote() {
            if (confirm('Are you sure you want to reset the entire quote? This cannot be undone.')) {
                // Reset all data
                this.project = {
                    clientName: '',
                    projectName: '',
                    address: '',
                    date: new Date().toISOString().split('T')[0]
                };
                this.prep = {
                    areaSquareFeet: 0,
                    bedDepth: 12,
                    services: {
                        soilTest: false,
                        siteClearing: false,
                        grading: false,
                        edging: false
                    },
                    clearingHours: 0,
                    gradingHours: 0,
                    edgingFeet: 0
                };
                this.materials = {
                    topsoil: 0,
                    compost: 0,
                    mulch: 0,
                    amendments: 0,
                    irrigation: {
                        drip: false,
                        sprinkler: false
                    },
                    irrigationCost: 0
                };
                this.plants = [{ name: '', size: '', quantity: 0, unitPrice: 0, markup: 30 }];
                this.labor = {
                    installationHours: 0,
                    hourlyRate: 75,
                    crewSize: 2
                };
                this.additionalServices = [{ description: '', cost: 0 }];
                this.settings = {
                    taxRate: 7.25,
                    discount: 0,
                    validUntil: this.getDatePlusDays(30)
                };
            }
        },
        formatDate(dateString) {
            if (!dateString) return '';
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        },
        getDatePlusDays(days) {
            const date = new Date();
            date.setDate(date.getDate() + days);
            return date.toISOString().split('T')[0];
        }
    },
    watch: {
        showQuotePreview(newVal) {
            // Prevent body scroll when modal is open
            if (newVal) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
    }
}).mount('#app');
