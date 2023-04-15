import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import VanillaTilt from 'vanilla-tilt';
import '../css/MemberCard.css';
import Logo from '../images/LogoBack.jpeg';

function MemberCard({ infor }) {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.card'), {
      glare: true,
      reverse: true,
      'max-glare': 0.15,
    });
  }, []);

  return (
    <div>
      <Helmet>
        <script src="vanilla-tilt.min.js" type="text/javascript" />
        <script type="text/javascript">
          {`
            VanillaTilt.init(document.querySelectorAll('.card'), {
              glare: true,
              reverse: true,
              'max-glare': 0.15,
            });
          `}
        </script>
      </Helmet>
      <div class="card rgb">
        <div class="card-image" style={{ backgroundSize:"cover", background: ` linear-gradient(#fff0 0%, #fff0 70%, #1d1d1d 100%),url("${infor.photo} ") ` }} ></div>
        <div class="card-text">
          <span class="date"> {infor.about} </span>
          <h2 id="card-title">{infor.name}</h2>
          <p>
            <a href={`https://www.instagram.com/${infor.INSTAGRAM}`} target="_blank"><i class="fab fa-instagram"></i></a><br></br>

            <a href={`${infor.LINKEDIN}`} target="_blank"><i class="fab fa-linkedin-in"></i></a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
