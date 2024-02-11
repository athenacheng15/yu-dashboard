import { Send, Globe, Linkedin, Github, Mail } from 'lucide-react';

export const infoList = [
    {
        title: 'Contact',
        icon: <Send className="w-4" />,
        content: [
            {
                title: 'Email',
                icon: <Mail className="w-4" />,
                onClick: () => {},
            },
            {
                title: 'Linkedin',
                icon: <Linkedin className="w-4" />,
                onClick: () => {
                    window.open(
                        'https://www.linkedin.com/in/yuchuncheng-athena/',
                    );
                },
            },
            {
                title: 'Github',
                icon: <Github className="w-4" />,
                onClick: () => {
                    window.open('https://github.com/athenacheng15');
                },
            },
        ],
    },
    {
        title: 'Language',
        icon: <Globe className="w-4" />,
        content: [
            {
                title: '繁體中文',
                icon: '',
                onClick: () => {},
            },
            {
                title: 'English',
                icon: '',
                onClick: () => {},
            },
            {
                title: '日本語',
                icon: '',
                onClick: () => {},
            },
        ],
    },
];
