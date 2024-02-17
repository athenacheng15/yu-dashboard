import { Card } from './_components/card';
import { Tags } from './_components/tags';

export default function SoftwareEngineerPage() {
    return (
        <div className="space-y-8">
            <div>
                <Tags />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}
