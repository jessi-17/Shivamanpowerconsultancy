import AdminGuard from "../AdminGuard";

export default function AdminDemandsLayout({ children }: { children: React.ReactNode }) {
  return <AdminGuard>{children}</AdminGuard>;
}
