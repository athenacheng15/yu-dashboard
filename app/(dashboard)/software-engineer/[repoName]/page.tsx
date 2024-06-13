'use client';

import type { IProject } from '@/database/type';
import type { TechStackKey } from '@/database/techStacksImgUrl';
import type { WebDevToolkitImgUrlKey } from '@/database/webDevToolkitImgUrl';

import { useParams } from 'next/navigation';
import { Settings, Image as ImageIcon, Database, Blocks } from 'lucide-react';
import { get } from 'lodash';

import { repostories } from '@/database/repostories';
import { techStacksImgUrl } from '@/database/techStacksImgUrl';
import { webDevToolkitImgUrl } from '@/database/webDevToolkitImgUrl';

import { useDetail } from './_hooks/useDetail'; 
import { ImgCarousel } from './_components/img-carousel';
import { Block } from './_components/block';
import { Title } from './_components/title';

export default function SoftwareEngineerPage() {
    const { repoName } = useParams();
    const { isLoading, repoDetail } = useDetail({ repoName: repoName as string });
    const repoData: IProject = get(repostories, repoName);
    const techBadgeUrls = repoData.techStacks.map(item => techStacksImgUrl[item as TechStackKey]);
    return (
        <div className="space-y-6">
            <Title repoDetail={repoDetail} />
            <Block icon={<Settings />} title="Featurs">
                <ul className="ml-12 list-disc text-justify">
                    {repoData.keyFeatures.map(desc => (
                        <li key={crypto.randomUUID()}>{desc}</li>
                    ))}
                </ul>
            </Block>
            <Block icon={<ImageIcon />} title="Snapshot">
                <div className="flex justify-center">
                    <ImgCarousel imgList={repoData.snapshots} />
                </div>
            </Block>
            <Block icon={<Database />} title="Tech Stack">
                <div className="ml-8 flex flex-wrap space-x-2">
                    {techBadgeUrls.map(tech => (
                        <img key={tech} src={tech} alt="" className="mb-2" />
                    ))}
                </div>
            </Block>
            <Block icon={<Blocks />} title="Web Dev Toolkits">
                <div className="ml-8 space-y-2">
                    {repoData.webDevToolkits.map(tool => {
                        const imgUrl = webDevToolkitImgUrl[tool.id as WebDevToolkitImgUrlKey];
                        return (
                            <div key={tool.id} className="flex h-5 space-x-2">
                                <img src={imgUrl} alt="" />
                                <p>
                                    <span className="font-medium">{tool.name}</span>
                                    {` : ${tool.desc}`}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Block>
        </div>
    );
}
