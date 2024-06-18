import { Sidebar } from './_components/sidebar';
import { Navbar } from './_components/nav-bar';

import { ModalProvider } from '@/components/providers/modal-provider';


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <ModalProvider />
            <Navbar />
            <main className="flex">
                <div className="fixed left-0 top-0 hidden h-full w-64 shrink-0 md:block">
                    <Sidebar />
                </div>
                <div className="w-full bg-white md:ml-64">
                    <div className="min-h-[100vh] bg-[linear-gradient(to_right,#69866c30_1px,transparent_1px),linear-gradient(to_bottom,#69866c30_1px,transparent_1px)] bg-[size:16px_16px] ">
                        <div className="p-6 pt-20 md:p-10">{children}</div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default DashboardLayout;
