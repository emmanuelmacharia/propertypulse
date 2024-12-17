import Link from 'next/link';
import Hero from '@/components/hero';
import InfoBoxes from '@/components/infoBoxes';
import HomeProperties from '@/components/homeProperties';
import properties from '../../properties.json'
import connectDb from '../config/database';

const HomePage = () => {

    const recentProperties = properties.slice(0, 3);

    return (
        <>
        <section>
            <div><Hero></Hero></div>
        </section>
        <section>
            <InfoBoxes/>
        </section>
        <section>
            <HomeProperties properties={recentProperties}/>
        </section>
        </>
    );
}
 
export default HomePage;


