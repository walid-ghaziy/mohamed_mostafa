
import './pages.css'
import { Link } from 'react-router-dom';
import{FaCheck}from "react-icons/fa"
import {ph} from "./data/Pharmacy"
function Pharmacy() {
 return (
    <div className="cards-container">
{ph.map((e)=>{
return(<>
 <div className="card">
        <img
          src={e.image}
        />
            <div className="founderAchievementRow">
        <div className="achievementCard">
          <span className="achievementIcon">👤</span>
          <span className="achievementText">120 Learners</span>
        </div>

        <div className="achievementCard">
          <span className="achievementIcon">🎓</span>
          <span className="achievementText">24+ Lectures</span>
        </div>

        <div className="achievementCard">
          <span className="achievementIcon">▶</span>
          <span className="achievementText">Free</span>
        </div>
      </div>
        <div className="card-content">
          <span className="badge">{e.isfree}</span>

          <h2>{e.Title}</h2>
          <p>
            {e.discrption}
          </p>

          
          <ul>
            {e.option.map((e2)=>{
                return(<>
                <li>< FaCheck/> {e2}</li>
                </>)
            })}
          </ul>
          <Link to={`/cours/${e.cod}`}>
          <button >View More</button>
          </Link>
        </div>
        
      </div>
</>)
})}

    </div>
  );
}

export default Pharmacy;