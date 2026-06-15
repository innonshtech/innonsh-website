import * as Icons from 'lucide-react';

export default function LucideIcon({ name, size = 20, color, className }) {
  if (!name) return null;
  
  // Resolve component dynamically
  const IconComponent = Icons[name];
  
  if (!IconComponent) {
    // Return a default fallback icon if the specified name is not found
    return <Icons.HelpCircle size={size} color={color} className={className} />;
  }
  
  return <IconComponent size={size} color={color} className={className} />;
}
