'use client';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface ITag {
    onChange: (value: string) => void;
}

export const Tags = ({ onChange }: ITag) => {
    const tagItem = [
        { label: 'All', value: 'all' },
        { label: 'Next.js', value: 'next-js' },
        { label: 'React.js', value: 'react-js' },
        { label: 'TypeScript', value: 'typescript' },
        { label: 'Tailwind', value: 'tailwindcss' },
        { label: 'Prisma', value: 'prisma' },
        { label: 'MongoDB', value: 'mongodb' },
        { label: 'PostgreSQL', value: 'postgresql' },
        { label: 'Styled Components', value: 'styled-components' },
        { label: 'Redux', value: 'redux' },
        { label: 'Firebase', value: 'firebase' },
    ];
    return (
        <ToggleGroup
            type="single"
            size={'sm'}
            defaultValue="all"
            className="flex w-full flex-wrap justify-start space-x-2"
            onValueChange={onChange}
        >
            {tagItem.map(item => (
                <ToggleGroupItem key={item.value} value={item.value} className="mb-2">
                    {item.label}
                </ToggleGroupItem>
            ))}
        </ToggleGroup>
    );
};
