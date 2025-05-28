# Sales Dashboard Web App

## 📊 Project Overview

The **Sales Dashboard Web App** is a modern, responsive frontend application that visualizes key sales metrics and trends in real time. Built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Recharts**, this dashboard provides interactive charts, animated UI elements, and statistical summary cards to help businesses monitor and analyze revenue, orders, and customer growth across monthly periods.

### 🔑 Key Highlights

- **Dynamic Metrics**: Total monthly revenue, orders, and customer counts in prominent statistic cards.
- **Interactive Charts**: Line, bar, and area charts built with Recharts.
- **Smooth Animations**: Framer Motion-powered transitions and scroll effects.
- **Responsive Design**: Optimized for desktop, tablet, and mobile using Tailwind CSS.
- **Filtering & Date Selection**: UI-ready icons for real-time filter and date picker integrations.

---

## ✨ Features

1. **Statistic Summary Cards**
   - Revenue, Orders, and Customers with trend indicators.
2. **Revenue Trend Chart**
   - Monthly line chart visualizing revenue fluctuations.
3. **Orders & Customers Charts**
   - Bar chart for monthly orders.
   - Area chart showing customer acquisition.
4. **Animated Hero Section**
   - Full-screen header with title, subtitle, CTA button, and scroll prompt.
5. **Animated Transitions**
   - Fade-in and slide-up effects on scroll.
6. **Mock Data**
   - Sample sales data preloaded for demo purposes.
7. **Extensible Filters**
   - Filter and calendar icons wired for API integration.

---

## 🛠 Tech Stack

- **Framework & Bundler**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/) (TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Charts**: [Recharts](https://recharts.org/) (LineChart, BarChart, AreaChart)
- **Icons**: [lucide-react](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Type Checking**: TypeScript

---

## 🏁 Installation & Setup

1. **Clone this repository**

    ```
   git clone https://github.com/yourusername/sales-dashboard.git
   cd sales-dashboard
   ```
2. **Install dependencies**
   
    ```
   npm install
   ```

3. **Run Development Server**
   
    ```
    npm run dev
   ```

   Navigate to `http://localhost:5173` to view the dashboard.

## 🔧 Customization & Integration

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
