'use client';

import type { IProject } from '@/database/type';
import type { WebDevToolkitImgUrlKey } from '@/database/webDevToolkitImgUrl';

import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Settings, Image as ImageIcon, Database, Blocks } from 'lucide-react';
import { get } from 'lodash';

import { repostories } from '@/database/repostories';
import { webDevToolkitImgUrl } from '@/database/webDevToolkitImgUrl';

import { useDetail } from './_hooks/useDetail';
import { ImgCarousel } from './_components/img-carousel';
import { Block } from './_components/block';
import { Title } from './_components/title';
import Image from 'next/image';

export default function SoftwareEngineerPage() {
    const { repoName } = useParams();
    const t = useTranslations();

    // TODO: lodaing
    const { isLoading, repoDetail } = useDetail({ repoName: repoName as string });
    const repoData: IProject = get(repostories, repoName);

    return (
        <div className="space-y-6">
            <Title repoDetail={repoDetail} />
            <Block icon={<Settings />} title={t('common.features')}>
                <ul className="ml-6 list-disc text-justify md:ml-12">
                    {repoData.keyFeatures.map(({ title, desc }) => (
                        <li className="mb-2" key={crypto.randomUUID()}>
                            <p className="font-semibold">{t(`${repoName}.keyFeatures.titles.${title}`)}</p>
                            <p className="text-gray-500">{t(`${repoName}.keyFeatures.descriptions.${desc}`)}</p>
                        </li>
                    ))}
                </ul>
            </Block>
            <Block icon={<ImageIcon />} title={t('common.snapshot')}>
                <div className="flex justify-center">
                    <ImgCarousel imgList={repoData.snapshots} />
                </div>
            </Block>
            <Block icon={<Database />} title={t('common.tech-stack')}>
                <div className="flex flex-wrap md:ml-8">
                    {repoData.techStacks.map(tech => (
                        <Image key={tech.id} src={tech.imageUrl} alt={tech.desc} height={24} className="mb-2 mr-2" />
                    ))}
                </div>
            </Block>
            <Block icon={<Blocks />} title={t('common.libraries')}>
                <div className="space-y-2 md:ml-8">
                    {repoData.webDevToolkits.map(tool => {
                        const imgUrl = webDevToolkitImgUrl[tool.id as WebDevToolkitImgUrlKey];
                        return (
                            <div key={tool.id} className="flex space-x-2">
                                <img src={imgUrl} alt="" className="h-5 w-5" />
                                <div>
                                    <p className="font-medium">{`${tool.name} : `}</p>
                                    <p>{t(`${repoName}.webDevToolkits.${tool.desc}`)}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Block>
        </div>
    );
}
