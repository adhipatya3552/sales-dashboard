import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area, BarChart, Bar, ResponsiveContainer } from 'recharts';
import { DollarSign, Users, TrendingUp, Package, Filter, Calendar, ChevronDown, Copyright } from 'lucide-react';

// Mock data
const salesData = [
  { month: 'Jan', revenue: 45000, orders: 670, customers: 230 },
  { month: 'Feb', revenue: 52000, orders: 720, customers: 245 },
  { month: 'Mar', revenue: 48000, orders: 680, customers: 235 },
  { month: 'Apr', revenue: 61000, orders: 810, customers: 280 },
  { month: 'May', revenue: 55000, orders: 730, customers: 255 },
  { month: 'Jun', revenue: 67000, orders: 850, customers: 290 },
];

const StatCard = ({ icon: Icon, title, value, trend }: { icon: any, title: string, value: string, trend: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-xl shadow-lg"
  >
    <div className="flex items-center justify-between">
      <div className="p-2 bg-blue-100 rounded-lg">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <span className="text-green-500 text-sm font-semibold">{trend}</span>
    </div>
    <h3 className="mt-4 text-gray-600 text-sm">{title}</h3>
    <p className="mt-2 text-2xl font-bold text-gray-800">{value}</p>
  </motion.div>
);

function App() {
  const [timeFilter, setTimeFilter] = useState('This Month');
  const { scrollY } = useScroll();
  
  const bannerScale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const bannerOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const titleY = useTransform(scrollY, [0, 300], [0, 100]);

  const scrollToDashboard = () => {
    const dashboardSection = document.getElementById('dashboard');
    dashboardSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Banner Section */}
      <motion.div 
        style={{ scale: bannerScale, opacity: bannerOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen relative bg-gradient-to-br from-blue-600 to-indigo-900 flex flex-col items-center justify-center text-white px-4 overflow-hidden"
      >
        <motion.div
          style={{ y: titleY }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Sales Analytics</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">Unlock insights and drive growth with real-time analytics</p>
          
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
            onClick={scrollToDashboard}
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors"
          >
            Get Started
          </motion.button>
        </motion.div>

        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ y: 5 }}
          onClick={scrollToDashboard}
          className="absolute bottom-10 cursor-pointer"
        >
          <ChevronDown className="w-12 h-12 animate-bounce" />
        </motion.button>
      </motion.div>

      {/* Dashboard Section */}
      <div id="dashboard" className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Sales Dashboard</h1>
              <div className="flex items-center space-x-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {timeFilter}
                </motion.button>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard icon={DollarSign} title="Total Revenue" value="$328,000" trend="+12.5%" />
            <StatCard icon={Package} title="Total Orders" value="4,460" trend="+8.2%" />
            <StatCard icon={Users} title="Total Customers" value="1,535" trend="+5.7%" />
            <StatCard icon={TrendingUp} title="Avg. Order Value" value="$73.54" trend="+3.1%" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.7, type: "spring" }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-xl font-semibold mb-4">Revenue Trend</h2>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="revenue" stroke="#3B82F6" fill="#93C5FD" />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.7, type: "spring" }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-xl font-semibold mb-4">Orders vs Customers</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="orders" fill="#3B82F6" />
                  <Bar dataKey="customers" fill="#93C5FD" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring" }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4">Detailed Analytics</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#3B82F6" />
                <Line type="monotone" dataKey="orders" stroke="#93C5FD" />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="bg-gray-900 text-white py-8"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Copyright className="w-4 h-4 mr-2" />
              <p className="text-sm">2025 Adhipatya Saxena. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1 }}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terms & Conditions
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1 }}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </motion.a>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;