import { motion } from 'framer-motion';
import { StatsCard } from '@/components/admin/StatsCard';
import { DollarSign, Bike, Users, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const revenueData = [
  { day: 'Mon', revenue: 1200 },
  { day: 'Tue', revenue: 950 },
  { day: 'Wed', revenue: 1800 },
  { day: 'Thu', revenue: 1400 },
  { day: 'Fri', revenue: 2200 },
  { day: 'Sat', revenue: 3100 },
  { day: 'Sun', revenue: 2800 },
];

const categoryData = [
  { name: 'Sports', value: 45, color: 'hsl(36, 100%, 50%)' },
  { name: 'Cruiser', value: 25, color: 'hsl(30, 90%, 55%)' },
  { name: 'Adventure', value: 20, color: 'hsl(36, 80%, 40%)' },
  { name: 'Scooty', value: 10, color: 'hsl(0, 0%, 40%)' },
];

const adminLinks = [
  { label: 'Manage Bikes', path: '/admin/bikes', icon: '🏍️' },
  { label: 'Manage Bookings', path: '/admin/bookings', icon: '📅' },
  { label: 'Customers', path: '/admin/customers', icon: '👥' },
  { label: 'Maintenance', path: '/admin/maintenance', icon: '🔧' },
];

export default function AdminDashboard() {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-2">Admin Panel</p>
          <h1 className="font-display text-5xl md:text-6xl">DASHBOARD</h1>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard label="Total Revenue" value="$48,250" icon={<DollarSign className="h-6 w-6" />} trend="+12% this month" />
          <StatsCard label="Active Bookings" value="23" icon={<CalendarCheck className="h-6 w-6" />} trend="+5 today" />
          <StatsCard label="Fleet Size" value="8" icon={<Bike className="h-6 w-6" />} />
          <StatsCard label="Total Customers" value="1,247" icon={<Users className="h-6 w-6" />} trend="+89 this week" />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-xl p-6"
          >
            <h3 className="font-display text-2xl mb-4">WEEKLY REVENUE</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={revenueData}>
                <XAxis dataKey="day" stroke="hsl(0 0% 55%)" fontSize={12} />
                <YAxis stroke="hsl(0 0% 55%)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(0 0% 7%)',
                    border: '1px solid hsl(0 0% 15%)',
                    borderRadius: '8px',
                    color: 'hsl(40 20% 95%)',
                  }}
                />
                <Bar dataKey="revenue" fill="hsl(36 100% 50%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-6"
          >
            <h3 className="font-display text-2xl mb-4">BOOKINGS BY CATEGORY</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={categoryData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value" paddingAngle={4}>
                  {categoryData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(0 0% 7%)',
                    border: '1px solid hsl(0 0% 15%)',
                    borderRadius: '8px',
                    color: 'hsl(40 20% 95%)',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap gap-4 justify-center mt-2">
              {categoryData.map((c) => (
                <div key={c.name} className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: c.color }} />
                  <span className="text-muted-foreground">{c.name} ({c.value}%)</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {adminLinks.map((link, i) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
            >
              <Link
                to={link.path}
                className="glass rounded-xl p-6 glass-hover flex flex-col items-center gap-3 text-center block"
              >
                <span className="text-3xl">{link.icon}</span>
                <span className="text-sm font-medium">{link.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
