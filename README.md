# Cannabis Policy Research Hub

An interactive web application for researching cannabis policy news, press releases, and advocacy updates across custom timeframes.

## Features

- **Advanced Search**: Search for cannabis policy news with customizable parameters
- **Custom Time Ranges**: Select specific date ranges or use preset options (24 hours, week, month, 3 months, year)
- **Source Filtering**: Filter by news articles, press releases, government sources, or advocacy organizations
- **Regional Focus**: Filter results by region (US, Wisconsin, Canada, Europe, or Global)
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Kind Oasis Branding**: Matches the design aesthetic of kindresources.io

## Installation

1. Open the `cannabis-research-app` folder on your Desktop
2. Double-click `index.html` to open in your web browser
3. No server or additional setup required!

## Usage

1. **Search Keywords**: Enter relevant search terms (e.g., "cannabis legalization", "THC policy", "hemp regulation")
2. **Time Range**: Either:
   - Click a preset button (Last 24 Hours, Last Week, etc.)
   - Or manually select start and end dates
3. **Filters**: Optionally filter by:
   - Source Type (All, News, Press Releases, Government, Advocacy)
   - Region (All, United States, Wisconsin, Canada, Europe, Global)
4. **Search**: Click "Search Cannabis Policy Updates" to see results
5. **Sort**: Use the dropdown to sort results by relevance, date, or source

## Current Implementation

This is a demonstration version with mock data that simulates real cannabis policy search results. The mock data includes:
- Wisconsin cannabis legalization bills
- DEA rescheduling updates
- Hemp industry news
- Local decriminalization efforts
- International cannabis policy developments

## Future Enhancements

To make this a production-ready application:

1. **API Integration**: Connect to real news APIs like:
   - NewsAPI.org for general news
   - Google News API
   - Cannabis-specific news aggregators
   - Government RSS feeds

2. **Database**: Store search results and user preferences

3. **User Accounts**: Save searches, create alerts, bookmark articles

4. **Advanced Features**:
   - Email alerts for new matching content
   - Export search results to CSV/PDF
   - Sentiment analysis of policy coverage
   - Interactive data visualizations
   - Social media integration

5. **Performance**: Add caching, pagination, and lazy loading

## Technical Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Design**: Responsive, mobile-first approach
- **Styling**: Custom CSS matching Kind Oasis brand guidelines
- **No Dependencies**: Pure JavaScript implementation for easy deployment

## Customization

To customize the application:

1. **Colors**: Edit the CSS variables in `index.html`
2. **Search Categories**: Modify the dropdown options in the HTML
3. **Mock Data**: Update the `mockResults` array in `app.js`
4. **API Integration**: Replace the `searchCannabisPolicy` function with actual API calls

## Support

For questions or enhancements, contact the Kind Oasis AI/Automation team.

---

Built with ❤️ for Kind Oasis by the AI/Automation Team