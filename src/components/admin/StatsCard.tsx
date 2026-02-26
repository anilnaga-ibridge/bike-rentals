import { ReactNode } from 'react';

interface StatsCardProps {
  label: string;
  value: string | number;
  icon: ReactNode;
  trend?: string;
}

export function StatsCard({ label, value, icon, trend }: StatsCardProps) {
  return (
    <div className="glass rounded-xl p-6 glass-hover">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
          <p className="font-display text-4xl text-primary mt-2">{value}</p>
          {trend && <p className="text-xs text-emerald-400 mt-1">{trend}</p>}
        </div>
        <div className="text-primary">{icon}</div>
      </div>
    </div>
  );
}
