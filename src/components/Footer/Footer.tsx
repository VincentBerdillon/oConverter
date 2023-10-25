type FooterProps = {
  likesCount: number;
  setLikesCount: (value: number) => void;
};

function Footer({ likesCount, setLikesCount }: FooterProps) {
  const handleClickLikeBtn = () => {
    setLikesCount(likesCount + 1);
  };

  return (
    <footer>
      <button type="button" onClick={handleClickLikeBtn}>
        like : {likesCount}
      </button>
    </footer>
  );
}

export default Footer;
