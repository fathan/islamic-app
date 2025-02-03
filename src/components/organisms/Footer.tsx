const Footer: React.FC = () => {
  const activeYear = (): number | null => {
    let result = null;
    result = new Date().getFullYear();

    return result;
  };

  return (
    <div className="text-center text-sm my-6">
      <p>
        &copy; Copyright { activeYear() } - Created By &nbsp;
        <a
          href="https:github.com/fathan"
          className="text-[#1b76ff]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fathan Rohman
        </a>
      </p>
    </div>
  )
};

export default Footer;
