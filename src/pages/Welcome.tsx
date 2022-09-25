import { DataProps } from '../lib/types';

export const Welcome = ({
  data,
  colorVariant,
}: {
  data: DataProps | undefined;
  colorVariant: any;
}) => {
  if (!data) {
    return null;
  }
  return (
    <div className='h-full w-full lg:w-[60%] xl:w-[70%] px-8 lg:px-[4.5rem] transition-all'>
      <h2 className='text-lightGray text-5xl lg:text-7xl font-extralight tracking-wider'>
        {data && data.title}.
      </h2>
      <div className='flex gap-4 mt-8 lg:mt-16 h-fit'>
        <div
          className={`hidden lg:block h-auto w-4 bg-gradient-to-b from-[${colorVariant.first}] to-[${colorVariant.second}] rounded-lg`}></div>
        <div className='flex flex-col gap-4 text-lightGray'>
          {data &&
            data.description.map((item) => {
              return <p key={item.children[0]._key}>{item.children[0].text}</p>;
            })}
        </div>
      </div>
    </div>
  );
};
