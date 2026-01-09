const Card = ({ title, subtitle, action, children }) => {
  return (
    <div className="bg-white border-b border-r border-gray-200 p-5 text-gray-500">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg text-gray-800 font-semibold">{title}</h3>
          {subtitle && <p className="text-lg font-semibold mt-1">{subtitle}</p>}
        </div>

        {action && (
          <button className="text-xs text-indigo-600 hover:underline">
            {action}
          </button>
        )}
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Card;
