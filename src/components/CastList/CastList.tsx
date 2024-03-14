import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router"
import { fetchData } from "../../functions";
import PeopleCard from "../PeopleCard/PeopleCard";
import { ICast } from "../../interfaces/interfaces";
import "./CastList.css"

export default function CastList() {
  const { movieId } = useParams();
  const [people, setPeople] = useState<ICast[] | null>(null);

  useEffect(() => {
    fetchData(`movie/${movieId}/credits`)
      .then((data) => {
        setPeople(data.cast)
      })
      .catch(console.log)
  }, [movieId])

  console.log(people);


  return people ? (
    <div className="cast-list" style={{ width: `${people.length * 138 + (people.length - 1) * 8}px` }}>
      {
        people.map((person) => (
          <Fragment key={person.id}>
            <PeopleCard person={person} />
          </Fragment>
        ))
      }
    </div>
  ) : null
}
