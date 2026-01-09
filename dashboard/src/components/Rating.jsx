import Card from "./ui/Card";

const Rating = () => {
  return (
    <Card title="Your Rating">
      <p className="text-sm text-grey-500">
        Lorem ipsum dolor sit amet, consectetur
      </p>
      <div className="flex flex-col items-center gap-2 mt-8">
        {/* Top circle */}
        <Circle label="Hygiene" value="85%" color="bg-indigo-500" />
        {/* Bottom two circles */}
        <div className="flex gap-4">
          <Circle label="Food Taste" value="85%" color="bg-orange-400" big />
          <Circle label="Packaging" value="92%" color="bg-cyan-400" />
        </div>
      </div>
    </Card>
  );
};

const Circle = ({ label, value, color, big }) => (
  <div
    className={`flex flex-col items-center justify-center rounded-full text-white ${
      big ? "w-28 h-28" : "w-20 h-20"
    } ${color}`}
  >
    <p className="font-semibold">{value}</p>
    <p className="text-xs">{label}</p>
  </div>
);

export default Rating;
