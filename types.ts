
// Import React to provide the React namespace for type definitions
import React from 'react';

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
