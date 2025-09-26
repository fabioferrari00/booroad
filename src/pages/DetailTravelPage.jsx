import React from 'react'
import { Link, useParams } from 'react-router-dom';
import travels from '../../data/travels';

const DetailTravelPage = () => {

  const { id } = useParams();
  const travel = travels[id - 1];

  // const [travel, setTravel] = useState(travels[id])

  console.log(travel)

  return (
    <div className='container'>
      <div className="row">
        <div className="col-12">
          <h1 className='my-3 text-center'>Viaggio a:</h1>
        </div>
        <div className="col-12">
          <div className="card my-3" key={travel.id}>
            <div className="p-2 fs-4 header-card bg-marco">
              {travel.city}
            </div>
            <div className="card-body">
              <figure>
                <blockquote className="blockquote">
                  <p>{travel.name}</p>
                </blockquote>
              </figure>
              <figcaption className="blockquote-footer"><cite title="Source Title">{travel.startDate} - {travel.endDate}</cite>
              </figcaption>
            </div>
          </div>
          <Link className="btn btn-primary" to={`/`}>Torna alla lista dei viaggi</Link>
        </div>
        <div className="col-12">
          <h2 className='text-center'>Partecipanti</h2>
        </div>
        <div className="col-12 my-3">
          {travel.travelers.map((traveler) => {
            return (
              <>
                <div className="accordion" >
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="patatino" type="button" data-bs-toggle="collapse" data-bs-target={`#${traveler.id}`} aria-expanded="false" aria-controls="collapseOne">
                        {traveler.name} {traveler.surname}
                      </button>
                    </h2>
                    <div id={traveler.id} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <ul>
                          <li>
                            <p>
                              <strong>Email:</strong> {traveler.email}
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>Telefono:</strong> {traveler.phone}
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>Codice fiscale:</strong> {traveler.fiscalCode}
                            </p>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default DetailTravelPage
