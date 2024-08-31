import { useState, useEffect } from "react";
import classes from "./Trips.module.scss";
import { useTrips, Trip } from "../../hooks/useTrips";
import { useTripDetails } from "../../hooks/useTripDetails";
import { formatTripDates } from "../../utils/formatTripDates";
import { useUpdateMainInfo } from "../../hooks/useUpdateMainInfo";

export default function Trips() {
  const { data: backendData } = useTrips();
  const [expandedTrip, setExpandedTrip] = useState(false);
  const [expandedTripEdit, setExpandedTripEdit] = useState(false);
  const sortedTrips = backendData
    ? [...backendData].sort((a, b) => a.priority - b.priority)
    : [];
  const [activeTrip, setActiveTrip] = useState<Trip | null>(null);
  const { data: tripDetails } = useTripDetails(activeTrip?.trip_id || 0);

  useEffect(() => {
    if (!activeTrip && sortedTrips.length > 0) {
      setActiveTrip(sortedTrips[0]);
    }
  }, [activeTrip, sortedTrips]);

  const handleExpandTrip = () => {
    setExpandedTrip(!expandedTrip);
  };

  const handleExpandTripEdit = () => {
    setExpandedTripEdit(!expandedTripEdit);
  };

  const handleEditTrip = (trip: Trip) => {
    setActiveTrip(trip);
  };

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    trip_id: activeTrip?.trip_id || 0,
    start_date: activeTrip?.start_date || "",
    end_date: activeTrip?.end_date || "",
    additional_costs: tripDetails?.additional_costs || 0,
    description: tripDetails?.description || "",
    priority: activeTrip?.priority || 0,
    title: activeTrip?.title || "",
  });

  const updateMainInfoMutation = useUpdateMainInfo();

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setFormData({
        trip_id: activeTrip?.trip_id || 0,
        start_date: activeTrip?.start_date || "",
        end_date: activeTrip?.end_date || "",
        additional_costs: tripDetails?.additional_costs || 0,
        description: tripDetails?.description || "",
        priority: activeTrip?.priority || 0,
        title: activeTrip?.title || "",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateMainInfoMutation.mutate(formData, {
      onSuccess: (updatedFields) => {
        setIsEditing(false);
        setActiveTrip((prevTrip) => {
          if (!prevTrip) return null;

          const updatedTrip = { ...prevTrip, ...updatedFields };

          return updatedTrip;
        });
      },
    });
  };

  return (
    <div className={classes.trips}>
      <div
        className={`${classes.trip} ${expandedTrip ? classes.expanded : ""}`}
      >
        <button className={classes["expand-button"]} onClick={handleExpandTrip}>
          {expandedTrip ? "Zwiń" : "Rozwiń"}
        </button>
        {activeTrip && (
          <>
            <div className={classes.image}>
              <img
                src={activeTrip.image.image_url}
                alt={activeTrip.image.description}
              />
              <div className={classes["actions"]}>
                <button>Zmień zdjęcie</button>
              </div>
            </div>
            <div className={classes["main-info"]}>
              {!isEditing ? (
                <>
                  <div className={classes["title-info"]}>
                    {activeTrip.title}
                  </div>
                  <div className={classes["date-range"]}>
                    <div className={classes["date-label"]}>Data:</div>
                    <div className={classes["date-values"]}>
                      <span>{activeTrip.start_date}</span>
                      <span>-</span>
                      <span>{activeTrip.end_date}</span>
                    </div>
                  </div>
                  <div className={classes["price-info"]}>
                    <div className={classes["price-label"]}>
                      Cena podstawowa:
                    </div>
                    <div className={classes.price}>
                      {tripDetails?.price_per_person}
                    </div>
                  </div>
                  <div className={classes["additional-costs-info"]}>
                    <div className={classes["additional-costs-label"]}>
                      Cena dodatkowa:
                    </div>
                    <div className={classes["additional-costs"]}>
                      {tripDetails?.additional_costs}
                    </div>
                  </div>
                  <div className={classes["description-info"]}>
                    <div className={classes["description-label"]}>
                      Dodatkowy opis:
                    </div>
                    <div className={classes["description"]}>
                      {tripDetails?.description}
                    </div>
                  </div>
                  <div className={classes["priority-info"]}>
                    <div className={classes["priority-label"]}>
                      Priorytet wyświetlania:
                    </div>
                    <div className={classes["priority"]}>
                      {activeTrip.priority}
                    </div>
                  </div>
                </>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className={classes["title-info"]}>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                    />
                  </div>
                  <div className={classes["date-range"]}>
                    <div className={classes["date-label"]}>Data:</div>
                    <div className={classes["date-values"]}>
                      <input
                        type="date"
                        value={formData.start_date}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            start_date: e.target.value,
                          })
                        }
                      />
                      <span>-</span>
                      <input
                        type="date"
                        value={formData.end_date}
                        onChange={(e) =>
                          setFormData({ ...formData, end_date: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className={classes["price-info"]}>
                    <div className={classes["price-label"]}>
                      Cena podstawowa:
                    </div>
                    <div className={classes.price}>
                      <input
                        type="number"
                        value={formData.additional_costs}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            additional_costs: Number(e.target.value),
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className={classes["additional-costs-info"]}>
                    <div className={classes["additional-costs-label"]}>
                      Cena dodatkowa:
                    </div>
                    <div className={classes["additional-costs"]}>
                      <input
                        type="number"
                        value={formData.additional_costs}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            additional_costs: Number(e.target.value),
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className={classes["description-info"]}>
                    <div className={classes["description-label"]}>
                      Dodatkowy opis:
                    </div>
                    <div className={classes["description"]}>
                      <textarea
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            description: e.target.value,
                          })
                        }
                      ></textarea>
                    </div>
                  </div>
                  <div className={classes["priority-info"]}>
                    <div className={classes["priority-label"]}>
                      Priorytet wyświetlania:
                    </div>
                    <div className={classes["priority"]}>
                      <input
                        type="number"
                        value={formData.priority}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            priority: Number(e.target.value),
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className={classes["actions"]}>
                    <button type="submit">Zapisz</button>
                    <button type="button" onClick={toggleEdit}>
                      Anuluj
                    </button>
                  </div>
                </form>
              )}
              {!isEditing && (
                <div className={classes["actions"]}>
                  <button onClick={toggleEdit}>Edytuj</button>
                </div>
              )}
            </div>
            {tripDetails && (
              <>
                <div className={classes["days"]}>
                  {tripDetails.tripDays.map((day, index) => (
                    <div key={index} className={classes["day"]}>
                      <div className={classes["day-number"]}>
                        Dzień: {day.day_number}
                      </div>
                      <div className={classes["day-description"]}>
                        {day.description}
                      </div>
                      <div className={classes["actions"]}>
                        <button>Edytuj</button>
                      </div>
                    </div>
                  ))}
                  <div className={classes["add-day"]}>Dodaj dzień</div>
                </div>
                <div className={classes["included-excursions"]}>
                  <div className={classes["name-of-excursion"]}>
                    Wycieczki wliczone:
                  </div>
                  <ul>
                    {tripDetails.includedExcursions.map((excursion, index) => (
                      <li key={index}>{excursion.description}</li>
                    ))}
                  </ul>
                  <div className={classes["actions"]}>
                    <button>Edytuj</button>
                  </div>
                </div>
                <div className={classes["optional-excursions"]}>
                  <div className={classes["name-of-excursion"]}>
                    Wycieczki fakultatywne:
                  </div>
                  <ul>
                    {tripDetails.optionalExcursions.map((excursion, index) => (
                      <li key={index}>{excursion.description}</li>
                    ))}
                  </ul>
                  <div className={classes["actions"]}>
                    <button>Edytuj</button>
                  </div>
                </div>
                <div className={classes["services"]}>
                  <div className={classes["name-of-service"]}>Świadczenia:</div>
                  <ul>
                    {tripDetails.services.map((service, index) => (
                      <li key={index}>{service.description}</li>
                    ))}
                  </ul>
                  <div className={classes["actions"]}>
                    <button>Edytuj</button>
                  </div>
                </div>
                <div className={classes["trip-contact"]}>
                  <div className={classes["contact-info"]}>
                    Dane kontaktowe:
                  </div>
                  <div className={classes["contact-details"]}>
                    {tripDetails.tripContacts.map((contact, index) => (
                      <div key={index}>
                        {contact.phone1 && (
                          <div
                            className={classes.phone}
                          >{`Telefon: ${contact.phone1}`}</div>
                        )}
                        {contact.phone2 && (
                          <div
                            className={classes.phone}
                          >{`Telefon: ${contact.phone2}`}</div>
                        )}
                        {contact.phone3 && (
                          <div
                            className={classes.phone}
                          >{`Telefon: ${contact.phone3}`}</div>
                        )}
                        {contact.email1 && (
                          <div
                            className={classes.email}
                          >{`Email: ${contact.email1}`}</div>
                        )}
                        {contact.email2 && (
                          <div
                            className={classes.email}
                          >{`Email: ${contact.email2}`}</div>
                        )}
                        {contact.payment_instructions && (
                          <div className={classes["payment-instructions"]}>
                            {`Instrukcje płatności: ${contact.payment_instructions}`}
                          </div>
                        )}
                        {contact.additional_description && (
                          <div className={classes["additional_description"]}>
                            {`Dodatkowe informacje: ${contact.additional_description}`}
                          </div>
                        )}
                        {contact.payment_reference && (
                          <div className={classes["payment_reference"]}>
                            {`Referencje płatności: ${contact.payment_reference}`}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className={classes["actions"]}>
                    <button>Edytuj</button>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
      <div
        className={`${classes["trip-edit"]} ${
          expandedTripEdit ? classes.expanded : ""
        }`}
      >
        <button
          className={classes["expand-button"]}
          onClick={handleExpandTripEdit}
        >
          {expandedTripEdit ? "Zwiń" : "Rozwiń"}
        </button>
        {sortedTrips?.map((trip) => (
          <div
            key={trip.trip_id}
            className={`${classes["trip-detail-edit"]} ${
              activeTrip === trip ? classes.active : ""
            }`}
          >
            <div className={classes["trip-name-edit"]}>{trip.title}</div>
            <div className={classes["trip-date-edit"]}>
              {formatTripDates(trip.start_date, trip.end_date)}
            </div>
            <div className={classes["edit-buttons"]}>
              <button
                className={classes["edit-button"]}
                onClick={() => handleEditTrip(trip)}
              >
                Edytuj
              </button>
              <button className={classes["delete-button"]}>Usuń</button>
            </div>
          </div>
        ))}
        <div className={classes["add-trip"]}>
          <button>Dodaj wyjazd</button>
        </div>
      </div>
    </div>
  );
}
