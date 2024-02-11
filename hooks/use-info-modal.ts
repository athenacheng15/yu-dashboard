import { create } from 'zustand';

export interface InfoDataType {
    title: string;
    icon: React.ReactNode;
    content: { title: string; icon: React.ReactNode; onClick: () => void }[];
}

interface InfoModalStore {
    infoData: InfoDataType | null;
    isOpen: boolean;
    onOpen: (infoData: InfoDataType) => void;
    onClose: () => void;
}

export const useInfoModal = create<InfoModalStore>(set => ({
    infoData: null,
    isOpen: false,
    onOpen: (infoData: InfoDataType) => set({ isOpen: true, infoData }),
    onClose: () => set({ isOpen: false, infoData: null }),
}));
