import type { InfoSection } from '@/types/info';

import { create } from 'zustand';

interface InfoModalStore {
    infoData: InfoSection | null;
    isOpen: boolean;
    onOpen: (infoData: InfoSection) => void;
    onClose: () => void;
}

export const useInfoModal = create<InfoModalStore>(set => ({
    infoData: null,
    isOpen: false,
    onOpen: (infoData: InfoSection) => set({ isOpen: true, infoData }),
    onClose: () => set({ isOpen: false, infoData: null }),
}));
