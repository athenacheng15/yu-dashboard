import { StaticImageData } from 'next/image';

import firebase from '@/public/tech-stack-images/firebase.svg';
import mongodb from '@/public/tech-stack-images/mongodb.svg';
import mysql from '@/public/tech-stack-images/mysql.svg';
import next_js from '@/public/tech-stack-images/next-js.svg';
import postgresql from '@/public/tech-stack-images/postgresql.svg';
import prisma from '@/public/tech-stack-images/prisma.svg';
import react_js from '@/public/tech-stack-images/react-js.svg';
import redux from '@/public/tech-stack-images/redux.svg';
import styled_components from '@/public/tech-stack-images/styled-components.svg';
import tailwindcss from '@/public/tech-stack-images/tailwindcss.svg';
import typescript from '@/public/tech-stack-images/typescript.svg';

export const tackStacksImg: { [key: string]: StaticImageData } = {
    firebase,
    mongodb,
    mysql,
    'next-js': next_js,
    postgresql,
    prisma,
    'react-js': react_js,
    redux,
    'styled-components': styled_components,
    tailwindcss,
    typescript,
};

export type TechStackKey = keyof typeof tackStacksImg;
