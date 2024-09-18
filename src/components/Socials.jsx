
const socialLinksData = [
  { src: "/assets/github.svg", href: "https://github.com/gmpaliwal07" },
  { src: "/assets/linkedIn.svg", href: "https://www.linkedin.com/in/gaurav-paliwal-a7576124a/" },
  { src: "/assets/twitter.svg", href: "https://twitter.com/gmpaliwal21" },
  { src: "/assets/gmail.svg", href: "mailto:gmpaliwal21@gmail.com" },
];

function SocialLinks() {
  return (
    <div className="p-9 select-none md:fixed md:top-1/3 z-11 md:z-11">
      <div className="flex h-full w-18 border-2 border-gray-700 bg-transparent rounded-full backdrop-blur-sm flex-row justify-between md:justify-center md:flex-col ">
        {socialLinksData.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="m-2 transition duration-300 ease-in-out transform hover:border-gray-200 hover:bg-gray-800 hover:shadow-lg rounded-full p-3"
          >
            <img
              className="h-8 w-8"
              src={link.src}
              alt={`Social Link ${index + 1}`}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialLinks;
