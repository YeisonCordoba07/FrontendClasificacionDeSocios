import { NavBar } from '@/components/GestionFinanciera/NavBar';
import { Footer } from '@/components/GestionFinanciera/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex-col flex-grow items-start md:h-screen text-xm'>
      <NavBar />
      <main className='flex flex-col flex-grow justify-center items-center self-stretch py-32 px-0 gap-20'>
        {children}
      </main>
      <Footer />
    </div>
  );
};
