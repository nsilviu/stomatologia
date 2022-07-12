import TeamMember from "./TeamMember";
import { TeamList } from "./TeamList";

const TeamHero = (option) => {
  return (
    <div className="m-4 flex flex-shrink-0 flex-row flex-nowrap overflow-hidden bg-red-100">
      {TeamList.map((option) => (
        <TeamMember
          title={option.title}
          key={option.id}
          description={option.text}
          photo={option.photo}
        />
      ))}
    </div>
  );
};

export default TeamHero;
