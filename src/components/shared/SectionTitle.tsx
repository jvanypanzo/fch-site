import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionTitle({ title, subtitle, centered = false, className }: SectionTitleProps) {
  return (
    <div className={cn('mb-8', centered && 'text-center', className)}>
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">{title}</h2>
      {subtitle && (
        <p className="text-gray-600">{subtitle}</p>
      )}
      <div className={cn('w-20 h-1 bg-secondary mt-4', centered && 'mx-auto')} />
    </div>
  )
}
