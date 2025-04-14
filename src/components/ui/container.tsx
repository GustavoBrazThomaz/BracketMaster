import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: Readonly<Props>) {
  return <div className={cn("mt-16 px-48", className)}>{children}</div>;
}
