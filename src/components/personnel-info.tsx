import profilePicture from "@/assets/profile-picture.png";
import Image from "next/image";

export default function PersonnelInfo() {
  return (
    <section className="wrapper profile_section">
      <div id="information">
        <p className="name">
          Hi, my name is <span>Deffaf Abderrahmane.</span>
        </p>
        <h2>I am a Full Stack developer</h2>
        <p>
          Currently, I'm working on{" "}
          <a href="https://www.linkedin.com/company/falcospy/">Falcospy</a> and
          other personnel projects
        </p>
      </div>
      <div className="profile_picture">
        <Image src={profilePicture} alt="profile picture deffaf Abderrahmane" />
      </div>
    </section>
  );
}
