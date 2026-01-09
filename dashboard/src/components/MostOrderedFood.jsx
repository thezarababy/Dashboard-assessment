import Card from "./ui/Card";

const items = [
  {
    icon: <img src="Salad.png" alt="Fresh Salad Bowl" className="w-7 h-7" />,
    name: "Fresh Salad Bowl",
    price: "IDR 45.000",
  },
  {
    icon: <img src="Noodles.png" alt="Chicken Noodles" className="w-7 h-7" />,
    name: "Chicken Noodles",
    price: "IDR 75.000",
  },
  {
    icon: (
      <img src="Smoothies2.png" alt="Smoothie Fruits" className="w-7 h-7" />
    ),
    name: "Smoothie Fruits",
    price: "IDR 45.000",
  },
  {
    icon: (
      <img src="Chicken2.png" alt="Hot Chicken Wings" className="w-7 h-7" />
    ),
    name: "Hot Chicken Wings",
    price: "IDR 45.000",
  },
];

const MostOrdered = () => {
  return (
    <Card title="Most Ordered Food">
      <p className=" text-gray-500 pb-4">
        Lorem ipsum dolor sit amet consectetur{" "}
      </p>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={item.name}
            className={`flex justify-between text-sm text-gray-500 pb-4 ${
              index !== items.length - 1 ? "border-b border-gray-300" : ""
            }`}
          >
            <span className="flex items-center gap-3 ">
              {item.icon}
              {item.name}
            </span>
            <span className="text-gray-500">{item.price}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default MostOrdered;
