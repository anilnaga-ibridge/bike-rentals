import { format } from 'date-fns';
import { CalendarIcon, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface DateTimePickerProps {
  label: string;
  date: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
  time: string;
  onTimeChange: (time: string) => void;
  minDate?: Date;
}

const timeSlots = Array.from({ length: 24 }, (_, i) => {
  const h = i.toString().padStart(2, '0');
  return [`${h}:00`, `${h}:30`];
}).flat();

export function DateTimePicker({ label, date, onDateChange, time, onTimeChange, minDate }: DateTimePickerProps) {
  return (
    <div className="space-y-2">
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <div className="flex gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                'flex-1 justify-start text-left font-normal bg-secondary border-border',
                !date && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
              {date ? format(date, 'MMM dd, yyyy') : 'Select date'}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={onDateChange}
              disabled={(d) => d < (minDate || new Date())}
              initialFocus
              className={cn('p-3 pointer-events-auto')}
            />
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-[110px] justify-start font-normal bg-secondary border-border text-sm"
            >
              <Clock className="mr-1 h-3.5 w-3.5 text-primary" />
              {time || 'Time'}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[140px] p-2 max-h-[250px] overflow-y-auto pointer-events-auto" align="start">
            <div className="space-y-0.5">
              {timeSlots.map((t) => (
                <button
                  key={t}
                  onClick={() => onTimeChange(t)}
                  className={cn(
                    'w-full text-left text-sm px-3 py-1.5 rounded-md transition-colors',
                    time === t
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-secondary text-foreground'
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
