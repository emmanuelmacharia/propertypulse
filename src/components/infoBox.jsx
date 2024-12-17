import Link from "next/link";

const InfoBox = ({ config }) => {
  return (
    <div className={`${config.background} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{config.title}</h2>
      <p className="mt-2 mb-4">
        {config.description}
      </p>
      <Link
        href={config.buttonLink}
        className={`inline-block ${config.buttonColor} text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {config.buttonText}
      </Link>
    </div>
  );
};

export default InfoBox;
