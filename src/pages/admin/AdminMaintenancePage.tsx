import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const maintenanceLogs = [
  { id: 1, bike: 'Honda Activa 6G', task: 'Oil Change', date: '2026-02-20', status: 'completed', priority: 'medium' },
  { id: 2, bike: 'RE Classic 350', task: 'Tire Replacement', date: '2026-02-25', status: 'in_progress', priority: 'high' },
  { id: 3, bike: 'Bajaj Dominar 400', task: 'Full Service', date: '2026-03-01', status: 'scheduled', priority: 'critical' },
  { id: 4, bike: 'Suzuki Access 125', task: 'Brake Check', date: '2026-02-28', status: 'scheduled', priority: 'low' },
];

const priorityColors: Record<string, string> = {
  low: 'text-muted-foreground', medium: 'text-primary', high: 'text-amber-400', critical: 'text-destructive',
};
const statusColors: Record<string, string> = {
  completed: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  in_progress: 'bg-primary/20 text-primary border-primary/30',
  scheduled: 'bg-muted text-muted-foreground border-border',
};

export default function AdminMaintenancePage() {
  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="font-display text-3xl">Maintenance</h1>
        <p className="text-sm text-muted-foreground mt-1">Track fleet maintenance and service schedules</p>
      </motion.div>

      <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-[11px] uppercase tracking-wider text-muted-foreground p-4 font-medium">Bike</th>
                <th className="text-left text-[11px] uppercase tracking-wider text-muted-foreground p-4 font-medium">Task</th>
                <th className="text-left text-[11px] uppercase tracking-wider text-muted-foreground p-4 font-medium">Date</th>
                <th className="text-left text-[11px] uppercase tracking-wider text-muted-foreground p-4 font-medium">Priority</th>
                <th className="text-left text-[11px] uppercase tracking-wider text-muted-foreground p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {maintenanceLogs.map((log, i) => (
                <motion.tr key={log.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }}
                  className="border-b border-border/30 surface-hover"
                >
                  <td className="p-4 text-sm font-medium">{log.bike}</td>
                  <td className="p-4 text-sm text-muted-foreground">{log.task}</td>
                  <td className="p-4 text-sm text-muted-foreground">{log.date}</td>
                  <td className={`p-4 text-sm font-medium capitalize ${priorityColors[log.priority]}`}>{log.priority}</td>
                  <td className="p-4"><Badge variant="outline" className={statusColors[log.status]}>{log.status.replace('_', ' ')}</Badge></td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
