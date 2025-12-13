import PrevBtn from "./prev-btn";

type HeaderProps = {
  icon: React.ReactNode;
  text: string;
  prevBtn?: boolean;
};

export default function Header({ icon, text, prevBtn }: HeaderProps) {
  return (
    <div className="header flex gap-2.5">
      {/* Previous Button */}
      {prevBtn && <PrevBtn />}

      {/* Header Content */}
      <div className="header-content bg-main text-white font-semibold flex items-center gap-4 p-3 md:p-4 w-full">

        {/* Icon */}
        <div className="icon">{icon}</div>

        {/* Text */}
        <h3 className="text-xl md:text-2xl lg:text-3xl font-inter">{text}</h3>
      </div>
    </div>
  );
}
