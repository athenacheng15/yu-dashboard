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
                    <div className="flex h-full">
                        <div className="hidden w-64 shrink-0 md:block">
                            <Sidebar />
                        </div>
                        <div className="h-full w-full bg-white bg-[linear-gradient(to_right,#69866c30_1px,transparent_1px),linear-gradient(to_bottom,#69866c30_1px,transparent_1px)] bg-[size:16px_16px]">
                            <div className="p-6 pt-20 md:p-10">{children}</div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default DashboardLayout;
