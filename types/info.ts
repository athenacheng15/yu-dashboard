export interface InfoSection {
    title: string;
    value: string;
    icon: React.ReactNode;
    content: ContentItem[];
}

interface ContentItem {
    title: string;
    icon?: React.ReactNode;
    onClick: () => void;
    value?: string;
}
