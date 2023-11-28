import React from 'react';
import RemoveItem from '../removeItem/RemoveItem';
import Input from '../InputPlaceholder/Input';

const InputComponent = ({ entity, setEntity }) => {
  const [vBan, setVban] = React.useState<string>('');
  const [vProf, setVProf] = React.useState<string>('');
  const [keywordsBan, setKeywordsBan] = React.useState<string[]>([]);
  const [keywordsProf, setKeywordsProf] = React.useState<string[]>([]);

  const handleBan = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setVban(e.target.value);
  };
  const handleProf = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setVProf(e.target.value);
  };
  const handleBanKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      if (vBan.trim() !== '') {
        setKeywordsBan([...keywordsBan, vBan.trim()]);
        setVban('');
        setEntity({ ...entity, urls_banner: [...keywordsBan, vBan.trim()] });
      }
    }
  };
  const handleProfKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      if (vProf.trim() !== '') {
        setKeywordsProf([...keywordsProf, vProf.trim()]);
        setVProf('');
        setEntity({ ...entity, urls_profile: [...keywordsProf, vProf.trim()] });
      }
    }
  };
  const removeKeyword = (index: number) => {
    const newKeywords = [...keywordsBan];
    newKeywords.splice(index, 1);
    setKeywordsBan(newKeywords);
    setEntity({ ...entity, urls_banner: [...newKeywords] });
  };
  const removeKeywordProf = (index: number) => {
    const newKeywords = [...keywordsProf];
    newKeywords.splice(index, 1);
    setKeywordsProf(newKeywords);
    setEntity({ ...entity, urls_profile: [...newKeywords] });
  };
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 bg-zinc-900 p-2 rounded-lg">
      <div className='w-full flex justify-center align-center'>
        <h1 className='text-3xl text-slate-200 block'>Pics</h1>
      </div>

      {keywordsBan &&
        keywordsBan.map((keyword, index) => (
          <RemoveItem
            key={index}
            keyword={keyword}
            index={index}
            onClick={removeKeyword}
          />
        ))}

      <Input
        req
        content={'Banner'}
        value={vBan}
        onChange={handleBan}
        onKeyDown={handleBanKey}
      />
      {keywordsProf &&
        keywordsProf.map((keyword, index) => (
          <RemoveItem
            key={index}
            keyword={keyword}
            index={index}
            onClick={removeKeywordProf}
          />
        ))}
      <Input
        req
        content={'Profile'}
        value={vProf}
        onChange={handleProf}
        onKeyDown={handleProfKey}
      />
    </div>
  );
};

export default InputComponent;
