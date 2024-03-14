import { ICast } from '../../interfaces/interfaces'

import "./PeopleCard.css"

interface IProps {
  person: ICast
}

export default function PeopleCard({ person }: IProps) {
  return (
    <div className='cast-item'>
      <div className='img-box'>
        <img
          src={
            person.profile_path
              ? `https://image.tmdb.org/t/p/original/${person.profile_path}`
              : person.gender === 2 || person.gender === 0
                ? "/images/profile_default_male.jpg"
                : "/images/profile_default_female.jpg"}
          alt="" />
      </div>
      <h2>{person.name}</h2>
      <h3>{person.character}</h3>
    </div>
  )
}
