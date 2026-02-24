export default function SiteFooter() {
  return (
    <footer className="surface mt-12 bg-white/80 p-8 shadow-[0_20px_60px_rgba(17,17,24,0.08)]">
      <div className="grid gap-x-8 gap-y-2 text-[1.05rem] text-[#4b5163] md:grid-cols-2 md:items-start">
        <p className="display text-2xl font-semibold text-[#111118]">
          Thanks for visiting!
        </p>
        <a
          href="mailto:sabria.islam@gmail.com"
          className="w-fit justify-self-start underline-offset-4 hover:underline md:justify-self-start"
        >
          Email ↗
        </a>
        <p>Hope to see you again</p>
        <a
          href="https://www.linkedin.com/in/sabria-islam-94033924b/"
          target="_blank"
          rel="noreferrer"
          className="w-fit justify-self-start underline-offset-4 hover:underline md:justify-self-start"
        >
          LinkedIn ↗
        </a>
      </div>
    </footer>
  );
}
