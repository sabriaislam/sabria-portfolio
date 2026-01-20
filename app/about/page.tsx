import Image from "next/image";


export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="surface bg-white/80 p-10 shadow-[0_20px_60px_rgba(17,17,24,0.08)]">
        <div className="space-y-4">
          <h1 className="display text-4xl md:text-5xl font-semibold">
            Hello!   
          </h1>
          <p className="text-[1.0rem] leading-[1.2] font-light text-[#4b5163]">
          <span>she/they</span>
            <Image
              src="/location.svg"
              alt=""
              width={16}
              height={16}
              className="mx-2 inline-block align-text-bottom"
              aria-hidden="true"
            />
            <span>NYC</span> 
          </p>
          <p className="text-[1.05rem] leading-[1.2] text-[#4b5163]">
            I&apos;m Sabria, an interdisciplinary designer pursuing an accelerated BS/MS at NYU,
            with a BS in Integrated Design and Media and an MS in Emerging Technologies. 
            In short, I am interested in digital design and its ability to influence how we learn,
            interact, and build the future. <br></br><br></br>
            My passions are guided by curiosity and creativity—traits that emerged early in my life,
            something my mother likes reminds everyone at every Bengali <i>daawat</i> by mentioning that 
            I used to chew on crayons while drawing.<br></br><br></br>
            As I grew up, my curiosity led me across multiple design disciplines. 
            I began as a visual designer working on brand design, posters, zines, and merchandise, 
            and later expanded into storytelling through photo and video editing, 3D modeling, and motion capture. 
            <br></br><br></br>
            Building websites introduced me to UX design, where I developed a focus on accessibility. 
            I&apos;ve worked with HeartShare and ADAPT, day habilitation centers for people with disabilities, 
            to design projects that support and give back to my NYC community. Currently, 
            I am a researcher at NYU&apos;s Elevate Lab within the Education Communication and Technology (ECT) program, 
            where I apply my interdisciplinary skill set to create and edit educational content, design resource websites, 
            conduct and analyze interviews, and contribute to learning science research papers.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
        <div className="card space-y-4 p-6">
          <h2 className="display text-2xl">My design values</h2>
          <p className="text-sm text-[#4b5163]">
            Learning should feel inclusive, brave, and imaginative. I prioritize
            feedback loops with educators, rapid prototyping with students, and
            designs that celebrate different ways of understanding.
          </p>
        </div>
        <div className="card space-y-4 p-6">
          <h3 className="display text-2xl">Currently inspired by</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="placeholder h-24" />
            <div className="placeholder h-24" />
            <div className="placeholder h-24" />
          </div>
        </div>
      </section>
    </div>
  );
}
