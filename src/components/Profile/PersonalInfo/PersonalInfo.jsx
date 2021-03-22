import personalInfo from './PersonalInfo.module.css';

const PersonalInfo = () => {
  return (
    <div className={personalInfo.info}>
      <div>
        <img
          src="https://static.brusselsairlines.com/_img/destinationPage2/Italy/Venice/Venice-canal-grande.png"
          alt="venice"
          className={personalInfo.content__img}
        />
        </div>
        <img
          src="https://i.pinimg.com/originals/2b/09/51/2b0951e345a74f441e12a70f8f92227f.jpg"
          alt="BELKA"
          className={personalInfo.avatar}
        />
      <h2>Tony Stark</h2>
      <span>Date of Birth: May 3</span>
      <span>City: Dalaran</span>
      <span>Education: MSU '21</span>
      <span>Web-site: http://localhost:3000/</span>
    </div>
  );
};

export default PersonalInfo;