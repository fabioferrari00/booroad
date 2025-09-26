import React from 'react'
import { Link, useParams } from 'react-router-dom';
import travels from '../../data/travels';
import { useState, useEffect } from 'react';

const DetailTravelPage = () => {

  const { id } = useParams();
  const travel = travels[id - 1];
  const [filter, setFilter] = useState("");

  const lowerCase = (str) => str.toLowerCase().trim();

  const filteredArray = travel.travelers.filter((traveler) => {
    const search = lowerCase(filter);
    return (
      lowerCase(`${traveler.name} ${traveler.surname}`).includes(search) ||
      lowerCase(`${traveler.surname} ${traveler.name}`).includes(search)
    );
  });

  // const [travel, setTravel] = useState(travels[id])

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
        </div>
        <div className="col-12">
          <h2 className='text-center'>Partecipanti</h2>
        </div>
        <div className='text-end'>
          <input type="text" name="name" id="name" placeholder='Cerca partecipante...' value={filter} onChange={(e) => {
            setFilter(e.target.value)
          }} />
        </div>
        {filteredArray.map((traveler) => {
          return (
            <>
              <div className="col-12 my-3">
                <div className="accordion" >
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="traveler-card" type="button" data-bs-toggle="collapse" data-bs-target={`#${traveler.id}`} aria-expanded="false" aria-controls="collapseOne">
                        {traveler.name} {traveler.surname}
                      </button>
                    </h2>
                    <div id={traveler.id} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <ul className='list-unstyled'>
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
              </div>
            </>
          )
        })}
      </div>
      <Link className="return-home text-end fs-1" to={`/`}><i className="fa-solid fa-house"></i></Link>
    </div>
  )
}

export default DetailTravelPage
