const RemoveItem = ({ keyword, index, onClick }: { keyword: string, index: number, onClick: (index: number) => void }) => {
  return (
    <div className="bg-blue-900 rounded-full py-1 px-3 mr-2 mb-2 flex items-center">
      <span className="mr-2">{keyword}</span>
      <button className="focus:outline-none"
      onClick={() => onClick(index)}
      >
        X
      </button>
    </div>
  );
};

export default RemoveItem;
