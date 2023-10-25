import './Footer.scss'

type FooterProps = {
  likesCount: number;
  setLikesCount: (value: number) => void;
};

function Footer({ likesCount, setLikesCount }: FooterProps) {
  
  return (
    <footer className="footer">
      <button type="button" onClick={()=> setLikesCount(likesCount + 1)} className="footer__button">
        like : <strong>{likesCount}</strong> 
      </button>
    </footer>
  );
}

export default Footer;
