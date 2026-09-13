import TodoInput from "./TodoInput";

interface HeaderProps{
    title: string;
    subtitle: string;
}


const Header = ({title, subtitle}:HeaderProps) => {
  return (
    <div className="absolute inset-0 m-auto h-[700px] w-[500px] rounded-2xl border bg-green-100 text-center">
      <h1 className="text-red-600 font-bold text-2xl">{title}</h1>
      <h2 className="text-green-700 text-lg">{subtitle}</h2>
      <hr className="" />

      <TodoInput/>
    </div>
    
  );
};

export default Header;
