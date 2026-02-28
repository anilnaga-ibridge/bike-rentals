import { motion } from 'framer-motion';
import { StatsCard } from '@/components/admin/StatsCard';
import { DollarSign, Bike, Users, CalendarCheck, TrendingUp, Clock, Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const revenueData = [
  { day: 'Mon', revenue: 1200, bookings: 4 },
  { day: 'Tue', revenue: 950, bookings: 3 },
  { day: 'Wed', revenue: 1800, bookings: 6 },
  { day: 'Thu', revenue: 1400, bookings: 5 },
  { day: 'Fri', revenue: 2200, bookings: 8 },
  { day: 'Sat', revenue: 3100, bookings: 12 },
  { day: 'Sun', revenue: 2800, bookings: 10 },
];

const monthlyTrend = [
  { month: 'Sep', revenue: 28000 },
  { month: 'Oct', revenue: 32000 },
  { month: 'Nov', revenue: 35000 },
  { month: 'Dec', revenue: 42000 },
  { month: 'Jan', revenue: 38000 },
  { month: 'Feb', revenue: 48250 },
];

const categoryData = [
  { name: 'Sports', value: 45, color: 'hsl(36, 100%, 50%)' },
  { name: 'Cruiser', value: 25, color: 'hsl(30, 90%, 55%)' },
  { name: 'Adventure', value: 20, color: 'hsl(36, 80%, 40%)' },
  { name: 'Scooty', value: 10, color: 'hsl(0, 0%, 40%)' },
];

const topBikes = [
  { name: 'Ducati Panigale V4', bookings: 34, revenue: 9520 },
  { name: 'Harley Fat Boy 114', bookings: 28, revenue: 8960 },
  { name: 'Honda CBR 1000RR-R', bookings: 25, revenue: 7500 },
  { name: 'BMW R 1250 GS', bookings: 22, revenue: 5720 },
];

const recentBookings = [
  { id: 'BK-042', customer: 'James Carter', bike: 'Ducati Panigale V4', amount: 620, status: 'confirmed', time: '2h ago' },
  { id: 'BK-041', customer: 'Sophia Lane', bike: 'Harley Fat Boy 114', amount: 760, status: 'active', time: '5h ago' },
  { id: 'BK-040', customer: 'Marcus Rivera', bike: 'Vespa GTS 300', amount: 120, status: 'completed', time: '1d ago' },
  { id: 'BK-039', customer: 'Emily Watson', bike: 'Honda Africa Twin', amount: 480, status: 'confirmed', time: '1d ago' },
];

const statusColors: Record<string, string> = {
  confirmed: 'text-primary',
  active: 'text-emerald-400',
  completed: 'text-muted-foreground',
};

const adminLinks = [
  { label: 'Manage Bikes', path: '/admin/bikes', icon: '🏍️', desc: 'Fleet CRUD' },
  { label: 'Bookings', path: '/admin/bookings', icon: '📅', desc: 'All bookings' },
  { label: 'Customers', path: '/admin/customers', icon: '👥', desc: 'User management' },
  { label: 'Maintenance', path: '/admin/maintenance', icon: '🔧', desc: 'Fleet health' },
  { label: 'Coupons', path: '/admin/coupons', icon: '🏷️', desc: 'Discount codes' },
  { label: 'Trip Packages', path: '/admin/packages', icon: '🗺️', desc: 'Curated trips' },
];

const chartTooltipStyle = {
  backgroundColor: 'hsl(0 0% 7%)',
  border: '1px solid hsl(0 0% 15%)',
  borderRadius: '8px',
  color: 'hsl(40 20% 95%)',
};

export default function AdminDashboard() {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-2">Admin Panel</p>
          <h1 className="font-display text-5xl md:text-7xl">
            DASH<span className="text-gradient">BOARD</span>
          </h1>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard label="Total Revenue" value="$48,250" icon={<DollarSign className="h-6 w-6" />} trend="+12% this month" />
          <StatsCard label="Active Bookings" value="23" icon={<CalendarCheck className="h-6 w-6" />} trend="+5 today" />
          <StatsCard label="Fleet Size" value="8" icon={<Bike className="h-6 w-6" />} />
          <StatsCard label="Total Customers" value="1,247" icon={<Users className="h-6 w-6" />} trend="+89 this week" />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Weekly Revenue */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="glass rounded-2xl p-6 lg:col-span-2"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-2xl">WEEKLY REVENUE</h3>
              <span className="text-xs text-emerald-400 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" /> +18.2%
              </span>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={revenueData} barGap={4}>
                <XAxis dataKey="day" stroke="hsl(0 0% 55%)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(0 0% 55%)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}`} />
                <Tooltip contentStyle={chartTooltipStyle} formatter={(v: number) => [`$${v}`, 'Revenue']} />
                <Bar dataKey="revenue" fill="hsl(36 100% 50%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Category Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-display text-2xl mb-4">BY CATEGORY</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={categoryData} cx="50%" cy="50%" innerRadius={55} outerRadius={85} dataKey="value" paddingAngle={4} strokeWidth={0}>
                  {categoryData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={chartTooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap gap-3 justify-center">
              {categoryData.map((c) => (
                <div key={c.name} className="flex items-center gap-1.5 text-xs">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                  <span className="text-muted-foreground">{c.name} {c.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Monthly Trend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-display text-2xl mb-4">6-MONTH TREND</h3>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={monthlyTrend}>
                <defs>
                  <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(36 100% 50%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(36 100% 50%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="hsl(0 0% 55%)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(0 0% 55%)" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
                <Tooltip contentStyle={chartTooltipStyle} formatter={(v: number) => [`$${v.toLocaleString()}`, 'Revenue']} />
                <Area type="monotone" dataKey="revenue" stroke="hsl(36 100% 50%)" fill="url(#revenueGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Top Bikes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-display text-2xl mb-4">TOP PERFORMERS</h3>
            <div className="space-y-3">
              {topBikes.map((bike, i) => (
                <div key={bike.name} className="flex items-center gap-3">
                  <span className="font-display text-2xl text-primary/50 w-8">#{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{bike.name}</p>
                    <p className="text-xs text-muted-foreground">{bike.bookings} bookings</p>
                  </div>
                  <span className="text-sm font-semibold text-primary">${bike.revenue.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Bookings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-display text-2xl mb-4">RECENT BOOKINGS</h3>
            <div className="space-y-3">
              {recentBookings.map((b) => (
                <div key={b.id} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                  <div>
                    <p className="text-sm font-medium">{b.customer}</p>
                    <p className="text-xs text-muted-foreground">{b.bike}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">${b.amount}</p>
                    <p className={`text-xs capitalize ${statusColors[b.status]}`}>{b.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {adminLinks.map((link, i) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.05 }}
            >
              <Link
                to={link.path}
                className="glass rounded-xl p-6 glass-hover flex flex-col items-center gap-2 text-center block group"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform inline-block">{link.icon}</span>
                <span className="text-sm font-semibold">{link.label}</span>
                <span className="text-xs text-muted-foreground">{link.desc}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
