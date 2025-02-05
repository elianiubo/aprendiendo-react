import { useState } from "react"

// eslint-disable-next-line react/prop-types
export function TwitterFollowCard({children, userName, initialIsFollowing}){
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Siguendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following': 'tw-followCard-button'
  const handleClick = () =>{
    setIsFollowing(!isFollowing)
  }
    return(
      <article className='tw-followCard'>
        <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="Avatar de midudev" />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className=' tw-followCard-infoUserName'>@{userName}</span>
        </div>
        </header>
        <aside className='tw-followCard-aside'>
          <button className={buttonClassName} onClick={handleClick}>
            <span className="tw-followCard-text" >{text}</span>
            <span className="tw-followCard-stopFollowing">Dejar de seguir</span>
          </button>
        </aside>
      </article>
    )
  }
   
  
  