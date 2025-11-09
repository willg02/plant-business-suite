// Plant Image Service - Smart image loading with API fallback
// Uses free plant APIs to get accurate images automatically

const PlantImageService = {
    // API keys (free tiers)
    APIs: {
        perenual: {
            key: 'YOUR_API_KEY', // Get free at https://perenual.com/docs/api
            baseUrl: 'https://perenual.com/api'
        },
        unsplash: {
            key: 'YOUR_API_KEY', // Get free at https://unsplash.com/developers
            baseUrl: 'https://api.unsplash.com'
        }
    },

    // Cache for loaded images
    imageCache: new Map(),

    /**
     * Get image URL for a plant
     * Priority: Cache > API > Fallback
     */
    async getPlantImage(scientificName, commonName, options = {}) {
        const cacheKey = scientificName.toLowerCase().replace(/\s+/g, '-');
        
        // Check cache first
        if (this.imageCache.has(cacheKey)) {
            return this.imageCache.get(cacheKey);
        }

        try {
            // Try plant API first
            const imageUrl = await this.fetchFromAPI(scientificName, commonName);
            if (imageUrl) {
                this.imageCache.set(cacheKey, imageUrl);
                return imageUrl;
            }
        } catch (error) {
            console.warn(`Failed to fetch image for ${commonName}:`, error);
        }

        // Fallback to generated placeholder
        return this.generatePlaceholder(commonName, options);
    },

    /**
     * Fetch from Perenual API (recommended for plants)
     */
    async fetchFromPerenual(scientificName) {
        const apiKey = this.APIs.perenual.key;
        if (apiKey === 'YOUR_API_KEY') return null;

        const searchUrl = `${this.APIs.perenual.baseUrl}/species-list?key=${apiKey}&q=${encodeURIComponent(scientificName)}`;
        
        try {
            const response = await fetch(searchUrl);
            const data = await response.json();
            
            if (data.data && data.data.length > 0) {
                const plant = data.data[0];
                return plant.default_image?.regular_url || plant.default_image?.thumbnail;
            }
        } catch (error) {
            console.error('Perenual API error:', error);
        }
        
        return null;
    },

    /**
     * Fetch from Unsplash (general nature photos)
     */
    async fetchFromUnsplash(searchTerm) {
        const apiKey = this.APIs.unsplash.key;
        if (apiKey === 'YOUR_API_KEY') return null;

        const searchUrl = `${this.APIs.unsplash.baseUrl}/search/photos?query=${encodeURIComponent(searchTerm + ' plant')}&per_page=1&client_id=${apiKey}`;
        
        try {
            const response = await fetch(searchUrl);
            const data = await response.json();
            
            if (data.results && data.results.length > 0) {
                return data.results[0].urls.regular;
            }
        } catch (error) {
            console.error('Unsplash API error:', error);
        }
        
        return null;
    },

    /**
     * Master fetch function - tries multiple sources
     */
    async fetchFromAPI(scientificName, commonName) {
        // Try Perenual first (best for plants)
        let imageUrl = await this.fetchFromPerenual(scientificName);
        if (imageUrl) return imageUrl;

        // Try Unsplash as backup
        imageUrl = await this.fetchFromUnsplash(commonName);
        if (imageUrl) return imageUrl;

        return null;
    },

    /**
     * Generate a nice SVG placeholder with plant name
     */
    generatePlaceholder(plantName, options = {}) {
        const width = options.width || 600;
        const height = options.height || 400;
        const backgroundColor = options.bgColor || '#4a7c28'; // Greenline color
        const textColor = options.textColor || '#ffffff';
        
        // Create plant icon (simple leaf SVG)
        const plantIcon = `
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C12 2 7 4 7 10C7 13 8.5 15 12 15C15.5 15 17 13 17 10C17 4 12 2 12 2Z" fill="${textColor}" opacity="0.7"/>
                <path d="M12 22V8" stroke="${textColor}" stroke-width="2" stroke-linecap="round"/>
                <path d="M12 10C12 10 15 11 15 14C15 16 14 17 12 17" stroke="${textColor}" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
            </svg>
        `;

        // Encode plant name for use in SVG
        const encodedName = plantName.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        
        const svg = `
            <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:${backgroundColor};stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#2d5016;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect width="${width}" height="${height}" fill="url(#grad)"/>
                <g transform="translate(${width/2 - 40}, ${height/2 - 60})">
                    ${plantIcon}
                </g>
                <text x="50%" y="70%" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="${textColor}" text-anchor="middle">
                    ${encodedName}
                </text>
                <text x="50%" y="80%" font-family="Arial, sans-serif" font-size="14" fill="${textColor}" text-anchor="middle" opacity="0.8">
                    Greenline Landscaping
                </text>
            </svg>
        `;

        // Return as data URL
        return `data:image/svg+xml;base64,${btoa(svg)}`;
    },

    /**
     * Batch load images for multiple plants
     */
    async loadPlantImages(plants, onProgress = null) {
        const total = plants.length;
        let loaded = 0;

        const promises = plants.map(async (plant) => {
            const imageUrl = await this.getPlantImage(
                plant.scientificName,
                plant.commonName
            );
            
            loaded++;
            if (onProgress) {
                onProgress(loaded, total, plant.commonName);
            }

            return {
                plantId: plant.id,
                imageUrl: imageUrl
            };
        });

        return await Promise.all(promises);
    },

    /**
     * Get Wikipedia/Wikimedia image for plant
     */
    async fetchFromWikipedia(scientificName) {
        const searchUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(scientificName)}`;
        
        try {
            const response = await fetch(searchUrl);
            const data = await response.json();
            
            if (data.thumbnail) {
                return data.thumbnail.source;
            }
        } catch (error) {
            console.error('Wikipedia API error:', error);
        }
        
        return null;
    },

    /**
     * Clear image cache
     */
    clearCache() {
        this.imageCache.clear();
    },

    /**
     * Save cache to localStorage
     */
    saveCache() {
        const cacheData = Array.from(this.imageCache.entries());
        localStorage.setItem('plantImageCache', JSON.stringify(cacheData));
    },

    /**
     * Load cache from localStorage
     */
    loadCache() {
        const cacheData = localStorage.getItem('plantImageCache');
        if (cacheData) {
            const entries = JSON.parse(cacheData);
            this.imageCache = new Map(entries);
        }
    },

    /**
     * Preload common NC native plants from local JSON
     */
    async preloadCommonImages() {
        // Load from cache if available
        this.loadCache();

        // List of high-priority plants to preload
        const priorityPlants = [
            'Cercis canadensis',
            'Cornus florida',
            'Magnolia grandiflora',
            'Betula nigra',
            'Hydrangea quercifolia'
        ];

        // Preload in background
        priorityPlants.forEach(scientificName => {
            this.fetchFromWikipedia(scientificName).then(imageUrl => {
                if (imageUrl) {
                    const cacheKey = scientificName.toLowerCase().replace(/\s+/g, '-');
                    this.imageCache.set(cacheKey, imageUrl);
                }
            });
        });
    }
};

// Initialize on page load
if (typeof window !== 'undefined') {
    window.PlantImageService = PlantImageService;
    
    // Load cached images
    PlantImageService.loadCache();
}

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PlantImageService;
}
