import profilepic from './assets/profile-pic2.png'

function Card(){
    return (
        <div className="card">
            <img className="card-image" src={profilepic} alt="profilee picture" />
            <h2 className="card-title">Mungai Mwangi</h2>
            <div className='card_text'>
            <p >I am  a Fullstack Enginner. </p>
            <p>  I am currently working with the following technologies : 
                <ul>
                    <li> <a href="#">MongoDB</a></li>
                    <li><a href="#">Express Js</a></li>
                    <li><a href="#">React</a></li>
                    <li><a href="#">Node.Js</a></li>
                </ul>
            </p>

            </div>
            
        </div>

    )
}

export default Card