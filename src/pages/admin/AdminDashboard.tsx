import { motion } from 'framer-motion';
import { StatsCard } from '@/components/admin/StatsCard';
import { DollarSign, Bike, Users, CalendarCheck, TrendingUp, IndianRupee } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const revenueData = [
  { day: 'Mon', revenue: 12000, bookings: 8 },
  { day: 'Tue', revenue: 9500, bookings: 6 },
  { day: 'Wed', revenue: 18000, bookings: 12 },
  { day: 'Thu', revenue: 14000, bookings: 9 },
  { day: 'Fri', revenue: 22000, bookings: 15 },
  { day: 'Sat', revenue: 31000, bookings: 22 },
  { day: 'Sun', revenue: 28000, bookings: 18 },
];

const monthlyTrend = [
  { month: 'Sep', revenue: 280000 },
  { month: 'Oct', revenue: 320000 },
  { month: 'Nov', revenue: 350000 },
  { month: 'Dec', revenue: 420000 },
  { month: 'Jan', revenue: 380000 },
  { month: 'Feb', revenue: 482500 },
];

const categoryData = [
  { name: 'Scooty', value: 45, color: 'hsl(43, 96%, 56%)' },
  { name: 'Cruiser', value: 20, color: 'hsl(38, 92%, 50%)' },
  { name: 'Sports', value: 20, color: 'hsl(43, 80%, 40%)' },
  { name: 'Adventure', value: 15, color: 'hsl(0, 0%, 40%)' },
];

const topBikes = [
  { name: 'Honda Activa 6G', bookings: 87, revenue: 43413 },
  { name: 'RE Classic 350', bookings: 54, revenue: 53946 },
  { name: 'TVS Jupiter 125', bookings: 42, revenue: 18858 },
  { name: 'TVS Apache RTR 200', bookings: 35, revenue: 27965 },
];

const recentBookings = [
  { id: 'BK-142', customer: 'Rahul Sharma', bike: 'Honda Activa 6G', amount: 4990, status: 'confirmed', time: '2h ago' },
  { id: 'BK-141', customer: 'Priya Patel', bike: 'RE Classic 350', amount: 8990, status: 'active', time: '5h ago' },
  { id: 'BK-140', customer: 'Amit Kumar', bike: 'Suzuki Access 125', amount: 3490, status: 'completed', time: '1d ago' },
];

const statusColors: Record<string, string> = {
  confirmed: 'text-primary',
  active: 'text-emerald-400',
  completed: 'text-muted-foreground',
};

const chartTooltipStyle = {
  backgroundColor: 'hsl(0 0% 10%)',
  border: '1px solid hsl(0 0% 16%)',
  borderRadius: '12px',
  color: 'hsl(45 10% 95%)',
  fontSize: '12px',
};

export default function AdminDashboard() {
  return (
    <div>
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="font-display text-3xl md:text-4xl">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">Welcome back. Here's what's happening with Sri Ganesh Bike Rentals today.</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard label="Total Revenue" value="₹4,82,500" icon={<IndianRupee className="h-5 w-5" />} trend="+12% this month" />
        <StatsCard label="Active Bookings" value="23" icon={<CalendarCheck className="h-5 w-5" />} trend="+5 today" />
        <StatsCard label="Fleet Size" value="8" icon={<Bike className="h-5 w-5" />} />
        <StatsCard label="Total Customers" value="1,247" icon={<Users className="h-5 w-5" />} trend="+89 this week" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card rounded-2xl border border-border/50 p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display text-lg">Weekly Revenue</h3>
            <span className="text-xs text-emerald-400 flex items-center gap-1"><TrendingUp className="h-3 w-3" /> +18.2%</span>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={revenueData} barGap={4}>
              <XAxis dataKey="day" stroke="hsl(0 0% 40%)" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="hsl(0 0% 40%)" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `₹${v / 1000}k`} />
              <Tooltip contentStyle={chartTooltipStyle} formatter={(v: number) => [`₹${v.toLocaleString()}`, 'Revenue']} />
              <Bar dataKey="revenue" fill="hsl(43 96% 56%)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-card rounded-2xl border border-border/50 p-6">
          <h3 className="font-display text-lg mb-4">By Category</h3>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={categoryData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" paddingAngle={4} strokeWidth={0}>
                {categoryData.map((entry) => <Cell key={entry.name} fill={entry.color} />)}
              </Pie>
              <Tooltip contentStyle={chartTooltipStyle} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-3 justify-center mt-2">
            {categoryData.map((c) => (
              <div key={c.name} className="flex items-center gap-1.5 text-[11px]">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                <span className="text-muted-foreground">{c.name} {c.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card rounded-2xl border border-border/50 p-6">
          <h3 className="font-display text-lg mb-4">6-Month Trend</h3>
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={monthlyTrend}>
              <defs>
                <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(43 96% 56%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(43 96% 56%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="hsl(0 0% 40%)" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="hsl(0 0% 40%)" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `₹${v / 1000}k`} />
              <Tooltip contentStyle={chartTooltipStyle} formatter={(v: number) => [`₹${v.toLocaleString()}`, 'Revenue']} />
              <Area type="monotone" dataKey="revenue" stroke="hsl(43 96% 56%)" fill="url(#revenueGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="bg-card rounded-2xl border border-border/50 p-6">
          <h3 className="font-display text-lg mb-4">Top Performers</h3>
          <div className="space-y-3">
            {topBikes.map((bike, i) => (
              <div key={bike.name} className="flex items-center gap-3">
                <span className="font-display text-xl text-primary/40 w-7">#{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{bike.name}</p>
                  <p className="text-[11px] text-muted-foreground">{bike.bookings} bookings</p>
                </div>
                <span className="text-sm font-semibold text-primary">₹{bike.revenue.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-card rounded-2xl border border-border/50 p-6">
          <h3 className="font-display text-lg mb-4">Recent Bookings</h3>
          <div className="space-y-3">
            {recentBookings.map((b) => (
              <div key={b.id} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                <div>
                  <p className="text-sm font-medium">{b.customer}</p>
                  <p className="text-[11px] text-muted-foreground">{b.bike}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">₹{b.amount.toLocaleString()}</p>
                  <p className={`text-[11px] capitalize ${statusColors[b.status]}`}>{b.status}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
