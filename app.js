// Global variables
let currentResults = [];
let isSearching = false;

// Initialize date inputs with default values
document.addEventListener('DOMContentLoaded', function() {
    // Set default end date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('endDate').value = today;
    
    // Set default start date to 1 month ago
    const monthAgo = new Date();
    monthAgo.setMonth(monthAgo.getMonth() - 1);
    document.getElementById('startDate').value = monthAgo.toISOString().split('T')[0];
    
    // Set default search query
    document.getElementById('searchQuery').value = 'cannabis policy legalization';
});

// Set preset time ranges
function setTimeRange(range) {
    const endDate = new Date();
    const startDate = new Date();
    
    switch(range) {
        case 'day':
            startDate.setDate(endDate.getDate() - 1);
            break;
        case 'week':
            startDate.setDate(endDate.getDate() - 7);
            break;
        case 'month':
            startDate.setMonth(endDate.getMonth() - 1);
            break;
        case '3months':
            startDate.setMonth(endDate.getMonth() - 3);
            break;
        case 'year':
            startDate.setFullYear(endDate.getFullYear() - 1);
            break;
    }
    
    document.getElementById('startDate').value = startDate.toISOString().split('T')[0];
    document.getElementById('endDate').value = endDate.toISOString().split('T')[0];
}

// Main search function
async function performSearch() {
    if (isSearching) return;
    
    const searchQuery = document.getElementById('searchQuery').value.trim();
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const sourceType = document.getElementById('sourceType').value;
    const region = document.getElementById('region').value;
    
    if (!searchQuery) {
        alert('Please enter search keywords');
        return;
    }
    
    isSearching = true;
    const searchBtn = document.getElementById('searchBtn');
    searchBtn.disabled = true;
    searchBtn.textContent = 'Searching...';
    
    // Show results section with loading state
    const resultsSection = document.getElementById('resultsSection');
    const resultsContainer = document.getElementById('resultsContainer');
    resultsSection.style.display = 'block';
    resultsContainer.innerHTML = '<div class="loading"><div class="loading-spinner"></div><p>Searching for cannabis policy updates...</p></div>';
    
    try {
        // Build search query
        let query = searchQuery;
        
        // Add source type filters
        if (sourceType !== 'all') {
            switch(sourceType) {
                case 'news':
                    query += ' news article';
                    break;
                case 'press':
                    query += ' press release announcement';
                    break;
                case 'government':
                    query += ' government policy official';
                    break;
                case 'advocacy':
                    query += ' advocacy organization campaign';
                    break;
            }
        }
        
        // Add region filters
        if (region !== 'all') {
            switch(region) {
                case 'us':
                    query += ' United States America';
                    break;
                case 'wisconsin':
                    query += ' Wisconsin Milwaukee';
                    break;
                case 'canada':
                    query += ' Canada Canadian';
                    break;
                case 'europe':
                    query += ' Europe European Union';
                    break;
            }
        }
        
        // Add date range to query
        if (startDate && endDate) {
            query += ` after:${startDate} before:${endDate}`;
        }
        
        // Simulate API call with mock data
        const results = await searchCannabisPolicy(query, startDate, endDate);
        
        currentResults = results;
        displayResults(results);
        
    } catch (error) {
        console.error('Search error:', error);
        resultsContainer.innerHTML = '<div class="empty-state"><h3>Search Error</h3><p>An error occurred while searching. Please try again.</p></div>';
    } finally {
        isSearching = false;
        searchBtn.disabled = false;
        searchBtn.textContent = 'Search Cannabis Policy Updates';
    }
}

// Simulate API search function with realistic mock data
async function searchCannabisPolicy(query, startDate, endDate) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock results based on search parameters
    const mockResults = [
        {
            id: 1,
            title: "Wisconsin Senate Introduces New Cannabis Legalization Bill",
            source: "Milwaukee Journal Sentinel",
            date: "2024-12-15",
            snippet: "State senators unveiled comprehensive legislation today that would legalize adult-use cannabis in Wisconsin, including provisions for social equity and expungement of past convictions. The bill has bipartisan support and is expected to generate over $165 million in annual tax revenue.",
            url: "https://example.com/wisconsin-cannabis-bill",
            type: "news"
        },
        {
            id: 2,
            title: "DEA Announces Timeline for Cannabis Rescheduling Decision",
            source: "Federal Register",
            date: "2024-12-10",
            snippet: "The Drug Enforcement Administration released its proposed timeline for reviewing cannabis scheduling, with a final decision expected by Q2 2025. This follows recommendations from the Department of Health and Human Services to move cannabis from Schedule I to Schedule III.",
            url: "https://example.com/dea-rescheduling",
            type: "government"
        },
        {
            id: 3,
            title: "NORML Launches Midwest Campaign for Cannabis Reform",
            source: "NORML Press Release",
            date: "2024-12-08",
            snippet: "The National Organization for the Reform of Marijuana Laws announced a major advocacy campaign targeting Midwest states, including Wisconsin, Illinois, and Michigan. The initiative focuses on educating lawmakers about the economic and social justice benefits of legalization.",
            url: "https://example.com/norml-midwest",
            type: "advocacy"
        },
        {
            id: 4,
            title: "Hemp Industry Celebrates Farm Bill Extension",
            source: "Hemp Industry Daily",
            date: "2024-12-05",
            snippet: "The 2024 Farm Bill extension maintains hemp's legal status and includes new provisions for cannabinoid regulation. Industry leaders praise the clarity on Delta-8 THC and other hemp-derived compounds, ensuring continued growth in the $28 billion hemp market.",
            url: "https://example.com/farm-bill-hemp",
            type: "press"
        },
        {
            id: 5,
            title: "Milwaukee Decriminalizes Cannabis Possession",
            source: "WISN Milwaukee",
            date: "2024-12-01",
            snippet: "The Milwaukee Common Council voted 12-3 to decriminalize possession of up to 25 grams of cannabis, making it a civil offense with a $50 fine. Mayor emphasizes this is a step toward racial justice, as cannabis arrests disproportionately affect communities of color.",
            url: "https://example.com/milwaukee-decrim",
            type: "news"
        },
        {
            id: 6,
            title: "European Union Harmonizes CBD Regulations",
            source: "European Commission",
            date: "2024-11-28",
            snippet: "The EU announced unified regulations for CBD products across member states, establishing clear guidelines for production, testing, and labeling. This move is expected to boost the European cannabis market, projected to reach €3.2 billion by 2025.",
            url: "https://example.com/eu-cbd-regs",
            type: "government"
        },
        {
            id: 7,
            title: "Cannabis Industry Job Growth Exceeds 400,000 in US",
            source: "Leafly Jobs Report",
            date: "2024-11-25",
            snippet: "New data shows the legal cannabis industry now employs over 400,000 Americans, with Wisconsin poised to add 15,000 jobs if legalization passes. The industry has grown 33% year-over-year, outpacing every other sector in job creation.",
            url: "https://example.com/cannabis-jobs",
            type: "press"
        },
        {
            id: 8,
            title: "Medical Cannabis Approved for PTSD Treatment in Wisconsin",
            source: "Wisconsin Department of Health",
            date: "2024-11-20",
            snippet: "State health officials added PTSD to the list of qualifying conditions for medical cannabis, following advocacy from veterans groups. This expansion is expected to provide relief to over 50,000 Wisconsin veterans suffering from post-traumatic stress.",
            url: "https://example.com/wisconsin-ptsd",
            type: "government"
        }
    ];
    
    // Filter results based on date range if provided
    let filteredResults = mockResults;
    if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        filteredResults = mockResults.filter(result => {
            const resultDate = new Date(result.date);
            return resultDate >= start && resultDate <= end;
        });
    }
    
    return filteredResults;
}

// Display search results
function displayResults(results) {
    const resultsContainer = document.getElementById('resultsContainer');
    const resultsCount = document.getElementById('resultsCount');
    
    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="empty-state">
                <h3>No Results Found</h3>
                <p>Try adjusting your search criteria or expanding your date range.</p>
            </div>
        `;
        resultsCount.textContent = '0 Results Found';
        return;
    }
    
    resultsCount.textContent = `${results.length} Results Found`;
    
    const resultsHTML = results.map(result => `
        <div class="result-card" onclick="window.open('${result.url}', '_blank')">
            <h3 class="result-title">${result.title}</h3>
            <span class="result-source">${result.source}</span>
            <p class="result-date">${formatDate(result.date)}</p>
            <p class="result-snippet">${result.snippet}</p>
            <a href="${result.url}" class="result-link" target="_blank" onclick="event.stopPropagation()">
                Read Full Article →
            </a>
        </div>
    `).join('');
    
    resultsContainer.innerHTML = `<div class="results-grid">${resultsHTML}</div>`;
}

// Sort results
function sortResults() {
    const sortBy = document.getElementById('sortDropdown').value;
    let sortedResults = [...currentResults];
    
    switch(sortBy) {
        case 'date':
            sortedResults.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'source':
            sortedResults.sort((a, b) => a.source.localeCompare(b.source));
            break;
        default: // relevance
            // Keep original order for relevance
            break;
    }
    
    displayResults(sortedResults);
}

// Format date helper
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Handle Enter key in search input
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchQuery').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});