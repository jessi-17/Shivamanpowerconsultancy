import AdminGuard from "../AdminGuard";

export default function AdminOfferLayout({ children }: { children: React.ReactNode }) {
  return <AdminGuard>{children}</AdminGuard>;
}
