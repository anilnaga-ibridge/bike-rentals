import { ReactNode } from 'react';

interface StatsCardProps {
  label: string;
  value: string | number;
  icon: ReactNode;
  trend?: string;
}

export function StatsCard({ label, value, icon, trend }: StatsCardProps) {
  return (
    <div className="bg-card rounded-2xl border border-border/50 p-5 hover:border-primary/20 transition-colors">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">{label}</p>
          <p className="font-display text-2xl md:text-3xl text-foreground mt-1.5">{value}</p>
          {trend && <p className="text-[11px] text-emerald-400 mt-1">{trend}</p>}
        </div>
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">{icon}</div>
      </div>
    </div>
  );
}
