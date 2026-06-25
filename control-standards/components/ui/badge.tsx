import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'blue' | 'indigo' | 'slate';
  className?: string;
}

const colors = {
  cyan: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20',
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  slate: 'bg-slate-800/50 text-slate-300 border-slate-700/50',
};

export function Badge({ children, variant = 'slate', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border',
        colors[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
