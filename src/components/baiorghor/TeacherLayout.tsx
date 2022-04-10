const TeacherLayout: React.FC = ({ children }) => {
  return (
    <div className="flex justify-center bg-background-100 min-h-screen w-full">
      <div className="flex flex-grow justify-between max-w-screen-xl pt-24 pb-10 xl:space-x-12 space-x-6 px-10 ml-32 2xl:ml-0 2xl:px-0">
        {children}
      </div>
    </div>
  );
};

export default TeacherLayout;
