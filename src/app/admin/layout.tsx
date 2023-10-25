export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>{children}</div>
      <p>Painal de Admnistração</p>
    </div>
  )
}