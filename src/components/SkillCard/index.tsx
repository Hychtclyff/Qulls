interface SkillCardProps {
  name: string;
  icon: JSX.Element;
}

const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <div className="p-[2px] mx-1 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-4xl" />
      <div className="p-2  flex  bg-white rounded-4xl   relative group transition duration-200 text-black hover:bg-transparent" >
        <div className="h-3 w-3">{icon}</div>
        <div className="whitespace-nowrap">{name}</div>
      </div>
    </div>
  );
};

export default SkillCard;
