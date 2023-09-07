import ExtensionCard from "../components/ExtensionCard";
import { extensions } from '../data/extensions.json'

function Extensions() {
  return (
    <div className="flex flex-col items-center justify-center mt-[6.875rem] px-[1.25rem] gap-[2.875rem] md:px-8">

      <ContainerText />

      <div className="flex flex-col justify-center w-full lg:items-start md:flex-row md:justify-center gap-[2.0625rem]">

        {extensions.map((extension, i) => (
          <ExtensionCard key={i} {...extension} index={i}/>
        ))}

      </div>
    </div>
  );
}

function ContainerText() {
  return (
    <div className="flex flex-col gap-[1.25rem] items-center max-w-[33.575rem]">
      <h2 className="text-[1.5rem] md:text-[2rem] font-medium">
        Download the extension
      </h2>
      <p className="text-center md:text-[1.125rem] text-grayish-blue">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
    </div>
  );
}

export default Extensions;
