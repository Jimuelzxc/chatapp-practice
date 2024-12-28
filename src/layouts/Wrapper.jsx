export default function Wrapper({ className, children }) {
  return (
    <div className={`px-2 md:px-[500px] ${className}`} id="wrapper">
        {children}
    </div>
  );
}

