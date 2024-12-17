
import InfoBox from "./infoBox";




const InfoBoxes = () => {

    const infoBoxConfig = [
        {
            id: 1,
            title: "For Renters",
            description: "Find your dream rental property. Bookmark properties and contact owners.",
            buttonText: "Browse properties",
            background: "bg-gray-100",
            buttonLink:"/properties",
            buttonColor: 'bg-black'
        },
        {
            id: 2,
            title: "For Property Owners",
            description: "List your properties and reach potential tenants. Rent as an airbnb or long term.",
            buttonText: "Add property",
            background: "bg-blue-100",
            buttonLink:"/properties/add",
            buttonColor: 'bg-blue-500'
        },
    ]

  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            {
                infoBoxConfig.map((box) => <InfoBox config={box} key={box.id} />)
            }
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
