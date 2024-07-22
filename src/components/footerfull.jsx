import {
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import FooterLogo from "../assets/FooterLogo.png";
import CompanyLogo from "../assets/Company-Logo.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Component() {
  return (
    <div className="bg-[#4F2B6B] text-white mt-36 w-full flex flex-col pb-8 px-0">
      <div className="flex flex-row gap-8 items-end -mt-36 w-full overflow-hidden">
        <div className="bg-[#D9539C] -ml-44 rounded-xl w-72 h-64 shrink-0"></div>
        <div className="bg-[#D9539C] rounded-xl w-72 h-48 shrink-0"></div>
        <div className="bg-[#D9539C] rounded-xl w-72 h-64 shrink-0"></div>
        <div className="bg-[#D9539C] rounded-xl w-72 h-44 shrink-0"></div>
        <div className="bg-[#D9539C] rounded-xl w-72 h-52 shrink-0"></div>
        <div className="bg-[#D9539C] rounded-xl w-72 h-64 shrink-0"></div>
      </div>
      <div className="container mx-auto flex items-center mt-16 gap-20 md:flex-row md:justify-between">
        <div className="flex items-center">
          <img src={FooterLogo} alt="Logo" className="-ml-10 mr-4 h-44 w-64" />
          <p className="max-w-sm text-sm leading-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore.
          </p>
        </div>
        <div className="flex flex-col items-end mt-28 ml-8">
          <div className="flex items-center mb-4">
            <p className="mb-0 mr-4">A Brand Of</p>
            <img src={CompanyLogo} alt="Digital Ipsum" className="h-20" />
          </div>
          <div className="flex space-x-4">
            <FaFacebookF className="w-6  bg-[#FFFFFF] text-[#4F2B6B] rounded-2xl h-6 p-1" />
            <FaTwitter className="w-6  bg-[#FFFFFF] text-[#4F2B6B] rounded-2xl h-6 p-1" />
            <FaInstagram className="w-6  bg-[#FFFFFF] text-[#4F2B6B] rounded-2xl h-6 p-1" />
            <FaYoutube className="w-6  bg-[#FFFFFF] text-[#4F2B6B] rounded-2xl h-6 p-1" />
            <FaLinkedinIn className="w-6  bg-[#FFFFFF] text-[#4F2B6B] rounded-2xl h-6 p-1" />
            <FaPinterestP className="w-6  bg-[#FFFFFF] text-[#4F2B6B] rounded-2xl h-6 p-1" />
          </div>
        </div>
      </div>
      <div>
        <div className="container   flex gap-24 mx-auto">
          <ul className="space-y-2 flex flex-col gap-2">
            <li>
              <a href="#" className="text-sm hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-300">
                Page
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-300">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-300">
                Career
              </a>
            </li>
          </ul>
          <div className="flex flex-col">
            <div className="flex mb-2">
              <FaGlobe className="mr-2 mt-1" />
              <div className="flex flex-col">
                <div>Website</div>
                <div className=" mb-2">www.psychobece.xyz</div>
              </div>
            </div>

            <div className="flex mb-2">
              <FaPhoneAlt className="mr-2 mt-1" />
              <div className="flex flex-col">
                <div>Phone</div>
                <div className=" mb-2">+012 2398 27398</div>
              </div>
            </div>

            <div className="flex mb-2">
              <FaEnvelope className="mr-2 mt-1" />
              <div className="flex flex-col">
                <div>Email</div>
                <div className=" mb-2">mail@psycho.bece</div>
              </div>
            </div>

            <div className="flex space-x-4 mt-1">
              <FaFacebookF className="w-6 bg-[#E0C23D] text-[#4F2B6B] rounded-2xl h-6 p-1" />
              <FaInstagram className="w-6 bg-[#E0C23D] text-[#4F2B6B] rounded-2xl h-6 p-1" />
              <FaTwitter className="w-6 bg-[#E0C23D] text-[#4F2B6B] rounded-2xl h-6 p-1" />
              <WhatsAppIcon className="w-6 bg-[#E0C23D] text-[#4F2B6B] rounded-2xl h-6 p-1" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-left mt-20 ">
        <p>
          © 2023 All rights Reserved. Design & Developed With love by Digital
          Ipsum
        </p>
      </div>
    </div>
  );
}
