import Link from 'next/link';
import { AnchorHTMLAttributes, DetailedHTMLProps, FC } from 'react';

// ==========================================================
interface DropdownToggleLinkProps
  extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  title: string;
  to?:string
}
// ==========================================================

const DashboardNavbarLink: FC<DropdownToggleLinkProps> = (props) => {
  const { title, className,to} = props;
  return (
    <Link href={`${to}`} style={{fontSize:"15px",fontWeight:"400"}} className={className}>
      {title}
    </Link>
  );
};

export default DashboardNavbarLink;
