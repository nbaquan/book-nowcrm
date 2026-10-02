module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#0f8f5a',
          dark: '#0c3b2e',
          gold: '#d9a441',
          cream: '#f4f9f4',
          soft: '#edf7f0'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 143, 90, 0.12)'
      }
    }
  },
  plugins: []
};
