
// import { Label } from '../../Label';
import { Label } from "../../Label";

const IsGroup = ({ data }: { data: Object }) => {
  return (
    <div className="grid grid-cols-2 gap-1">
    <span key={'chave'} className="flex flex-col gap-1 items-end text-slate-200 col-[1]">
      {Object.entries(data).map(([key, _]) => (
        <Label.Small key={Math.random()+'chave'} text={key} verde className='text-xl'/>
      ))}
    </span>

    <span key={'valor'} className="flex flex-col gap-1 items-start text-slate-200 col-[2]">
      {Object.entries(data).map(([_, value]) => (
        <>
          {Array.isArray(value)
              ? value.map((item) => IsGroup({ data: item }))
              : value instanceof Object ? IsGroup({ data: value }) : <Label.Small key={Math.random()+'valor'} text={value} className='text-xl'/> || 'null'}
        </>
      ))}
    </span>

      {/* <span className="flex flex-col gap-1 items-start text-slate-200 col-[2]">
        {Object.entries(data).map(([_, value], index) => (
          <Label.Small key={index} text={value} />
        ))}
      </span> */}
    </div>
  );
};

export default IsGroup;
