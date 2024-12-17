import properties from '../../../properties.json'
// import PropertyCard from '@/components/propertyCard';
import connectDb from '@/config/database';
import Property from '../../../Models/Property';

const PropertiesPage = async () => {

    await connectDb();

    const properties = await Property.find({}).lean(); // use lean when it's readonly

    console.log(properties)
    return ( 
    <section className='px-4 py-6'>
        <div className="container-xl lg:container mx-auto px-4 py-6">
            {properties.length === 0 ? (<p>No properties found </p>) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        properties.map((property) => (<PropertyCard property={property} key={property._id} />))
                    }
                </div>
            )}
        </div>
    </section>
    );
}
 
export default PropertiesPage;