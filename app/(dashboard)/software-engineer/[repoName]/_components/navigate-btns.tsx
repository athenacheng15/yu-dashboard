import { Github, Link2, Clock2, PencilLine } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface Props {
    githubUrl: string;
    webSiteUrl: string;
}

export const NavigateBtns = ({ githubUrl, webSiteUrl }: Props) => {
    return (
        <>
            <Button
                className="flex h-8 w-full justify-start"
                variant="outline"
                onClick={e => {
                    e.stopPropagation();
                    window.open(githubUrl);
                }}
            >
                <Github className="mr-1 w-5" />
                <p className="hidden sm:flex"> View </p>
                Github
            </Button>
            <Button
                className="flex h-8 w-full justify-start"
                variant="outline"
                onClick={e => {
                    e.stopPropagation();
                    window.open(webSiteUrl);
                }}
            >
                <Link2 className="mr-1 w-5" />
                <p className="hidden sm:flex"> Go To </p>
                Website
            </Button>
        </>
    );
};
