import { OrderStatus as StatusOptions } from '@/types/payload-types'
import { cn } from '@/lib/utils/cn'

type Props = {
  status: StatusOptions
  className?: string
}

export const OrderStatus: React.FC<Props> = ({ status, className }) => {
  return (
    <div
      className={cn(
        'w-fit rounded px-2 py-0 font-mono text-xs uppercase tracking-[0.1em]',
        className,
        {
          'bg-primary/10': status === 'processing',
          'bg-success': status === 'completed',
        },
      )}
    >
      {status}
    </div>
  )
}
