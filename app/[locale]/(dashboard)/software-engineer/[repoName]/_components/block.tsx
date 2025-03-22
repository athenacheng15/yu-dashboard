interface BlockProps {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
}

export const Block = ({ icon, title, children }: BlockProps) => {
    return (
        <div className="space-y-4 rounded-md bg-main-light-green bg-opacity-50 p-4">
            <div className="flex items-center space-x-2 text-base font-bold text-main-green">
                {icon}
                <h3 className="text-lg">{title}</h3>
            </div>
            <div className="text-sm text-gray-500">{children}</div>
        </div>
    );
};
