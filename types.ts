
export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}
