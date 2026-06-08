import TitleInfo from "../title-info";
import BreakingNews from "../breaking-news";
import Bridegroom from "../bride-groom";
import LoveStory from "../love-story";
import OurGallery from "../our-gallery";
import WishSection from "../wish";
import Footer from "../footer";
import WeddingGiftSection from "../wedding-gift";
import Header from "../header";
import OurDate from "../our-date/our-date";
import { useConfig } from "../../../context/ConfigContext";

export default function DetailInfo() {
  const { isInvitationMode } = useConfig();

  return (
    <div className="space-y-5 pb-10">
      <Header />
      <TitleInfo />
      <BreakingNews />
      <Bridegroom />
      <LoveStory />
      {isInvitationMode && <OurDate />}
      <OurGallery />
      <WeddingGiftSection />
      <WishSection />
      <Footer />
    </div>
  );
}
