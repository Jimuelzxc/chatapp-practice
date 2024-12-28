export default function DefaultLayout({ className, children }) {
  return (
    <div className={`h-screen ${className} flex flex-col`} id="default-layout">
        {children}
    </div>
  );
}
