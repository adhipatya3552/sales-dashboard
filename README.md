# Sales Dashboard Web App

## Project Overview

The **Sales Dashboard Web App** is a modern, responsive frontend application that visualizes key sales metrics and trends in real time. Built with React, TypeScript, Vite, Tailwind CSS, and Recharts, this dashboard offers interactive charts, animated UI elements, and statistical summary cards to help businesses monitor and analyze revenue, orders, and customer growth across monthly periods.

Key Highlights:

* **Dynamic Metrics**: Display total monthly revenue, orders, and customer counts in prominent statistic cards.
* **Interactive Charts**: Line, bar, and area charts built with Recharts for trend visualization.
* **Smooth Animations**: Framer Motion-powered transitions and scroll-triggered effects for an engaging user experience.
* **Responsive Design**: Tailwind CSS ensures seamless rendering across desktop, tablet, and mobile.
* **Filtering & Date Selection**: Placeholder filter controls (Filter icon) and calendar picker (Calendar icon) ready to hook into real data sources.

## Features

1. **Statistic Summary Cards**

   * Revenue, Orders, Customers overview with up/down trend indicators.
2. **Revenue Trend Chart**

   * Monthly line chart illustrating revenue fluctuations.
3. **Orders & Customers Charts**

   * Bar chart for orders per month.
   * Area chart for customer acquisition trends.
4. **Animated Hero Section**

   * Full-screen header with title, subtitle, call-to-action button, and scroll CTA.
5. **Animated Transitions**

   * Fade-in and slide-up effects for chart and card components on scroll.
6. **Mock Data**

   * Pre-populated sample sales data for demonstration purposes.
7. **Extensible Filters**

   * UI controls (Filter, Calendar) ready for integration with real-time APIs.

## Tech Stack

* **Framework & Bundler**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/) (TypeScript)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Charts**: [Recharts](https://recharts.org/) (LineChart, BarChart, AreaChart)
* **Icons**: [lucide-react](https://lucide.dev/) for lightweight SVG icons
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Type Checking**: TypeScript

## Folder Structure

sales-dashboard/
├── public/                  # Static assets and index.html
├── src/
│   ├── App.tsx              # Main dashboard component with layout, charts, and cards
│   ├── main.tsx             # Entry point: ReactDOM render
│   └── index.css            # Global Tailwind CSS imports
├── .gitignore
├── package.json             # Dependencies & scripts
├── tailwind.config.js       # Tailwind configuration
├── vite.config.ts           # Vite configuration for React + TypeScript
└── tsconfig.json            # TypeScript compiler settings

## Installation & Setup

1. **Clone this repository**

   git clone https://github.com/adhipatya3552/sales-dashboard.git
   
   cd sales-dashboard

2. **Install dependencies**

   npm install

3. **Run Development Server**

   npm run dev

   Navigate to `http://localhost:5173` to view the dashboard.

## Customization & Integration

* **Data Source**: Replace the `salesData` array in `src/App.tsx` with calls to your API or a state management store.
* **Filter Controls**: Hook the filter and calendar icons to open dropdowns or date pickers. Integrate with React state or third-party picker libraries.
* **Styling**: Modify Tailwind classes in `index.css` or extend `tailwind.config.js` for custom themes.
* **Additional Metrics**: Add more `StatCard` components or chart types (PieChart, ComposedChart) from Recharts as needed.
* **Routing**: If adding more pages, integrate React Router and create separate components under `src/pages/`.

## Usage

1. **View Metrics**: Open the dashboard to see interactive summary cards and charts.
2. **Scroll Animations**: Scroll down to observe animated elements entering the viewport.
3. **Filter & Date Picker**: Click on filter or calendar icons to wire up dropdowns or date selectors.

## Contributing

Contributions are welcome! To propose changes:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`.
3. Commit your changes: `git commit -m "Add YourFeature"`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Open a Pull Request describing your enhancements.
