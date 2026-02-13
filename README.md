# Salhab Cars

A modern web application for browsing and managing car listings with bilingual support (English and Arabic).

## Features

- 🚗 Browse available cars with detailed specifications
- 🌍 Bilingual interface (English & Arabic)
- 📱 Responsive design
- 🎯 Modal view for detailed car information
- 🔗 Integration with auction platforms
- 💾 JSON-based car data management

## Project Structure

```
salhabcars/
├── index.html              # Main home page
├── services.html           # Services page
├── package.json           # Project dependencies and scripts
├── vite.config.js         # Vite configuration
├── assets/                # Static assets
│   ├── icons/            # Favicon and icons
│   └── images/           # Car images
│       └── cars/         # Categorized car images
├── css/                  # Stylesheets
│   ├── header.css
│   ├── footer.css
│   └── styles.css
├── js/                   # JavaScript modules
│   ├── main.js          # Entry point
│   ├── cars.js          # Car listing functionality
│   ├── services.js      # Services page logic
│   └── translation.js   # Internationalization (i18n)
├── public/              # Public assets served by Vite
│   ├── components/      # Reusable HTML components
│   │   ├── header.html
│   │   └── footer.html
│   ├── data/           # JSON data files
│   │   └── cars.json
│   └── i18n/           # Translation files
│       ├── en.json
│       └── ar.json
└── scripts/            # Utility scripts
    └── scrapeAuction.js
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/haditarhini03/salhabcars.git
cd salhabcars
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the project:
```bash
npm run build
```

The optimized files will be generated in the `dist/` directory.

## Deployment

### GitHub Pages

This project is configured to deploy on GitHub Pages at `https://haditarhini03.github.io/salhabcars/`

The Vite configuration includes the base path `/salhabcars/` which is automatically handled during the build process.

#### To Deploy:

1. Build the project:
```bash
npm run build
```

2. Push the `dist/` folder to the `gh-pages` branch (you can automate this with GitHub Actions)

### GitHub Actions (Automated Deployment)

Create a `.github/workflows/deploy.yml` file to automate deployment:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - run: npm install
      - run: npm run build
      
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Then enable GitHub Pages in your repository settings to use the `gh-pages` branch.

## Configuration

### Internationalization (i18n)

Translation files are located in `public/i18n/`:
- `en.json` - English translations
- `ar.json` - Arabic translations

Add new translation keys to both files to maintain consistency.

### Car Data

Car listings are managed in `public/data/cars.json`. Each car object should include:

```json
{
  "id": 1,
  "title": { "en": "...", "ar": "..." },
  "brand": "...",
  "model": "...",
  "year": 2020,
  "mileage": 15000,
  "transmission": "Automatic",
  "fuel": "Gasoline",
  "price": 18000,
  "auctionUrl": "...",
  "images": ["assets/images/cars/1/..."],
  "description": { "en": "...", "ar": "..." },
  "specs": { "color": "...", "doors": 4, "seats": 5 },
  "status": "available",
  "featured": true,
  "source": "auction"
}
```

## Technologies Used

- **Frontend Framework**: Vanilla JavaScript (ES6+)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: CSS3
- **Internationalization**: Custom i18n solution
- **Deployment**: GitHub Pages

## License

ISC

## Author

Hadi Tarhini (@haditarhini03)

## Support

For issues and feature requests, please visit the [GitHub Issues](https://github.com/haditarhini03/salhabcars/issues) page.
