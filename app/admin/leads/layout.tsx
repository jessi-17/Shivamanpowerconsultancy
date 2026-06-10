import AdminGuard from "../AdminGuard";

export default function AdminLeadsLayout({ children }: { children: React.ReactNode }) {
  return <AdminGuard>{children}</AdminGuard>;
}
