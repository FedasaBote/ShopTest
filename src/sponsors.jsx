import "./sponsors.css";

const paths = [
  {
    path: "/images/frist.jpg",
    text: "갤럭시 할인",
  },
  {
    path: "/images/second.jpg",
    text: "최상급 중고",
  },
  {
    path: "/images/third.jpg",
    text: "중고폰 특가",
  },
  {
    path: "/images/fourth.jpg",
    text: "판매하기",
  },
  {
    path: "/images/fifth.jpg",
    text: "서비스 소개",
  },
  {
    path: "/images/sixth.jpg",
    text: "게임기기",
  },
  {
    path: "/images/seventh.jpg",
    text: "애플",
  },
  {
    path: "/images/eigth.jpg",
    text: "겨울SALE",
  },
  {
    path: "/images/ninth.jpg",
    text: "스마트폰",
  },
  {
    path: "/images/tenth.jpg",
    text: "전체 보기",
  },
];

function Sponsors() {
  return (
    <div className="sponsors">
      {paths.map((path, index) => (
        <div className="sponsors__container" key={path.text}>
          <img
            key={index}
            className="sponsors__image"
            src={path.path}
            alt={`sponsor-${index}`}
          />
          <p className="sponsors__text">{path.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Sponsors;
