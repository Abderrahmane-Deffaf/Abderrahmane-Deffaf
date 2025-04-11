import Work from "./features/work/work";
import Studies from "./features/studies/studies";
import Technical from "./features/technical/technical";
import SideNav from "./features/side-nav/side-nav";
import ProfilePicture from "./features/profile-picture/profile-picture";
import IntroInfos from "./features/intro-infos/intro-infos";

export default function AboutScreen() {
  return (
    <section>
      <div className=" wrapper py-16 relative lg:flex lg:items-start lg:gap-16 space-y-8">
        <SideNav />
        <ProfilePicture />
        <div className=" flex flex-col gap-8 lg:gap-16">
          <IntroInfos />
          <Work />
          <Studies />
          <Technical />
        </div>
      </div>
    </section>
  );
}
