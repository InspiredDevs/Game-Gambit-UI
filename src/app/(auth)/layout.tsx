"use client";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='bg-[#080808] py-4 md:py-6 flex justify-center items-center min-h-screen'>
      {children}
    </div>
  );
}
