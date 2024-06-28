import './App.css';

export const techSkills = [
  'HTML', 'TailwindCSS', 'CSS', 'Automação', 'JavaScript', 'Python', 'Git', 'Bootstrap', 'React', 'Linux', 'Figma', 'MySQL', 'Excel', 'PowerBi', 'VBA'
];

function Techskill() {
  return (
    <div className="w-full flex relative justify-around items-center my-12 px-10 max-[500px]:px-5">
      <div className='w-full max-w-screen-sm flex flex-col'>
        <div className="w-full flex gap-2 justify-between items-center">
          <div className="Profile flex flex-col gap-2">
            <h2 className='font-semibold text-md text-black-200'>Tech skills</h2>
            <div className='overflow-hidden'>
              <ul className='flex font-medium cursor-pointer flex-wrap justify-start gap-1 text-sm max-[500px]:justify-center'>
                {techSkills.map((techSkill, index) => (
                  <li key={index} className='py-2 px-4 rounded bg-black-50 hover:bg-black-100 text-sm text-gray-50 transition-all'>{techSkill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Techskill;
