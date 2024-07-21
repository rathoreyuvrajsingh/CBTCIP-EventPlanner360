import GitHub_Icon from '@/assets/svg/github.svg';
import Discord_Icon from '@/assets/svg/discor.svg';
function footer() {
  const newDate = new Date();
  const year = newDate.getFullYear();

  return (
    <footer className="flex min-h-[6vh] flex-col items-center bg-zinc-900 py-3 pt-10 text-center text-white sm:flex-row sm:justify-center sm:py-3">
      <div className="mb-8 mt-8">
        <section className="flex items-center text-xs sm:text-sm">
          EventPlanner360
          <span className="pl-1 text-blue-500">
            <a href="#">Connect with Us</a>
          </span>
          <span>
            <a href="https://github.com/krishnaacharyaa/wanderlust">
              <img src={GitHub_Icon} className="h-7 w-10" />
            </a>
          </span>
        </section>

        <section className="flex items-center pl-8 text-xs sm:text-sm">
          Need help? Feel Free to contact
          <span>
            
          </span>
        </section>

        <section className="mt-4 flex items-center pl-16 text-xs">
          <span className="mr-2">&copy;</span>
          {year} All Rights Reserved
        </section>
      </div>
    </footer>
  );
}

export default footer;
