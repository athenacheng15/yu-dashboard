'use client';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export const Tags = () => {
    const tagItem = [
        { label: 'All', value: 'all' },
        { label: 'Next.js', value: 'nextjs' },
        { label: 'React.js', value: 'reactjs' },
        { label: 'Tailwind', value: 'tailwind' },
        { label: 'Prisma', value: 'prisma' },
        { label: 'MongoDB', value: 'mongodb' },
        { label: 'MySQL', value: 'mysql' },
    ];
    return (
        <ToggleGroup
            type="single"
            size={'sm'}
            className="flex w-full flex-wrap justify-start space-x-2"
        >
            {tagItem.map(item => (
                <ToggleGroupItem
                    key={item.value}
                    value={item.value}
                    className="mb-2"
                >
                    {item.label}
                </ToggleGroupItem>
            ))}
        </ToggleGroup>
    );
};
