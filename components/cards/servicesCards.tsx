
import { Card } from "@/components/retroui/Card";

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: CardProps) {
  return (
    <Card className="h-full shadow-md hover:shadow-none flex flex-col gap-2">

      {/* ICON AREA */}
      {icon && (
        <Card.Content className="pb-0 pt-6">
          <div className="w-12 h-12 bg-primary border-4 border-black rounded-xl flex items-center justify-center shadow-[3px_3px_0px_rgba(0,0,0,1)]">
            {icon}
          </div>
        </Card.Content>
      )}

      {/* HEADER & TITLE */}
      <Card.Header className="pb-0 pt-2">
        <Card.Title className="text-xl font-black text-black uppercase tracking-wide">
          {title}
        </Card.Title>
      </Card.Header>

      {/* DESCRIPTION */}
      <Card.Content className="flex-1 pb-6 pt-2">
        <p className="text-sm font-medium text-gray-700 leading-relaxed">
          {description}
        </p>
      </Card.Content>

    </Card>
  );
}

