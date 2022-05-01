import Link from "next/link";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { TextWithImageOne } from "../../components/TextWithImage";
import { TeamMemberOne } from "../../components/TeamMember";
import { TestimonialOne } from "../../components/Testimonial";
import { IconBoxOne, IconBoxTwo } from "../../components/IconBox";

import teamMemberOneData from "../../data/team-member/team-member-one.json";
import testimonialOneData from "../../data/testimonials/testimonial-one.json";

const AboutUs = () => {
  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="About Us">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">About Us</li>
        </ol>
      </BreadcrumbOne>
      {/* text with image */}
      <TextWithImageOne />
      {/* icon box */}
      <IconBoxTwo />
      {/* team member*/}
      <TeamMemberOne teamMemberData={teamMemberOneData} />
      {/* testimonial */}
      <TestimonialOne testimonialData={testimonialOneData} />
      {/* icon box */}
      <IconBoxOne />
    </LayoutOne>
  );
};

export default AboutUs;
