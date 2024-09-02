import { useState, useEffect } from "react";
import classes from "./MainInfo.module.scss";
import { Trip } from "../../hooks/useTrips";
import { TripDetails } from "../../hooks/useTripDetails";
import { useUpdateMainInfo } from "../../hooks/useUpdateMainInfo";

type MainInfoProps = {
  activeTrip: Trip | null;
  tripDetails: TripDetails | undefined;
};

export default function MainInfo({ activeTrip, tripDetails }: MainInfoProps) {
  const [isEditing, setIsEditing] = useState(false);
  const updateMainInfo = useUpdateMainInfo();

  const initialFormData = {
    trip_id: 0,
    start_date: "",
    end_date: "",
    additional_costs: 0,
    description: "",
    priority: 0,
    title: "",
    price_per_person: 0,
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (activeTrip && tripDetails) {
      setFormData({
        trip_id: activeTrip.trip_id,
        start_date: activeTrip.start_date,
        end_date: activeTrip.end_date,
        additional_costs: tripDetails.additional_costs,
        description: tripDetails.description,
        priority: activeTrip.priority,
        title: activeTrip.title,
        price_per_person: tripDetails.price_per_person,
      });
    }
  }, [activeTrip, tripDetails]);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "additional_costs" ||
        name === "priority" ||
        name === "price_per_person"
          ? parseInt(value)
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateMainInfo(formData, {
      onSuccess: () => {
        setIsEditing(false);
      },
    });
  };

  return (
    <div className={classes["main-info"]}>
      {!isEditing ? (
        <>
          <div className={classes["title-info"]}>{formData.title}</div>
          <div className={classes["date-range"]}>
            <div className={classes["date-label"]}>Data:</div>
            <div className={classes["date-values"]}>
              <span>{formData.start_date}</span>
              <span>-</span>
              <span>{formData.end_date}</span>
            </div>
          </div>
          <div className={classes["price-info"]}>
            <div className={classes["price-label"]}>Cena podstawowa:</div>
            <div className={classes.price}>{formData.price_per_person}</div>
          </div>
          <div className={classes["additional-costs-info"]}>
            <div className={classes["additional-costs-label"]}>
              Cena dodatkowa:
            </div>
            <div className={classes["additional-costs"]}>
              {formData.additional_costs}
            </div>
          </div>
          <div className={classes["description-info"]}>
            <div className={classes["description-label"]}>Dodatkowy opis:</div>
            <div className={classes["description"]}>{formData.description}</div>
          </div>
          <div className={classes["priority-info"]}>
            <div className={classes["priority-label"]}>
              Priorytet wyświetlania:
            </div>
            <div className={classes["priority"]}>{formData.priority}</div>
          </div>
          <div className={classes["actions"]}>
            <button onClick={toggleEdit}>Edytuj</button>
          </div>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={classes["title-info"]}>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className={classes["date-range"]}>
            <div className={classes["date-label"]}>Data:</div>
            <div className={classes["date-values"]}>
              <input
                type="date"
                name="start_date"
                value={formData.start_date}
                onChange={handleChange}
              />
              <span>-</span>
              <input
                type="date"
                name="end_date"
                value={formData.end_date}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={classes["price-info"]}>
            <div className={classes["price-label"]}>Cena podstawowa:</div>
            <input
              type="number"
              name="price_per_person"
              value={formData.price_per_person}
              onChange={handleChange}
            />
          </div>
          <div className={classes["additional-costs-info"]}>
            <div className={classes["additional-costs-label"]}>
              Cena dodatkowa:
            </div>
            <input
              type="number"
              name="additional_costs"
              value={formData.additional_costs}
              onChange={handleChange}
            />
          </div>
          <div className={classes["description-info"]}>
            <div className={classes["description-label"]}>Dodatkowy opis:</div>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className={classes["priority-info"]}>
            <div className={classes["priority-label"]}>
              Priorytet wyświetlania:
            </div>
            <input
              type="number"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            />
          </div>
          <div className={classes["actions"]}>
            <button type="submit">Zapisz</button>
            <button type="button" onClick={toggleEdit}>
              Anuluj
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
