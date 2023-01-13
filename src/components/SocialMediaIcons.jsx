const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/sreehari-venkataraman-54ab911a2/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="LinkedIn-Link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/vsreehari1"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="Twitter-Link" src="../assets/twitter.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/vr-sreehari"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="GitHub-Link" src="../assets/github.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
