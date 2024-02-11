import { Sidebar } from './_components/sidebar';
import { Navbar } from './_components/nav-bar';

import { ModalProvider } from '@/components/providers/modal-provider';


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <ModalProvider />
            <div className="h-full">
                <Navbar />
                <main className="h-full 2xl:max-w-screen-xl">
                    <div className="flex h-full gap-x-7">
                        <div className="hidden w-64 shrink-0 md:block">
                            <Sidebar />
                        </div>
                        {children}
                    </div>
                </main>
            </div>
        </>
    );
};

export default DashboardLayout;
