import { Sidebar } from './_components/sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full">
            <main className="h-full 2xl:max-w-screen-xl">
                <div className="flex h-full gap-x-7">
                    <div className="hidden w-64 shrink-0 md:block">
                        <Sidebar />
                    </div>
                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
