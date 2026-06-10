import AdminGuard from "../AdminGuard";

export default function AdminCredibilityLayout({ children }: { children: React.ReactNode }) {
  return <AdminGuard>{children}</AdminGuard>;
}
